
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "alg-t3",
  title: "Ordenação Básica: Bubble e Selection Sort",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🧱 Fundamentos da Organização</h2>
        <p class="text-lg leading-relaxed">
          Embora existam algoritmos mais rápidos, entender a ordenação básica é vital para dominar a lógica de <strong>swapping</strong> (troca) e iteração aninhada. Ambos têm complexidade <strong>O(n²)</strong>.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Bubble Sort (Ordenação por Bolha)</h3>
        <p class="text-sm">Funciona percorrendo a lista várias vezes. Em cada volta, o maior elemento "flutua" para o fim da lista, como uma bolha de ar na água.</p>
        <div class="bg-black/40 p-4 rounded-xl border font-code text-xs text-accent">
          Se (atual > proximo) { trocar(atual, proximo) }
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. Selection Sort (Ordenação por Seleção)</h3>
        <p class="text-sm">Mais intuitivo: tu procuras o menor valor da lista inteira e "trocas" com a primeira posição. Depois procuras o segundo menor e trocas com a segunda posição.</p>
        
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h4 class="font-bold text-indigo-400 mb-2">📊 Comparação Master</h4>
          <ul class="space-y-2 text-xs">
            <li><strong>Bubble:</strong> Muitas trocas de memória. Ineficiente, mas estável.</li>
            <li><strong>Selection:</strong> Poucas trocas (no máximo N trocas), mas sempre percorre a lista toda.</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  quizId: "alg-q3"
};
