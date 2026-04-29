
'use client';

import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { 
  findKnowledgeAreaByLessonId, findTheoryLesson, findPracticeExercise, 
  findQuizById, findNextLessonId, findPreviousLessonId
} from "@/lib/curriculum";
import { useParams, useRouter } from "next/navigation";
import { useProgress } from "@/contexts/ProgressContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { toast } from "sonner";

// Componentes Memoizados
import { LearnHeader } from "./components/LearnHeader";
import { LearnSidebar } from "./components/LearnSidebar";
import { TheoryView } from "./components/TheoryView";
import { PracticeWorkspace } from "./components/PracticeWorkspace";
import { MissionBriefing } from "./components/MissionBriefing";

export default function LearnPage() {
  const params = useParams();
  const lessonId = params.moduleId as string;
  const router = useRouter();
  const isMobile = useIsMobile();
  const { markAsCompleted, isCompleted, progress } = useProgress();

  const data = useMemo(() => findKnowledgeAreaByLessonId(lessonId), [lessonId]);
  const theory = useMemo(() => findTheoryLesson(lessonId), [lessonId]);
  const practice = useMemo(() => findPracticeExercise(lessonId), [lessonId]);
  const quiz = useMemo(() => theory?.quizId ? findQuizById(theory.quizId) : null, [theory]);
  const nextLessonId = useMemo(() => findNextLessonId(lessonId), [lessonId]);
  const prevLessonId = useMemo(() => findPreviousLessonId(lessonId), [lessonId]);

  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");
  const [code, setCode] = useState("");
  
  const [activeTab, setActiveTab] = useState<string>("html");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [completedObjectives, setCompletedObjectives] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);
  const [isConsoleOpen, setIsConsoleOpen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const isWebLang = useMemo(() => 
    ['html', 'css', 'javascript'].includes(practice?.language.toLowerCase() || '') && !lessonId.includes('pf-p'), 
  [practice, lessonId]);

  const parseCompositeCode = (composite: string) => {
    const parts = { html: "", css: "", js: "" };
    if (!composite) return parts;

    const htmlMatch = composite.match(/HTML:\n([\s\S]*?)(?=\n\nCSS:|$)/);
    const cssMatch = composite.match(/CSS:\n([\s\S]*?)(?=\n\nJS:|$)/);
    const jsMatch = composite.match(/JS:\n([\s\S]*?)$/);

    if (htmlMatch) parts.html = htmlMatch[1];
    if (cssMatch) parts.css = cssMatch[1];
    if (jsMatch) parts.js = jsMatch[1];

    // Fallback se não estiver no formato composto
    if (!htmlMatch && !cssMatch && !jsMatch) {
        parts.html = composite;
    }

    return parts;
  };

  const updatePreview = useCallback(() => {
    if (!iframeRef.current || !isWebLang) return;
    const docContent = `
      <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body { 
              margin: 0; 
              padding: 20px; 
              font-family: system-ui, sans-serif; 
              background: #fff; 
              color: #1a1a1a; 
            }
            ${cssCode}
          </style>
        </head>
        <body>
          ${htmlCode}
          <script>
            try {
              ${jsCode}
            } catch (err) {
              console.error('JS Preview Error:', err.message);
            }
          </script>
        </body>
      </html>
    `;
    
    const iframeDoc = iframeRef.current.contentDocument || iframeRef.current.contentWindow?.document;
    if (iframeDoc) {
      iframeDoc.open();
      iframeDoc.write(docContent);
      iframeDoc.close();
    }
  }, [htmlCode, cssCode, jsCode, isWebLang]);

  // Sincronização inicial de dados e herança
  useEffect(() => {
    setMounted(true);
    if (!practice) return;

    // Define a aba inicial correta
    if (isWebLang) {
      setActiveTab(practice.language === 'javascript' ? 'js' : (practice.language === 'css' ? 'css' : 'html'));
    } else {
      setActiveTab('code');
    }

    const currentProgress = progress.find(p => p.lesson_id === lessonId);
    const prevProgress = prevLessonId ? progress.find(p => p.lesson_id === prevLessonId) : null;
    
    const localCurrent = localStorage.getItem(`cwm_code_${lessonId}`);
    const localPrev = prevLessonId ? localStorage.getItem(`cwm_code_${prevLessonId}`) : null;
    
    let sourceCode = "";
    if (localCurrent) {
      sourceCode = localCurrent;
    } else if (currentProgress?.last_code) {
      sourceCode = currentProgress.last_code;
    } else if (practice.isProjectPart && (localPrev || prevProgress?.last_code)) {
      sourceCode = localPrev || prevProgress?.last_code || "";
    }

    if (isWebLang) {
      if (sourceCode && (sourceCode.includes('HTML:\n') || sourceCode.includes('CSS:\n'))) {
        const parsed = parseCompositeCode(sourceCode);
        setHtmlCode(parsed.html || practice.template || practice.htmlTemplate || "");
        setCssCode(parsed.css || practice.cssTemplate || "");
        setJsCode(parsed.js || practice.jsTemplate || "");
      } else {
        // Se for o primeiro exercício ou código sem tags de separação
        setHtmlCode(sourceCode || practice.template || practice.htmlTemplate || "");
        setCssCode(practice.cssTemplate || "");
        setJsCode(practice.jsTemplate || "");
      }
    } else {
      setCode(sourceCode || practice.template || "");
    }

    setCompletedObjectives([]);
    setOutput("");
  }, [practice, lessonId, isWebLang, progress, prevLessonId]);

  // Atualização do preview com debounce
  useEffect(() => {
    if (mounted && isWebLang) {
      const timer = setTimeout(updatePreview, 500);
      return () => clearTimeout(timer);
    }
  }, [htmlCode, cssCode, jsCode, mounted, isWebLang, updatePreview]);

  const handleRunCode = useCallback(async () => {
    setIsRunning(true);
    setIsConsoleOpen(true);
    setOutput("> Compilando e analisando estrutura...\n");
    
    setTimeout(() => {
      const current = isWebLang 
        ? (activeTab === 'js' ? jsCode : activeTab === 'css' ? cssCode : htmlCode) 
        : code;
      
      const newDone = practice?.objectives.filter(obj => {
        return current.includes(obj.test);
      }).map(obj => obj.id) || [];
      
      setCompletedObjectives(newDone);
      setIsRunning(false);

      const finalCode = isWebLang ? `HTML:\n${htmlCode}\n\nCSS:\n${cssCode}\n\nJS:\n${jsCode}` : code;
      localStorage.setItem(`cwm_code_${lessonId}`, finalCode);

      if (newDone.length === (practice?.objectives.length || 0)) {
        setOutput("> ✅ STATUS: 200 OK\n> [AUDITORIA]: Requisitos validados.\n> Missão concluída.");
        toast.success("Excelente! Missão concluída.");
        if (data) {
          markAsCompleted(lessonId, data.level.id, data.ka.id, 'exercise', 100, finalCode);
        }
      } else {
        const remaining = (practice?.objectives.length || 0) - newDone.length;
        setOutput(`> ⚠️ STATUS: 412 PRECONDITION FAILED\n> [AUDITORIA]: Faltam ${remaining} componentes essenciais.`);
        toast.error("Alguns requisitos ainda não foram atingidos.");
      }
    }, 400);
  }, [htmlCode, cssCode, jsCode, code, isWebLang, activeTab, practice, lessonId, data, markAsCompleted]);

  const handleTheoryComplete = useCallback(async (score: number) => {
    if (data) {
      await markAsCompleted(lessonId, data.level.id, data.ka.id, 'theory', score);
    }
  }, [data, lessonId, markAsCompleted]);

  const availableVariants = useMemo(() => {
    if (!data || !practice) return [];
    const variants: { lang: string; id: string }[] = [];
    const currentBaseId = practice.id.split('-').slice(0, 2).join('-'); 
    
    Object.entries(data.ka.practice).forEach(([lang, exercises]) => {
      const match = exercises.find(ex => ex.id.startsWith(currentBaseId));
      if (match) {
        variants.push({ lang, id: match.id });
      }
    });
    return variants;
  }, [data, practice]);

  if (!mounted || !data) return null;

  return (
    <div className="flex flex-col h-[100dvh] bg-background overflow-hidden font-body">
      <LearnHeader 
        kaTitle={data.ka.title}
        lessonTitle={theory?.title || practice?.title || ""}
        isMobile={!!isMobile}
        isTheory={!!theory}
        isCompleted={isCompleted(lessonId)}
        isRunning={isRunning}
        nextLessonId={nextLessonId}
        onRunCode={handleRunCode}
        lessonList={<LearnSidebar ka={data.ka} lessonId={lessonId} isCompleted={isCompleted} />}
        missionContent={practice && (
          <MissionBriefing 
            practice={practice}
            availableVariants={availableVariants}
            completedObjectives={completedObjectives}
            isCompleted={isCompleted(lessonId)}
            nextLessonId={nextLessonId}
            onNavigate={(id) => router.push(`/learn/${id}`)}
            onGoToDashboard={() => router.push('/dashboard')}
          />
        )}
      />

      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {theory ? (
          <TheoryView 
            theory={theory}
            quiz={quiz}
            isCompleted={isCompleted(lessonId)}
            nextLessonId={nextLessonId}
            onComplete={handleTheoryComplete}
          />
        ) : (
          <PracticeWorkspace 
            language={practice?.language || ""}
            isWebLang={isWebLang}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            code={code}
            setCode={setCode}
            htmlCode={htmlCode}
            setHtmlCode={setHtmlCode}
            cssCode={cssCode}
            setCssCode={setCssCode}
            jsCode={jsCode}
            setJsCode={setJsCode}
            isMobile={!!isMobile}
            isConsoleOpen={isConsoleOpen}
            setIsConsoleOpen={setIsConsoleOpen}
            output={output}
            iframeRef={iframeRef}
          />
        )}

        {!isMobile && practice && (
          <div className="w-80 md:w-96 border-l border-white/5 bg-[#0d1117] shadow-2xl shrink-0">
            <MissionBriefing 
              practice={practice}
              availableVariants={availableVariants}
              completedObjectives={completedObjectives}
              isCompleted={isCompleted(lessonId)}
              nextLessonId={nextLessonId}
              onNavigate={(id) => router.push(`/learn/${id}`)}
              onGoToDashboard={() => router.push('/dashboard')}
            />
          </div>
        )}
      </main>
    </div>
  );
}
