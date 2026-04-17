import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "webadv-t14-graphql-fundamentals",
    title: "Fundamentos de GraphQL: Schema, Queries e Mutations",
    youtubeVideoId: "ed82W_CUE-M",
    content: `
        <h2>Uma Alternativa Flexível ao REST</h2>
        <p>GraphQL é uma linguagem de consulta para APIs e um tempo de execução para atender a essas consultas com seus dados existentes. Ele permite que os clientes peçam exatamente os dados de que precisam, e nada mais.</p>
        
        <h3>O Schema Definition Language (SDL)</h3>
        <p>O coração de uma API GraphQL é o seu <strong>schema</strong>, que define os tipos de dados que podem ser consultados. Ele atua como um contrato entre o cliente e o servidor.</p>
        <pre><code class="language-graphql">type Livro {
  id: ID!
  titulo: String!
  autor: Autor
}

type Autor {
  id: ID!
  nome: String!
  livros: [Livro]
}

type Query {
  livros: [Livro]
  livro(id: ID!): Livro
}
        </code></pre>
        
        <h3>Queries: Buscando Dados</h3>
        <p>Clientes buscam dados enviando uma <strong>query</strong> que tem a mesma "forma" dos dados que eles querem de volta. Isso evita o problema de <em>over-fetching</em> (receber mais dados do que o necessário) e <em>under-fetching</em> (ter que fazer múltiplas requisições) comuns em REST.</p>
        <pre><code class="language-graphql">query {
  livro(id: "1") {
    titulo
    autor {
      nome
    }
  }
}
        </code></pre>

        <h3>Mutations: Modificando Dados</h3>
        <p>Para qualquer modificação de dados (criar, atualizar, deletar), o GraphQL usa <strong>Mutations</strong>. Elas são definidas no schema e funcionam de forma semelhante às queries, mas indicam uma operação de escrita.</p>
        <pre><code class="language-graphql">mutation {
  criarLivro(titulo: "Novo Livro", autorId: "2") {
    id
    titulo
  }
}
        </code></pre>
    `
};
