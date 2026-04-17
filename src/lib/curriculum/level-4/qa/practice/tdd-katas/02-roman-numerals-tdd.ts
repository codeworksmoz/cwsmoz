import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'qa-tdd-roman',
    title: 'TDD Kata: Converso de Numerais Romanos',
    statement: 'Usando o ciclo TDD (Red-Green-Refactor), crie uma função que converte um número inteiro em seu equivalente em numerais romanos. Comece com o teste mais simples possível e adicione mais testes para cobrir os casos.',
    template: `// PASSO 1: RED
// Escreva um teste que falha.
// test('deve converter 1 para "I"', () => {
//   expect(toRoman(1)).toBe("I");
// });

// PASSO 2: GREEN
// Escreva o código mínimo para o teste passar.
// function toRoman(n) { return "I"; }

// PASSO 3: REFACTOR
// O código está limpo? Se não, refatore.

// Repita para o próximo caso...
// test('deve converter 2 para "II"', () => { ... });

// Escreva seus testes e sua função aqui:
`,
    youtubeVideoId: 'uG4_GBwS2IU',
    detailedExplanation: `
        <h2>Construindo um Algoritmo com TDD</h2>
        <p>Este é um exercício clássico para praticar TDD. A chave é dar passos de bebê, escrevendo um novo teste para cada pequena peça de nova funcionalidade.</p>
        <h3>Ciclo Sugerido</h3>
        <ol>
            <li><strong>Teste para 1:</strong> Escreva o teste <code>expect(toRoman(1)).toBe("I")</code>. Ele falhará.</li>
            <li><strong>Código para 1:</strong> Faça o teste passar com <code>function toRoman(n) { return "I"; }</code>.</li>
            <li><strong>Teste para 2:</strong> Escreva o teste <code>expect(toRoman(2)).toBe("II")</code>. Ele falhará.</li>
            <li><strong>Código para 2 e 3:</strong> Generalize o código com um loop simples.</li>
            <li><strong>Teste para 4:</strong> Escreva o teste <code>expect(toRoman(4)).toBe("IV")</code>. Ele falhará. Agora as coisas ficam interessantes. Você precisará introduzir uma nova lógica.</li>
            <li><strong>Teste para 5:</strong> Adicione o teste para <code>"V"</code>.</li>
            <li>Continue este processo, adicionando testes para 9 (IX), 10 (X), 40 (XL), 50 (L), etc., refatorando sua lógica a cada passo.</li>
        </ol>
    `
};
