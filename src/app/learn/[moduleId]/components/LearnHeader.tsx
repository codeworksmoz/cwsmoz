
'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, Brain, Info, Play, Loader2, ChevronRight } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useRouter } from "next/navigation";

interface LearnHeaderProps {
  kaTitle: string;
  lessonTitle: string;
  isMobile: boolean;
  isTheory: boolean;
  isCompleted: boolean;
  isRunning: boolean;
  nextLessonId: string | null;
  onRunCode: () => void;
  lessonList: React.ReactNode;
  missionContent?: React.ReactNode;
}

export const LearnHeader = React.memo(function LearnHeader({
  kaTitle,
  lessonTitle,
  isMobile,
  isTheory,
  isCompleted,
  isRunning,
  nextLessonId,
  onRunCode,
  lessonList,
  missionContent
}: LearnHeaderProps) {
  const router = useRouter();

  return (
    <div className="bg-card/50 border-b px-4 h-12 md:h-14 flex items-center justify-between shrink-0">
      <div className="flex items-center gap-2 md:gap-3 min-w-0">
        <Button variant="ghost" size="icon" onClick={() => router.back()} className="rounded-full h-8 w-8 shrink-0">
          <ChevronLeft className="w-4 h-4" />
        </Button>
        
        <div className="truncate flex-1">
          <span className="text-[9px] md:text-[10px] text-primary font-black block uppercase tracking-tighter">{kaTitle}</span>
          <h2 className="font-headline font-bold text-xs md:text-sm truncate opacity-90">{lessonTitle}</h2>
        </div>

        {isMobile && (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors">
                <Brain className="w-4 h-4 text-primary" />
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[85vh] rounded-t-[2.5rem] p-0 border-t-primary/20 flex flex-col">
               <SheetHeader className="p-6 border-b shrink-0">
                 <SheetTitle className="text-left font-headline font-bold flex items-center gap-2">
                   <Brain className="w-5 h-5 text-primary" /> Trilhas do Módulo
                 </SheetTitle>
               </SheetHeader>
               <div className="flex-1 overflow-hidden relative">
                 {lessonList}
               </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
      
      <div className="flex items-center gap-2">
        {!isTheory && (
          isCompleted ? (
            <Button 
              size="sm" 
              onClick={() => nextLessonId ? router.push(`/learn/${nextLessonId}`) : router.push('/dashboard')} 
              className="h-8 md:h-9 bg-green-600 hover:bg-green-700 text-[10px] font-black px-4 md:px-6 rounded-full shadow-lg shadow-green-900/30 animate-in zoom-in duration-300 gap-1.5"
            >
              {nextLessonId ? 'PRÓXIMA LIÇÃO' : 'CONCLUÍDO'} <ChevronRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button 
              size="sm" 
              onClick={onRunCode} 
              disabled={isRunning} 
              className="h-8 md:h-9 bg-primary hover:bg-primary/90 text-[10px] font-black px-4 md:px-6 rounded-full shadow-lg shadow-primary/20"
            >
              {isRunning ? <Loader2 className="w-3 h-3 animate-spin" /> : <><Play className="w-3 h-3 mr-1.5" /> EXECUTAR</>}
            </Button>
          )
        )}

        {isMobile && !isTheory && (
          <Sheet>
            <SheetTrigger asChild>
              <Button size="sm" variant="outline" className="rounded-full h-8 md:h-9 gap-1 text-[10px] font-black border-primary/30">
                <Info className="w-3 h-3" /> MISSÃO
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[80vh] rounded-t-[2rem] p-0 overflow-hidden border-t-primary/20">
              <SheetHeader className="p-6 pb-2">
                <SheetTitle className="text-left font-headline font-bold flex items-center gap-2">
                  <Info className="w-5 h-5 text-primary" /> Briefing da Missão
                </SheetTitle>
              </SheetHeader>
              <div className="h-full">
                {missionContent}
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </div>
  );
});
