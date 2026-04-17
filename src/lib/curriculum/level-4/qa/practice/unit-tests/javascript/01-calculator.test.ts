import type { PracticeExercise } from '../../../../../types';

export const exercise: PracticeExercise = {
    id: 'qa-js-unit-calculator',
    title: 'Teste Unitário: Calculadora Simples',
    statement: 'Escreva testes unitários para uma função `soma(a, b)` simples. Cubra os casos de sucesso, números negativos e casos de borda.',
    template: `// Use uma sintaxe de teste como Jest ou Vitest
// Função a ser testada:
// function soma(a, b) { return a + b; }

// describe('soma', () => {
//   it('deve somar dois números positivos', () => {
//     expect(soma(2, 3)).toBe(5);
//   });
//
//   it('deve somar números negativos', () => {
//     // ...
//   });
//
//   it('deve somar com zero', () => {
//     // ...
//   });
// });

// Escreva seus testes abaixo:
`,
    youtubeVideoId: 'T2sv8jXoP4s',
    detailedExplanation: `
        <h2>Testando a Lógica Pura</h2>
        <p>Funções puras, como uma função de soma, são as mais fáceis de testar. Elas não têm efeitos colaterais e, para a mesma entrada, sempre produzem a mesma saída.</p>
        <h3>Passo a Passo</h3>
        <ol>
            <li><strong>Caminho Feliz:</strong> Comece com o caso mais simples e óbvio, somando dois números positivos.</li>
            <li><strong>Casos de Borda:</strong> Teste o que acontece com entradas "limite", como somar com zero.</li>
            <li><strong>Casos Negativos:</strong> Teste o comportamento com números negativos para garantir que a lógica se mantém.</li>
        </ol>
        <p>A estrutura <code>describe</code> agrupa testes relacionados, e cada <code>it</code> (ou <code>test</code>) define um cenário de teste específico com uma única asserção.</p>
    `
};
