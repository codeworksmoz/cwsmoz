import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-api-graphql-schema",
    title: "Design de API: Schema GraphQL",
    content: `
        <h2>Modelando seu Domínio para Flexibilidade</h2>
        <p>Em GraphQL, o design do schema é a etapa mais crucial. Um bom schema é intuitivo, flexível e evolui bem ao longo do tempo. Ele atua como um contrato forte entre o cliente e o servidor.</p>

        <h3>Princípios do Design de Schema:</h3>
        <ol>
            <li>
                <strong>Pense em Grafos, não em Endpoints:</strong> Em vez de pensar em endpoints (como em REST), pense nos seus dados como um grafo de objetos interconectados. Como as entidades (<code>Usuário</code>, <code>Post</code>, <code>Comentário</code>) se relacionam?
            </li>
            <li>
                <strong>Foque nas Necessidades do Cliente:</strong> Projete o schema do ponto de vista do cliente frontend. Quais dados as telas da sua UI precisam? Facilite para o cliente buscar todos os dados de que precisa para uma tela em uma única requisição.
            </li>
            <li>
                <strong>Use Nomes Claros e Previsíveis:</strong> Os nomes de tipos, campos e argumentos devem ser autoexplicativos. Evite abreviações.
            </li>
            <li>
                <strong>Cuidado com a Nulabilidade:</strong> Em GraphQL, os campos são nulos (nullable) por padrão. Use o modificador <code>!</code> para marcar campos que você pode garantir que sempre retornarão um valor. Isso fornece garantias de segurança de tipo para o cliente.
            </li>
            <li>
                <strong>Pense na Evolução:</strong> É mais fácil adicionar novos campos a um schema do que remover ou modificar os existentes. Tente evitar "breaking changes". Adicione novos campos em vez de alterar os antigos e use a diretiva <code>@deprecated</code> para marcar campos que serão removidos no futuro.
            </li>
        </ol>
        <p>Um schema bem projetado é a base para uma API GraphQL robusta e agradável de usar.</p>
    `
};
