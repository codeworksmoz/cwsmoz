import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t22",
  title: "Estruturas de Dados: Como Organizar a Informação",
  youtubeVideoId: "E18Qv2bTkRU",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
          A Base de Todo o Software Eficiente
        </h2>
        <p class="text-lg leading-relaxed">
          Um algoritmo só é tão bom quanto a estrutura de dados que o suporta. Escolher a estrutura errada pode transformar um sistema rápido num pesadelo de performance. As estruturas de dados são a arte de organizar informação para acesso e modificação eficientes.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Estruturas Lineares</h3>
        
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-card p-5 rounded-xl border border-primary/20 hover:border-primary/50 transition-all">
            <h4 class="font-bold text-primary mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
              Arrays (Vetores)
            </h4>
            <ul class="text-xs space-y-1 text-muted-foreground">
              <li>• Acesso O(1) por índice</li>
              <li>• Tamanho fixo (estático) ou dinâmico</li>
              <li>• Memória contígua → cache-friendly</li>
              <li>• Inserção/remoção no meio: O(n)</li>
            </ul>
          </div>
          <div class="bg-card p-5 rounded-xl border border-accent/20 hover:border-accent/50 transition-all">
            <h4 class="font-bold text-accent mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M21 15v2a4 4 0 0 1-4 4h-2"/></svg>
              Listas Ligadas
            </h4>
            <ul class="text-xs space-y-1 text-muted-foreground">
              <li>• Cada nó aponta para o próximo</li>
              <li>• Inserção/remoção: O(1) se tens o nó</li>
              <li>• Acesso por índice: O(n)</li>
              <li>• Memória não contígua (pior cache)</li>
            </ul>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-card p-5 rounded-xl border border-green-500/20">
            <h4 class="font-bold text-green-400 mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
              Pilha (Stack) - LIFO
            </h4>
            <p class="text-xs">Last In, First Out. Como uma pilha de pratos.</p>
            <p class="text-xs font-code mt-1">push(), pop(), peek() → O(1)</p>
          </div>
          <div class="bg-card p-5 rounded-xl border border-yellow-500/20">
            <h4 class="font-bold text-yellow-400 mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="8 8 12 12 16 8"/></svg>
              Fila (Queue) - FIFO
            </h4>
            <p class="text-xs">First In, First Out. Como uma fila de banco.</p>
            <p class="text-xs font-code mt-1">enqueue(), dequeue() → O(1)</p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">2. Tabelas Hash (Dicionários/Mapas)</h3>
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20">
          <p class="text-sm mb-4">A estrutura mais usada em entrevistas e sistemas reais. Permite busca, inserção e remoção em <strong>O(1) médio</strong>.</p>
          <div class="bg-black/40 p-4 rounded font-code text-xs">
            <p>Chave → [Hash Function] → Índice no array</p>
            <p class="text-yellow-400 mt-2">Colisões resolvidas com:</p>
            <p>• Chaining (listas ligadas no mesmo bucket)</p>
            <p>• Open Addressing (procura próxima posição livre)</p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">3. Árvores</h3>
        <div class="space-y-3">
          <p><strong class="text-blue-400">Árvore Binária de Busca (BST):</strong> Esquerda < Raiz < Direita. O(log n) balanceada, O(n) desbalanceada.</p>
          <p><strong class="text-green-400">AVL / Red-Black:</strong> Árvores auto-balanceadas. Garantem O(log n) em todas as operações.</p>
          <p><strong class="text-purple-400">Heap (Min/Max):</strong> Árvore binária completa. Raiz é sempre o menor/maior. O(1) para ver o topo, O(log n) para inserir/remover.</p>
          <p><strong class="text-yellow-400">Trie (Árvore de Prefixos):</strong> Ideal para autocomplete e dicionários. Busca por prefixo em O(k).</p>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">4. Grafos</h3>
        <p>Representam conexões entre entidades. Representados por <strong>matriz de adjacência</strong> ou <strong>lista de adjacência</strong>.</p>
        <ul class="text-xs space-y-1 mt-2">
          <li>• <strong>BFS (Breadth-First Search):</strong> Explora nível a nível. Usa fila.</li>
          <li>• <strong>DFS (Depth-First Search):</strong> Explora em profundidade. Usa pilha/recursão.</li>
          <li>• <strong>Dijkstra:</strong> Caminho mais curto com pesos positivos. O(E log V).</li>
        </ul>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            Complexidade Resumo
          </h4>
          <div class="overflow-x-auto"><table class="w-full text-xs"><thead><tr class="border-b border-gray-700 text-gray-400"><th class="p-2 text-left">Estrutura</th><th class="p-2">Acesso</th><th class="p-2">Busca</th><th class="p-2">Inserção</th><th class="p-2">Remoção</th></tr></thead><tbody>
            <tr class="border-b border-gray-700/50"><td class="p-2">Array</td><td class="p-2 text-green-400">O(1)</td><td class="p-2">O(n)</td><td class="p-2">O(n)</td><td class="p-2">O(n)</td></tr>
            <tr class="border-b border-gray-700/50"><td class="p-2">Lista Ligada</td><td class="p-2">O(n)</td><td class="p-2">O(n)</td><td class="p-2 text-green-400">O(1)</td><td class="p-2 text-green-400">O(1)</td></tr>
            <tr class="border-b border-gray-700/50"><td class="p-2">Hash Table</td><td class="p-2">-</td><td class="p-2 text-green-400">O(1)</td><td class="p-2 text-green-400">O(1)</td><td class="p-2 text-green-400">O(1)</td></tr>
            <tr class="border-b border-gray-700/50"><td class="p-2">BST (balanceada)</td><td class="p-2">O(log n)</td><td class="p-2">O(log n)</td><td class="p-2">O(log n)</td><td class="p-2">O(log n)</td></tr>
            <tr><td class="p-2">Heap</td><td class="p-2 text-green-400">O(1)</td><td class="p-2">O(n)</td><td class="p-2">O(log n)</td><td class="p-2">O(log n)</td></tr></tbody></table></div>
        </div>
      </div>
    </div>
  `,
  quizId: "cs-q22"
};