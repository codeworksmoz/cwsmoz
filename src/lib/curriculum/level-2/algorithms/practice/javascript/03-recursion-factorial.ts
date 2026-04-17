import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'alg-js-recursion-factorial',
    title: 'Recursão: Fatorial',
    statement: 'Escreva uma função recursiva para calcular o fatorial de um número.',
    template: `function fatorial(n) {
  // Caso base: o que para a recursão?
  if (n === 0 || n === 1) {
    // Seu código aqui
  }

  // Caso recursivo: a função chama a si mesma
  // Seu código aqui
}`,
    youtubeVideoId: 'o_wD-030D-Y',
    detailedExplanation: `
        <h2>Recursão: Resolvendo um Problema em Termos de Si Mesmo</h2>
        <p>Fatorial (n!) é o produto de todos os inteiros positivos até n. A definição é inerentemente recursiva: <code>n! = n * (n-1)!</code>.</p>
        <h3>Passo a Passo</h3>
        <ol>
            <li><strong>Caso Base:</strong> A recursão precisa de uma condição de parada. O fatorial de 0 e 1 é 1. Se <code>n</code> for 0 ou 1, a função deve retornar <code>1</code>.</li>
            <li><strong>Caso Recursivo:</strong> Para qualquer outro <code>n</code>, a função deve retornar <code>n</code> multiplicado pelo resultado da chamada a si mesma com <code>n - 1</code>.</li>
        </ol>
    `,
    tests: [
        {
            description: "Deve calcular o fatorial de 5",
            code: "return fatorial(5) === 120;"
        },
        {
            description: "Deve retornar 1 para o fatorial de 1",
            code: "return fatorial(1) === 1;"
        },
        {
            description: "Deve retornar 1 para o fatorial de 0",
            code: "return fatorial(0) === 1;"
        }
    ]
};
