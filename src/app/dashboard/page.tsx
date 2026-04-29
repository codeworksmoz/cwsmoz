
"use client";

import { Navigation } from "@/components/Navigation";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { modules, findOrderedLessons, findTheoryLesson, findPracticeExercise, findKnowledgeAreaByLessonId } from "@/lib/curriculum";
import { Button } from "@/components/ui/button";
import { Zap, ArrowRight, Star, Target, Loader2, BookOpen, Laptop, ChevronRight, RefreshCcw } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import { useAuth } from "@/hooks/useAuth";
import { useProgress } from "@/contexts/ProgressContext";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

export default function DashboardPage() {
  const { t } = useLanguage();
  const { profile, loading: authLoading } = useAuth();
  const { progress, loading: progressLoading, isCompleted, syncPoints } = useProgress();
  const [isSyncing, setIsSyncing] = useState(false);

  const currentLessonId = useMemo(() => {
    const ordered = findOrderedLessons();
    const next = ordered.find(id => !isCompleted(id));
    return next || ordered[0];
  }, [progress, isCompleted]);

  const currentLessonData = useMemo(() => {
    if (!currentLessonId) return null;
    const theory = findTheoryLesson(currentLessonId);
    const practice = findPracticeExercise(currentLessonId);
    const kaInfo = findKnowledgeAreaByLessonId(currentLessonId);
    
    return {
      id: currentLessonId,
      title: theory?.title || practice?.title || "Próxima Lição",
      kaTitle: kaInfo?.ka.title || "Engenharia de Software",
      type: theory ? 'theory' : 'practice'
    };
  }, [currentLessonId]);

  const handleManualSync = async () => {
    setIsSyncing(true);
    await syncPoints();
    setTimeout(() => setIsSyncing(false), 1000);
  };

  const moduleStats = useMemo(() => {
    return modules.map(m => {
      let total = 0;
      let done = 0;
      m.knowledgeAreas.forEach(ka => {
        const theoryCount = ka.theory?.length || 0;
        total += theoryCount;
        
        let practiceCount = 0;
        if (ka.practice) {
          Object.values(ka.practice).forEach(list => {
            practiceCount += list.length;
          });
        }
        total += practiceCount;

        ka.theory?.forEach(l => { if(isCompleted(l.id)) done++ });
        if (ka.practice) {
          Object.values(ka.practice).forEach(list => {
            list.forEach(p => { if(isCompleted(p.id)) done++ });
          });
        }
      });
      return { id: m.id, progress: total > 0 ? Math.round((done / total) * 100) : 0 };
    });
  }, [progress, isCompleted]);

  if (authLoading || progressLoading) {
    return (
      <div className="flex h-[100dvh] items-center justify-center bg-background">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-background font-body min-h-[100dvh]">
      <Navigation />
      <main className="container mx-auto px-4 py-6 md:py-10 max-w-6xl flex-1">
        <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h1 className="font-headline text-2xl md:text-3xl font-bold">
              Olá, {profile?.display_name?.split(' ')[0] || 'Engenheiro'}! 👋
            </h1>
            <div className="flex items-center gap-2 text-muted-foreground">
               <p className="text-xs md:text-sm">O teu progresso está sincronizado na nuvem.</p>
               <button 
                onClick={handleManualSync}
                className={cn("hover:text-primary transition-colors", isSyncing && "animate-spin")}
                title="Sincronizar Pontos"
               >
                 <RefreshCcw className="w-3 h-3" />
               </button>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex-1 md:flex-none">
              <Card className="bg-primary/10 border-primary/20 flex items-center gap-2 md:gap-3 px-4 py-2 md:py-3 shadow-lg shadow-primary/5">
                <Zap className="w-4 h-4 md:w-5 md:h-5 text-primary fill-primary" />
                <div>
                  <p className="text-[9px] md:text-[10px] uppercase font-black text-muted-foreground">Pontos</p>
                  <p className="font-headline font-bold text-sm md:text-lg">{profile?.total_points || 0}</p>
                </div>
              </Card>
            </div>
            <div className="flex-1 md:flex-none">
              <Card className="bg-orange-500/10 border-orange-500/20 flex items-center gap-2 md:gap-3 px-4 py-2 md:py-3 shadow-lg shadow-orange-900/5">
                <Star className="w-4 h-4 md:w-5 md:h-5 text-orange-500 fill-orange-500" />
                <div>
                  <p className="text-[9px] md:text-[10px] uppercase font-black text-muted-foreground">Streak</p>
                  <p className="font-headline font-bold text-sm md:text-lg">{profile?.streak || 0}d</p>
                </div>
              </Card>
            </div>
          </div>
        </header>

        <section className="mb-12">
          <Card className="bg-card/40 border-none shadow-2xl rounded-[2rem] md:rounded-[3rem] relative overflow-hidden group hover:ring-2 ring-primary/20 transition-all">
            <div className="absolute top-0 left-0 w-1 md:w-2 h-full bg-primary" />
            <div className="p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-8 items-center text-center md:text-left">
              <div className="flex-1 space-y-4 md:space-y-5">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <span className="text-[9px] md:text-[10px] font-black uppercase bg-primary/20 text-primary px-3 py-1 rounded-full tracking-widest">Missão Actual</span>
                  <span className="flex items-center gap-1 text-[9px] font-bold text-muted-foreground uppercase">
                    {currentLessonData?.type === 'theory' ? <BookOpen className="w-3 h-3" /> : <Laptop className="w-3 h-3" />}
                    {currentLessonData?.type === 'theory' ? 'Teoria' : 'Laboratório'}
                  </span>
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-primary font-bold mb-1 opacity-70 uppercase tracking-tight">{currentLessonData?.kaTitle}</p>
                  <h3 className="text-2xl md:text-4xl font-headline font-bold leading-tight group-hover:text-primary transition-colors">
                    {currentLessonData?.title}
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground max-w-xl mx-auto md:mx-0">
                  Continua a dominar a engenharia de software para desbloquear certificações internacionais.
                </p>
                <div className="pt-2">
                  <Link href={`/learn/${currentLessonId}`} className="w-full md:w-auto inline-block">
                    <Button className="w-full md:w-auto rounded-full px-8 md:px-10 h-12 md:h-14 font-black shadow-xl shadow-primary/30 group-hover:scale-105 transition-transform text-base md:text-lg">
                      CONTINUAR <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden lg:flex items-center justify-center w-40 h-40 rounded-full bg-primary/5 border-2 border-dashed border-primary/20 shrink-0">
                 <Target className="w-20 h-20 text-primary opacity-20 group-hover:scale-110 group-hover:opacity-40 transition-all duration-500" />
              </div>
            </div>
          </Card>
        </section>

        <section className="space-y-6 mb-16">
          <div className="flex items-center justify-between">
            <h2 className="font-headline text-xl md:text-2xl font-bold flex items-center gap-2">
              <Zap className="w-5 h-5 md:w-6 md:h-6 text-primary fill-primary" />
              Trilha de Conhecimento
            </h2>
          </div>
          <div className="grid gap-4 md:gap-6">
            {modules.map((module) => {
              const stat = moduleStats.find(s => s.id === module.id);
              return (
                <Card key={module.id} className="bg-card/40 hover:bg-card/60 transition-all border-white/5 rounded-2xl md:rounded-[2.5rem] shadow-xl overflow-hidden group">
                  <CardContent className="p-5 md:p-8 flex flex-col sm:flex-row items-center gap-4 md:gap-8">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-3xl bg-primary/10 flex items-center justify-center font-headline font-bold text-lg md:text-2xl text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      {module.id}
                    </div>
                    <div className="flex-1 text-center sm:text-left space-y-2 w-full">
                      <h3 className="text-base md:text-xl font-headline font-bold">{module.title}</h3>
                      <p className="text-muted-foreground text-[10px] md:text-xs line-clamp-1 opacity-70">{module.description}</p>
                      <div className="space-y-1.5 pt-1 md:pt-2">
                         <div className="flex justify-between text-[9px] md:text-[10px] font-black uppercase text-muted-foreground">
                            <span>Progresso</span>
                            <span>{stat?.progress || 0}%</span>
                         </div>
                         <Progress value={stat?.progress || 0} className="h-1.5 md:h-2 bg-secondary/50 rounded-full" />
                      </div>
                    </div>
                    <Link href={`/modules?level=${module.id}`} className="w-full sm:w-auto">
                      <Button variant="outline" className="w-full sm:w-auto rounded-full font-bold border-primary/20 text-primary hover:bg-primary hover:text-white transition-all px-6 md:px-8 text-xs md:text-sm">
                        EXPLORAR <ChevronRight className="ml-1 w-3 h-3 md:w-4 md:h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
