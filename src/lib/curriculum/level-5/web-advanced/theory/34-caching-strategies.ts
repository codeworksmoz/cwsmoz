import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "webadv-t34-caching-strategies",
    title: "Estratégias de Cache: CDN, Edge Caching e SWR",
    youtubeVideoId: "u_nCgB4bT3s",
    content: `
        <h2>Servindo Conteúdo na Velocidade da Luz</h2>
        <p>Cache é a prática de armazenar uma cópia de um recurso e servi-lo de volta quando solicitado. Boas estratégias de cache podem reduzir drasticamente a latência e a carga no seu servidor.</p>

        <h3>Cache do Navegador</h3>
        <p>O navegador pode armazenar recursos localmente. Usando cabeçalhos HTTP como <code>Cache-Control</code>, você pode instruir o navegador por quanto tempo ele deve manter uma cópia de um arquivo (CSS, JS, imagem) antes de pedir uma nova versão ao servidor.</p>

        <h3>CDN (Content Delivery Network)</h3>
        <p>Uma CDN é uma rede de servidores distribuídos geograficamente. Ela armazena em cache o conteúdo estático do seu site (imagens, CSS, JS) em locais próximos aos seus usuários. Quando um usuário visita seu site, o conteúdo é entregue a partir do servidor da CDN mais próximo dele, em vez do seu servidor de origem, reduzindo drasticamente a latência.</p>
        
        <h3>Edge Caching e Funções Edge</h3>
        <p>Plataformas modernas como Vercel e Cloudflare levam o conceito de CDN um passo adiante. Além de servir conteúdo estático, suas redes de "Edge" também podem executar código (<strong>Edge Functions</strong>) e fazer cache de respostas de API dinâmicas.</p>
        <p>Isso permite que você execute lógica de servidor perto do usuário e faça cache de conteúdo que antes era considerado dinâmico.</p>
        
        <h3>Stale-While-Revalidate (SWR)</h3>
        <p>SWR é um padrão de cache popularizado pela Vercel. A estratégia é:</p>
        <ol>
            <li>Primeiro, servir os dados do cache (que podem estar "velhos" ou "stale").</li>
            <li>Em seguida, enviar uma requisição para revalidar os dados.</li>
            <li>Finalmente, quando os novos dados chegam, atualizar o cache.</li>
        </ol>
        <p>Isso garante que o usuário veja o conteúdo imediatamente (mesmo que um pouco desatualizado), enquanto a UI é atualizada de forma transparente com os dados mais recentes. A biblioteca <code>swr</code> do React é uma implementação popular deste padrão.</p>
    `
};
