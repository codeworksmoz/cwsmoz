import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "webadv-t8-nextjs-fundamentals",
    title: "Fundamentos de Next.js: App Router, SSR, SSG",
    youtubeVideoId: "sUKptz_s-bE",
    content: `
        <h2>O Framework React para Produção</h2>
        <p>Next.js é um framework React que adiciona uma série de funcionalidades otimizadas para produção, como renderização no servidor e geração de sites estáticos, facilitando a criação de aplicações rápidas e otimizadas para SEO.</p>

        <h3>App Router</h3>
        <p>A partir da versão 13, o Next.js introduziu o App Router, um novo paradigma de roteamento baseado em diretórios. Cada pasta dentro do diretório <code>app/</code> se torna um segmento de rota. Arquivos especiais como <code>page.tsx</code>, <code>layout.tsx</code> e <code>loading.tsx</code> são usados para definir a UI para cada rota.</p>

        <h3>Estratégias de Renderização</h3>
        <p>Next.js oferece diferentes maneiras de renderizar suas páginas, permitindo que você escolha a melhor estratégia para cada caso de uso.</p>
        <ul>
            <li><strong>Server-Side Rendering (SSR):</strong> A página HTML é gerada no servidor a cada requisição. É ótimo para páginas com dados dinâmicos que mudam frequentemente. Em Next.js 13+, esse é o comportamento padrão dos Componentes de Servidor.</li>
            <li><strong>Static Site Generation (SSG):</strong> A página HTML é gerada em tempo de build. O resultado é um conjunto de arquivos estáticos que podem ser servidos por uma CDN, resultando em performance extremamente alta. Ideal para páginas cujo conteúdo raramente muda, como posts de blog ou páginas de marketing.</li>
            <li><strong>Incremental Static Regeneration (ISR):</strong> Uma combinação de SSG e SSR. A página é gerada estaticamente, mas pode ser re-gerada em segundo plano em intervalos definidos (ex: a cada 60 segundos) ou sob demanda.</li>
        </ul>
    `
};
