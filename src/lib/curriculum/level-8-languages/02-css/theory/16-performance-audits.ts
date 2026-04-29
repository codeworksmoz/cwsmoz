import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m16",
  title: "Fase 4: Auditoria de Performance e Profiling de CSS",
  enableInteractive: true,
  youtubeVideoId: "8ME9u065vD4",
  quizId: "css-mq16",
  content: `<div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🔬 Diagnosticando a Lentidão
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          A performance de CSS é medida pelo tempo que o browser leva para calcular o layout e pintar os pixels.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Content-Visibility</h3>
        <p class="text-sm leading-relaxed">
          A propriedade <code>content-visibility: auto</code> diz ao browser para não renderizar elementos que estão fora do ecrã, poupando CPU.
        </p>
      </section>
    </div>`
};