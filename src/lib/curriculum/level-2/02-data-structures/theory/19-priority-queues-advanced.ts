import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "ds-t19",
  title: "Priority Queues Avançadas: Fibonacci Heaps",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🚀 Além do Binary Heap</h2>
        <p class="text-lg leading-relaxed">
          Para algoritmos que fazem muitas operações de "diminuir chave" (como o Dijkstra), o Binary Heap O(log n) torna-se o gargalo. Entra o **Fibonacci Heap**.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">Complexidade Amortizada</h3>
        <p class="text-sm">O Fibonacci Heap atinge <strong>O(1) amortizado</strong> para inserção e diminuição de chave. É uma estrutura extremamente complexa que utiliza uma "preguiça estratégica": adia a reorganização da árvore até ao último momento possível.</p>
        
        <h3 class="text-xl font-bold font-headline text-accent">Tradeoffs</h3>
        <p class="text-sm">Apesar da superioridade teórica, o overhead de gestão de ponteiros torna-as mais lentas que Binary Heaps para conjuntos de dados que cabem na RAM comum. É uma ferramenta para escala extrema.</p>
      </div>
    </div>
  `,
  quizId: "ds-mq19"
};
