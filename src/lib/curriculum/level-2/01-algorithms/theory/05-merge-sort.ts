
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "alg-t5",
  title: "Merge Sort: A Eficiência do O(n log n)",
  content: `
    <div class="space-y-8">
      <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-indigo-400">⚔️ Dividir para Conquistar</h2>
        <p class="text-lg leading-relaxed">
          O <strong>Merge Sort</strong> é o primeiro algoritmo de performance industrial que estudamos. Ele utiliza recursão para dividir a lista até que cada pedaço tenha apenas 1 elemento, e depois junta-os (merge) de forma ordenada.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">O Processo de Merge</h3>
        <p class="text-sm">A "mágica" acontece na junção. Como as duas metades que estamos a juntar já estão ordenadas, a união é feita em tempo linear, resultando numa complexidade total de <strong>O(n log n)</strong>.</p>
        
        <div class="bg-black/40 p-5 rounded-xl border font-code text-xs text-accent space-y-2">
          <p>1. Dividir a lista ao meio.</p>
          <p>2. Ordenar a metade esquerda recursivamente.</p>
          <p>3. Ordenar a metade direita recursivamente.</p>
          <p>4. <b>Intercalar</b> (Merge) as duas metades comparando os ponteiros.</p>
        </div>

        <div class="bg-red-500/5 p-5 rounded-xl border border-red-500/20 mt-6">
          <h4 class="font-bold text-red-400 mb-1">⚠️ Custo de Memória:</h4>
          <p class="text-xs">Ao contrário do Bubble Sort, o Merge Sort precisa de <strong>espaço extra</strong> (O(n)) para realizar a intercalação. É um tradeoff: trocamos memória por velocidade absurda.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "alg-q5"
};
