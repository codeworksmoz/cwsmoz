import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "alg-t17",
  title: "Pathfinding Inteligente: O Algoritmo A*",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🛣️ Encontrando o Melhor Caminho</h2>
        <p class="text-lg leading-relaxed">
          O A* (A-Star) é o algoritmo de busca de caminho mais popular no mundo do Game Dev e Robótica. Ele combina o custo real já percorrido com uma estimativa (heurística) do que falta percorrer.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">A Fórmula do Sucesso: f(n) = g(n) + h(n)</h3>
        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl">
            <strong>g(n):</strong> Custo real do ponto de partida até o nó atual.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl">
            <strong>h(n):</strong> Heurística. Uma estimativa (ex: distância em linha reta) do nó atual até ao destino final.
          </li>
        </ul>
        <p class="text-sm italic">Se h(n) nunca sobrestima o custo real, o A* garante encontrar o caminho mais curto absoluto.</p>
      </div>
    </div>
  `,
  quizId: "alg-q17"
};
