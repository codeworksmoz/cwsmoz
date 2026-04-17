import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-api-documentation",
    title: "Design de API: Documentação",
    content: `
        <h2>Se não está documentado, não existe</h2>
        <p>Uma API, não importa quão bem projetada, é inútil se ninguém souber como usá-la. A documentação de API é uma parte crítica do produto da API.</p>
        
        <h3>OpenAPI (anteriormente Swagger)</h3>
        <p>Para APIs REST, a <strong>Especificação OpenAPI</strong> é o padrão da indústria. É uma especificação para descrever, produzir, consumir e visualizar APIs RESTful.</p>
        <p>Você descreve sua API em um arquivo YAML ou JSON, detalhando:</p>
        <ul>
            <li>Todos os endpoints disponíveis (ex: <code>/usuarios</code>).</li>
            <li>As operações HTTP para cada endpoint (<code>GET</code>, <code>POST</code>, etc.).</li>
            <li>Os parâmetros para cada operação.</li>
            <li>As respostas possíveis (códigos de status e schemas).</li>
            <li>Os modelos de dados (schemas).</li>
        </ul>
        <p>A partir desse arquivo de especificação, você pode gerar automaticamente uma documentação de API interativa e bonita usando ferramentas como <strong>Swagger UI</strong> ou <strong>Redoc</strong>. Isso permite que os desenvolvedores leiam a documentação e até mesmo testem as chamadas de API diretamente do navegador.</p>
        
        <h3>Documentação GraphQL</h3>
        <p>Uma das maiores vantagens do GraphQL é que ele é <strong>auto-documentado</strong>. O schema de uma API GraphQL serve como a fonte da verdade. Como ele é fortemente tipado, ele contém todas as informações sobre os tipos, campos, queries e mutations disponíveis.</p>
        <p>Ferramentas como o <strong>GraphiQL</strong> e o <strong>Apollo Studio Explorer</strong> usam a "introspecção" do schema para fornecer uma IDE no navegador, com documentação pesquisável, autocompletar e validação de queries em tempo real. Isso cria uma experiência de desenvolvimento fantástica para os consumidores da API.</p>
    `
};
