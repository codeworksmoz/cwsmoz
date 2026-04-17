import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "web-t10",
    title: "Layout com Grid",
    youtubeVideoId: "0-DY8J_skZ0",
    content: `
        <h2>Layout em Duas Dimensões</h2>
        <p>O CSS Grid é um sistema de layout poderoso que permite criar layouts complexos em duas dimensões (linhas e colunas), como um tabuleiro.</p>
        <p>Você ativa o Grid com <code>display: grid;</code> em um contêiner.</p>
        <pre><code>.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* Três colunas de largura igual */
  grid-template-rows: 100px 200px;    /* Duas linhas com alturas específicas */
  gap: 1rem;                         /* Espaço entre os itens (linhas e colunas) */
}
        </code></pre>
        <h3>Unidade 'fr'</h3>
        <p>A unidade <code>fr</code> (fração) representa uma fração do espaço disponível no contêiner do grid. É extremamente útil para criar layouts flexíveis.</p>
        <h3>Posicionando Itens</h3>
        <p>Você pode posicionar itens explicitamente nas células do grid usando <code>grid-column</code> e <code>grid-row</code>.</p>
    `
};
