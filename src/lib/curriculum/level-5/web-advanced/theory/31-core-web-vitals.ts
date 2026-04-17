import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "webadv-t31-core-web-vitals",
    title: "Otimização de Performance: Core Web Vitals",
    youtubeVideoId: "AQqesel-F1M",
    content: `
        <h2>Medindo a Experiência do Usuário</h2>
        <p><strong>Core Web Vitals</strong> são um conjunto de métricas definidas pelo Google que medem a experiência do usuário no mundo real, focando em três aspectos: velocidade de carregamento, interatividade e estabilidade visual. O Google usa essas métricas como um fator de ranqueamento nos resultados de busca.</p>

        <h3>As Três Métricas Principais:</h3>
        <ol>
            <li>
                <strong>Largest Contentful Paint (LCP):</strong> Mede o tempo de carregamento. Marca o ponto na linha do tempo de carregamento da página quando o maior elemento de conteúdo (geralmente uma imagem ou um bloco de texto) se torna visível na tela.
                <ul><li>🎯 <strong>Bom:</strong> 2.5 segundos ou menos.</li></ul>
            </li>
            <li>
                <strong>Interaction to Next Paint (INP):</strong> Mede a responsividade. Avalia a latência de todas as interações do usuário (cliques, toques, etc.) durante a visita a uma página. A métrica reporta a maior duração de interação, ignorando outliers.
                <ul><li>🎯 <strong>Bom:</strong> 200 milissegundos ou menos.</li><li><em>(Nota: INP substituiu a métrica antiga, First Input Delay (FID), em Março de 2024).</em></li></ul>
            </li>
            <li>
                <strong>Cumulative Layout Shift (CLS):</strong> Mede a estabilidade visual. Quantifica o quanto o conteúdo da página se move inesperadamente enquanto ela está carregando. Um CLS baixo garante que a página seja agradável e não frustre o usuário com elementos que se movem enquanto ele tenta interagir.
                <ul><li>🎯 <strong>Bom:</strong> 0.1 ou menos.</li></ul>
            </li>
        </ol>
        <p>Otimizar para essas métricas não só melhora seu ranking no Google, mas, mais importante, resulta em uma experiência muito melhor e menos frustrante para seus usuários.</p>
    `
};
