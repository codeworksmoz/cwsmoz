import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'se-ex-3',
    title: 'Planejamento de Sprint',
    statement: 'Dado um backlog com histórias estimadas e uma velocidade de equipe, selecione quais histórias entrariam na próxima Sprint e defina um Objetivo para a Sprint.',
    template: `// Velocidade da Equipe: 20 Story Points
// Backlog (História: Pontos):
// - H1: Implementar login: 5
// - H2: Implementar cadastro: 8
// - H3: Página "Sobre nós": 2
// - H4: Envio de email de boas-vindas: 3
// - H5: Painel do administrador (básico): 13
// - H6: Mudar senha do usuário: 5

// Histórias selecionadas para a Sprint:
// - ...
// - ...
// Total de Pontos: ...

// Objetivo da Sprint:
// "Ao final da Sprint, o usuário será capaz de..."
`,
    youtubeVideoId: 'h-rYjI-kYk0',
    detailedExplanation: `
        <h2>Montando uma Sprint</h2>
        <p>O Planejamento da Sprint (Sprint Planning) é onde a equipe decide o que pode ser entregue na próxima Sprint e como esse trabalho será feito.</p>
        <h3>Passo a Passo</h3>
        <ol>
            <li><strong>Considere a Velocidade:</strong> A velocidade é a média de story points que a equipe completou nas últimas Sprints. É um guia, não uma meta rígida.</li>
            <li><strong>Selecione as Histórias:</strong> Com base na velocidade e nas prioridades do Product Owner, puxe itens do topo do backlog até que a capacidade da equipe para a Sprint seja atingida.</li>
            <li><strong>Formule um Objetivo da Sprint (Sprint Goal):</strong> Isso é crucial. O objetivo é uma única frase que resume o valor que a Sprint irá entregar. Ele dá um propósito coeso ao trabalho, em vez de ser apenas uma coleção de tarefas aleatórias.</li>
        </ol>
    `
};
