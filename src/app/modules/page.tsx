"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { modules } from "@/lib/curriculum";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, BookOpen, Code2, CheckCircle2, Circle, GraduationCap, ChevronRight, Laptop, Loader2, Layers } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import { useProgress } from "@/contexts/ProgressContext";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

/**
 * Agrupador de lições para visualização no Nível 8.
 */
const groupLessonsByPhase = (lessons: any[]) => {
  const phases: Record<string, any[]> = {};
  lessons.forEach(lesson => {
    const phaseMatch = lesson.title.match(/Fase (\d+):/i);
    const phaseName = phaseMatch ? `Fase ${phaseMatch[1]}` : "Especialização";
    if (!phases[phaseName]) phases[phaseName] = [];
    phases[phaseName].push(lesson);
  });
  return phases;
};

function ModulesContent() {
  const { t } = useLanguage();
  const { isCompleted } = useProgress();
  const searchParams = useSearchParams();
  const levelParam = searchParams.get('level');
  
  const [selectedLangs, setSelectedLangs] = useState<Record<string, string>>({});
  const [activeLevel, setActiveLevel] = useState<string | undefined>(levelParam || undefined);

  useEffect(() => {
    if (levelParam) setActiveLevel(levelParam);
  }, [levelParam]);

  /**
   * Cálculo de progresso resiliente.
   */
  const getModuleProgress = (module: any) => {
    if (!module || !module.knowledgeAreas) return 0;
    let total = 0;
    let completedCount = 0;
    
    module.knowledgeAreas.forEach((ka: any) => {
      const theories = ka.theory || [];
      total += theories.length;
      completedCount += theories.filter((l: any) => isCompleted(l.id)).length;
      
      if (ka.practice) {
        const uniqueExerciseIds = new Set<string>();
        Object.values(ka.practice).forEach((list: any) => {
          if (Array.isArray(list)) list.forEach(ex => uniqueExerciseIds.add(ex.id));
        });
        
        total += uniqueExerciseIds.size;
        uniqueExerciseIds.forEach(id => {
          if (isCompleted(id)) completedCount++;
        });
      }
    });
    
    return total > 0 ? Math.round((completedCount / total) * 100) : 0;
  };

  return (
    <main className="container mx-auto px-4 py-8 md:py-12 max-w-5xl flex-1">
      <header className="mb-12 text-center animate-in fade-in slide-in-from-top-4 duration-700">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-primary/10 mb-6 border-2 border-primary/20">
          <GraduationCap className="w-8 h-8 text-primary" />
        </div>
        <h1 className="font-headline text-3xl md:text-5xl font-bold mb-4">Currículo de Engenharia 1-8</h1>
        <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Uma jornada estruturada em 8 níveis, cobrindo da lógica fundamental ao domínio de elite.
        </p>
      </header>

      <Accordion 
        type="single" 
        collapsible 
        className="w-full space-y-4 mb-20"
        value={activeLevel}
        onValueChange={setActiveLevel}
      >
        {modules.map((module) => {
          const progressPercent = getModuleProgress(module);
          const isLevel8 = module.id === 8;
          
          return (
            <AccordionItem key={module.id} value={module.id.toString()} className="border-none">
              <AccordionTrigger className="hover:no-underline bg-card/40 rounded-2xl px-4 md:px-6 py-4 shadow-sm border border-white/5 data-[state=open]:rounded-b-none data-[state=open]:border-b-0 transition-all group overflow-hidden">
                <div className="flex flex-1 items-center justify-between pr-2 md:pr-4 min-w-0">
                  <div className="flex items-center gap-3 md:gap-4 min-w-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center font-headline font-bold text-primary shrink-0">
                      {module.id}
                    </div>
                    <div className="text-left min-w-0">
                      <h3 className="font-headline font-bold text-sm md:text-lg truncate">{module.title}</h3>
                      <div className="flex items-center gap-2 md:gap-3">
                        <Badge variant="outline" className={cn(
                          "text-[9px] md:text-[10px] uppercase shrink-0",
                          progressPercent === 100 ? "bg-green-500/10 text-green-500 border-green-500/20" : "bg-primary/5 text-primary border-primary/20"
                        )}>
                          {progressPercent === 100 ? 'CONCLUÍDO' : 'NÍVEL ' + module.id}
                        </Badge>
                        <span className="text-[10px] md:text-xs text-muted-foreground whitespace-nowrap">{progressPercent}% completo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-card/20 rounded-b-2xl border-x border-b border-white/5 p-3 md:p-8 pt-4">
                <p className="text-xs md:text-sm text-muted-foreground mb-6 md:mb-8 max-w-2xl px-2">{module.description}</p>
                
                {isLevel8 ? (
                  <Accordion type="single" collapsible className="w-full space-y-3">
                    {module.knowledgeAreas.map((ka) => {
                      const phases = groupLessonsByPhase(ka.theory || []);
                      return (
                        <AccordionItem key={ka.id} value={ka.id} className="border-none">
                          <AccordionTrigger className="hover:no-underline bg-background/50 rounded-xl px-4 py-4 border border-white/5 hover:border-primary/30 transition-all group/lang overflow-hidden">
                             <div className="flex items-center gap-3 md:gap-4 min-w-0">
                                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                                   <Code2 className="w-5 h-5 text-accent" />
                                </div>
                                <div className="text-left min-w-0">
                                   <h4 className="font-headline font-bold text-sm md:text-base group-hover/lang:text-primary transition-colors truncate">{ka.title}</h4>
                                   <p className="text-[9px] md:text-[10px] text-muted-foreground uppercase tracking-widest">{ka.load} de carga horária</p>
                                </div>
                             </div>
                          </AccordionTrigger>
                          <AccordionContent className="pt-6 pb-2 px-1 md:px-2">
                             <div className="space-y-8 md:space-y-10">
                                {Object.entries(phases).map(([phase, items]) => (
                                  <div key={phase} className="space-y-4">
                                     <div className="flex items-center gap-3">
                                        <Layers className="w-4 h-4 text-primary shrink-0" />
                                        <h5 className="font-headline font-bold text-xs md:text-sm text-primary uppercase tracking-tighter whitespace-nowrap">{phase}</h5>
                                        <div className="h-px flex-1 bg-primary/10" />
                                     </div>
                                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                                        {items.map(l => (
                                          <Link key={l.id} href={`/learn/${l.id}`}>
                                            <Card className="bg-card/40 border-white/5 hover:border-primary/20 transition-all group/item overflow-hidden">
                                               <CardContent className="p-3 md:p-4 flex items-center justify-between gap-2 md:gap-3 min-w-0">
                                                  <div className="flex items-center gap-2 md:gap-3 min-w-0 flex-1">
                                                     {isCompleted(l.id) ? (
                                                       <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                                                     ) : (
                                                       <Circle className="w-4 h-4 text-muted-foreground shrink-0" />
                                                     )}
                                                     <span className={cn(
                                                       "text-[11px] md:text-xs font-medium truncate",
                                                       isCompleted(l.id) && "text-muted-foreground line-through"
                                                     )}>
                                                       {l.title.replace(/Fase \d+: /i, '')}
                                                     </span>
                                                  </div>
                                                  <ChevronRight className="w-4 h-4 opacity-0 group-hover/item:opacity-100 transition-opacity text-primary shrink-0" />
                                               </CardContent>
                                            </Card>
                                          </Link>
                                        ))}
                                     </div>
                                  </div>
                                ))}
                                <div className="pt-4 border-t border-white/5">
                                   <h5 className="font-headline font-bold text-xs md:text-sm text-accent uppercase tracking-tighter mb-4 flex items-center gap-2">
                                      <Laptop className="w-4 h-4 shrink-0" /> Laboratórios Master
                                   </h5>
                                   <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                                      {Object.entries(ka.practice || {}).map(([lang, exercises]) => (
                                        exercises.map((ex: any) => (
                                          <Link key={ex.id} href={`/learn/${ex.id}`}>
                                            <Card className={cn(
                                              "border transition-all p-3 md:p-4 flex items-center justify-between gap-3 overflow-hidden",
                                              isCompleted(ex.id) ? "bg-green-500/5 border-green-500/20" : "bg-accent/5 border-accent/10 hover:border-accent/40"
                                            )}>
                                               <div className="flex items-center gap-3 min-w-0">
                                                  {isCompleted(ex.id) ? (
                                                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-500 shrink-0" />
                                                  ) : (
                                                    <div className="w-7 h-7 md:w-8 md:h-8 rounded bg-accent/10 flex items-center justify-center font-bold text-[9px] md:text-[10px] text-accent shrink-0">
                                                      {lang.toUpperCase()}
                                                    </div>
                                                  )}
                                                  <span className={cn("text-[11px] md:text-xs font-bold truncate", isCompleted(ex.id) && "line-through text-muted-foreground")}>{ex.title}</span>
                                               </div>
                                               <ArrowRight className={cn("w-4 h-4 shrink-0", isCompleted(ex.id) ? "text-green-500" : "text-accent")} />
                                            </Card>
                                          </Link>
                                        ))
                                      ))}
                                   </div>
                                </div>
                             </div>
                          </AccordionContent>
                        </AccordionItem>
                      );
                    })}
                  </Accordion>
                ) : (
                  <div className="grid gap-6 md:gap-8">
                    {module.knowledgeAreas.map((ka) => {
                      const theoryLessons = ka.theory || [];
                      const availableLangs = Object.keys(ka.practice || {});
                      const currentLang = selectedLangs[ka.id] || availableLangs[0] || "";
                      const practiceExercises = ka.practice?.[currentLang] || [];
                      
                      return (
                        <div key={ka.id} className="space-y-4">
                          <div className="flex items-center gap-3 mb-2 min-w-0">
                            <div className="h-px flex-1 bg-white/5" />
                            <h4 className="font-headline font-bold text-[10px] md:text-sm uppercase tracking-widest text-primary/80 truncate px-2">{ka.title}</h4>
                            <div className="h-px flex-1 bg-white/5" />
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-stretch">
                             <Card className="bg-background/40 border-white/5 hover:border-primary/20 transition-all shadow-xl rounded-2xl flex flex-col overflow-hidden">
                                <CardContent className="p-4 md:p-6 space-y-4 md:space-y-6 flex-1 flex flex-col">
                                  <div className="flex justify-between items-start gap-2">
                                     <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <BookOpen className="w-5 h-5" />
                                     </div>
                                     <Badge variant="outline" className="text-[8px] md:text-[9px] font-black tracking-widest shrink-0">TEORIA</Badge>
                                  </div>
                                  <div className="space-y-1.5 flex-1 min-w-0">
                                     {theoryLessons.map(l => (
                                       <Link key={l.id} href={`/learn/${l.id}`} className="flex items-center justify-between text-[11px] md:text-xs p-2.5 rounded-lg hover:bg-white/5 transition-colors group/l overflow-hidden">
                                          <div className="flex items-center gap-2 md:gap-3 min-w-0 flex-1">
                                            {isCompleted(l.id) ? <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> : <Circle className="w-4 h-4 text-muted-foreground shrink-0" />}
                                            <span className={cn("truncate", isCompleted(l.id) && "text-muted-foreground line-through")}>{l.title}</span>
                                          </div>
                                          <ChevronRight className="w-4 h-4 opacity-0 group-hover/l:opacity-100 transition-opacity shrink-0" />
                                       </Link>
                                     ))}
                                  </div>
                                </CardContent>
                             </Card>

                             <Card className="bg-background/40 border-white/5 hover:border-accent/20 transition-all shadow-xl rounded-2xl flex flex-col overflow-hidden">
                                <CardContent className="p-4 md:p-6 space-y-4 md:space-y-6 flex-1 flex flex-col">
                                    <div className="flex justify-between items-start gap-2">
                                       <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                                          <Code2 className="w-5 h-5" />
                                       </div>
                                       <div className="flex gap-1 overflow-x-auto no-scrollbar max-w-[150px]">
                                          {availableLangs.map(lang => (
                                            <button
                                              key={lang}
                                              onClick={() => setSelectedLangs(prev => ({...prev, [ka.id]: lang}))}
                                              className={cn(
                                                "text-[8px] md:text-[9px] px-2 py-0.5 rounded border font-black uppercase transition-all whitespace-nowrap",
                                                currentLang === lang 
                                                  ? "bg-accent text-accent-foreground border-accent" 
                                                  : "bg-transparent text-muted-foreground border-white/10 hover:border-accent/50"
                                              )}
                                            >
                                              {lang}
                                            </button>
                                          ))}
                                       </div>
                                    </div>
                                    <div className="space-y-1.5 flex-1 min-w-0">
                                       {practiceExercises.length > 0 ? practiceExercises.map(ex => (
                                         <Link key={ex.id} href={`/learn/${ex.id}`} className="flex items-center justify-between text-[11px] md:text-xs p-2.5 rounded-lg hover:bg-white/5 transition-colors group/l overflow-hidden">
                                            <div className="flex items-center gap-2 md:gap-3 min-w-0 flex-1">
                                              {isCompleted(ex.id) ? <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> : <Circle className="w-4 h-4 text-muted-foreground shrink-0" />}
                                              <span className={cn("truncate", isCompleted(ex.id) && "text-muted-foreground line-through")}>{ex.title}</span>
                                            </div>
                                            <ChevronRight className="w-4 h-4 opacity-0 group-hover/l:opacity-100 transition-opacity shrink-0" />
                                         </Link>
                                       )) : (
                                         <div className="h-full flex items-center justify-center opacity-20 italic text-[10px]">Prática em breve</div>
                                       )}
                                    </div>
                                </CardContent>
                             </Card>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </main>
  );
}

export default function ModulesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-body">
      <Navigation />
      <Suspense fallback={<div className="flex h-screen items-center justify-center"><Loader2 className="w-10 h-10 animate-spin text-primary" /></div>}>
        <ModulesContent />
      </Suspense>
      <Footer />
    </div>
  );
}
