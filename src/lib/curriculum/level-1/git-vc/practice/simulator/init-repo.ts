import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'git-sim-1', 
    title: 'Inicializar Repositório', 
    statement: 'Use o comando `git init` para iniciar um novo repositório.', 
    template: 'git ',
    youtubeVideoId: 'UBAX-1IeK4I',
    detailedExplanation: `
        <h2>Iniciando seu Projeto Git</h2>
        <p>O comando <code>git init</code> é o primeiro passo na criação de um novo repositório Git. Ele cria uma nova subpasta chamada <code>.git</code> no seu diretório atual, que contém todos os arquivos de metadados necessários para o repositório.</p>
        <h3>Passo a Passo</h3>
        <ol>
            <li>No terminal, digite <code>git init</code>.</li>
            <li>Pressione Enter.</li>
            <li>Você verá uma mensagem como "Initialized empty Git repository in /caminho/para/seu/projeto/.git/".</li>
        </ol>
        <p>É isso! Você agora tem um repositório Git local pronto para começar a versionar seus arquivos.</p>
    `
};
