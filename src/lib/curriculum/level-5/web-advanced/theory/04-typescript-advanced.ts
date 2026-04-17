import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "webadv-t4-ts-advanced",
    title: "TypeScript Avançado: Generics, Decorators, Utility Types",
    youtubeVideoId: "dLPgQRbV34M",
    content: `
        <h2>Levando a Tipagem para o Próximo Nível</h2>
        <p>TypeScript oferece ferramentas poderosas para modelar tipos complexos e criar código mais robusto e reutilizável.</p>
        
        <h3>Generics</h3>
        <p>Generics permitem escrever componentes ou funções que podem funcionar com qualquer tipo, mantendo a segurança de tipo. Pense neles como variáveis para tipos.</p>
        <pre><code class="language-typescript">// Uma função genérica que recebe um argumento de qualquer tipo e o retorna
function identidade&lt;T&gt;(arg: T): T {
    return arg;
}

let saida1 = identidade&lt;string&gt;("meuTexto"); // tipo de 'saida1' é 'string'
let saida2 = identidade&lt;number&gt;(100);     // tipo de 'saida2' é 'number'
        </code></pre>
        
        <h3>Decorators</h3>
        <p>Decorators são uma forma de adicionar anotações e meta-programação a declarações de classe e membros. Eles usam o formato <code>@expressao</code>.</p>
        <pre><code class="language-typescript">@congelar
class MinhaClasse {
    @logarMetodo
    meuMetodo() { }
}
</code></pre>
        <p>São amplamente utilizados em frameworks como Angular e Nest.js para injetar dependências, modificar comportamento de classes, etc.</p>
        
        <h3>Utility Types (Tipos Utilitários)</h3>
        <p>TypeScript vem com vários tipos utilitários para transformar tipos existentes.</p>
        <ul>
            <li><code>Partial&lt;T&gt;</code>: Torna todas as propriedades de T opcionais.</li>
            <li><code>Required&lt;T&gt;</code>: Torna todas as propriedades de T obrigatórias.</li>
            <li><code>Readonly&lt;T&gt;</code>: Torna todas as propriedades de T somente leitura.</li>
            <li><code>Pick&lt;T, K&gt;</code>: Cria um tipo pegando apenas um conjunto de propriedades K de T.</li>
            <li><code>Omit&lt;T, K&gt;</code>: Cria um tipo pegando todas as propriedades de T e removendo as propriedades K.</li>
        </ul>
    `
};
