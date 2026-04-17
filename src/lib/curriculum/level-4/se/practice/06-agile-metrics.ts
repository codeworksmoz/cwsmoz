import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'se-ex-6',
    title: 'Análise de Métricas Ágeis',
    statement: 'Analisando um gráfico Burndown, descreva o que provavelmente aconteceu durante a Sprint.',
    template: `// Descrição do Gráfico Burndown:
// - A linha de trabalho restante ficou plana nos primeiros 3 dias.
// - No meio da Sprint, a linha subiu abruptamente.
// - No final, a linha caiu rapidamente, mas não chegou a zero.

// Análise:
// ...
`,
    youtubeVideoId: 'h-rYjI-kYk0',
    detailedExplanation: `
        <h2>Interpretando os Gráficos</h2>
        <p>Gráficos como o Burndown contam uma história sobre a Sprint.</p>
        <h3>Analisando o Cenário</h3>
        <ol>
            <li><strong>Linha plana no início:</strong> A equipe não concluiu nenhuma tarefa nos primeiros dias. Isso pode indicar que as tarefas eram muito grandes ou que houve um bloqueio inicial.</li>
            <li><strong>Linha sobe no meio:</strong> Isso significa que escopo foi adicionado à Sprint (a quantidade de trabalho restante aumentou). Isso é geralmente uma má prática e indica um planejamento ruim ou "scope creep".</li>
            <li><strong>Queda rápida no final, mas não chega a zero:</strong> A equipe se apressou no final, mas ainda assim não conseguiu entregar tudo o que foi planejado.</li>
        </ol>
        <p>Juntando as peças, essa Sprint provavelmente foi mal planejada, sofreu com adição de escopo e não atingiu seu objetivo. A equipe deve discutir esses pontos na retrospectiva.</p>
    `
};
