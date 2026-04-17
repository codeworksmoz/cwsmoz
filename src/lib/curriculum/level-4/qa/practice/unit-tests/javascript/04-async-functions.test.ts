import type { PracticeExercise } from '../../../../../types';

export const exercise: PracticeExercise = {
    id: 'qa-js-unit-async',
    title: 'Teste Unitário: Funções Assíncronas',
    statement: 'Escreva um teste unitário para uma função assíncrona que busca dados de uma API. Use `async/await` e mocks para simular a chamada de API.',
    template: `// Use uma sintaxe de teste como Jest ou Vitest
// Assuma que a função a ser testada é:
// async function buscarUsuario(userId) {
//   const response = await fetch(\`https://api.exemplo.com/users/\${userId}\`);
//   return await response.json();
// }

// Mock global do fetch
// global.fetch = jest.fn();

// describe('buscarUsuario', () => {
//   it('deve buscar e retornar os dados do usuário', async () => {
//     // Arrange
//     // fetch.mockResolvedValueOnce({
//     //   json: async () => ({ id: 1, name: 'John Doe' }),
//     // });
//
//     // Act
//
//     // Assert
//   });
// });

// Escreva seu teste abaixo:
`,
    youtubeVideoId: 'T2sv8jXoP4s',
    detailedExplanation: `
        <h2>Testando Código Assíncrono</h2>
        <p>Para testar funções que retornam Promises, você precisa usar <code>async/await</code> em suas funções de teste para garantir que o teste espere a conclusão da Promise antes de fazer as asserções.</p>
        <h3>Passo a Passo com Jest</h3>
        <ol>
            <li><strong>Mock do Fetch:</strong> Como é um teste unitário, não queremos fazer uma chamada de rede real. Nós mockamos a função global <code>fetch</code>.</li>
            <li><strong>Arrange:</strong> Configure o que o <code>fetch</code> mockado deve retornar. <code>mockResolvedValueOnce</code> é usado para simular uma resposta de sucesso da API. Note que o objeto retornado também precisa simular o método <code>.json()</code>.</li>
            <li><strong>Act:</strong> Chame sua função assíncrona com <code>await</code> para esperar o resultado.</li>
            <li><strong>Assert:</strong> Verifique se a função retornou os dados que você configurou no mock. Além disso, verifique se <code>fetch</code> foi chamado com a URL correta.</li>
        </ol>
    `
};
