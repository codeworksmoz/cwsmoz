import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: 'git-t2',
    title: 'O Fluxo de Trabalho Básico do Git',
    youtubeVideoId: "OFK5rE42k0c",
    content: `
      <h2>As Três Áreas do Git</h2>
      <p>O Git gerencia arquivos em três áreas principais:</p>
      <ol>
        <li><strong>Working Directory (Diretório de Trabalho):</strong> A pasta no seu computador com os arquivos do projeto.</li>
        <li><strong>Staging Area (Área de Preparação):</strong> Uma área intermediária onde você agrupa as mudanças que quer incluir no seu próximo "snapshot".</li>
        <li><strong>Repository (Repositório - .git):</strong> Onde o Git armazena permanentemente todos os "snapshots" (chamados de <strong>commits</strong>) do seu projeto.</li>
      </ol>

      <h2>Comandos Essenciais:</h2>
      <ul>
        <li><code>git add &lt;arquivo&gt;</code>: Move um arquivo modificado do <em>Working Directory</em> para a <em>Staging Area</em>.</li>
        <li><code>git commit -m "Sua mensagem aqui"</code>: Pega tudo da <em>Staging Area</em>, cria um "snapshot" permanente e o salva no <em>Repositório</em>.</li>
        <li><code>git status</code>: Mostra o estado atual das três áreas.</li>
      </ul>
    `
};
