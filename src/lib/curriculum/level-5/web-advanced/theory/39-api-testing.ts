import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "webadv-t39-api-testing",
    title: "Testes de API: Postman e Supertest",
    youtubeVideoId: "z-kdcw-XBCw",
    content: `
        <h2>Garantindo a Confiabilidade do seu Backend</h2>
        <p>Testar a camada de API é crucial para garantir a estabilidade e a corretude da sua aplicação, independentemente do frontend que a consome.</p>

        <h3>Testes Manuais e Exploratórios com Postman</h3>
        <p><strong>Postman</strong> é uma plataforma de colaboração para desenvolvimento de APIs. É uma ferramenta gráfica que permite:</p>
        <ul>
            <li>Enviar requisições HTTP (GET, POST, PUT, etc.) para sua API e inspecionar a resposta (código de status, corpo, cabeçalhos).</li>
            <li>Organizar requisições em coleções para diferentes cenários.</li>
            <li>Automatizar testes simples escrevendo scripts de asserção em JavaScript.</li>
            <li>Gerar documentação da API a partir de uma coleção.</li>
        </ul>
        <p>É uma ferramenta indispensável para desenvolver e depurar APIs manualmente.</p>
        
        <h3>Testes de API Automatizados com Supertest</h3>
        <p>Para incluir testes de API no seu pipeline de CI/CD, você precisa de testes automatizados. <strong>Supertest</strong> é uma biblioteca Node.js que fornece uma abstração de alto nível para testar APIs HTTP. Ela é frequentemente usada com frameworks de teste como Jest ou Mocha.</p>
        <p>Supertest permite fazer requisições à sua aplicação Express/Node.js sem a necessidade de iniciar um servidor real em uma porta, tornando os testes mais rápidos e confiáveis.</p>

        <pre><code class="language-javascript">// Exemplo de teste de API com Jest e Supertest
const request = require('supertest');
const app = require('../sua-app-express'); // Importa sua instância do app

describe('GET /usuarios', () => {
  it('deve retornar uma lista de usuários', async () => {
    const response = await request(app)
      .get('/usuarios')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).toBeInstanceOf(Array);
  });
});
</code></pre>

        <h3>Testes de Contrato</h3>
        <p>É uma técnica que verifica se uma API adere a um "contrato" compartilhado (como uma especificação OpenAPI/Swagger). Isso garante que as mudanças feitas pelo time de backend não quebrem o frontend e vice-versa.</p>
    `
};
