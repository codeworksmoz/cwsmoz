import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'git-sim-2', 
    title: 'Fazer o Primeiro Commit', 
    statement: 'Adicione um arquivo `README.md` e faça o commit.', 
    template: 'touch README.md\ngit ',
    youtubeVideoId: 'pUnOdL_Yk1s',
    detailedExplanation: `
        <h2>Salvando seu Progresso</h2>
        <p>Um 'commit' é como um ponto de salvamento no seu projeto. Ele guarda um 'snapshot' dos seus arquivos em um determinado momento.</p>
        <h3>Passo a Passo</h3>
        <ol>
            <li>Primeiro, crie um arquivo para adicionar ao repositório. O comando <code>touch README.md</code> cria um arquivo vazio chamado README.md.</li>
            <li>Use <code>git add README.md</code> para mover o novo arquivo para a 'Staging Area'. Isso diz ao Git que você quer incluir este arquivo no próximo commit.</li>
            <li>Use <code>git commit -m "Primeiro commit: adiciona README"</code> para criar o 'snapshot' permanente. A mensagem (flag <code>-m</code>) é importante para descrever o que você fez.</li>
        </ol>
    `
};
