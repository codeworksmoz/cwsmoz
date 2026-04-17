import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'qa-mock-api',
    title: 'Mocking: Chamadas de API',
    statement: 'Escreva um teste unitário para uma função que busca dados de uma API usando `fetch`. Use `jest.fn()` para mockar o `fetch` global e simular uma resposta de sucesso da API.',
    template: `// Use uma sintaxe de teste como Jest
// Assuma que a função a ser testada é:
// async function buscarUsuario(userId) {
//   const response = await fetch(\`https://api.exemplo.com/users/\${userId}\`);
//   return await response.json();
// }

// describe('buscarUsuario', () => {
//   it('deve chamar fetch com a URL correta e retornar os dados', async () => {
//     // Arrange: Crie o mock do fetch
//     global.fetch = jest.fn(() =>
//       Promise.resolve({
//         json: () => Promise.resolve({ id: '123', nome: 'John Doe' }),
//       })
//     );
//
//     // Act: Chame a função
//
//     // Assert: Verifique se fetch foi chamado e se o resultado está correto
//   });
// });

// Escreva seu teste abaixo:
`,
    youtubeVideoId: 'T2sv8jXoP4s',
    detailedExplanation: `
        <h2>Isolando seu Código de APIs Externas</h2>
        <p>Testes unitários devem ser rápidos e não depender de serviços de rede. Mockar a função <code>fetch</code> nos dá controle total sobre a resposta da API durante o teste.</p>
        <h3>Passo a Passo com Jest</h3>
        <ol>
            <li><strong>Arrange:</strong> Antes de cada teste, sobrescreva a função <code>global.fetch</code> com <code>jest.fn()</code>. Faça com que a função mockada retorne uma Promise que resolve para um objeto que simula a resposta da API, incluindo um método <code>.json()</code> que também retorna uma Promise com os dados que você quer testar.</li>
            <li><strong>Act:</strong> Chame a sua função <code>buscarUsuario</code> com <code>await</code>.</li>
            <li><strong>Assert:</strong>
                <ul>
                    <li>Verifique se o valor retornado pela sua função é o que você espera (os dados do mock).</li>
                    <li>Use <code>expect(global.fetch).toHaveBeenCalledWith(...)</code> para garantir que sua função chamou a API com a URL e os parâmetros corretos.</li>
                </ul>
            </li>
        </ol>
    `
};
