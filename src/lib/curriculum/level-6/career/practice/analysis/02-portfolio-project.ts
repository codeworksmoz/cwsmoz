import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'career-ex-2',
    title: 'Definindo um Projeto de Portfólio',
    statement: 'Você quer demonstrar suas habilidades em React e Node.js. Descreva uma ideia de projeto de portfólio que seja mais impressionante do que um "clone do To-Do list" e liste as principais features que ele teria.',
    template: `// Ideia do Projeto:
// ...

// Principais Features:
// 1. ...
// 2. ...
// 3. ...
`,
    youtubeVideoId: 'C5f-HUGAnJ8',
    detailedExplanation: `
        <h2>Indo Além dos Tutoriais</h2>
        <p>Um bom projeto de portfólio resolve um problema real (mesmo que pequeno) e demonstra que você consegue construir uma aplicação completa.</p>
        <h3>Como Pensar em uma Boa Ideia</h3>
        <ol>
            <li><strong>Resolva um Problema Seu:</strong> Pense em algo no seu dia a dia que poderia ser melhorado com um pequeno app. Um rastreador de hábitos? Um organizador de links? Um planejador de viagens simples?</li>
            <li><strong>Combine suas Paixões:</strong> Gosta de música? Crie um app que usa a API do Spotify para criar playlists. Gosta de jogos? Crie um app que rastreia suas estatísticas em um jogo.</li>
            <li><strong>Escolha as Features Certas:</strong> Um projeto impressionante não precisa ter 100 features. É melhor ter 3 features bem-feitas. Pense no básico:
                <ul>
                    <li>Autenticação de usuário (essencial para qualquer app real).</li>
                    <li>Operações CRUD (Create, Read, Update, Delete) em algum recurso principal.</li>
                    <li>Uma feature "extra" que mostre uma habilidade específica (ex: usar uma API de terceiros, implementar upload de arquivos, etc.).</li>
                </ul>
            </li>
        </ol>
    `
};
