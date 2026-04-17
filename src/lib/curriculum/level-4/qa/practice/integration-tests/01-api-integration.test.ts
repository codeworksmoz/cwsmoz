import type { PracticeExercise } from '../../../../../types';

export const exercise: PracticeExercise = {
    id: 'qa-int-api',
    title: 'Teste de Integração: API',
    statement: 'Usando o Supertest e o Jest, escreva um teste de integração para um endpoint de API RESTful. Teste um endpoint `GET /usuarios` que deve retornar um status 200 e um array de usuários.',
    template: `// Use uma sintaxe de teste como Jest e Supertest
// Assuma que 'app' é a sua instância do Express.

// import request from 'supertest';
// import app from '../app';

// describe('GET /usuarios', () => {
//   it('deve responder com um status 200 e um array', async () => {
//     const response = await request(app)
//       .get('/usuarios')
//       .expect('Content-Type', /json/)
//       .expect(200);
//
//     expect(response.body).toBeInstanceOf(Array);
//   });
// });

// Escreva seu teste abaixo:
`,
    youtubeVideoId: 'Bsk-_i_1W-Y',
    detailedExplanation: `
        <h2>Testando sua API de Ponta a Ponta</h2>
        <p>Este teste de integração verifica se o seu servidor HTTP, as rotas e os controladores (ou handlers) estão funcionando juntos corretamente. Ele faz uma requisição HTTP real à sua aplicação em execução (em um ambiente de teste).</p>
        <h3>Passo a Passo com Supertest</h3>
        <ol>
            <li><strong>Importar:</strong> Importe o <code>request</code> do supertest e a instância do seu app Express.</li>
            <li><strong>Fazer a Requisição:</strong> Use <code>request(app).get('/usuarios')</code> para iniciar uma requisição GET. Supertest cuida de iniciar e fechar o servidor para você.</li>
            <li><strong>Encadear Asserções:</strong> O Supertest permite encadear asserções sobre a resposta HTTP. <code>.expect(200)</code> verifica se o código de status é 200. <code>.expect('Content-Type', /json/)</code> verifica se o cabeçalho Content-Type contém a string 'json'.</li>
            <li><strong>Verificar o Corpo (Body):</strong> Após o <code>await</code>, a resposta completa está disponível. Você pode então usar as asserções do Jest (<code>expect()</code>) para verificar o conteúdo do corpo da resposta.</li>
        </ol>
    `
};
