import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'java-vars', 
    title: 'Exercício de Variáveis', 
    statement: 'Declare variáveis para nome, idade e cidade.', 
    template: '// seu código aqui',
    youtubeVideoId: '3u86p_i0_1s',
    detailedExplanation: `
        <h2>Declarando Variáveis em Java</h2>
        <p>Java é uma linguagem de tipagem estática, o que significa que você deve declarar o tipo de uma variável antes de usá-la.</p>
        <h3>Passo a Passo</h3>
        <ol>
            <li>Declare uma variável do tipo <code>String</code> chamada <code>nome</code> e atribua seu nome a ela.</li>
            <li>Declare uma variável do tipo <code>int</code> chamada <code>idade</code> e atribua sua idade a ela.</li>
            <li>Declare uma variável do tipo <code>String</code> chamada <code>cidade</code> e atribua sua cidade a ela.</li>
        </ol>
        <pre><code class="language-java">String nome = "Seu Nome";
int idade = 25;
        </code></pre>
    `
};
