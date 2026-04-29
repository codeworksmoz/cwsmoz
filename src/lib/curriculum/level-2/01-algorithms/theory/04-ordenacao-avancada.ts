import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "alg-t4",
  title: "Ordenação Avançada: Merge e Quick Sort",
  content: `
    <div class="space-y-6">
      <div class="bg-indigo-50 dark:bg-indigo-950 p-6 rounded-xl border border-indigo-200 dark:border-indigo-900">
        <h2 class="text-2xl font-bold mb-4">⚡ Dividir para Conquistar</h2>
        <p>Estes algoritmos usam recursão para atingir complexidade <strong>O(n log n)</strong>, o padrão ouro para ordenação.</p>
      </div>
      <div class="prose prose-invert max-w-none">
        <p><strong>Merge Sort:</strong> Divide a lista até ter apenas um elemento e depois junta-os de forma ordenada.</p>
        <p><strong>Quick Sort:</strong> Escolhe um "pivô" e coloca os menores à esquerda e os maiores à direita.</p>
      </div>
    </div>
  `,
  quizId: "alg-q4"
};
