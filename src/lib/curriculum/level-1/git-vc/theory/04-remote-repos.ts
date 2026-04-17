import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: 'git-t4',
    title: 'Repositórios Remotos (GitHub)',
    youtubeVideoId: "usFk-1jAL-M",
    content: `
      <h2>Colaborando com Outros</h2>
      <p>Até agora, tudo o que fizemos foi local, na sua máquina. Para colaborar, usamos repositórios remotos, hospedados em serviços como <strong>GitHub</strong>, GitLab ou Bitbucket.</p>
      <p>Um repositório remoto é uma versão do seu projeto que vive na internet ou em uma rede.</p>
      <h3>Comandos Remotos:</h3>
      <ul>
        <li><code>git clone &lt;url&gt;</code>: Baixa uma cópia completa de um repositório remoto para sua máquina.</li>
        <li><code>git push</code>: Envia seus commits locais para o repositório remoto.</li>
        <li><code>git pull</code>: Busca e mescla as mudanças mais recentes do repositório remoto para o seu diretório de trabalho local.</li>
      </ul>
    `
};
