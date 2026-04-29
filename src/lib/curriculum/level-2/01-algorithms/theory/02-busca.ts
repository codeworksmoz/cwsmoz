import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "alg-t2",
  title: "Busca Linear e Binária",
  content: `
    <div class="space-y-6">
      <div class="bg-accent/5 p-6 rounded-2xl border border-accent/10">
        <h2 class="text-2xl font-bold mb-4">🔍 Encontrando a Agulha no Palheiro</h2>
        <p>Existem duas formas principais de procurar um valor numa coleção.</p>
      </div>
      <div class="prose prose-invert max-w-none">
        <h3>1. Busca Linear O(n)</h3>
        <p>Verifica um por um, do início ao fim. Funciona em listas desordenadas.</p>
        <h3>2. Busca Binária O(log n)</h3>
        <p>Exige que a lista esteja <strong>ordenada</strong>. Divide a lista ao meio repetidamente até encontrar o valor. É extremamente rápida!</p>
      </div>
    </div>
  `,
  quizId: "alg-q2"
};
