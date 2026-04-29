import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m18",
  title: "Fase 4: Pseudo-elementos de Sombra: ::slotted & ::part",
  enableInteractive: true,
  youtubeVideoId: "jV8B24w82CU",
  quizId: "css-mq18",
  content: `<div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🌑 Estilizando além da Fronteira
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Pseudo-elementos permitem a customização segura de componentes encapsulados (Shadow DOM).
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. ::part()</h3>
        <p class="text-sm">Permite que um autor de componente exponha elementos específicos para estilização externa.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs text-accent">
          cwm-profile::part(action-button) { background: #3b82f6; }
        </div>
      </section>
    </div>`
};