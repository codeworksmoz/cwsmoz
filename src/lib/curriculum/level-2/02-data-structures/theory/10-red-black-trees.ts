import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "ds-t10",
  title: "Red-Black Trees: O Padrão Ouro de Bibliotecas",
  content: `
    <div class="space-y-8">
      <div class="bg-red-500/10 p-6 rounded-2xl border border-red-500/20 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-red-400">🔴⚫ Cores e Balanceamento Flexível</h2>
        <p class="text-lg leading-relaxed">
          Red-Black Trees são o motor por trás de <code>std::map</code> em C++ e <code>TreeMap</code> em Java. Elas são menos rígidas que as AVLs, resultando em <strong>inserções mais rápidas</strong> mantendo um bom tempo de busca.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">As 5 Regras da Consistência</h3>
        <ul class="space-y-3 text-xs">
          <li>1. Cada nó é vermelho ou preto.</li>
          <li>2. A raiz é sempre PRETA.</li>
          <li>3. Todas as folhas (NIL) são PRETAS.</li>
          <li>4. Um nó vermelho não pode ter filhos vermelhos (No double-red).</li>
          <li>5. Todos os caminhos de um nó até às folhas têm o mesmo número de nós pretos (Black-Height).</li>
        </ul>

        <h3 class="text-xl font-bold font-headline text-primary">Rebalanceamento: Recolor vs Rotate</h3>
        <p class="text-sm">Diferente das AVLs, as Red-Black Trees muitas vezes resolvem o desequilíbrio apenas <strong>mudando as cores</strong> dos nós vizinhos, o que é uma operação computacionalmente barata.</p>
      </div>
    </div>
  `,
  quizId: "ds-mq10"
};
