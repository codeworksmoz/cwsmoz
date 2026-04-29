import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "alg-t8",
  title: "Introdução a Algoritmos de Grafos",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold">🕸️ Redes de Conexão</h2>
      <p>Grafos representam relações entre objetos (Nós ligados por Arestas). Exemplos: Redes Sociais, Mapas de GPS.</p>
      <ul class="list-disc ml-6 space-y-2">
        <li><strong>BFS (Breadth-First Search):</strong> Explora nível a nível.</li>
        <li><strong>DFS (Depth-First Search):</strong> Explora o mais profundo possível antes de voltar atrás.</li>
      </ul>
    </div>
  `,
  quizId: "alg-q8"
};
