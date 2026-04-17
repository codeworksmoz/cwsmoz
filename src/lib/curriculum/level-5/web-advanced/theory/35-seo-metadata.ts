import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "webadv-t35-seo-metadata",
    title: "SEO e Metadados: sitemap, robots.txt, Dados Estruturados",
    youtubeVideoId: "741y_l4yHj0",
    content: `
        <h2>Ajudando os Mecanismos de Busca a Entender seu Site</h2>
        <p><strong>SEO (Search Engine Optimization)</strong> é o processo de otimizar seu site para obter uma classificação mais alta nos resultados de mecanismos de busca como o Google.</p>

        <h3>Metadados</h3>
        <p>Metadados são informações sobre sua página que não são exibidas na tela, mas podem ser lidas por navegadores e rastreadores de busca.</p>
        <ul>
            <li><strong><code>&lt;title&gt;</code>:</strong> O título da sua página, exibido na aba do navegador e como título principal nos resultados de busca.</li>
            <li><strong><code>&lt;meta name="description"&gt;</code>:</strong> Uma breve descrição do conteúdo da sua página, frequentemente usada como snippet nos resultados de busca.</li>
        </ul>
        <p>O Next.js 13+ tem uma <a href="https://nextjs.org/docs/app/api-reference/functions/generate-metadata" target="_blank">Metadata API</a> que facilita a definição desses valores por página.</p>

        <h3>sitemap.xml</h3>
        <p>Um sitemap é um arquivo XML que lista todas as URLs importantes do seu site. Ele ajuda os rastreadores a descobrir e indexar todo o seu conteúdo de forma mais eficiente.</p>
        
        <h3>robots.txt</h3>
        <p>É um arquivo de texto na raiz do seu site que diz aos robôs de busca quais páginas ou seções eles não devem rastrear.</p>

        <h3>Dados Estruturados (Schema.org)</h3>
        <p>Dados Estruturados são um vocabulário padronizado que você pode adicionar ao seu HTML para fornecer informações explícitas sobre o significado de uma página. Por exemplo, você pode marcar uma receita com suas propriedades (tempo de cozimento, ingredientes), um evento com sua data e local, ou um produto com seu preço e avaliação.</p>
        <p>Isso permite que o Google entenda seu conteúdo em um nível mais profundo e o exiba em "rich results" (resultados ricos), como carrosséis de receitas ou avaliações com estrelas, o que pode aumentar significativamente a visibilidade.</p>
    `
};
