import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "webadv-t29-vercel-deployment",
    title: "Deploy com Vercel",
    youtubeVideoId: "fSAgFxjGSj4",
    content: `
        <h2>A Melhor Plataforma para Next.js</h2>
        <p><strong>Vercel</strong> é uma plataforma de nuvem projetada para desenvolvedores frontend, criada pelos mesmos desenvolvedores do Next.js. Ela oferece a melhor experiência para hospedar e escalar aplicações Next.js, com zero configuração.</p>

        <h3>Fluxo de Trabalho Git-Driven</h3>
        <p>O principal conceito da Vercel é o fluxo de trabalho baseado em Git:</p>
        <ol>
            <li>Você conecta seu repositório do GitHub, GitLab ou Bitbucket ao Vercel.</li>
            <li>A cada <code>git push</code>, a Vercel automaticamente faz o build e o deploy do seu projeto.</li>
            <li>Para cada Pull Request, a Vercel cria uma <strong>"Preview Deployment"</strong>. Esta é uma URL única e compartilhável com a versão exata do seu código naquele PR. Isso permite que sua equipe revise as mudanças em um ambiente de produção real antes de mesclar para o branch principal.</li>
            <li>Quando um PR é mesclado ao branch de produção (geralmente <code>main</code>), a Vercel promove automaticamente essa versão para a URL de produção.</li>
        </ol>

        <h3>Infraestrutura Global de Edge</h3>
        <p>A Vercel implanta seu site estático e Funções Serverless em uma rede global de "Edge", o que significa que seu conteúdo é servido a partir de um local fisicamente próximo do seu usuário, resultando em latência extremamente baixa e alta performance global.</p>

        <h3>Outras Funcionalidades:</h3>
        <ul>
            <li><strong>Analytics:</strong> Fornece insights de performance e tráfego do seu site, focados nos Core Web Vitals.</li>
            <li><strong>Variáveis de Ambiente:</strong> Permite gerenciar chaves de API e outros segredos de forma segura para diferentes ambientes (Produção, Preview, Desenvolvimento).</li>
            <li><strong>Domínios Customizados:</strong> Configuração fácil de domínios personalizados com geração automática de certificados SSL.</li>
        </ul>
    `
};
