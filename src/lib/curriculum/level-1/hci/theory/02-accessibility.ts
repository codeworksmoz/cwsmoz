import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: 'hci-t2',
    title: 'Acessibilidade na Web (a11y)',
    youtubeVideoId: '3f31oufqFSM',
    content: `
      <h2>Construindo uma Web para Todos</h2>
      <p>Acessibilidade (muitas vezes abreviada como <strong>a11y</strong>) é a prática de garantir que seus sites e aplicativos possam ser usados por todas as pessoas, independentemente de suas deficiências.</p>
      <h3>Quem se beneficia da acessibilidade?</h3>
      <p>Todos! Isso inclui pessoas com:</p>
      <ul>
        <li>Deficiências visuais (cegueira, baixa visão, daltonismo)</li>
        <li>Deficiências auditivas</li>
        <li>Deficiências motoras (que podem usar apenas teclado ou tecnologias assistivas)</li>
        <li>Deficiências cognitivas</li>
      </ul>
      <h3>Práticas Básicas de Acessibilidade:</h3>
      <ul>
        <li>Usar <strong>HTML semântico</strong> corretamente.</li>
        <li>Fornecer <strong>texto alternativo (alt text)</strong> para todas as imagens.</li>
        <li>Garantir <strong>bom contraste</strong> entre o texto e o fundo.</li>
        <li>Garantir que tudo possa ser navegado e operado <strong>apenas com o teclado</strong>.</li>
      </ul>
    `
};
