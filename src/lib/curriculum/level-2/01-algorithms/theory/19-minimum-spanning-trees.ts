import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "alg-t19",
  title: "MST: Árvores Geradoras Mínimas (Kruskal e Prim)",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🌲 Conectando com o Menor Custo</h2>
        <p class="text-lg leading-relaxed">
          Uma MST (Minimum Spanning Tree) é um subconjunto de arestas que liga todos os nós de um grafo sem ciclos e com o menor peso total possível.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="p-6 bg-card border rounded-2xl shadow-xl">
          <h4 class="font-bold text-accent mb-3">Algoritmo de Kruskal</h4>
          <p class="text-xs leading-relaxed">Ordena todas as arestas e adiciona as mais baratas que não formam ciclos. Utiliza a estrutura de dados <strong>Union-Find</strong> para máxima eficiência.</p>
        </div>
        <div class="p-6 bg-card border rounded-2xl shadow-xl">
          <h4 class="font-bold text-accent mb-3">Algoritmo de Prim</h4>
          <p class="text-xs leading-relaxed">Cresce a árvore a partir de um nó inicial, escolhendo sempre a aresta mais barata que liga a árvore a um nó externo. Usa <strong>Priority Queues</strong>.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "alg-q19"
};
