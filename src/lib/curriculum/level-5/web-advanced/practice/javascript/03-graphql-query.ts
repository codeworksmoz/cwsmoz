import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'webadv-ex-3', 
    title: 'GraphQL: Escrevendo uma Consulta', 
    statement: 'Dado um schema GraphQL para um blog, escreva uma query para buscar um post específico pelo seu ID, incluindo seu título, conteúdo e o nome de seu autor.', 
    template: `// Schema:
// type Post {
//   id: ID!
//   titulo: String!
//   conteudo: String!
//   autor: Autor!
// }
// type Autor {
//   id: ID!
//   nome: String!
// }
// type Query {
//   post(id: ID!): Post
// }

// Escreva sua query aqui:
query {
  // ...
}
`,
    youtubeVideoId: 'ed82W_CUE-M',
    detailedExplanation: `
        <h2>Pedindo Exatamente o que Você Precisa</h2>
        <p>A sintaxe do GraphQL é projetada para espelhar a forma dos dados que você quer de volta.</p>
        <h3>Passo a Passo</h3>
        <ol>
            <li><strong>Operação:</strong> Comece com a operação raiz que você quer executar, que é <code>post</code>.</li>
            <li><strong>Argumentos:</strong> Forneça o argumento necessário para a query <code>post</code>, que é o <code>id</code>. Ex: <code>post(id: "123")</code>.</li>
            <li><strong>Campos:</strong> Dentro das chaves <code>{}</code>, liste os campos do tipo <code>Post</code> que você quer receber. Você quer <code>titulo</code> e <code>conteudo</code>.</li>
            <li><strong>Campos Aninhados:</strong> Como você também quer o nome do autor, inclua o campo <code>autor</code>. Como <code>autor</code> é um objeto, você precisa especificar quais campos dele você quer. Adicione um novo bloco de chaves e peça pelo campo <code>nome</code>.</li>
        </ol>
    `
};
