
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "alg-t4",
  title: "Insertion Sort e o Conceito de Estabilidade",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🃏 Ordenando como Cartas</h2>
        <p class="text-lg leading-relaxed">
          O <strong>Insertion Sort</strong> constrói a lista ordenada um elemento de cada vez. É como organizar cartas na mão: tu pegas numa carta nova e "inseres" na posição correta entre as que já tens ordenadas.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">Vantagens de Elite</h3>
        <ul class="list-disc ml-6 space-y-2 text-sm">
          <li><strong>Adaptável:</strong> É ultra-rápido (O(n)) se a lista já estiver quase ordenada.</li>
          <li><strong>Online:</strong> Consegue ordenar dados à medida que eles chegam (streaming).</li>
          <li><strong>Estável:</strong> Preserva a ordem relativa de elementos com valores iguais.</li>
        </ul>

        <div class="bg-yellow-500/5 p-5 rounded-xl border border-yellow-500/20 mt-6">
          <h4 class="font-bold text-yellow-500 mb-2">💎 O que é Estabilidade?</h4>
          <p class="text-sm">Se tens dois "Joãos" na lista, um de 20 anos e outro de 30. Um algoritmo estável garante que se o João de 20 aparecia primeiro na lista original, ele continuará a aparecer primeiro após a ordenação por nome.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "alg-q4"
};
