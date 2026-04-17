import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "pf-t1",
    title: "Variáveis e Tipos de Dados",
    content: `
      <h2>O que é uma Variável?</h2>
      <p>Pense em uma variável como uma caixa com uma etiqueta. Você pode guardar informações dentro dessa caixa e usar a etiqueta (o nome da variável) para se referir a ela mais tarde.</p>
      <pre><code>nome = "Alice"  // 'nome' é a variável, "Alice" é o valor
idade = 30      // 'idade' é a variável, 30 é o valor
</code></pre>
      <h3>Tipos de Dados Comuns:</h3>
      <ul>
        <li><strong>String (texto):</strong> Sequência de caracteres. Ex: <code>"Olá, mundo!"</code>.</li>
        <li><strong>Integer (inteiro):</strong> Números inteiros, sem casas decimais. Ex: <code>10</code>, <code>-5</code>.</li>
        <li><strong>Float (ponto flutuante):</strong> Números com casas decimais. Ex: <code>9.99</code>, <code>3.1415</code>.</li>
        <li><strong>Boolean (booleano):</strong> Representa verdadeiro (True) ou falso (False).</li>
        <li><strong>Array/Lista:</strong> Uma coleção ordenada de valores. Ex: <code>[1, 2, 3, "maçã"]</code>.</li>
      </ul>
    `,
    youtubeVideoId: '_B6K2G_Q4e4'
};
