import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "ds-t15",
  title: "Skip Lists: Listas Ligadas com Performance de Árvore",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🎢 O Elevador de Nós</h2>
        <p class="text-lg leading-relaxed">
          Skip Lists são uma alternativa probabilista às árvores balanceadas. Imagine uma lista ligada com "express lanes" no topo que permitem saltar grandes blocos de elementos, atingindo <strong>O(log n)</strong> de forma muito mais simples de implementar.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">Porquê usar Skip Lists?</h3>
        <p class="text-sm">Diferente das Red-Black Trees, as Skip Lists são fáceis de tornar <strong>Lock-Free</strong>. Isto torna-as ideais para sistemas concorrentes (multi-thread) onde rotações de árvores causariam bloqueios de performance.</p>
        
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6 text-xs italic">
          Uso real: Motor de armazenamento LevelDB (Google) e bases de dados in-memory como Redis.
        </div>
      </div>
    </div>
  `,
  quizId: "ds-mq15"
};
