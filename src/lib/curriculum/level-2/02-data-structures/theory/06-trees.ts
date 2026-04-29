import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "ds-t6",
  title: "Binary Trees & BST: Hierarquia e Busca",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🌳 Organização Não-Linear</h2>
        <p class="text-lg leading-relaxed">
          Árvores permitem representar relações hierárquicas. Uma **BST (Binary Search Tree)** é uma árvore binária onde a esquerda é sempre menor que o pai, e a direita maior, permitindo buscas em O(log n).
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Travessias (Traversals)</h3>
        <div class="grid md:grid-cols-3 gap-4 text-[10px] uppercase font-bold text-center">
          <div class="p-3 bg-card border rounded-xl">In-Order<br/><span class="text-[8px] font-normal">Esquerda -> Raiz -> Direita<br/>(Gera lista ordenada)</span></div>
          <div class="p-3 bg-card border rounded-xl">Pre-Order<br/><span class="text-[8px] font-normal">Raiz -> Esquerda -> Direita<br/>(Ideal para cópia)</span></div>
          <div class="p-3 bg-card border rounded-xl">Post-Order<br/><span class="text-[8px] font-normal">Esquerda -> Direita -> Raiz<br/>(Para apagar nós)</span></div>
        </div>

        <div class="bg-red-500/5 p-5 rounded-xl border border-red-500/20 mt-6 shadow-inner">
          <h4 class="font-bold text-red-400 mb-1 italic">⚠️ O Perigo da Degeneração:</h4>
          <p class="text-sm leading-relaxed">
            Se inserires dados já ordenados numa BST simples, ela torna-se uma lista ligada vertical, perdendo a performance O(log n) e tornando-se O(n). A solução é o auto-balanceamento.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "ds-mq6"
};
