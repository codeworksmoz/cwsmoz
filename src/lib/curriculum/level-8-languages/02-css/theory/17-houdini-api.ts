import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m17",
  title: "Fase 4: CSS Houdini Paint API: Desenhando no Motor",
  enableInteractive: true,
  youtubeVideoId: "u044iM9xsTM",
  quizId: "css-mq17",
  content: `<div class="space-y-12">
      <div class="bg-purple-500/10 p-8 rounded-[2.5rem] border border-purple-500/20 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-purple-400 flex items-center gap-3">
          🎩 Mágica de Baixo Nível
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O <strong>CSS Houdini</strong> expõe as entranhas do motor de renderização do browser. Com a <strong>Paint API</strong>, podes escrever JS que corre no processo de pintura.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-purple-500/20 pb-2 text-accent">1. Paint Worklets</h3>
        <pre><code class="language-javascript">
registerPaint('checkboard', class {
  paint(ctx, geom, properties) {
    // Desenha o padrão no nível do motor
  }
});
        </code></pre>
      </section>
    </div>`
};