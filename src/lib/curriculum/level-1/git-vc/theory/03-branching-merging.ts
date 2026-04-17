import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: 'git-t3',
    title: 'Branching e Merging',
    youtubeVideoId: "4EYpPUIYauE",
    content: `
      <h2>Trabalhando em Paralelo com Branches</h2>
      <p>Um <strong>branch</strong> (ramo) é como uma linha do tempo independente de desenvolvimento. Por padrão, você começa no branch principal, geralmente chamado de <code>main</code> ou <code>master</code>.</p>
      <p>Você pode criar um novo branch para trabalhar em uma nova funcionalidade (ex: <code>feature/login-page</code>) sem afetar o código principal. Isso é essencial para o trabalho em equipe.</p>
      <h3>Comandos de Branch:</h3>
      <ul>
        <li><code>git branch &lt;nome-do-branch&gt;</code>: Cria um novo branch.</li>
        <li><code>git checkout &lt;nome-do-branch&gt;</code> ou <code>git switch &lt;nome-do-branch&gt;</code>: Muda para o branch especificado.</li>
      </ul>
      <h2>Merging</h2>
      <p>Depois que sua funcionalidade no branch está pronta e testada, você pode fazer o <strong>merge</strong> (fusão) dela de volta para o branch <code>main</code>, incorporando suas mudanças ao código principal.</p>
      <ul>
        <li><code>git merge &lt;nome-do-branch&gt;</code>: Faz a fusão do branch especificado no seu branch atual.</li>
      </ul>
    `
};
