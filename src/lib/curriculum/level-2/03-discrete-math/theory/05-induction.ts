import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "math-t5",
  title: "Indução Matemática e Recursão",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🪜 O Efeito Dominó</h2>
        <p class="text-lg leading-relaxed">
          A Indução Matemática é a ferramenta suprema para provar que um algoritmo recursivo está correto para qualquer entrada infinita de números naturais.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">O Processo de Prova</h3>
        <ul class="space-y-4">
          <li class="p-4 bg-card border rounded-xl">
            <strong class="text-accent block mb-1">Passo Base:</strong> Prove que a propriedade P(n) é verdadeira para n=1 (ou o menor valor do domínio).
          </li>
          <li class="p-4 bg-card border rounded-xl">
            <strong class="text-accent block mb-1">Hipótese de Indução:</strong> Assuma que P(k) é verdadeira para um valor k qualquer.
          </li>
          <li class="p-4 bg-card border rounded-xl">
            <strong class="text-accent block mb-1">Passo Indutivo:</strong> Prove que, se P(k) é verdade, então P(k+1) também deve ser.
          </li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🚀 Indução Forte</h3>
          <p class="text-sm leading-relaxed">
            Em problemas mais complexos (como fatoração em primos), a indução simples não basta. A <strong>Indução Forte</strong> assume que a propriedade é verdadeira para TODOS os valores menores que k, e não apenas o imediato anterior.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "math-q5"
};
