import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'js-vars', 
    title: 'Exercício de Variáveis', 
    statement: 'Declare variáveis para nome, idade e cidade.', 
    template: `// Bem-vindo ao seu primeiro exercício de codificação!
// Siga os passos na explicação e escreva seu código abaixo.

`,
    youtubeVideoId: 'dvd3pNY_s2g',
    detailedExplanation: `
        <h2>Entendendo Variáveis em JavaScript</h2>
        <p>Uma variável é como um contêiner ou uma caixa onde você pode armazenar informações para usar mais tarde. Em JavaScript, usamos as palavras-chave <code>let</code>, <code>const</code>, ou <code>var</code> para declarar uma variável.</p>
        
        <h3>Let vs. Const</h3>
        <ul>
            <li><code>let</code>: Use quando o valor da variável <strong>pode mudar</strong>. Por exemplo, a idade de uma pessoa.</li>
            <li><code>const</code>: Use para valores que <strong>não vão mudar</strong> (constantes). Por exemplo, a data de nascimento.</li>
        </ul>

        <h3>Sintaxe</h3>
        <pre><code class="language-js">let nomeDaVariavel = "valor";
const pi = 3.14;
        </code></pre>

        <h3>Tipos de Dados Comuns</h3>
        <ul>
            <li><strong>String:</strong> Texto, sempre entre aspas. Ex: <code>"João"</code></li>
            <li><strong>Number:</strong> Números, inteiros ou com casas decimais. Ex: <code>25</code>, <code>89.5</code></li>
            <li><strong>Boolean:</strong> Verdadeiro (<code>true</code>) ou Falso (<code>false</code>).</li>
        </ul>

        <hr class="my-4">

        <h3>Passo a Passo do Exercício</h3>
        <p>No editor de código, você deve fazer o seguinte:</p>
        <ol>
            <li><strong>Passo 1:</strong> Declare uma variável chamada <code>nome</code> usando <code>let</code> e atribua a ela o seu nome (como uma string).</li>
            <li><strong>Passo 2:</strong> Declare uma variável chamada <code>idade</code> usando <code>let</code> e atribua a ela a sua idade (como um número).</li>
            <li><strong>Passo 3:</strong> Declare uma variável chamada <code>cidade</code> usando <code>let</code> e atribua a ela o nome da sua cidade (como uma string).</li>
        </ol>
        <p>Quando você clicar em "Executar Testes", nosso sistema verificará se você criou as três variáveis corretamente.</p>
    `,
    tests: [
        {
            description: "A variável 'nome' deve existir e ser uma string.",
            code: "return typeof nome === 'string';"
        },
        {
            description: "A variável 'idade' deve existir e ser um número.",
            code: "return typeof idade === 'number';"
        },
        {
            description: "A variável 'cidade' deve existir e ser uma string.",
            code: "return typeof cidade === 'string';"
        }
    ]
};
