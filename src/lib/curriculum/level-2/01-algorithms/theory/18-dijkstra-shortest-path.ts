import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "alg-t18",
  title: "Dijkstra: O Algoritmo de Caminho Mínimo",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">📍 Navegação de Custo Mínimo</h2>
        <p class="text-lg leading-relaxed">
          Edsger Dijkstra criou este algoritmo em 1956 para encontrar o caminho mais curto entre nós num grafo com pesos positivos. É a base do protocolo de roteamento OSPF da Internet.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">Como Funciona (Estratégia Gulosa)</h3>
        <p class="text-sm">O algoritmo mantém uma lista de distâncias conhecidas e escolhe sempre o nó "não visitado" com a menor distância atual, atualizando os seus vizinhos (Relaxamento).</p>
        
        <div class="bg-red-500/5 p-5 rounded-xl border border-red-500/20">
          <h4 class="font-bold text-red-400 mb-1">⚠️ Limitação Crítica:</h4>
          <p class="text-xs">O Dijkstra <strong>não funciona</strong> com arestas de peso negativo. Para isso, precisamos do algoritmo de <strong>Bellman-Ford</strong>.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "alg-q18"
};
