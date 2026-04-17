import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'teng-ex-1', 
    title: 'Quiz de Vocabulário', 
    statement: 'Combine os termos técnicos com suas definições.', 
    template: 'Parameter: ...',
    youtubeVideoId: 'U_kX2_aFp3g',
    detailedExplanation: `
        <h2>Reforçando o Vocabulário</h2>
        <p>Este exercício ajuda a solidificar o entendimento dos termos técnicos mais comuns.</p>
        <h3>Passo a Passo</h3>
        <p>Abaixo estão alguns termos e definições. Sua tarefa é combiná-los corretamente no editor de código.</p>
        <ul>
            <li><strong>Termos:</strong> Parameter, Argument, Loop, Function</li>
            <li><strong>Definições:</strong></li>
            <li>a) Um valor passado para uma função quando ela é chamada.</li>
            <li>b) Um bloco de código reutilizável que realiza uma tarefa.</li>
            <li>c) Uma variável na declaração de uma função, que atua como um placeholder para o valor que será passado.</li>
            <li>d) Um bloco de código que se repete.</li>
        </ul>
        <p><strong>Exemplo de Resposta no Editor:</strong></p>
        <pre><code>Function: b) Um bloco de código reutilizável...
Parameter: c) Uma variável na declaração...
...
        </code></pre>
    `
};
