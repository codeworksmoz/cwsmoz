import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'cpp-vars', 
    title: 'Exercício de Variáveis', 
    statement: 'Declare variáveis para nome, idade e cidade.', 
    template: '// seu código aqui',
    youtubeVideoId: 'a-fCo_yYtnc',
    detailedExplanation: `
        <h2>Declarando Variáveis em C++</h2>
        <p>C++ também é uma linguagem de tipagem estática. Você deve declarar o tipo de uma variável antes de usá-la.</p>
        <h3>Passo a Passo</h3>
        <ol>
            <li>Inclua a biblioteca <code>&lt;string&gt;</code>.</li>
            <li>Declare uma variável do tipo <code>std::string</code> chamada <code>nome</code> e atribua seu nome a ela.</li>
            <li>Declare uma variável do tipo <code>int</code> chamada <code>idade</code> e atribua sua idade a ela.</li>
            <li>Declare uma variável do tipo <code>std::string</code> chamada <code>cidade</code> e atribua sua cidade a ela.</li>
        </ol>
        <pre><code class="language-cpp">#include <string>

std::string nome = "Seu Nome";
int idade = 25;
        </code></pre>
    `
};
