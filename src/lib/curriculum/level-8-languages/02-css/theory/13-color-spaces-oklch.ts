import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m13",
  title: "Fase 4: OKLCH e o Futuro das Cores no CSS",
  enableInteractive: true,
  youtubeVideoId: "u044iM9xsTM",
  quizId: "css-mq21",
  content: `<div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🌈 Cores Perceptualmente Uniformes
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O RGB e o HSL foram desenhados para monitores antigos. O <strong>OKLCH</strong> foi feito para o olho humano, garantindo que o contraste seja consistente e acessível.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Anatomia do OKLCH</h3>
        <div class="bg-black/40 p-6 rounded-xl border border-white/5 font-mono text-xs text-center space-y-2">
          <p>oklch(<span class="text-primary">L</span> <span class="text-accent">C</span> <span class="text-green-400">H</span>)</p>
          <p class="text-[10px] opacity-60">// L: 0-100% | C: 0-0.4 | H: 0-360</p>
        </div>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. A Função color-mix()</h3>
        <p class="text-sm">Permite misturar cores nativamente.</p>
        <pre><code class="language-css">
.btn-hover {
  background: color-mix(in oklab, var(--primary), black 20%);
}
        </code></pre>
      </section>
    </div>`
};