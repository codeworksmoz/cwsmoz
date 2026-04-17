import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'se-ex-4',
    title: 'Simulação de um Quadro Kanban',
    statement: 'Você tem um quadro com limites de WIP (Work in Progress). Descreva a próxima ação que a equipe deveria tomar para otimizar o fluxo.',
    template: `// Quadro Kanban:
// - A Fazer: [Tarefa E, Tarefa F]
// - Em Desenvolvimento (WIP Limit: 2): [Tarefa A, Tarefa B]
// - Em Revisão (WIP Limit: 1): [Tarefa C]
// - Feito: [Tarefa D]

// Situação: Tarefa B foi concluída pelo desenvolvedor.

// Próxima Ação da Equipe:
// ...

// Justificativa:
// ...
`,
    youtubeVideoId: 'h-rYjI-kYk0',
    detailedExplanation: `
        <h2>Gerenciando o Fluxo com Kanban</h2>
        <p>O princípio mais importante do Kanban é <strong>limitar o trabalho em andamento (WIP)</strong>. Isso significa: "Pare de começar, comece a terminar!".</p>
        <h3>Passo a Passo da Análise</h3>
        <ol>
            <li><strong>Observe o Quadro:</strong> Veja quais colunas estão no limite de WIP ou acima dele. Isso indica um gargalo.</li>
            <li><strong>Identifique o Problema:</strong> Na situação descrita, a coluna "Em Desenvolvimento" está no limite e a coluna "Em Revisão" também. O desenvolvedor que terminou a Tarefa B não pode simplesmente pegar a Tarefa E da coluna "A Fazer", pois isso excederia o limite de WIP.</li>
            <li><strong>Proponha a Ação Correta:</strong> A prioridade é mover o trabalho para a direita do quadro. O desenvolvedor que está livre deve ajudar a "puxar" a Tarefa C da coluna "Em Revisão", talvez ajudando na revisão do código ou nos testes, para que ela possa ir para "Feito". Isso liberaria o gargalo e abriria espaço para uma nova tarefa entrar em desenvolvimento.</li>
        </ol>
    `
};
