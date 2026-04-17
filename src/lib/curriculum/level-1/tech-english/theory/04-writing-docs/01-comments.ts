import type { TheoryLesson } from '../../../../types';

export const lesson: TheoryLesson = {
    id: "teng-t4-1",
    title: "Escrevendo Comentários Úteis",
    content: `
        <h2>Comentando o "Porquê", não o "O quê"</h2>
        <p>Bons comentários explicam o <em>porquê</em> de uma decisão de código, e não <em>o que</em> o código está fazendo. O código em si deve ser legível o suficiente para explicar o "o quê".</p>
        
        <h3>Exemplo Ruim (Comentário inútil):</h3>
        <pre><code>// Incrementa i em 1
i = i + 1;
        </code></pre>

        <h3>Exemplo Bom (Comentário útil):</h3>
        <pre><code>// Precisamos ajustar o índice para compensar o cabeçalho
// que não faz parte do array de dados.
index = rawIndex + 1;
        </code></pre>
        <p>Escreva comentários para ajudar seu "eu do futuro" e seus colegas de equipe a entenderem decisões complexas ou não óbvias no código.</p>
    `
};
