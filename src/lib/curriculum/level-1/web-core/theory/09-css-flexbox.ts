import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = { 
    id: "web-t9", 
    title: "Layout com Flexbox",
    youtubeVideoId: "K74l26pE4YA",
    content: `
        <h2>Layout em Uma Dimensão</h2>
        <p>O Módulo de Layout de Caixa Flexível, comumente chamado de Flexbox, é um modelo de layout CSS projetado para criar layouts em uma única dimensão (uma linha ou uma coluna).</p>
        <p>Para usar o Flexbox, você aplica <code>display: flex;</code> a um elemento contêiner. Os filhos diretos desse contêiner se tornam "itens flex".</p>
        <pre><code>.container {
  display: flex;
}
        </code></pre>
        <h3>Propriedades Comuns do Contêiner:</h3>
        <ul>
            <li><strong>flex-direction:</strong> Define o eixo principal. <code>row</code> (padrão) para horizontal, <code>column</code> para vertical.</li>
            <li><strong>justify-content:</strong> Alinha os itens no eixo principal. Valores comuns incluem <code>flex-start</code>, <code>center</code>, <code>flex-end</code>, <code>space-between</code>.</li>
            <li><strong>align-items:</strong> Alinha os itens no eixo transversal (o eixo perpendicular ao principal). Valores comuns incluem <code>flex-start</code>, <code>center</code>, <code>flex-end</code>, <code>stretch</code>.</li>
            <li><strong>flex-wrap:</strong> Permite que os itens quebrem para a próxima linha se não houver espaço suficiente. <code>nowrap</code> (padrão) ou <code>wrap</code>.</li>
        </ul>
    `
};
