'use client';

import { cn } from "@/lib/utils";
import { CheckCircle2, LayoutGrid, Circle, BookOpen, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { KnowledgeArea } from "@/lib/curriculum/types";

interface LearnSidebarProps {
  ka: KnowledgeArea;
  lessonId: string;
  isCompleted: (id: string) => boolean;
}

export function LearnSidebar({ ka, lessonId, isCompleted }: LearnSidebarProps) {
  return (
    <div className="flex flex-col gap-1 p-4 overflow-y-auto max-h-full scroll-container pb-40">
      <Link href="/modules" className="mb-4 shrink-0">
        <Button variant="outline" className="w-full justify-start gap-2 border-primary/20 bg-primary/5 hover:bg-primary/10 rounded-xl h-12 font-bold">
          <LayoutGrid className="w-4 h-4 text-primary" /> Voltar aos Módulos
        </Button>
      </Link>

      <div className="text-[10px] font-black uppercase text-muted-foreground/60 mb-2 px-2 tracking-widest">Aulas Teóricas</div>
      {ka.theory.map((l) => (
        <Link key={l.id} href={`/learn/${l.id}`} className={cn(
          "flex items-center justify-between p-3 rounded-xl text-sm border transition-all mb-1",
          lessonId === l.id ? "bg-primary/20 border-primary/30 text-primary font-bold shadow-lg shadow-primary/5" : "bg-card/40 border-transparent hover:bg-card/60"
        )}>
          <span className="truncate mr-2 flex items-center gap-2">
            <BookOpen className="w-3 h-3 opacity-40" />
            {l.title}
          </span>
          {isCompleted(l.id) ? (
            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
          ) : (
            <Circle className="w-3.5 h-3.5 text-muted-foreground/30 shrink-0" />
          )}
        </Link>
      ))}

      <div className="text-[10px] font-black uppercase text-muted-foreground/60 mt-6 mb-2 px-2 tracking-widest">Laboratórios Práticos</div>
      {Object.entries(ka.practice).map(([lang, exercises]) => (
        exercises.map(ex => (
          <Link key={ex.id} href={`/learn/${ex.id}`} className={cn(
            "flex items-center justify-between p-3 rounded-xl text-sm border transition-all mb-1",
            lessonId === ex.id ? "bg-accent/20 border-accent/30 text-accent font-bold" : "bg-card/40 border-transparent hover:bg-card/60"
          )}>
            <span className="truncate mr-2 flex items-center gap-2">
              <span className="text-[9px] bg-accent/10 px-1.5 py-0.5 rounded text-accent uppercase font-black">{lang}</span>
              <Laptop className="w-3 h-3 opacity-40" />
              {ex.title}
            </span>
            {isCompleted(ex.id) ? (
              <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
            ) : (
              <Circle className="w-3.5 h-3.5 text-muted-foreground/30 shrink-0" />
            )}
          </Link>
        ))
      ))}
      
      {/* Espaçador técnico para evitar oclusão por barras de sistema ou teclado */}
      <div className="h-40 w-full pointer-events-none" aria-hidden="true" />
    </div>
  );
}
