
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "alg-t9",
  title: "Estratégia Gulosa (Greedy): A Escolha Local Ótima",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🍪 Decisões Rápidas e Eficazes</h2>
        <p class="text-lg leading-relaxed">
          Um algoritmo <strong>Greedy</strong> faz sempre a escolha que parece ser a melhor naquele exato momento, sem olhar para trás ou prever o futuro a longo prazo. É simples e rápido, mas nem sempre encontra a solução perfeita global.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">Exemplo Clássico: Sistema de Troco</h3>
        <p class="text-sm">Se precisas de dar 40 cêntimos de troco, a estratégia gulosa escolhe sempre a maior moeda possível primeiro (ex: 20c + 20c). Funciona bem para moedas padrão, mas pode falhar se as moedas forem de valores estranhos.</p>
        
        <h3 class="text-xl font-bold font-headline text-accent">Casos de Uso de Elite:</h3>
        <ul class="space-y-3">
          <li class="p-3 bg-card border rounded-xl"><strong>Compressão de Huffman:</strong> Base do ZIP e JPEG.</li>
          <li><strong>Algoritmo de Dijkstra:</strong> Para caminhos curtos em mapas.</li>
          <li><strong>Árvore Geradora Mínima (Prim/Kruskal):</strong> Para desenhar redes de cabos de rede com o menor custo.</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "alg-q9"
};
