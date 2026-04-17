import type { PracticeExercise } from '../../../../../types';

export const exercise: PracticeExercise = {
    id: 'qa-js-unit-string',
    title: 'Teste Unitário: Utilitários de String',
    statement: 'Escreva testes unitários para uma função `capitalizar(texto)` que torna a primeira letra de uma string maiúscula.',
    template: `// Use uma sintaxe de teste como Jest ou Vitest
// Função a ser testada:
// function capitalizar(texto) {
//   if (!texto) return '';
//   return texto.charAt(0).toUpperCase() + texto.slice(1);
// }

// describe('capitalizar', () => {
//   it('deve capitalizar a primeira letra de uma string', () => {
//     // Arrange
//     const entrada = "teste";
//     // Act
//     const saida = capitalizar(entrada);
//     // Assert
//     expect(saida).toBe("Teste");
//   });
//
//   it('deve retornar uma string vazia para entrada nula ou vazia', () => {
//      // ...
//   });
//
//   it('deve manter o resto da string como está', () => {
//      // ...
//   });
// });

// Escreva seus testes abaixo:
`,
    youtubeVideoId: 'T2sv8jXoP4s',
    detailedExplanation: `
        <h2>Verificando a Manipulação de Strings</h2>
        <p>Funções de manipulação de strings são outro ótimo exemplo para testes unitários. É importante testar não apenas o caso de sucesso, mas também como a função lida com entradas inesperadas ou de borda.</p>
        <h3>Casos de Teste a Considerar</h3>
        <ol>
            <li><strong>Caminho Feliz:</strong> Uma string simples em minúsculas deve ser capitalizada corretamente.</li>
            <li><strong>Entrada Vazia/Nula:</strong> Como a função se comporta com <code>""</code>, <code>null</code> ou <code>undefined</code>? Ela deve retornar uma string vazia ou lançar um erro? Testar isso torna sua função mais robusta.</li>
            <li><strong>Entrada Já Capitalizada:</strong> Se a função receber "Teste", ela deve retornar "Teste" sem erros.</li>
            <li><strong>String com Múltiplas Palavras:</strong> O teste deve verificar se apenas a primeira letra da string inteira é capitalizada, e não de cada palavra.</li>
        </ol>
    `
};
