import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'se-ex-5',
    title: 'Simulação de Retrospectiva',
    statement: 'Com base em um cenário de Sprint, identifique pontos para uma retrospectiva usando a técnica "O que foi bom, O que pode melhorar, Ações a tomar".',
    template: `// Cenário da Sprint:
// - A equipe entregou 80% das histórias planejadas.
// - Uma história foi bloqueada por 3 dias devido a um problema em um ambiente externo.
// - Dois desenvolvedores trabalharam em par e entregaram uma feature complexa com alta qualidade.
// - Os testes automatizados quebraram e demoraram um dia para serem corrigidos.

// O que foi bom:
// - ...

// O que pode melhorar:
// - ...

// Ações a tomar na próxima Sprint:
// - ...
`,
    youtubeVideoId: 'h-rYjI-kYk0',
    detailedExplanation: `
        <h2>A Melhoria Contínua em Ação</h2>
        <p>A Retrospectiva da Sprint é um evento para o time se inspecionar e criar um plano para melhorias a serem implementadas na próxima Sprint. Não é sobre culpar, mas sobre melhorar o processo.</p>
        <h3>Passo a Passo da Análise</h3>
        <ol>
            <li><strong>O que foi bom (Keep):</strong> Identifique os sucessos. No cenário, a programação em par foi um sucesso e deve ser encorajada.</li>
            <li><strong>O que pode melhorar (Problem):</strong> Identifique os problemas. O bloqueio externo e a quebra dos testes foram grandes impedimentos.</li>
            <li><strong>Ações a tomar (Try):</strong> Para cada problema, pense em uma ação concreta, pequena e mensurável para a próxima Sprint. Não basta dizer "vamos melhorar os testes". Uma ação melhor seria "Criar um alerta no pipeline de CI para notificar imediatamente quando os testes quebrarem".</li>
        </ol>
    `
};
