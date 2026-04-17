import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'py-vars', 
    title: 'Exercício de Variáveis', 
    statement: 'Declare variáveis para nome, idade e cidade.', 
    template: `# Bem-vindo ao seu primeiro exercício de codificação!
# Siga os passos na explicação e escreva seu código abaixo.

`,
    youtubeVideoId: '8jbQ_I_d-2g',
    detailedExplanation: `
        <h2>Entendendo Variáveis em Python</h2>
        <p>Uma variável é como um contêiner ou uma caixa onde você pode armazenar informações para usar mais tarde. Em Python, criar uma variável é muito simples: você só precisa dar um nome a ela e usar o sinal <code>=</code> para atribuir um valor.</p>
        
        <h3>Sintaxe</h3>
        <pre><code class="language-python">nome_da_variavel = "valor"
idade = 25
        </code></pre>
        <p>Python é uma linguagem de tipagem dinâmica, o que significa que você não precisa declarar o tipo da variável. O interpretador descobre o tipo automaticamente com base no valor que você atribui.</p>

        <h3>Tipos de Dados Comuns</h3>
        <ul>
            <li><strong>str (String):</strong> Texto, sempre entre aspas simples ou duplas. Ex: <code>'João'</code> ou <code>"Maputo"</code>.</li>
            <li><strong>int (Integer):</strong> Números inteiros. Ex: <code>25</code>.</li>
            <li><strong>float (Float):</strong> Números com casas decimais. Ex: <code>1.75</code>.</li>
        </ul>

        <hr class="my-4">

        <h3>Passo a Passo do Exercício</h3>
        <p>No editor de código, você deve fazer o seguinte:</p>
        <ol>
            <li><strong>Passo 1:</strong> Crie uma variável chamada <code>nome</code> e atribua a ela o seu nome (como uma string).</li>
            <li><strong>Passo 2:</strong> Crie uma variável chamada <code>idade</code> e atribua a ela a sua idade (como um número inteiro).</li>
            <li><strong>Passo 3:</strong> Crie uma variável chamada <code>cidade</code> e atribua a ela o nome da sua cidade (como uma string).</li>
        </ol>
        <p>Quando você clicar em "Executar Testes", nosso sistema verificará se você criou as três variáveis corretamente.</p>
    ` 
};
