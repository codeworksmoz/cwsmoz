
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "alg-t6",
  title: "Quick Sort: Otimização de Pivô e Particionamento",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">⚡ O Velocista do Mundo Real</h2>
        <p class="text-lg leading-relaxed">
          O <strong>Quick Sort</strong> é, na prática, o algoritmo de ordenação mais utilizado (ex: <code>Array.sort()</code> em muitas linguagens). Embora o seu pior caso seja O(n²), a sua média é O(n log n) e ele é extremamente eficiente em uso de memória (In-place).
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">O Conceito de Pivô</h3>
        <p class="text-sm">Escolhemos um elemento da lista chamado <strong>Pivô</strong>. Reorganizamos a lista de forma que todos os menores fiquem à esquerda e os maiores à direita. Depois, repetimos o processo para as duas metades.</p>
        
        <h3 class="text-xl font-bold font-headline text-accent">Estratégias de Escolha:</h3>
        <ul class="grid md:grid-cols-2 gap-4">
          <li class="p-3 bg-card border rounded-xl"><strong>Primeiro/Último:</strong> Simples, mas perigoso se a lista já estiver ordenada.</li>
          <li class="p-3 bg-card border rounded-xl"><strong>Aleatório:</strong> Garante boa performance na maioria dos casos.</li>
          <li class="p-3 bg-card border rounded-xl"><strong>Mediana de Três:</strong> Escolha de elite para evitar o pior caso O(n²).</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "alg-q6"
};
