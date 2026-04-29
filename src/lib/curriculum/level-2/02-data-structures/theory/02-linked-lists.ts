import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "ds-t2",
  title: "Linked Lists: Nós, Ponteiros e Fragmentação",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🔗 A Alternativa Dinâmica
        </h2>
        <p class="text-lg leading-relaxed">
          Diferente dos arrays, as **Listas Ligadas** não exigem um bloco contíguo de memória. Cada elemento (Nó) vive onde houver espaço e aponta para o endereço do próximo elemento.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Anatomia do Nó</h3>
        <p class="text-sm">Um nó é uma struct que contém o dado (payload) e um ponteiro (referência) para o próximo endereço de memória.</p>

        <h3 class="text-xl font-bold font-headline">2. Variantes Industriais</h3>
        <ul class="grid md:grid-cols-3 gap-4">
          <li class="p-4 bg-card border rounded-xl border-white/5">
            <strong class="text-accent block mb-1">Singly Linked:</strong> Ponteiro apenas para a frente. Memória eficiente.
          </li>
          <li class="p-4 bg-card border rounded-xl border-white/5">
            <strong class="text-accent block mb-1">Doubly Linked:</strong> Ponteiros para frente e trás. Permite remoção em O(1) e navegação reversa.
          </li>
          <li class="p-4 bg-card border rounded-xl border-white/5">
            <strong class="text-accent block mb-1">Circular:</strong> O último nó aponta para o primeiro. Ideal para buffers de som e Round Robin.
          </li>
        </ul>

        <div class="bg-red-500/5 p-6 rounded-2xl border border-red-500/20 mt-6 shadow-inner">
          <h4 class="font-bold text-red-400 mb-2 italic">⚠️ O Custo Oculto:</h4>
          <p class="text-sm leading-relaxed">
            Embora as listas ligadas tenham inserção rápida, elas são <strong>inimigas do cache do CPU</strong>. Como os nós estão espalhados na RAM, o processador não consegue fazer <i>prefetch</i> eficiente, resultando em muitos <i>Cache Misses</i> em comparação com Arrays.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "ds-mq2"
};
