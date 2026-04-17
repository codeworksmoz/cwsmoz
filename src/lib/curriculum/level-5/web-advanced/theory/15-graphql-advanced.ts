import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "webadv-t15-graphql-advanced",
    title: "GraphQL Avançado: Subscriptions e Federação",
    youtubeVideoId: "fm22E2q0CFc",
    content: `
        <h2>Escalando e Adicionando Tempo Real ao GraphQL</h2>

        <h3>Subscriptions: Dados em Tempo Real</h3>
        <p>Enquanto Queries e Mutations seguem um ciclo de requisição/resposta, <strong>Subscriptions</strong> são operações de longa duração que podem enviar múltiplos resultados ao longo do tempo. Elas mantêm uma conexão estável com o servidor (geralmente via WebSockets) e enviam dados para o cliente sempre que um evento específico ocorre no backend.</p>
        <p>Isso é perfeito para funcionalidades como chats ao vivo, notificações e dashboards que se atualizam em tempo real.</p>
        <pre><code class="language-graphql">subscription {
  novoComentario(postId: "123") {
    id
    conteudo
    autor
  }
}
        </code></pre>

        <h3>Apollo Federation: Unindo Microserviços</h3>
        <p>Em uma arquitetura de microserviços, você pode ter múltiplas APIs GraphQL separadas (uma para usuários, uma para produtos, etc.). Como o cliente consome isso como uma única API?</p>
        <p>A <strong>Federação Apollo</strong> é uma arquitetura poderosa que permite combinar múltiplos schemas de GraphQL (chamados de subgraphs) em um único supergraph. Uma camada de gateway inteligente recebe as queries dos clientes e as delega para os microserviços apropriados, unindo as respostas como se viessem de um único servidor.</p>
        <p>Isso permite que equipes trabalhem de forma independente em seus serviços, enquanto os consumidores da API têm uma experiência unificada e consistente.</p>

        <h3>Apollo Server</h3>
        <p><strong>Apollo Server</strong> é uma implementação popular de servidor GraphQL para Node.js que oferece um conjunto robusto de funcionalidades prontas para produção, incluindo suporte para Subscriptions, Federação, caching, e integração com frameworks como Express e Koa.</p>
    `
};
