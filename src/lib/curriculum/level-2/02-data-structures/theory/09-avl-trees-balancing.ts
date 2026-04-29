import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "ds-t9",
  title: "AVL Trees: O Rigor do Auto-balanceamento",
  content: `
    <div class="space-y-8">
      <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-indigo-400">⚖️ Garantindo a Performance O(log n)</h2>
        <p class="text-lg leading-relaxed">
          Uma árvore AVL é uma BST que se auto-ajusta. Ela mantém uma propriedade rígida: a diferença de altura entre os filhos de qualquer nó (Balance Factor) não pode ser superior a 1.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline text-primary border-b border-white/5 pb-2">As 4 Rotações de Reequilíbrio</h3>
        <p class="text-sm">Quando um nó quebra a regra de altura após uma inserção, o motor do Rust/C++ realiza rotações de ponteiros:</p>
        <ul class="grid md:grid-cols-2 gap-4 text-xs font-bold text-center">
          <li class="p-3 bg-card border rounded-xl">Single Left (LL)</li>
          <li class="p-3 bg-card border rounded-xl">Single Right (RR)</li>
          <li class="p-3 bg-card border rounded-xl">Left-Right (LR)</li>
          <li class="p-3 bg-card border rounded-xl">Right-Left (RL)</li>
        </ul>

        <div class="bg-indigo-500/5 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h4 class="font-bold text-indigo-400 mb-2">💎 Porquê usar AVL?</h4>
          <p class="text-sm leading-relaxed">
            AVLs são mais rigidamente balanceadas que as Red-Black Trees. Isto torna-as <strong>mais rápidas para buscas</strong>, mas ligeiramente mais lentas para inserções frequentes devido ao custo das rotações constantes.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "ds-mq9"
};
