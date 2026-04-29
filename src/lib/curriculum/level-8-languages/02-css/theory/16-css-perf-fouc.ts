import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m16",
  title: "Performance: Critical CSS & FOUC Prevention",
  content: `
    <div class="space-y-8">
      <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 font-headline text-green-400">⚡ Carregamento Instantâneo</h2>
        <p class="text-lg">Performance em CSS é sobre o que o utilizador <strong>não sente</strong>. O objetivo é evitar o Flash of Unstyled Content (FOUC) e atingir um LCP (Largest Contentful Paint) abaixo de 2.5s.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">Critical CSS Inlining</h3>
        <p>O browser não mostra nada até que o ficheiro CSS externo seja descarregado. Para evitar isto, extraímos o CSS "above the fold" (o que aparece no topo) e colocamos no HTML.</p>
        
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs text-accent">
          &lt;style&gt; body { background: #000; } header { height: 60px; } &lt;/style&gt;<br/>
          &lt;link rel="stylesheet" href="full-app.css" media="print" onload="this.media='all'"&gt;
        </div>

        <h3 class="text-xl font-bold font-headline">Content-visibility: auto</h3>
        <p>Diga ao browser para ignorar a renderização de elementos que estão fora do ecrã. Isto pode poupar até 50% de CPU no carregamento inicial de páginas longas.</p>
      </div>
    </div>
  `,
  quizId: "css-mq16"
};
