import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'qa-tdd-bowling',
    title: 'TDD Kata: Jogo de Boliche',
    statement: 'Usando o ciclo TDD (Red-Green-Refactor), crie uma classe ou objeto que calcula a pontuação de um jogo de boliche. O jogo consiste em 10 frames. Em cada frame, o jogador tem duas chances para derrubar 10 pinos.',
    template: `// TDD Kata para um Jogo de Boliche

// Comece com o teste mais simples: um "gutter game" onde nenhum pino é derrubado.
// test('gutter game deve ter pontuação 0', () => {
//   const game = new Game();
//   for (let i = 0; i < 20; i++) {
//     game.roll(0);
//   }
//   expect(game.score()).toBe(0);
// });

// Próximo teste: todos os rolls derrubam 1 pino.
// ...

// Próximo teste: um spare.
// ...

// Próximo teste: um strike.
// ...

// Escreva seus testes e sua classe/objeto aqui:
`,
    youtubeVideoId: 'Z-bZ_K4S30s',
    detailedExplanation: `
        <h2>Modelando um Jogo com TDD</h2>
        <p>O Bowling Game Kata é famoso por forçar o desenvolvedor a lidar com regras de estado que mudam (spares e strikes afetam a pontuação dos frames seguintes).</p>
        <h3>Ciclo Sugerido</h3>
        <ol>
            <li><strong>Gutter Game:</strong> Comece com o caso mais simples. Um jogo onde o jogador não derruba nenhum pino. A pontuação deve ser 0.</li>
            <li><strong>All Ones:</strong> Um jogo onde o jogador derruba 1 pino em cada uma das 20 jogadas. A pontuação deve ser 20.</li>
            <li><strong>One Spare:</strong> Um jogo com um spare. Por exemplo: 5, 5, 3, 0... O spare (10 pinos nas duas primeiras jogadas) vale 10 mais o valor da próxima jogada. Então a pontuação do primeiro frame é 10 + 3 = 13. O total seria 13 + 3 = 16.</li>
            <li><strong>One Strike:</strong> Um jogo com um strike. Por exemplo: 10, 3, 4, 0... O strike (10 pinos na primeira jogada) vale 10 mais o valor das próximas duas jogadas. Então a pontuação do primeiro frame é 10 + 3 + 4 = 17. O total seria 17 + 7 = 24.</li>
            <li><strong>Perfect Game:</strong> O teste final. Um jogo com 12 strikes consecutivos deve ter a pontuação 300.</li>
        </ol>
    `
};
