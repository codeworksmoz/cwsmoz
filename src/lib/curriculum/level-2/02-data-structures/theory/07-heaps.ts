import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "ds-t7",
  title: "Heaps: Propriedades e Filas de Prioridade",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🏔️ A Montanha de Prioridades</h2>
        <p class="text-lg leading-relaxed">
          Um **Heap** é uma árvore binária completa que mantém uma propriedade de ordem: no Max-Heap, o pai é sempre maior que os filhos. O segredo da performance é que ele pode ser guardado num **Array** simples sem ponteiros.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">1. Mapeamento em Array</h3>
        <p class="text-sm">Para um nó no índice <code>i</code>:</p>
        <ul class="font-mono text-xs space-y-1">
          <li>Filho Esquerdo: <code>2i + 1</code></li>
          <li>Filho Direito: <code>2i + 2</code></li>
          <li>Pai: <code>(i - 1) / 2</code></li>
        </ul>

        <h3 class="text-xl font-bold font-headline text-accent">2. Heapify: O Custo da Reorganização</h3>
        <p class="text-sm">Inserir ou remover o topo exige reorganizar a montanha. Esta operação (Sift Up/Down) leva <strong>O(log n)</strong>, garantindo que o elemento de maior prioridade esteja sempre disponível instantaneamente.</p>
        
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h4 class="font-bold text-indigo-400 mb-2">💎 Uso Industrial:</h4>
          <p class="text-sm leading-relaxed">
            Algoritmo de Dijkstra para caminhos curtos, escalonamento de processos em SO e o algoritmo de ordenação HeapSort.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "ds-mq7"
};
