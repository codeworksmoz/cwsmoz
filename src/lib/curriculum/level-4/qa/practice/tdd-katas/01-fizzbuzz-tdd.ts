import type { PracticeExercise } from '../../../../../types';

export const exercise: PracticeExercise = {
    id: 'qa-tdd-fizzbuzz',
    title: 'TDD Kata: FizzBuzz',
    statement: 'Usando o ciclo TDD (Red-Green-Refactor), implemente o jogo FizzBuzz. Para múltiplos de 3, retorne "Fizz". Para múltiplos de 5, retorne "Buzz". Para múltiplos de ambos, retorne "FizzBuzz". Caso contrário, retorne o número.',
    template: `// PASSO 1: RED
// Escreva um teste para o caso mais simples (ex: número 1).
// test('deve retornar 1 para a entrada 1', () => {
//   expect(fizzBuzz(1)).toBe(1);
// });

// PASSO 2: GREEN
// Escreva o código mínimo para o teste passar.
// function fizzBuzz(n) { return 1; }

// PASSO 3: REFACTOR
// O código está limpo?

// Repita para o próximo caso... "Fizz"
// test('deve retornar "Fizz" para a entrada 3', () => { ... });

// Escreva seus testes e sua função aqui:
`,
    youtubeVideoId: 'uG4_GBwS2IU',
    detailedExplanation: `
        <h2>Praticando o Ritmo do TDD</h2>
        <p>FizzBuzz é o "Olá, Mundo" dos exercícios de programação e é perfeito para praticar o ciclo Red-Green-Refactor do TDD.</p>
        <h3>Ciclo Sugerido</h3>
        <ol>
            <li><strong>Teste para 1:</strong> Escreva um teste que espera que <code>fizzBuzz(1)</code> retorne <code>1</code>. Ele falhará.</li>
            <li><strong>Código para 1:</strong> Faça o teste passar da forma mais simples: <code>function fizzBuzz(n) { return n; }</code>.</li>
            <li><strong>Teste para "Fizz":</strong> Escreva um teste que espera que <code>fizzBuzz(3)</code> retorne <code>"Fizz"</code>. Ele falhará.</li>
            <li><strong>Código para "Fizz":</strong> Adicione a lógica do <code>if (n % 3 === 0)</code>.</li>
            <li><strong>Teste para "Buzz":</strong> Escreva um teste para <code>fizzBuzz(5)</code>. Ele falhará.</li>
            <li><strong>Código para "Buzz":</strong> Adicione a lógica do <code>if (n % 5 === 0)</code>.</li>
            <li><strong>Teste para "FizzBuzz":</strong> Escreva um teste para <code>fizzBuzz(15)</code>. Ele provavelmente falhará com a lógica atual.</li>
            <li><strong>Refatoração:</strong> Agora refatore sua lógica condicional para lidar corretamente com o caso de "FizzBuzz" (lembre-se que <code>n % 15 === 0</code> é uma opção).</li>
        </ol>
    `
};
