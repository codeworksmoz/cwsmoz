import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p2",
  language: "html",
  title: "Projeto Master: Estrutura Semântica",
  description: "Dê significado ao seu documento usando as tags corretas.",
  statement: "Dentro da tag <body>, adicione as áreas principais do site para que tecnologias assistivas entendam a hierarquia.",
  isProjectPart: true,
  template: ``,
  detailedExplanation: `
    <h3>🏗️ O Corpo do Documento</h3>
    <p>Um site profissional não usa apenas <code><div></code>. Ele usa tags que descrevem o conteúdo. Vamos adicionar as três regiões obrigatórias.</p>
  `,
  objectives: [
    {
      id: "header",
      description: "Adicione uma tag <header> para o cabeçalho.",
      hint: "<header></header>",
      test: "<header>"
    },
    {
      id: "main",
      description: "Adicione uma tag <main> com o atributo role='main' para o conteúdo principal.",
      hint: "<main role=\"main\"></main>",
      test: "role=\"main\""
    },
    {
      id: "footer",
      description: "Adicione uma tag <footer> para o rodapé.",
      hint: "<footer></footer>",
      test: "<footer>"
    }
  ]
};
