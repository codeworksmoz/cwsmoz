import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "math-t8",
  title: "Permutações e Combinações: A Ordem dos Fatores",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🧩 Organizando Possibilidades</h2>
        <p class="text-lg leading-relaxed">
          Saber se a ordem importa é o que diferencia uma Permutação de uma Combinação. Na engenharia de software, isto dita o design de chaves de API, tokens e sorteios.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">1. Permutações (Ordem Importa)</h3>
        <p class="text-sm">Quantas formas de organizar n itens? P(n) = n!. Se escolhermos apenas k itens: P(n,k) = n! / (n-k)!.</p>

        <h3 class="text-xl font-bold font-headline">2. Combinações (Ordem NÃO Importa)</h3>
        <p class="text-sm">Quantos grupos de k itens podemos formar de um total n? C(n,k) = n! / (k! * (n-k)!). Este é o famoso <strong>Coeficiente Binomial</strong>.</p>
        
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">📐 Triângulo de Pascal e Teorema Binomial</h3>
          <p class="text-sm leading-relaxed">
            As combinações formam o Triângulo de Pascal, que é usado em algoritmos de probabilidade e para calcular o número de caminhos numa grelha (Grid paths).
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "math-q8"
};
