import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'qa-int-db',
    title: 'Teste de Integração: Banco de Dados',
    statement: 'Escreva um teste de integração para um método `UserRepository.findById` que interage com um banco de dados real (de teste). O teste deve inserir um usuário, buscá-lo e verificar se os dados estão corretos.',
    template: `// Use uma sintaxe de teste como Jest ou Vitest
// Assuma que você tem uma função para conectar e desconectar do banco
// e outra para limpar as tabelas entre os testes.

// describe('UserRepository', () => {
//   beforeAll(async () => { /* Conectar ao banco */ });
//   afterAll(async () => { /* Desconectar do banco */ });
//   beforeEach(async () => { /* Limpar a tabela de usuários */ });
//
//   it('deve encontrar um usuário pelo seu ID', async () => {
//     // Arrange: Insira um usuário de teste no banco
//
//     // Act: Chame o método a ser testado
//
//     // Assert: Verifique se o usuário retornado é o correto
//   });
// });

// Escreva seu teste abaixo:
`,
    youtubeVideoId: 'Bsk-_i_1W-Y',
    detailedExplanation: `
        <h2>Garantindo a Comunicação com o Banco de Dados</h2>
        <p>Este teste verifica se a camada de acesso a dados (repositório) consegue se comunicar corretamente com o banco, salvando e recuperando informações.</p>
        <h3>Passo a Passo</h3>
        <ol>
            <li><strong>Setup (before/after):</strong> Testes de integração com banco de dados precisam de setup. Use <code>beforeAll</code> para conectar ao banco, <code>afterAll</code> para desconectar e <code>beforeEach</code> para garantir que a tabela esteja limpa antes de cada teste.</li>
            <li><strong>Arrange:</strong> Insira diretamente no banco de dados (usando seu ORM ou cliente de banco) um usuário com dados conhecidos. Guarde o ID do usuário inserido.</li>
            <li><strong>Act:</strong> Chame o método que você está testando, como <code>userRepository.findById(userId)</code>.</li>
            <li><strong>Assert:</strong> Verifique se o objeto retornado pelo método não é nulo e se seus campos (nome, email, etc.) correspondem aos dados que você inseriu na etapa de "Arrange".</li>
        </ol>
    `
};
