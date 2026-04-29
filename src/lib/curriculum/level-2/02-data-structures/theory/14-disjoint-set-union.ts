import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "ds-t14",
  title: "Union-Find (DSU) e Compressão de Caminhos",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🖇️ Gerindo Partições de Conjuntos</h2>
        <p class="text-lg leading-relaxed">
          A estrutura **DSU (Disjoint Set Union)** resolve um problema fundamental: determinar se dois elementos pertencem ao mesmo grupo e unir grupos diferentes de forma eficiente.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2 text-accent">Otimizações de Elite</h3>
        <ul class="space-y-4">
          <li>
            <strong class="text-primary">Path Compression:</strong> Ao procurar o pai de um nó, ligamos todos os nós do caminho diretamente à raiz. A árvore fica "achatada", tornando as buscas subsequentes O(1).
          </li>
          <li>
            <strong class="text-primary">Union by Rank/Size:</strong> Sempre ligamos a árvore menor à maior, evitando que a estrutura se torne demasiado profunda.
          </li>
        </ul>
        <p class="text-sm italic">Com estas otimizações, o tempo de execução é quase constante <b>O(α(n))</b>, onde α é a função inversa de Ackermann.</p>
      </div>
    </div>
  `,
  quizId: "ds-mq14"
};
