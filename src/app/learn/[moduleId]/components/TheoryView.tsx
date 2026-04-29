'use client';

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle2, XCircle, AlertCircle, Sparkles, Youtube, ChevronRight, RefreshCcw, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";
import type { TheoryLesson, Quiz } from "@/lib/curriculum/types";
import parse, { HTMLReactParserOptions, Element, Text } from 'html-react-parser';
import { InteractiveCodeBlock } from "./InteractiveCodeBlock";

interface TheoryViewProps {
  theory: TheoryLesson;
  quiz: Quiz | null;
  isCompleted: boolean;
  nextLessonId: string | null;
  onComplete: (score: number) => Promise<void>;
}

export function TheoryView({ 
  theory, 
  quiz, 
  isCompleted, 
  nextLessonId, 
  onComplete
}: TheoryViewProps) {
  const router = useRouter();
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [validated, setValidated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setSelectedAnswers({});
    setValidated(false);
  }, [theory.id]);

  const handleVerifyQuiz = async () => {
    if (!quiz) return;
    
    let correctCount = 0;
    quiz.questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });

    const scorePercent = (correctCount / quiz.questions.length) * 100;
    setValidated(true);

    if (scorePercent >= quiz.passingScore) {
      setIsSubmitting(true);
      toast.success(`Excelente! Acertaste ${correctCount}/${quiz.questions.length} questões.`);
      await onComplete(Math.round(scorePercent));
      setIsSubmitting(false);
    } else {
      toast.error(`Ainda existem erros (${correctCount}/${quiz.questions.length}). Analisa as dicas e ajusta as tuas respostas.`);
    }
  };

  const selectAnswer = (questionId: string, optionIndex: number) => {
    if (isCompleted) return;
    setSelectedAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
  };

  const parseOptions: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (theory.enableInteractive && domNode instanceof Element && domNode.name === 'pre') {
        const codeNode = domNode.children.find(c => c instanceof Element && c.name === 'code') as Element;
        if (codeNode) {
          const language = (codeNode.attribs.class || '').replace('language-', '') || 'html';
          
          // Função robusta para extrair o texto de dentro da tag code
          const extractText = (node: Element): string => {
            return node.children.map((child: any) => {
              if (child.type === 'text') return child.data;
              if (child instanceof Element) return extractText(child);
              return '';
            }).join('');
          };

          const rawCode = extractText(codeNode);
          if (!rawCode) return null;

          return <InteractiveCodeBlock code={rawCode} language={language} />;
        }
      }
    }
  };

  return (
    <div className="flex-1 overflow-y-auto p-5 md:p-16 max-w-4xl mx-auto w-full scroll-container">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <h1 className="text-2xl md:text-5xl font-headline font-bold leading-tight">{theory.title}</h1>
        <Link href="/community">
          <Button variant="outline" size="sm" className="rounded-full gap-2 border-primary/20 text-xs font-bold h-9">
            <MessageSquare className="w-4 h-4" /> Dúvida no Fórum
          </Button>
        </Link>
      </div>
      
      {theory.youtubeVideoId && (
        <div className="mb-12 aspect-video w-full overflow-hidden rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border border-white/5 bg-black/40 group relative">
           <iframe 
            src={`https://www.youtube.com/embed/${theory.youtubeVideoId}?rel=0&modestbranding=1`}
            title={theory.title}
            className="w-full h-full"
            allowFullScreen
          />
          <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-600/90 text-white text-[10px] font-black uppercase tracking-widest shadow-lg pointer-events-none">
            <Youtube className="w-3.5 h-3.5" /> Video Aula
          </div>
        </div>
      )}

      <div className="prose prose-invert max-w-none mb-16 text-sm md:text-base leading-relaxed">
        {parse(theory.content, parseOptions)}
      </div>
      
      {quiz && (
        <div className="mb-20 space-y-8 animate-in slide-in-from-bottom-4 duration-700">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-xl">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold font-headline">{quiz.title}</h3>
              <p className="text-xs text-muted-foreground">Valida o teu conhecimento para avançar (Min: {quiz.passingScore}%).</p>
            </div>
          </div>

          <div className="space-y-6">
            {quiz.questions.map((q, qIdx) => {
              const isSelected = selectedAnswers[q.id] !== undefined;
              const isIncorrect = validated && isSelected && selectedAnswers[q.id] !== q.correctAnswer;
              const isCorrect = validated && isSelected && selectedAnswers[q.id] === q.correctAnswer;
              
              return (
              <Card key={q.id} className={cn(
                "border-none bg-card/40 backdrop-blur-sm rounded-3xl overflow-hidden transition-all duration-300",
                isCorrect && "ring-2 ring-green-500/50 bg-green-500/5",
                isIncorrect && "ring-2 ring-destructive/50 bg-destructive/5"
              )}>
                 <CardContent className="p-6 md:p-8 space-y-6">
                    <div className="flex justify-between items-start gap-4">
                       <h4 className="text-base md:text-lg font-bold leading-tight">
                          <span className="text-primary mr-2">{qIdx + 1}.</span> {q.question}
                       </h4>
                       {validated && isSelected && (
                          isCorrect 
                            ? <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                            : <XCircle className="w-6 h-6 text-destructive shrink-0" />
                       )}
                    </div>

                    <RadioGroup 
                      value={selectedAnswers[q.id]?.toString()} 
                      onValueChange={(v) => selectAnswer(q.id, parseInt(v))}
                      className="grid grid-cols-1 md:grid-cols-2 gap-3"
                    >
                      {q.options.map((opt, idx) => {
                        const isThisOptionSelected = selectedAnswers[q.id] === idx;
                        return (
                          <div key={idx} className={cn(
                            "flex items-center space-x-3 p-4 rounded-2xl border transition-all cursor-pointer",
                            isThisOptionSelected ? "border-primary bg-primary/10 shadow-lg shadow-primary/10" : "border-white/5 bg-background/20",
                            isThisOptionSelected && validated && idx !== q.correctAnswer && "border-destructive bg-destructive/10"
                          )} onClick={() => selectAnswer(q.id, idx)}>
                            <RadioGroupItem value={idx.toString()} id={`q-${q.id}-opt-${idx}`} className="sr-only" />
                            <div className={cn(
                              "w-6 h-6 rounded-full border-2 flex items-center justify-center text-[10px] font-bold shrink-0",
                              isThisOptionSelected ? "bg-primary border-primary text-white" : "border-white/20 text-muted-foreground",
                              isThisOptionSelected && validated && idx !== q.correctAnswer && "bg-destructive border-destructive"
                            )}>
                              {String.fromCharCode(65 + idx)}
                            </div>
                            <Label htmlFor={`q-${q.id}-opt-${idx}`} className="flex-1 cursor-pointer font-medium text-sm leading-snug">{opt}</Label>
                          </div>
                        );
                      })}
                    </RadioGroup>

                    {isIncorrect && q.explanation && (
                       <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-2xl flex gap-3 animate-in slide-in-from-top-2 duration-300">
                          <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                          <div className="space-y-1">
                             <p className="text-[10px] font-black uppercase text-destructive tracking-widest">Dica Técnica</p>
                             <p className="text-xs text-muted-foreground leading-relaxed italic">{q.explanation}</p>
                          </div>
                        </div>
                    )}
                 </CardContent>
              </Card>
              );
            })}

            <div className="pt-8 flex flex-col items-center gap-4">
               {isCompleted ? (
                  <div className="text-center space-y-6 w-full">
                    <div className="bg-green-600/10 border border-green-600/30 p-6 rounded-[2rem] flex flex-col items-center gap-3">
                       <CheckCircle2 className="w-12 h-12 text-green-500" />
                       <h3 className="text-2xl font-black text-green-500 uppercase tracking-tighter">Conhecimento Validado!</h3>
                    </div>
                    {nextLessonId && (
                      <Button onClick={() => router.push(`/learn/${nextLessonId}`)} className="w-full max-w-md h-16 rounded-[2.5rem] font-black text-xl bg-green-600 hover:bg-green-700 shadow-2xl shadow-green-900/30 gap-2">
                        PRÓXIMA LIÇÃO <ChevronRight className="w-6 h-6" />
                      </Button>
                    )}
                  </div>
               ) : (
                 <Button 
                    onClick={handleVerifyQuiz} 
                    disabled={Object.keys(selectedAnswers).length < quiz.questions.length || isSubmitting} 
                    className="w-full max-w-md h-16 rounded-[2.5rem] font-black text-lg shadow-2xl shadow-primary/30 gap-2"
                 >
                   {validated ? <><RefreshCcw className="w-5 h-5" /> REAVALIAR RESPOSTAS</> : 'VERIFICAR RESPOSTAS'}
                 </Button>
               )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
