import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'advgit-ex-2',
    title: 'Escolha de Workflow de Git',
    statement: 'Para cada cenário, qual workflow de Git (GitFlow, GitHub Flow, Trunk-Based Development) seria mais apropriado e por quê? 1) Um projeto open source mantido por voluntários. 2) Uma startup fazendo deploy várias vezes ao dia. 3) Um software empresarial com ciclos de release longos e bem definidos.',
    template: `// 1. Projeto Open Source:
// Workflow: ...
// Por quê: ...

// 2. Startup com Deploy Contínuo:
// Workflow: ...
// Por quê: ...

// 3. Software Empresarial com Releases Longos:
// Workflow: ...
// Por quê: ...
`,
    youtubeVideoId: 'a_a_LuS-8yY',
    detailedExplanation: `
        <h2>Adaptando o Fluxo de Trabalho ao Contexto</h2>
        <p>Não existe um único workflow de Git que sirva para todos. A escolha depende da estrutura da equipe, da natureza do produto e da frequência de deploy.</p>
        <h3>Análise dos Cenários</h3>
        <ol>
            <li><strong>Projeto Open Source:</strong> <strong>GitHub Flow</strong> é ideal. É simples, baseado em feature branches e Pull Requests, o que facilita a contribuição de pessoas de fora do time principal.</li>
            <li><strong>Startup com Deploy Contínuo:</strong> <strong>Trunk-Based Development</strong> (ou uma variação do GitHub Flow) é o mais indicado. O foco é manter o branch principal (trunk) sempre "deployável" e usar feature flags para controlar o acesso a funcionalidades incompletas. Isso maximiza a velocidade de entrega.</li>
            <li><strong>Software Empresarial com Releases Longos:</strong> <strong>GitFlow</strong> é uma boa escolha aqui. Ele foi projetado para projetos com ciclos de release programados. Seus branches separados para features, releases e hotfixes fornecem uma estrutura robusta para gerenciar múltiplas versões e manutenções em paralelo.</li>
        </ol>
    `
};
