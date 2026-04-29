import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "ds-t17",
  title: "LRU Cache: A União de Hash Maps e Listas Ligadas",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🧠 Esquecimento Inteligente</h2>
        <p class="text-lg leading-relaxed">
          A **LRU (Least Recently Used)** é a política de cache mais eficiente para a maioria dos sistemas. Para implementá-la com performance O(1), precisamos de combinar duas estruturas de dados.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-4">
        <div class="p-4 bg-card border rounded-xl border-white/5">
          <h4 class="font-bold text-accent mb-1">Hash Map</h4>
          <p class="text-xs">Para busca instantânea do dado na memória.</p>
        </div>
        <div class="p-4 bg-card border rounded-xl border-white/5">
          <h4 class="font-bold text-accent mb-1">Doubly Linked List</h4>
          <p class="text-xs">Para manter a ordem de uso e permitir mover itens para o "topo" em O(1).</p>
        </div>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-bold font-headline text-primary">A Lógica do Expulsor</h3>
        <p class="text-sm">Quando a cache enche, o item no fim da lista (o menos usado) é removido tanto da lista como do Hash Map, libertando espaço para o novo dado.</p>
      </div>
    </div>
  `,
  quizId: "ds-mq17"
};
