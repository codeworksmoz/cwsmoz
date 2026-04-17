import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = { 
    id: 'hci-t1', 
    title: 'Princípios de Usabilidade',
    youtubeVideoId: 'hWc0Fd2AS3s',
    content: `
      <h2>O que é Usabilidade?</h2>
      <p>Usabilidade é a medida da facilidade com que as pessoas podem usar um produto (como um site ou aplicativo) para atingir seus objetivos de forma eficaz, eficiente e satisfatória.</p>
      <h3>As 10 Heurísticas de Usabilidade de Nielsen:</h3>
      <p>Jakob Nielsen, um pioneiro da usabilidade, definiu 10 princípios gerais para o design de interfaces. Alguns dos mais importantes são:</p>
      <ul>
        <li><strong>Visibilidade do estado do sistema:</strong> O sistema deve sempre manter os usuários informados sobre o que está acontecendo (ex: barras de carregamento).</li>
        <li><strong>Consistência e padrões:</strong> Os usuários não devem ter que se perguntar se palavras, situações ou ações diferentes significam a mesma coisa.</li>
        <li><strong>Prevenção de erros:</strong> Um design cuidadoso que previne a ocorrência de problemas é melhor do que boas mensagens de erro.</li>
        <li><strong>Design minimalista e estético:</strong> As interfaces não devem conter informações irrelevantes ou raramente necessárias.</li>
      </ul>
    `
};
