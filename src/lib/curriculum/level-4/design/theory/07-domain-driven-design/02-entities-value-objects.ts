import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-ddd-entities-vo",
    title: "DDD: Entidades e Objetos de Valor",
    content: `
        <h2>Os Blocos de Construção do Domínio</h2>
        <p>No DDD, os objetos do modelo de domínio são classificados em duas categorias principais:</p>
        
        <h3>Entidades (Entities)</h3>
        <p>Uma entidade é um objeto definido não pelos seus atributos, mas pela sua <strong>identidade</strong> contínua e histórica. Pense em um <code>Cliente</code>. Mesmo que o nome ou endereço de um cliente mude, ele ainda é o mesmo cliente. As entidades têm um ID único que as distingue.</p>
        <ul>
            <li>Têm um ciclo de vida.</li>
            <li>São mutáveis (seus atributos podem mudar ao longo do tempo).</li>
            <li>A igualdade é baseada no ID.</li>
        </ul>

        <h3>Objetos de Valor (Value Objects)</h3>
        <p>Um objeto de valor é um objeto que representa um conceito descritivo do domínio. Sua identidade é definida por seus atributos. Pense em um <code>Endereço</code> ou uma <code>Cor</code>. Se você mudar a rua de um endereço, é um novo endereço, não o mesmo que foi modificado.</p>
        <ul>
            <li>São imutáveis. Uma vez criados, não devem ser alterados. Se uma mudança for necessária, você cria um novo objeto.</li>
            <li>A igualdade é baseada no valor de seus atributos (dois objetos de valor são iguais se todos os seus atributos forem iguais).</li>
            <li>Não têm um ID conceitual.</li>
        </ul>
        <p>Usar Objetos de Valor ajuda a tornar o modelo mais explícito e a evitar bugs relacionados a mutações inesperadas.</p>
    `
};
