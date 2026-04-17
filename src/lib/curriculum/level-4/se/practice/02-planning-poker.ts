import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'se-ex-2',
    title: 'Simulação de Planning Poker',
    statement: 'Você receberá 3 histórias de usuário. Estime o esforço de cada uma usando Story Points (sequência de Fibonacci: 1, 2, 3, 5, 8) e justifique sua estimativa.',
    template: `// História 1: "Como um usuário, quero fazer login com email e senha."
// Estimativa: ...
// Justificativa: ...

// História 2: "Como um usuário, quero resetar minha senha se eu a esquecer."
// Estimativa: ...
// Justificativa: ...

// História 3: "Como um administrador, quero ver um painel com as estatísticas de novos usuários."
// Estimativa: ...
// Justificativa: ...
`,
    youtubeVideoId: 'h-rYjI-kYk0', // Reusing a relevant video
    detailedExplanation: `
        <h2>Estimando com Story Points</h2>
        <p>Story Points são uma medida relativa de esforço, complexidade e incerteza. Não são horas. Uma história de 2 pontos deve ser aproximadamente o dobro do esforço de uma de 1 ponto.</p>
        <h3>Passo a Passo</h3>
        <ol>
            <li><strong>Leia cada história:</strong> Entenda o que precisa ser feito.</li>
            <li><strong>Compare com a "base":</strong> Pense em uma história de 1 ou 2 pontos como referência (ex: uma simples correção de texto).</li>
            <li><strong>Atribua um valor de Fibonacci:</strong> Compare a complexidade, o esforço e a incerteza da história atual com sua base.</li>
            <li><strong>Justifique:</strong> Escreva uma breve explicação para sua estimativa. Por que você acha que é um 3 e não um 2 ou um 5? Isso é o mais importante para a discussão em equipe.</li>
        </ol>
        <p>Não existe resposta "certa". O objetivo é praticar o pensamento relativo e a comunicação por trás da estimativa.</p>
    `
};
