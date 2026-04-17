'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Code, PencilRuler, Target, BookOpen, Menu, XCircle, Info, MessageCircleQuestion, Loader2 } from 'lucide-react';
import { KnowledgeArea, TheoryLesson, PracticeExercise, Quiz } from '@/lib/curriculum-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/context/AuthContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from '@/hooks/use-toast';
import { useProgress } from '@/context/ProgressContext';
import { Label } from '@/components/ui/label';
import Editor from '@monaco-editor/react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription, SheetHeader } from "@/components/ui/sheet";
import { cn } from '@/lib/utils';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function LearnPageClient({ area }: { area: KnowledgeArea }) {
  const router = useRouter();
  const { user, loading: authLoading, supabase } = useAuth();
  const { toast } = useToast();
  const { isCompleted, markAsCompleted } = useProgress();

  const [selectedLesson, setSelectedLesson] = useState<TheoryLesson | null>(null);
  const [lessonsSheetOpen, setLessonsSheetOpen] = useState(false);
  const [practiceSheetOpen, setPracticeSheetOpen] = useState(false);

  // State for practice tab
  const [selectedPracticeLanguage, setSelectedPracticeLanguage] = useState<string | null>(null);
  const [selectedExercise, setSelectedExercise] = useState<PracticeExercise | null>(null);
  const [code, setCode] = useState('');
  const [testResults, setTestResults] = useState<{ description: string; passed: boolean; error?: string }[]>([]);
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [htmlSrcDoc, setHtmlSrcDoc] = useState('');
  const [allTestsPassed, setAllTestsPassed] = useState(false);

  // State for quiz tab
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [quizResults, setQuizResults] = useState<Record<string, boolean> | null>(null);

  const theoryContainerRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (!authLoading && !user) {
      router.push(`/login?redirect=/learn/${area.id}`);
    }
  }, [authLoading, user, router, area.id]);

  useEffect(() => {
    if (area) {
      setSelectedLesson(null);
      setSelectedPracticeLanguage(null);
      setSelectedExercise(null);
      setCode('');
      setTestResults([]);
      setConsoleOutput([]);
      setSelectedAnswers({});
      setQuizResults(null);

      // Pre-select first language if available, but not first exercise
      const languages = Object.keys(area.practice).filter(lang => area.practice[lang]?.length > 0);
      if (languages.length > 0) {
          setSelectedPracticeLanguage(languages[0]);
      }
    }
  }, [area]);

  // Effect to update code when exercise changes
  useEffect(() => {
    if (selectedExercise) {
      setCode(selectedExercise.template);
    } else {
        setCode('');
    }
    setTestResults([]);
    setConsoleOutput([]);
    setAllTestsPassed(false);
  }, [selectedExercise]);

  useEffect(() => {
    if (selectedPracticeLanguage === 'html') {
      const htmlMarker = '<!-- index.html -->';
      const cssMarker = '<!-- styles.css -->';
      
      let htmlContent = '';
      let cssContent = '';
      
      const cssStartIndex = code.indexOf(cssMarker);
      const htmlStartIndex = code.indexOf(htmlMarker);

      if (htmlStartIndex !== -1) {
        if (cssStartIndex !== -1) {
          htmlContent = code.substring(htmlStartIndex + htmlMarker.length, cssStartIndex).trim();
          cssContent = code.substring(cssStartIndex + cssMarker.length).trim();
        } else {
          htmlContent = code.substring(htmlStartIndex + htmlMarker.length).trim();
        }
      }

      setHtmlSrcDoc(`
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { margin: 8px; font-family: sans-serif; }
              ${cssContent}
            </style>
          </head>
          <body>
            ${htmlContent}
          </body>
        </html>
      `);
    }
  }, [code, selectedPracticeLanguage]);

    useEffect(() => {
        if (selectedLesson && theoryContainerRef.current) {
            theoryContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [selectedLesson]);
  
   const lessonIndex = area?.theory?.findIndex(l => l.id === selectedLesson?.id) ?? -1;

  const handlePrevious = () => {
      if (area?.theory && lessonIndex > 0) {
          setSelectedLesson(area.theory[lessonIndex - 1]);
      }
  }
  const handleNext = () => {
      if (area?.theory && lessonIndex < area.theory.length - 1) {
          setSelectedLesson(area.theory[lessonIndex + 1]);
      }
  }
  
  const handleLanguageSelect = (lang: string) => {
    setSelectedPracticeLanguage(lang);
    setSelectedExercise(null); // Deselect exercise when language changes
    setTestResults([]);
    setConsoleOutput([]);
  }
  
  const handleRunTests = async () => {
    if (!selectedExercise || !selectedPracticeLanguage) {
        toast({
            variant: "destructive",
            title: "Nenhum exercício selecionado",
            description: "Por favor, selecione um exercício para começar.",
        });
        return;
    }
    if (!selectedExercise.tests) {
         toast({
            variant: "destructive",
            title: "Nenhum teste encontrado",
            description: "Não há testes automatizados para este exercício.",
        });
        return;
    }
    
    setTestResults([]);
    setConsoleOutput([]);
    setAllTestsPassed(false);

    if (selectedPracticeLanguage === 'javascript') {
        const results = [];
        const capturedLogs: string[] = [];
        let allPassed = true;

        const originalConsoleLog = console.log;
        console.log = (...args) => {
            capturedLogs.push(args.map(arg => typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)).join(' '));
        };

        try {
            for (const test of selectedExercise.tests) {
                try {
                    const testFunction = new Function(`${code}\n${test.code}`);
                    const result = testFunction();
                    if (result !== true) {
                        allPassed = false;
                    }
                    results.push({ description: test.description, passed: result === true });
                } catch (error: any) {
                    allPassed = false;
                    results.push({ description: test.description, passed: false, error: error.message });
                    toast({
                        variant: "destructive",
                        title: "Erro no seu código!",
                        description: `Ocorreu um erro ao executar seu código: ${error.message}`,
                    });
                    setTestResults(results);
                    setConsoleOutput(capturedLogs);
                    setAllTestsPassed(false);
                    console.log = originalConsoleLog;
                    return;
                }
            }
        } finally {
            console.log = originalConsoleLog;
        }
        
        setTestResults(results);
        setConsoleOutput(capturedLogs);
        setAllTestsPassed(allPassed);

        if (allPassed) {
            toast({
                title: "Sucesso!",
                description: "Todos os testes passaram. Você já pode submeter seu exercício.",
            });
        } else {
            toast({
                variant: "destructive",
                title: "Alguns testes falharam",
                description: "Verifique os resultados e a saída do console abaixo.",
            });
        }
    } else {
      try {
          const response = await fetch('/api/run-code', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  code: code,
                  language: selectedPracticeLanguage,
                  tests: selectedExercise.tests,
              }),
          });

          const data = await response.json();

          if (!response.ok) {
              throw new Error(data.error || 'Falha ao executar o código no servidor.');
          }
          
          setTestResults(data.results || []);
          setConsoleOutput(data.output || []);
          setAllTestsPassed(data.allPassed || false);
          
           toast({
              variant: data.allPassed ? "default" : "destructive",
              title: data.allPassed ? "Sucesso!" : "Funcionalidade Futura",
              description: data.message || `A execução de testes para ${selectedPracticeLanguage} ainda não foi implementada no servidor.`,
          });


      } catch (error: any) {
          toast({
              variant: "destructive",
              title: "Erro de Comunicação com o Servidor",
              description: error.message,
          });
      }
    }
};


 const handleSubmitExercise = async () => {
    if (!selectedExercise) return;

    if (isCompleted(selectedExercise.id)) {
        toast({
            title: "Já submetido!",
            description: "Você já concluiu este exercício.",
        });
        return;
    }
    
    if (allTestsPassed) {
        await markAsCompleted(selectedExercise.id, 'exercise');
        toast({
            title: "Exercício submetido com sucesso!",
            description: "Bom trabalho! Continue para o próximo desafio.",
        });
    } else {
        toast({
            variant: "destructive",
            title: "Testes não passaram",
            description: "Você só pode submeter o exercício após todos os testes passarem.",
        });
    }
  };

  const handleSelectAnswer = (questionId: string, optionIndex: number) => {
    setSelectedAnswers(prev => ({
        ...prev,
        [questionId]: optionIndex
    }));
    setQuizResults(null);
  };

  const handleCheckQuiz = async (quiz: Quiz) => {
    if (!user) return;
    
    const results: Record<string, boolean> = {};
    let correctCount = 0;
    quiz.questions.forEach(q => {
        const isCorrect = selectedAnswers[q.id] === q.correctAnswer;
        results[q.id] = isCorrect;
        if (isCorrect) {
            correctCount++;
        }
    });
    setQuizResults(results);

    const totalQuestions = quiz.questions.length;
    const score = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
    const passed = score >= 70;

    const { error } = await supabase.from('user_quiz_attempts').insert({
        user_id: user.id,
        quiz_id: quiz.id,
        score,
        passed,
        answers: selectedAnswers
    });

    if (error) {
        console.error("Erro ao salvar tentativa do quiz:", error);
        toast({
            variant: "destructive",
            title: "Erro ao salvar seu progresso",
            description: "Não foi possível registrar sua tentativa. Tente novamente."
        });
        return;
    }

    if (passed) {
      toast({
        title: "Aprovado!",
        description: `Você acertou ${correctCount} de ${totalQuestions} (${score}%).`,
      });
    } else {
      toast({
        variant: "destructive",
        title: "Tente novamente",
        description: `Você acertou ${correctCount} de ${totalQuestions} (${score}%). É necessário acertar 70% para ser aprovado.`,
      });
    }
  };


  if (authLoading || !user) {
    return (
        <div className="flex min-h-screen items-center justify-center bg-background">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
    );
  }

  const OverviewComponent = ({title, description, cta}: {title: string, description: string, cta: string}) => (
      <div className="flex h-full min-h-[70vh] items-center justify-center rounded-lg border-2 border-dashed">
          <div className="text-center p-8">
              <BookOpen className="mx-auto h-12 w-12 text-muted-foreground" />
              <h2 className="mt-6 text-2xl font-headline font-semibold">{title}</h2>
              <p className="mt-2 text-muted-foreground max-w-lg mx-auto">{description}</p>
              <p className="mt-6 font-semibold text-primary">{cta}</p>
          </div>
      </div>
  );

  const renderTheory = () => (
    <div className="mt-6">
      <div className="flex justify-end mb-4">
        <Sheet open={lessonsSheetOpen} onOpenChange={setLessonsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline">
              <Menu className="mr-2 h-4 w-4" />
              Ver Lições
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-md p-0">
             <SheetHeader className="p-6 pb-0">
                <SheetTitle>Lições de Teoria</SheetTitle>
                <SheetDescription>Selecione uma lição para começar</SheetDescription>
            </SheetHeader>
            <div className="p-6">
                <ScrollArea className="h-[calc(100vh-10rem)]">
                  <nav className="flex flex-col gap-1 pr-4">
                    {area.theory?.map((lesson, index) => (
                      <button
                        key={lesson.id}
                        onClick={() => {
                          setSelectedLesson(lesson);
                          setLessonsSheetOpen(false);
                        }}
                        className={cn('text-left p-3 rounded-md transition-colors w-full',
                          selectedLesson?.id === lesson.id
                            ? 'bg-accent text-accent-foreground font-semibold'
                            : 'hover:bg-accent/50'
                        )}
                      >
                        <div className="flex items-center gap-3">
                            <CheckCircle className={`h-5 w-5 ${isCompleted(lesson.id) ? 'text-primary' : 'text-muted-foreground/50'}`} />
                            <span className="flex-1">{index + 1}. {lesson.title}</span>
                        </div>
                      </button>
                    ))}
                    {(!area.theory || area.theory.length === 0) && (
                        <p className="p-3 text-muted-foreground text-sm">Nenhuma lição teórica disponível.</p>
                    )}
                  </nav>
                </ScrollArea>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="w-full" ref={theoryContainerRef}>
        {selectedLesson ? (
          <Card >
            <CardHeader>
              <CardTitle className="font-headline text-2xl">{selectedLesson.title}</CardTitle>
            </CardHeader>
             <Separator />
            <CardContent className="pt-6">
              {selectedLesson.youtubeVideoId && (
                <div className="my-6 aspect-video">
                  <iframe
                    className="w-full h-full rounded-lg"
                    src={`https://www.youtube.com/embed/${selectedLesson.youtubeVideoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}

              <article 
                className="prose dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedLesson.content }}
              />
              
               <Separator className="my-8" />

              <div className="flex justify-between items-center">
                <Button 
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={lessonIndex <= 0}
                >
                    Anterior
                </Button>
                <Button 
                    onClick={() => markAsCompleted(selectedLesson.id, 'lesson')}
                    disabled={isCompleted(selectedLesson.id)}
                >
                    {isCompleted(selectedLesson.id) ? 'Concluído' : 'Marcar como Concluído'}
                </Button>
                <Button 
                    variant="outline"
                    onClick={handleNext}
                    disabled={!area.theory || lessonIndex >= area.theory.length - 1}
                >
                    Próxima
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
           <OverviewComponent 
            title={`Visão Geral de ${area.title}`} 
            description={area.description}
            cta="Clique no menu 'Ver Lições' acima para escolher uma lição e começar."
          />
        )}
      </div>
    </div>
  );

  const renderPractice = () => {
    const practiceLanguages = area?.practice ? Object.keys(area.practice).filter(lang => area.practice[lang]?.length > 0) : [];

    if (practiceLanguages.length === 0) {
      return (
        <div className="mt-6">
           <Card>
              <CardHeader>
                  <CardTitle>Exercícios Práticos</CardTitle>
                  <CardDescription>Aplique o que você aprendeu com desafios de codificação.</CardDescription>
              </CardHeader>
              <CardContent>
                   <div className="flex h-[60vh] items-center justify-center rounded-lg border-2 border-dashed">
                      <div className="text-center text-muted-foreground">
                          <p>Exercícios práticos para {area.title} em breve!</p>
                      </div>
                  </div>
              </CardContent>
          </Card>
       </div>
      );
    }

    const exercisesForLang = selectedPracticeLanguage ? area.practice[selectedPracticeLanguage] : [];

    return (
        <div className="mt-6">
            <div className="flex justify-end mb-4">
                <Sheet open={practiceSheetOpen} onOpenChange={setPracticeSheetOpen}>
                    <SheetTrigger asChild>
                        <Button variant="outline">
                            <Menu className="mr-2 h-4 w-4" />
                            Ver Exercícios
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-full sm:max-w-md p-0">
                       <SheetHeader className="p-6 pb-0">
                          <SheetTitle>Exercícios Práticos</SheetTitle>
                          <SheetDescription>Escolha uma linguagem e um exercício</SheetDescription>
                          <div className="flex gap-2 pt-2 flex-wrap">
                              {practiceLanguages.map(lang => (
                                  <Button
                                      key={lang}
                                      variant={selectedPracticeLanguage === lang ? 'default' : 'outline'}
                                      size="sm"
                                      onClick={() => handleLanguageSelect(lang)}
                                      className="capitalize"
                                  >
                                      {lang}
                                  </Button>
                              ))}
                          </div>
                      </SheetHeader>
                      <div className="p-6">
                          <ScrollArea className="h-[calc(100vh-12rem)]">
                              <nav className="flex flex-col gap-1 pr-4">
                                  {exercisesForLang && exercisesForLang.length > 0 ? (
                                      exercisesForLang.map((exercise, index) => (
                                          <button
                                              key={exercise.id}
                                              onClick={() => {
                                                  setSelectedExercise(exercise);
                                                  setPracticeSheetOpen(false);
                                              }}
                                              className={cn('text-left p-3 rounded-md transition-colors w-full',
                                                  selectedExercise?.id === exercise.id
                                                  ? 'bg-accent text-accent-foreground font-semibold'
                                                  : 'hover:bg-accent/50'
                                              )}
                                          >
                                              <div className="flex items-center gap-3">
                                                <CheckCircle className={`h-5 w-5 ${isCompleted(exercise.id) ? 'text-primary' : 'text-muted-foreground/50'}`} />
                                                <span className="flex-1">{index + 1}. {exercise.title}</span>
                                              </div>
                                          </button>
                                      ))
                                  ) : (
                                      <p className="p-3 text-muted-foreground text-sm">
                                          {selectedPracticeLanguage ? 'Nenhum exercício para esta linguagem.' : 'Selecione uma linguagem.'}
                                      </p>
                                  )}
                              </nav>
                          </ScrollArea>
                      </div>
                    </SheetContent>
                </Sheet>
            </div>
            
            <div className="w-full">
                {selectedExercise ? (
                    <Card className="flex flex-col">
                         <CardHeader>
                            <div className="flex justify-between items-start gap-4">
                                <div>
                                    <CardTitle className="font-headline text-2xl">{selectedExercise.title}</CardTitle>
                                    <CardDescription>{selectedExercise.statement}</CardDescription>
                                </div>
                                <Button variant="outline" asChild className="shrink-0">
                                    <Link href={`/forum?exerciseId=${selectedExercise.id}&exerciseTitle=${encodeURIComponent(selectedExercise.title)}`}>
                                        <MessageCircleQuestion className="mr-2 h-4 w-4" />
                                        Pedir Ajuda
                                    </Link>
                                </Button>
                            </div>
                        </CardHeader>
                        <Separator />
                        <CardContent className="pt-6 flex-grow flex flex-col space-y-6">
                           
                            <div className="flex-grow flex flex-col space-y-4" style={{ minHeight: '500px' }}>
                                
                                <Tabs defaultValue="editor" className="flex-grow flex flex-col">
                                    <TabsList>
                                        <TabsTrigger value="editor">Editor</TabsTrigger>
                                        <TabsTrigger value="explanation">Explicação</TabsTrigger>
                                        {selectedPracticeLanguage === 'html' && <TabsTrigger value="preview">Preview</TabsTrigger>}
                                    </TabsList>
                                    
                                    <TabsContent 
                                        value="editor" 
                                        className="flex-grow mt-4 rounded-md border overflow-hidden"
                                        style={{ height: '450px' }}
                                    >
                                        <Editor
                                            height="100%"
                                            width="100%"
                                            language={selectedPracticeLanguage || 'plaintext'}
                                            theme="vs-dark"
                                            value={code}
                                            onChange={(value) => setCode(value || '')}
                                            options={{
                                                minimap: { enabled: false },
                                                fontSize: 14,
                                                scrollBeyondLastLine: false,
                                                automaticLayout: true,
                                                lineNumbers: 'on',
                                                glyphMargin: false,
                                                folding: true,
                                            }}
                                        />
                                    </TabsContent>
                                    
                                    <TabsContent 
                                        value="explanation" 
                                        className="prose dark:prose-invert max-w-none p-4 border rounded-md"
                                        style={{ height: '450px', overflowY: 'auto' }}
                                    >
                                        <div dangerouslySetInnerHTML={{ __html: selectedExercise.detailedExplanation || '<p>Nenhuma explicação detalhada disponível.</p>' }} />
                                    </TabsContent>
                                    
                                    {selectedPracticeLanguage === 'html' && (
                                        <TabsContent 
                                            value="preview" 
                                            className="flex-grow mt-4"
                                            style={{ height: '450px' }}
                                        >
                                            <iframe
                                                srcDoc={htmlSrcDoc}
                                                title="Preview"
                                                sandbox="allow-scripts"
                                                className="w-full h-full border rounded-md bg-white"
                                            />
                                        </TabsContent>
                                    )}
                                </Tabs>
                            </div>

                            {consoleOutput.length > 0 && (
                                <div className="mt-6">
                                    <h3 className="font-semibold text-lg mb-2">Saída do Console</h3>
                                    <pre className="bg-muted rounded-md p-4 text-sm text-foreground overflow-x-auto max-h-[200px] overflow-y-auto">
                                        <code>
                                            {consoleOutput.join('\n')}
                                        </code>
                                    </pre>
                                </div>
                            )}

                            {testResults.length > 0 && (
                                <div className="mt-6">
                                    <h3 className="font-semibold text-lg mb-2">Resultados dos Testes</h3>
                                    <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2">
                                        {testResults.map((result, index) => (
                                            <div key={index} className={cn('flex items-center p-3 rounded-md text-sm',
                                                result.passed ? 'bg-green-100 dark:bg-green-900/50' : 'bg-red-100 dark:bg-red-900/50'
                                            )}>
                                                {result.passed ? (
                                                    <CheckCircle className="w-5 h-5 mr-3 text-green-600 dark:text-green-400 shrink-0" />
                                                ) : (
                                                    <XCircle className="w-5 h-5 mr-3 text-red-600 dark:text-red-400 shrink-0" />
                                                )}
                                                <div className="flex-1">
                                                    <p className="font-medium">{result.description}</p>
                                                    {result.error && <p className="text-xs mt-1 text-red-700 dark:text-red-300">Erro: {result.error}</p>}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            
                            <div className="pt-4 flex justify-end gap-4">
                                <Button variant="secondary" onClick={handleRunTests}>Executar Testes</Button>
                                <Button
                                  onClick={handleSubmitExercise}
                                  disabled={!allTestsPassed && !isCompleted(selectedExercise.id)}
                                >
                                  {isCompleted(selectedExercise.id) ? (
                                    <>
                                      <CheckCircle className="mr-2 h-4 w-4" />
                                      Submetido
                                    </>
                                  ) : "Submeter"}
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ) : (
                    <OverviewComponent 
                      title={`Exercícios de ${area.title}`} 
                      description={`Escolha uma linguagem e selecione um exercício para começar a praticar.`}
                      cta="Clique no menu 'Ver Exercícios' acima para começar."
                    />
                )}
            </div>
        </div>
    );
  };

  const renderQuizzes = () => {
    if (!area?.quizzes || area.quizzes.length === 0) {
      return (
        <div className="mt-6">
           <Card>
              <CardHeader>
                  <CardTitle>Quizzes</CardTitle>
                  <CardDescription>Teste seu conhecimento e prepare-se para os certificados.</CardDescription>
              </CardHeader>
              <CardContent>
                   <div className="flex h-[60vh] items-center justify-center rounded-lg border-2 border-dashed">
                      <div className="text-center text-muted-foreground">
                          <p>Quizzes para {area.title} em breve!</p>
                      </div>
                  </div>
              </CardContent>
          </Card>
       </div>
      );
    }

    const quiz = area.quizzes[0]; 

    return (
     <div className="mt-6">
        <Card>
            <CardHeader>
                <CardTitle>{quiz.title}</CardTitle>
                <CardDescription>Selecione a resposta correta para cada questão.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {quiz.questions.map((question, qIndex) => (
                <div key={question.id} className="p-4 border rounded-lg">
                  <p className="font-semibold mb-4">{qIndex + 1}. {question.question}</p>
                  <RadioGroup 
                    value={selectedAnswers[question.id]?.toString()}
                    onValueChange={(value) => handleSelectAnswer(question.id, parseInt(value))}
                  >
                    <div className="space-y-2">
                      {question.options.map((option, oIndex) => {
                        const isSelected = selectedAnswers[question.id] === oIndex;
                        const isCorrect = question.correctAnswer === oIndex;
                        let itemClass = '';
                        if (quizResults) {
                            if (isCorrect) {
                                itemClass = 'bg-green-100 dark:bg-green-900/50 border-green-300 dark:border-green-700';
                            } else if (isSelected && !isCorrect) {
                                itemClass = 'bg-red-100 dark:bg-red-900/50 border-red-300 dark:border-red-700';
                            }
                        }

                        return (
                          <Label 
                            key={oIndex} 
                            className={cn("flex items-center space-x-3 p-3 rounded-md border transition-colors cursor-pointer", itemClass, {
                              'border-primary bg-accent/50': !quizResults && isSelected
                            })}
                          >
                            <RadioGroupItem value={oIndex.toString()} id={`${question.id}-${oIndex}`} />
                            <span>{option}</span>
                          </Label>
                        );
                      })}
                    </div>
                  </RadioGroup>
                </div>
              ))}
              <div className="flex justify-end mt-8">
                <Button onClick={() => handleCheckQuiz(quiz)} disabled={Object.keys(selectedAnswers).length !== quiz.questions.length}>
                  Verificar Respostas
                </Button>
              </div>
            </CardContent>
        </Card>
    </div>
    );
  };


  return (
    <main className="flex-1 container mx-auto px-4 py-8">
      <div className="mb-6 flex justify-between items-center">
        <Button variant="ghost" asChild>
          <Link href="/curriculo">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar ao Currículo
          </Link>
        </Button>
        <h1 className="font-headline text-2xl font-bold text-center">{area.title}</h1>
        <div className="w-36"></div>
      </div>
      
      <Tabs defaultValue="theory" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="theory"><PencilRuler className="mr-2 h-4 w-4" />Teoria</TabsTrigger>
          <TabsTrigger value="practice"><Code className="mr-2 h-4 w-4" />Prática</TabsTrigger>
          <TabsTrigger value="quizzes"><Target className="mr-2 h-4 w-4" />Quizzes</TabsTrigger>
        </TabsList>
        <TabsContent value="theory">
          {renderTheory()}
        </TabsContent>
        <TabsContent value="practice">
          {renderPractice()}
        </TabsContent>
        <TabsContent value="quizzes">
          {renderQuizzes()}
        </TabsContent>
      </Tabs>

    </main>
  );
}
