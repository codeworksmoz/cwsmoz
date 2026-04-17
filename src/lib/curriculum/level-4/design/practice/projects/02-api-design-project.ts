import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'sd-proj-api',
    title: 'Projeto: Design de uma API RESTful',
    statement: 'Projete os endpoints de uma API RESTful para um sistema simples de gerenciamento de blog. Descreva os recursos, as URIs e os métodos HTTP para as operações CRUD (Create, Read, Update, Delete) de Posts e Comentários.',
    template: `// Sistema de Gerenciamento de Blog

// --- Recurso: Posts ---

// 1. Listar todos os posts
//    - Método HTTP: GET
//    - URI: ...

// 2. Criar um novo post
//    - Método HTTP: POST
//    - URI: ...
//    - Corpo da Requisição (exemplo): { "titulo": "...", "conteudo": "..." }

// 3. Obter um único post
//    - Método HTTP: ...
//    - URI: ...

// 4. Atualizar um post
//    - Método HTTP: ...
//    - URI: ...

// 5. Deletar um post
//    - Método HTTP: ...
//    - URI: ...


// --- Recurso: Comentários (aninhados sob posts) ---

// 6. Listar todos os comentários de um post específico
//    - Método HTTP: ...
//    - URI: ...

// 7. Adicionar um comentário a um post
//    - Método HTTP: ...
//    - URI: ...
`,
    youtubeVideoId: 'Q-BpqyOT3a8',
    detailedExplanation: `
        <h2>Projetando APIs Intuitivas</h2>
        <p>Um bom design de API RESTful segue convenções que a tornam previsível e fácil de usar para os desenvolvedores que irão consumi-la.</p>
        <h3>Princípios a Seguir</h3>
        <ol>
            <li><strong>Use substantivos no plural para os recursos:</strong> <code>/posts</code>, <code>/comentarios</code>.</li>
            <li><strong>Use os métodos HTTP corretos para cada ação:</strong> <code>GET</code> para ler, <code>POST</code> para criar, <code>PUT</code>/<code>PATCH</code> para atualizar, <code>DELETE</code> para remover.</li>
            <li><strong>Use parâmetros de rota para identificar recursos específicos:</strong> <code>/posts/{id}</code> para um post específico.</li>
            <li><strong>Aninhe recursos quando houver uma relação clara:</strong> Comentários pertencem a um post, então a URI para os comentários de um post pode ser <code>/posts/{postId}/comentarios</code>.</li>
        </ol>
        <p>Complete o template com os métodos e URIs corretos para cada operação descrita, seguindo as melhores práticas RESTful.</p>
    `
};
