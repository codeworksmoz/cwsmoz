import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "webadv-t13-restful-api-design",
    title: "Design de APIs RESTful: Boas Práticas",
    youtubeVideoId: "Q-BpqyOT3a8",
    content: `
        <h2>Construindo APIs Intuitivas e Previsíveis</h2>
        <p>REST (Representational State Transfer) é um estilo arquitetural para projetar aplicações em rede. Uma API RESTful segue esses princípios para ser consistente e fácil de usar.</p>

        <h3>Boas Práticas Essenciais:</h3>
        <ul>
            <li><strong>Use Substantivos, Não Verbos, nas URIs:</strong> As URIs devem identificar recursos. Use os métodos HTTP para especificar a ação.
                <ul>
                    <li>✅ Bom: <code>GET /usuarios/123</code></li>
                    <li>❌ Ruim: <code>GET /getUsuario?id=123</code></li>
                </ul>
            </li>
            <li><strong>Use os Métodos HTTP Corretos:</strong>
                <ul>
                    <li><code>GET</code>: Para buscar recursos.</li>
                    <li><code>POST</code>: Para criar um novo recurso.</li>
                    <li><code>PUT</code>: Para atualizar/substituir um recurso completamente.</li>
                    <li><code>PATCH</code>: Para atualizar parcialmente um recurso.</li>
                    <li><code>DELETE</code>: Para remover um recurso.</li>
                </ul>
            </li>
             <li><strong>Use Plurais para Nomes de Recursos:</strong> Representa uma coleção de recursos. Ex: <code>/usuarios</code>, <code>/produtos</code>.</li>
            <li><strong>Use os Códigos de Status HTTP Corretamente:</strong> Comunique o resultado da requisição de forma padronizada (ex: 200 OK, 201 Created, 400 Bad Request, 404 Not Found, 500 Internal Server Error).</li>
        </ul>

        <h3>Versionamento</h3>
        <p>Quando você precisa fazer alterações que quebram a compatibilidade da sua API, você precisa versioná-la. A abordagem mais comum é incluir a versão na URI.</p>
        <pre><code>https://api.exemplo.com/v1/produtos
https://api.exemplo.com/v2/produtos</code></pre>

        <h3>Documentação</h3>
        <p>Uma API é tão boa quanto sua documentação. Ferramentas como <strong>Swagger (OpenAPI)</strong> e <strong>Postman</strong> são padrões da indústria para gerar documentação interativa e testável, facilitando a vida de quem vai consumir sua API.</p>
    `
};
