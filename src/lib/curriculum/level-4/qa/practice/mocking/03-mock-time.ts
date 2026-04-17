import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'qa-mock-time',
    title: 'Mocking: Tempo',
    statement: 'Escreva um teste para uma função que depende do tempo (ex: `new Date()` ou `Date.now()`). Use os "Timer Mocks" do Jest para controlar o tempo e tornar o teste determinístico.',
    template: `// Use a sintaxe do Jest

// describe('funcaoDependenteDoTempo', () => {
//   beforeEach(() => {
//     jest.useFakeTimers(); // Habilita os mocks de tempo
//   });
//
//   afterEach(() => {
//     jest.useRealTimers(); // Restaura o tempo real
//   });
//
//   it('deve se comportar de uma forma após 10 segundos', () => {
//     // jest.setSystemTime(new Date('2023-01-01T00:00:00.000Z'));
//
//     // ... chama sua função ...
//
//     // Avança o tempo em 10 segundos
//     // jest.advanceTimersByTime(10000);
//
//     // ... faz uma asserção sobre o comportamento após o tempo passar
//   });
// });

// Escreva seu teste abaixo:
`,
    youtubeVideoId: 'T2sv8jXoP4s',
    detailedExplanation: `
        <h2>Controlando o Incontrolável: O Tempo</h2>
        <p>Testes que dependem do tempo atual são instáveis e não repetíveis. As ferramentas de teste modernas permitem que você "mock" o tempo, assumindo o controle total sobre ele.</p>
        <h3>Passo a Passo com Jest</h3>
        <ol>
            <li><strong><code>jest.useFakeTimers()</code>:</strong> Habilita os mocks de tempo. A partir deste ponto, funções como <code>Date.now()</code>, <code>setTimeout</code>, etc., são controladas pelo Jest.</li>
            <li><strong><code>jest.setSystemTime(date)</code>:</strong> Define uma data e hora específicas para o sistema. Qualquer chamada a <code>new Date()</code> retornará esta data.</li>
            <li><strong><code>jest.advanceTimersByTime(ms)</code>:</strong> Avança o tempo virtual em uma quantidade específica de milissegundos, disparando quaisquer <code>setTimeout</code> ou <code>setInterval</code> que estavam pendentes.</li>
            <li><strong>Assert:</strong> Verifique o comportamento da sua função após a passagem do tempo virtual.</li>
            <li><strong><code>jest.useRealTimers()</code>:</strong> É crucial restaurar o tempo real no final de cada teste (usando <code>afterEach</code>) para não afetar outros testes.</li>
        </ol>
    `
};
