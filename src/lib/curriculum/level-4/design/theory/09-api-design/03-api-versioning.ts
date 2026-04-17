import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-api-versioning",
    title: "Design de API: Versionamento",
    content: `
        <h2>Lidando com Mudanças Inevitáveis</h2>
        <p>À medida que sua aplicação evolui, sua API também precisará evoluir. Algumas mudanças podem ser "breaking changes", ou seja, elas quebram a compatibilidade com os clientes existentes. O versionamento de API é a prática de gerenciar essas mudanças.</p>
        
        <h3>Estratégias de Versionamento para APIs REST:</h3>
        <ul>
            <li>
                <strong>Versionamento na URI (URL Versioning):</strong> A abordagem mais comum e clara. A versão da API faz parte da URL.
                <pre><code>/api/v1/usuarios</code></pre>
            </li>
            <li>
                <strong>Versionamento no Cabeçalho (Header Versioning):</strong> A versão é especificada em um cabeçalho HTTP customizado (ex: <code>Accept: application/vnd.company.v1+json</code>). É tecnicamente mais "puro", mas menos visível e mais difícil de usar para os clientes.
            </li>
        </ul>

        <h3>Versionamento em GraphQL:</h3>
        <p>A recomendação oficial do GraphQL é <strong>evitar o versionamento</strong> sempre que possível. A filosofia é ter uma única API que evolui continuamente. Isso é possível graças a algumas características do GraphQL:</p>
        <ul>
            <li><strong>Adicionar Novos Campos:</strong> Adicionar novos campos a um tipo não quebra os clientes existentes.</li>
            <li><strong>Depreciação (Deprecation):</strong> Em vez de remover um campo, você pode marcá-lo como <code>@deprecated</code>. Isso sinaliza aos clientes que o campo será removido no futuro, dando-lhes tempo para migrar, mas mantém a funcionalidade por enquanto.</li>
        </ul>
        <pre><code class="language-graphql">type Produto {
  nome: String!
  preco: Float!
  precoEmCentavos: Int! @deprecated(reason: "Use o campo 'preco' que agora é um Float.")
}
</code></pre>
        <p>A ideia é que uma API GraphQL bem projetada possa evoluir por anos sem nunca introduzir uma "breaking change" que necessite de um ponto de versão como <code>/v2</code>.</p>
    `
};
