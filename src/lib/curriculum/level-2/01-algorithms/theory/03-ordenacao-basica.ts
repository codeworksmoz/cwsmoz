import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "alg-t3",
  title: "Ordenação Básica: Bubble, Selection e Insertion",
  content: `
    <div class="space-y-6">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4">🧱 Os Primeiros Passos</h2>
        <p>Estes algoritmos têm complexidade <strong>O(n²)</strong>. São ótimos para aprender lógica, mas lentos para grandes volumes de dados.</p>
      </div>
      <ul class="list-disc ml-6 space-y-2">
        <li><strong>Bubble Sort:</strong> Compara vizinhos e "flutua" o maior para o fim.</li>
        <li><strong>Selection Sort:</strong> Escolhe o menor e coloca-o no início.</li>
        <li><strong>Insertion Sort:</strong> Constrói a lista ordenada um por um, como organizar cartas na mão.</li>
      </ul>
    </div>
  `,
  quizId: "alg-q3"
};
