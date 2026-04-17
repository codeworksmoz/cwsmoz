import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = { 
    id: "web-t1", 
    title: "Estrutura de um Documento HTML",
    youtubeVideoId: "bWPMSSsVdPk",
    content: `
        <h2>A Estrutura Básica</h2>
        <p>Todo documento HTML segue uma estrutura fundamental. Pense nela como o esqueleto da sua página.</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="pt-BR"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Título da Página&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;!-- O conteúdo visível da sua página vai aqui --&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
        <ul>
            <li><code>&lt;!DOCTYPE html&gt;</code>: Declaração que define o tipo de documento. É essencial para que o navegador renderize a página corretamente.</li>
            <li><code>&lt;html&gt;</code>: O elemento raiz que envolve todo o conteúdo da página.</li>
            <li><code>&lt;head&gt;</code>: Contém meta-informações sobre a página, como o título, codificação de caracteres, e links para folhas de estilo (CSS). O conteúdo aqui não é visível na página.</li>
            <li><code>&lt;body&gt;</code>: Contém todo o conteúdo visível da página: textos, imagens, links, etc.</li>
        </ul>
    ` 
};
