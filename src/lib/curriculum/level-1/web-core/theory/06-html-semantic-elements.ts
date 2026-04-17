import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "web-t6",
    title: "HTML Semântico",
    youtubeVideoId: "l-45QFLS3dE",
    content: `
        <h2>Escrevendo HTML com Significado</h2>
        <p>HTML semântico significa usar as tags HTML para seu propósito correto. Em vez de usar <code>&lt;div&gt;</code> para tudo, usamos tags que descrevem o conteúdo.</p>
        <h3>Por que usar HTML Semântico?</h3>
        <ul>
            <li><strong>Acessibilidade:</strong> Leitores de tela usam a semântica para ajudar usuários com deficiência visual a navegar na página.</li>
            <li><strong>SEO (Search Engine Optimization):</strong> Mecanismos de busca como o Google entendem melhor o conteúdo da sua página.</li>
            <li><strong>Manutenibilidade:</strong> O código se torna mais fácil de ler e entender para outros desenvolvedores.</li>
        </ul>
        <h3>Exemplos de Tags Semânticas:</h3>
        <pre><code>&lt;header&gt;...&lt;/header&gt;  // Cabeçalho da página ou de uma seção
&lt;nav&gt;...&lt;/nav&gt;        // Links de navegação
&lt;main&gt;...&lt;/main&gt;      // Conteúdo principal da página
&lt;article&gt;...&lt;/article&gt;  // Um bloco de conteúdo autônomo (ex: post de blog)
&lt;section&gt;...&lt;/section&gt;  // Uma seção temática dentro da página
&lt;aside&gt;...&lt;/aside&gt;    // Conteúdo lateral (ex: sidebar)
&lt;footer&gt;...&lt;/footer&gt;  // Rodapé da página
&lt;figure&gt;...&lt;/figure&gt;  // Para conteúdo de mídia, como imagens com legenda
        </code></pre>
    `
};
