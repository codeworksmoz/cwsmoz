import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'hci-ex-1', 
    title: 'Auditoria de Usabilidade', 
    statement: 'Faça uma auditoria de usabilidade em um site popular e aponte 3 melhorias.', 
    template: 'Site: ...\nMelhoria 1: ...',
    youtubeVideoId: 'S3w0-i4Hw8g',
    detailedExplanation: `
        <h2>Realizando uma Auditoria de Usabilidade</h2>
        <p>Uma auditoria de usabilidade, baseada em heurísticas, é uma forma rápida de encontrar problemas de usabilidade em uma interface.</p>
        <h3>Passo a Passo</h3>
        <ol>
            <li>Escolha um site ou aplicativo que você usa com frequência.</li>
            <li>Navegue pelo site tentando completar uma tarefa comum (ex: encontrar um produto, preencher um formulário).</li>
            <li>Observe os pontos de fricção. Onde você ficou confuso? O que foi difícil de encontrar?</li>
            <li>Use as 10 Heurísticas de Nielsen como um guia para identificar problemas específicos.</li>
            <li>Documente pelo menos três problemas e sugira uma melhoria para cada um.</li>
        </ol>
    `
};
