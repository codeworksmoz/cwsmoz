import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = { 
    id: 'git-t1', 
    title: 'O que é Controle de Versão?',
    youtubeVideoId: "24g_TG5k6w0",
    content: `
      <h2>Por que controlar versões?</h2>
      <p>Imagine que você está escrevendo um livro. Você salva versões como <code>livro_v1.doc</code>, <code>livro_v2.doc</code>, <code>livro_final.doc</code>, <code>livro_final_agora_vai.doc</code>. Fica uma bagunça, certo?</p>
      <p>Um <strong>Sistema de Controle de Versão (VCS)</strong> é um software que ajuda a gerenciar as mudanças em arquivos ao longo do tempo. Ele permite que você:</p>
      <ul>
        <li>Registre "snapshots" (fotos) do seu projeto em momentos específicos.</li>
        <li>Volte para versões antigas se algo der errado.</li>
        <li>Compare diferentes versões para ver o que mudou.</li>
        <li>Trabalhe em equipe no mesmo projeto sem sobrescrever o trabalho um do outro.</li>
      </ul>
      <h2>Git</h2>
      <p><strong>Git</strong> é o VCS mais popular do mundo. É um sistema distribuído, o que significa que cada desenvolvedor tem uma cópia completa do histórico do projeto em sua máquina local.</p>
    `
};
