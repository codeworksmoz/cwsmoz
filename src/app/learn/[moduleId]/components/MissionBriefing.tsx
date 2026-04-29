
'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronRight, ListChecks, Brain, Youtube, MessageSquare, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import type { PracticeExercise } from "@/lib/curriculum/types";

interface MissionBriefingProps {
  practice: PracticeExercise;
  availableVariants: { lang: string; id: string }[];
  completedObjectives: string[];
  isCompleted: boolean;
  nextLessonId: string | null;
  onNavigate: (id: string) => void;
  onGoToDashboard: () => void;
}

export const MissionBriefing = React.memo(function MissionBriefing({
  practice,
  availableVariants,
  completedObjectives,
  isCompleted,
  nextLessonId,
  onNavigate,
  onGoToDashboard
}: MissionBriefingProps) {
  const isConceptLab = practice.language.toLowerCase() === 'concept';

  return (
    <div className="p-5 h-full flex flex-col bg-card/30 overflow-y-auto scroll-container">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-headline font-bold text-[10px] md:text-xs uppercase flex items-center gap-2 tracking-widest text-primary">
          {isConceptLab ? <Brain className="w-4 h-4" /> : <ListChecks className="w-4 h-4" />}
          Missão {isConceptLab ? "Lógica Pura" : "Técnica"}
        </h3>
        {availableVariants.length > 1 && (
          <div className="flex items-center gap-1.5 bg-secondary/50 p-1 rounded-lg">
             {availableVariants.map(v => (
               <Button
                 key={v.id}
                 size="sm"
                 variant={practice.id === v.id ? "secondary" : "ghost"}
                 onClick={() => onNavigate(v.id)}
                 className={cn(
                   "h-6 px-2 text-[9px] font-black uppercase rounded",
                   practice.id === v.id ? "bg-background shadow-sm border border-white/5" : "opacity-40"
                 )}
               >
                 {v.lang}
               </Button>
             ))}
          </div>
        )}
      </div>

      {practice.youtubeVideoId && (
        <div className="mb-6 aspect-video w-full overflow-hidden rounded-2xl border border-white/5 bg-black/40 group relative shrink-0">
           <iframe 
            src={`https://www.youtube.com/embed/${practice.youtubeVideoId}?rel=0&modestbranding=1`}
            title={practice.title}
            className="w-full h-full"
            allowFullScreen
          />
          <div className="absolute top-2 left-2 inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-red-600/90 text-white text-[8px] font-black uppercase tracking-widest shadow-lg pointer-events-none">
            <Youtube className="w-3 h-3" /> Guia Prático
          </div>
        </div>
      )}
      
      <div className="prose prose-invert prose-sm mb-6 text-xs leading-relaxed opacity-90" dangerouslySetInnerHTML={{ __html: practice.detailedExplanation }} />
      
      <div className="space-y-2 mb-8">
        <p className="text-[10px] font-black uppercase text-muted-foreground/60 mb-2 tracking-widest">Requisitos de Construção</p>
        {practice.objectives.map((obj, i) => (
          <div key={obj.id} className={cn("p-3 md:p-4 rounded-xl border transition-all", (completedObjectives.includes(obj.id) || isCompleted) ? "bg-green-500/10 border-green-500/30" : "bg-background/40 border-white/5 shadow-sm")}>
            <div className="flex gap-3 items-start">
              <div className={cn("w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[9px] font-bold mt-0.5", (completedObjectives.includes(obj.id) || isCompleted) ? "bg-green-500 text-white" : "bg-white/10 text-muted-foreground")}>
                {(completedObjectives.includes(obj.id) || isCompleted) ? <CheckCircle2 className="w-3.5 h-3.5" /> : i + 1}
              </div>
              <div className="space-y-1">
                <p className="text-[11px] md:text-xs leading-tight font-medium">{obj.description}</p>
                {obj.hint && !completedObjectives.includes(obj.id) && !isCompleted && (
                  <p className="text-[9px] text-muted-foreground italic">Dica: {obj.hint}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-3 mb-10">
        <p className="text-[10px] font-black uppercase text-muted-foreground/60 mb-2 tracking-widest">Suporte da Comunidade</p>
        <Link href={`/community/exercise/${practice.id}`} className="block">
          <Button variant="outline" className="w-full rounded-xl border-dashed border-primary/30 hover:bg-primary/5 hover:border-primary/50 text-xs font-bold gap-2 h-11">
            <MessageSquare className="w-4 h-4 text-primary" />
            Dúvidas ou Erros? Pedir Ajuda
            <ArrowRight className="w-3 h-3 ml-auto opacity-40" />
          </Button>
        </Link>
      </div>

      <div className="mt-auto pt-6 border-t border-white/5">
        {isCompleted && (
          <div className="space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="bg-green-500/10 border border-green-500/30 p-3 rounded-xl flex items-center gap-3 text-green-500">
              <CheckCircle2 className="w-5 h-5" />
              <span className="text-[11px] font-bold uppercase tracking-tight">Arquitetura Validada!</span>
            </div>
            {nextLessonId ? (
              <Button 
                onClick={() => onNavigate(nextLessonId)} 
                className="w-full h-12 md:h-14 rounded-xl md:rounded-2xl font-black bg-green-600 hover:bg-green-700 shadow-lg shadow-green-900/20 text-white gap-2"
              >
                PRÓXIMA LIÇÃO <ChevronRight className="w-5 h-5" />
              </Button>
            ) : (
              <Button 
                onClick={onGoToDashboard} 
                className="w-full h-12 md:h-14 rounded-xl md:rounded-2xl font-black bg-primary"
              >
                VOLTAR AO PAINEL
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
});
