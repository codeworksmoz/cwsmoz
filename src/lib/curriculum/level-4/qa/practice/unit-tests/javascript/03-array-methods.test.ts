import type { PracticeExercise } from '../../../../../types';

export const exercise: PracticeExercise = {
    id: 'qa-js-unit-array',
    title: 'Teste Unitário: Funções de Array',
    statement: 'Escreva testes unitários para uma função utilitária que usa métodos de array como `.map`, `.filter` e `.reduce`.',
    template: `// Use uma sintaxe de teste como Jest ou Vitest
// Função a ser testada:
// function processarNumeros(numeros) {
//   return numeros
//     .filter(n => n % 2 === 0)       // Filtra apenas os pares
//     .map(n => n * 2)                // Dobra cada um
//     .reduce((acc, curr) => acc + curr, 0); // Soma todos
// }

// describe('processarNumeros', () => {
//   it('deve retornar 0 para um array vazio', () => {
//     // ...
//   });
//
//   it('deve processar corretamente um array de números', () => {
//     // Arrange
//     // const entrada = [1, 2, 3, 4, 5, 6];
//     // Act
//     // ...
//     // Assert: O resultado deve ser (2*2) + (4*2) + (6*2) = 4 + 8 + 12 = 24
//   });
//
//   it('deve ignorar números ímpares', () => {
//     // ...
//   });
// });

// Escreva seus testes abaixo:
`,
    youtubeVideoId: 'T2sv8jXoP4s',
    detailedExplanation: `
        <h2>Testando a Lógica de Transformação de Dados</h2>
        <p>Funções que manipulam arrays são candidatas perfeitas para testes unitários. Elas são "puras" na maioria das vezes (para a mesma entrada, sempre produzem a mesma saída) e não têm efeitos colaterais.</p>
        <h3>Casos de Teste a Considerar</h3>
        <ol>
            <li><strong>Caso Base/Vazio:</strong> O que acontece se a função recebe um array vazio? Testar isso ajuda a prevenir erros <code>undefined</code>.</li>
            <li><strong>Caso Típico:</strong> Teste com uma entrada "normal" que usa todas as partes da lógica (filtra, mapeia e reduz). Calcule o resultado esperado manualmente para a sua asserção.</li>
            <li><strong>Casos de Borda (Edge Cases):</strong> O que acontece se o array só contém números ímpares? O resultado deve ser 0. E se contiver apenas números pares? Testar esses casos de borda aumenta a confiança na sua função.</li>
        </ol>
    `
};
