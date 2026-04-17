import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "webadv-t41-monorepos",
    title: "Arquitetura: Monorepos",
    youtubeVideoId: "i-E3f4-Y1Wk",
    content: `
        <h2>Gerenciando Múltiplos Projetos em um Único Repositório</h2>
        <p>Um <strong>monorepo</strong> é uma estratégia de desenvolvimento onde o código de múltiplos projetos é armazenado em um único repositório Git. Grandes empresas de tecnologia como Google, Meta e Microsoft usam monorepos extensivamente.</p>
        <p>Isso contrasta com a abordagem de "polyrepo", onde cada projeto tem seu próprio repositório.</p>

        <h3>Benefícios:</h3>
        <ul>
            <li><strong>Visibilidade Unificada:</strong> Todo o código da organização está em um só lugar, facilitando a descoberta e a colaboração.</li>
            <li><strong>Compartilhamento de Código:</strong> É trivial compartilhar código (como componentes de UI, utilitários, tipos) entre diferentes projetos dentro do monorepo.</li>
            <li><strong>Mudanças Atômicas:</strong> Você pode fazer uma mudança em uma API e atualizar todos os seus consumidores (outros projetos no monorepo) em um único commit/PR.</li>
            <li><strong>Gerenciamento de Dependências Simplificado:</strong> Geralmente, há uma única versão de cada dependência para todo o repositório, evitando conflitos.</li>
        </ul>

        <h3>Ferramentas de Monorepo:</h3>
        <p>Gerenciar um monorepo sem ferramentas especializadas é difícil. Ferramentas modernas ajudam a otimizar os fluxos de trabalho.</p>
        <ul>
            <li><strong>Turborepo:</strong> Uma ferramenta de build de alta performance para monorepos JavaScript/TypeScript, criada pela Vercel. Ele usa técnicas de cache para evitar a reconstrução de código que não mudou, acelerando drasticamente os builds e testes.</li>
            <li><strong>Nx:</strong> Uma ferramenta poderosa e extensível que fornece uma estrutura mais opinativa para seu monorepo, com plugins para vários frameworks e ferramentas.</li>
            <li><strong>pnpm/npm/yarn workspaces:</strong> Gerenciadores de pacotes que têm suporte nativo para monorepos, permitindo instalar dependências e vincular pacotes locais.</li>
        </ul>
    `
};
