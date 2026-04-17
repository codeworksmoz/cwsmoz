import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'qa-mock-db',
    title: 'Mocking: Banco de Dados',
    statement: 'Escreva um teste unitário para um serviço que depende de um repositório de banco de dados. Use `jest.mock` para mockar o módulo do repositório e simular o retorno de dados, testando a lógica do serviço de forma isolada.',
    template: `// Use a sintaxe do Jest
// Assuma que você tem:
// - um módulo 'UserRepository' com um método 'findById'
// - um módulo 'UserService' que usa o UserRepository

// import UserService from './UserService';
// import UserRepository from './UserRepository';

// jest.mock('./UserRepository'); // Mocka o módulo inteiro

// describe('UserService', () => {
//   it('deve retornar os dados do usuário corretamente formatados', async () => {
//     // Arrange: Configure o mock para retornar um usuário específico
//     // UserRepository.findById.mockResolvedValue({ id: 1, nome: 'Ana' });
//
//     // Act: Chame o método do serviço
//
//     // Assert: Verifique se o serviço formatou os dados como esperado
//   });
// });

// Escreva seu teste abaixo:
`,
    youtubeVideoId: 'T2sv8jXoP4s',
    detailedExplanation: `
        <h2>Isolando a Lógica de Negócio da Persistência</h2>
        <p>Em um teste unitário de um serviço, não queremos testar o banco de dados. Queremos apenas testar a lógica do próprio serviço. Para isso, mockamos a camada de acesso a dados (repositório).</p>
        <h3>Passo a Passo com Jest</h3>
        <ol>
            <li><strong><code>jest.mock('./UserRepository')</code>:</strong> Esta linha no topo do arquivo substitui automaticamente todas as funções exportadas pelo módulo <code>UserRepository</code> por funções de mock.</li>
            <li><strong>Arrange:</strong> No seu teste, especifique o que a função mockada deve retornar. <code>UserRepository.findById.mockResolvedValue(...)</code> diz ao Jest que, quando <code>findById</code> for chamado, ele deve simular uma Promise que resolve com o objeto de usuário que você forneceu.</li>
            <li><strong>Act:</strong> Chame o método do seu serviço (ex: <code>UserService.getUserProfile(1)</code>). Internamente, ele chamará a versão mockada de <code>UserRepository.findById</code>.</li>
            <li><strong>Assert:</strong> Verifique se a lógica do seu serviço (que pode ser, por exemplo, formatar o nome do usuário para maiúsculas) funcionou corretamente com base nos dados mockados que você forneceu.</li>
        </ol>
    `
};
