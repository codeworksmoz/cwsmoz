import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m20",
  title: "Fase 4: Anchor Positioning Future: Popovers Nativos",
  enableInteractive: true,
  youtubeVideoId: "8ME9u065vD4",
  quizId: "css-mq20",
  content: `<div class="space-y-12">
      <div class="bg-indigo-500/10 p-8 rounded-[2.5rem] border border-indigo-500/20 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-indigo-400 flex items-center gap-3">
          ⚓ Posicionamento Relacional Inteligente
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O <strong>Anchor Positioning</strong> permite "ancorar" um elemento flutuante a outro elemento sem JavaScript.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-indigo-500/20 pb-2 text-accent">1. Ligando o Elemento Flutuante</h3>
        <pre><code class="language-css">
.tooltip {
  position: absolute;
  position-anchor: --my-btn;
  bottom: anchor(top);
}
        </code></pre>
      </section>
    </div>`
};