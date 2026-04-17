import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'game-ex-1', 
    title: 'O Game Loop', 
    statement: 'Descreva as três fases principais de um game loop típico.', 
    template: `// 1. Processar Entradas:
// ...

// 2. Atualizar Estado:
// ...

// 3. Renderizar:
// ...
`,
    youtubeVideoId: 'gB1F9G0JXOo',
    detailedExplanation: `
        <h2>O Coração de Todo Jogo</h2>
        <p>O game loop é o loop principal que roda continuamente enquanto o jogo está sendo jogado. Ele é responsável por manter o jogo funcionando.</p>
        <h3>As Três Fases</h3>
        <ol>
            <li><strong>Processar Entradas (Input):</strong> O jogo verifica o estado de todos os dispositivos de entrada, como teclado, mouse ou controle, para ver o que o jogador está fazendo.</li>
            <li><strong>Atualizar Estado (Update):</strong> Com base nas entradas do jogador e na lógica do jogo, o estado de todos os objetos do jogo é atualizado. Isso inclui mover personagens, aplicar física, verificar colisões, etc.</li>
            <li><strong>Renderizar (Render/Draw):</strong> O jogo desenha o estado atualizado na tela, criando um novo quadro (frame).</li>
        </ol>
        <p>Este ciclo se repete dezenas de vezes por segundo para criar a ilusão de movimento e interatividade.</p>
    `
};
