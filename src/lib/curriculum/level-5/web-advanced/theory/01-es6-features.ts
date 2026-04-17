import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "webadv-t1-es6",
    title: "ES6+ Features: Arrow Functions, Destructuring, Spread/Rest",
    youtubeVideoId: "g-s-g9bF-fs",
    content: `
        <h2>Modernizando seu JavaScript</h2>
        <p>ES6 (ECMAScript 2015) e versões posteriores introduziram uma série de funcionalidades que tornam o JavaScript mais poderoso e agradável de escrever.</p>
        
        <h3>Arrow Functions (Funções de Seta)</h3>
        <p>Uma sintaxe mais concisa para escrever funções. Elas também se comportam de maneira diferente com a palavra-chave <code>this</code>, herdando-a do escopo pai, o que resolve muitos problemas comuns.</p>
        <pre><code class="language-js">// Sintaxe antiga
function somar(a, b) {
  return a + b;
}

// Com Arrow Function
const somar = (a, b) => a + b;
        </code></pre>
        
        <h3>Destructuring (Desestruturação)</h3>
        <p>Uma maneira fácil de extrair valores de arrays ou propriedades de objetos para variáveis distintas.</p>
        <pre><code class="language-js">// Em Objetos
const usuario = { nome: 'Ana', idade: 28 };
const { nome, idade } = usuario;
console.log(nome); // 'Ana'

// Em Arrays
const numeros = [10, 20, 30];
const [primeiro, segundo] = numeros;
console.log(primeiro); // 10
        </code></pre>

        <h3>Spread (...) e Rest (...) Operators</h3>
        <p>A mesma sintaxe <code>...</code> tem dois usos opostos.</p>
        <ul>
            <li><strong>Spread:</strong> "Espalha" os elementos de um iterável (como um array ou objeto) em lugares onde múltiplos elementos/propriedades são esperados.</li>
            <pre><code class="language-js">const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6]; // [1, 2, 3, 4, 5, 6]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }
            </code></pre>
            <li><strong>Rest:</strong> Agrupa o "resto" dos elementos em um array. É útil em parâmetros de função para capturar múltiplos argumentos.</li>
            <pre><code class="language-js">function minhaFuncao(primeiro, ...resto) {
  console.log(primeiro); // 'a'
  console.log(resto);   // ['b', 'c', 'd']
}
minhaFuncao('a', 'b', 'c', 'd');
            </code></pre>
        </ul>
    `
};
