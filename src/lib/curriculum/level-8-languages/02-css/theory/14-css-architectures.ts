import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m14",
  title: "Fase 4: Architectures: BEM, Utility-first e Manutenibilidade",
  enableInteractive: true,
  youtubeVideoId: "jV8B24w82CU",
  quizId: "css-mq14",
  content: `<div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🏗️ Engenharia de Manutenibilidade
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Num projeto Master, o maior desafio é garantir que o sistema não se torne confuso. Escolher a arquitetura correta define a velocidade da equipa.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. BEM (Block, Element, Modifier)</h3>
        <div class="bg-black/40 p-4 rounded-xl border font-code text-xs text-accent">
          .card { } /* Block */<br/>
          .card__title { } /* Element */<br/>
          .card--highlighted { } /* Modifier */
        </div>
      </section>
    </div>`
};