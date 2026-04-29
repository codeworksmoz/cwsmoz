import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m19",
  title: "Fase 4: Scroll-driven Animations: Adeus Event Listeners",
  enableInteractive: true,
  youtubeVideoId: "v4cd1O4zkGw",
  quizId: "css-mq19",
  content: `<div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          📜 Animações ao Ritmo do Utilizador
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Ligue o progresso de uma animação à posição da barra de rolagem usando <strong>apenas CSS</strong>.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. animation-timeline: scroll()</h3>
        <div class="bg-black/40 p-5 rounded-xl border font-code text-sm text-accent">
          .progress-bar { <br/>
          &nbsp;&nbsp;animation-name: grow; <br/>
          &nbsp;&nbsp;animation-timeline: scroll(); <br/>
          }
        </div>
      </section>
    </div>`
};