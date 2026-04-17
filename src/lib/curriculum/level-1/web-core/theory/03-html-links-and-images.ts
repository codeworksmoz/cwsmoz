import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = { 
    id: "web-t3", 
    title: "Links e Imagens",
    youtubeVideoId: "c-A3aDfa0d0",
    content: `
        <h2>Navegando com Links</h2>
        <p>A tag âncora <code>&lt;a&gt;</code> é usada para criar hyperlinks para outras páginas ou para partes da mesma página. O atributo <code>href</code> especifica o destino do link.</p>
        <pre><code>&lt;a href="https://www.google.com"&gt;Visite o Google&lt;/a&gt;</code></pre>
        
        <h2>Exibindo Imagens</h2>
        <p>A tag <code>&lt;img&gt;</code> é usada para incorporar imagens em uma página. É uma tag vazia, o que significa que não tem uma tag de fechamento.</p>
        <pre><code>&lt;img src="caminho/para/imagem.jpg" alt="Descrição da imagem"&gt;</code></pre>
        <ul>
            <li><code>src</code>: O caminho para o arquivo de imagem.</li>
            <li><code>alt</code>: O texto alternativo. É <strong>essencial para a acessibilidade</strong>, pois é lido por leitores de tela quando a imagem não pode ser vista.</li>
        </ul>
    ` 
};
