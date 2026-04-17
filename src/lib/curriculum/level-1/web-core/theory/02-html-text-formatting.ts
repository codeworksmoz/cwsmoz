import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "web-t2",
    title: "Formatação de Texto com HTML",
    youtubeVideoId: "h3h6_8k0zLo",
    content: `
        <h2>Títulos e Parágrafos</h2>
        <p>HTML fornece tags para estruturar o texto de forma hierárquica e semântica.</p>
        <pre><code>&lt;h1&gt;Título Principal&lt;/h1&gt;
&lt;h2&gt;Subtítulo&lt;/h2&gt;
&lt;p&gt;Este é um parágrafo de texto. Você pode usar parágrafos para organizar suas ideias em blocos.&lt;/p&gt;
        </code></pre>
        <h3>Ênfase e Importância</h3>
        <p>Use tags para dar ênfase semântica ao texto, o que ajuda na acessibilidade e SEO.</p>
        <ul>
            <li><code>&lt;strong&gt;Texto importante&lt;/strong&gt;</code>: Define um texto com grande importância (geralmente exibido em negrito).</li>
            <li><code>&lt;em&gt;Texto com ênfase&lt;/em&gt;</code>: Enfatiza um texto (geralmente exibido em itálico).</li>
            <li><code>&lt;b&gt;Texto em negrito&lt;/b&gt;</code>: Use apenas para chamar a atenção visualmente, sem adicionar importância extra.</li>
            <li><code>&lt;i&gt;Texto em itálico&lt;/i&gt;</code>: Use para termos técnicos, pensamentos, nomes de navios, etc., sem adicionar ênfase.</li>
        </ul>
    `
};
