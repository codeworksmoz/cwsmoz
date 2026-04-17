import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-api-restful",
    title: "Design de API: Boas Práticas RESTful",
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
                    <li><code>GET</code>: Para buscar recursos. Deve ser seguro e idempotente.</li>
                    <li><code>POST</code>: Para criar um novo recurso. Não é idempotente.</li>
                    <li><code>PUT</code>: Para atualizar/substituir um recurso completamente. É idempotente.</li>
                    <li><code>PATCH</code>: Para atualizar parcialmente um recurso. Não é necessariamente idempotente.</li>
                    <li><code>DELETE</code>: Para remover um recurso. É idempotente.</li>
                </ul>
            </li>
             <li><strong>Use Plurais para Nomes de Recursos:</strong> Representa uma coleção de recursos. Ex: <code>/usuarios</code>, <code>/produtos</code>.</li>
            <li><strong>Use os Códigos de Status HTTP Corretamente:</strong> Comunique o resultado da requisição de forma padronizada (ex: 200 OK, 201 Created, 400 Bad Request, 404 Not Found, 500 Internal Server Error).</li>
            <li><strong>Suporte a Paginação, Ordenação e Filtragem para Coleções.</strong></li>
        </ul>
    `
};
