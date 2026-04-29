
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "alg-t7",
  title: "Heap Sort: Ordenação via Estrutura de Árvore",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🏔️ A Montanha de Dados</h2>
        <p class="text-lg leading-relaxed">
          O <strong>Heap Sort</strong> utiliza uma estrutura de dados chamada <strong>Binary Heap</strong> (uma árvore binária completa) para ordenar elementos. Ele garante performance <strong>O(n log n)</strong> em qualquer cenário e não usa memória extra.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">Max-Heap e a Extração do Topo</h3>
        <p class="text-sm">Num Max-Heap, o maior elemento está sempre na raiz (topo). O algoritmo consiste em:</p>
        <ol class="list-decimal ml-6 space-y-2 text-xs">
          <li>Construir um Max-Heap a partir do array.</li>
          <li>Trocar a raiz (maior) com o último elemento.</li>
          <li>Reduzir o tamanho do heap e "re-heapificar" (Sift Down).</li>
          <li>Repetir até a lista estar vazia.</li>
        </ol>
        
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 mt-6 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-2">⚖️ Quando usar?</h4>
          <p class="text-sm leading-relaxed">
            Use Heap Sort quando precisas de uma garantia absoluta de tempo O(n log n) e tens <strong>memória restrita</strong> (sistemas embebidos), onde o custo O(n) do Merge Sort é inaceitável.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "alg-q7"
};
