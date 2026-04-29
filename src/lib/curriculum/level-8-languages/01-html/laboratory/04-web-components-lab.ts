import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p5",
  language: "html",
  title: "Projeto Master: Templates Nativos",
  description: "Prepare estruturas para componentes reutilizáveis.",
  statement: "Crie um template que será usado para renderizar perfis de usuários dinamicamente.",
  isProjectPart: true,
  template: ``,
  detailedExplanation: `
    <h3>🏗️ Blueprints HTML</h3>
    <p>O elemento <code><template></code> permite guardar HTML que o browser ignora até que o seu JavaScript decida usá-lo. É a base da componentização moderna.</p>
  `,
  objectives: [
    {
      id: "template_tag",
      description: "Crie um elemento <template> com id 'user-template'.",
      hint: "<template id=\"user-template\"></template>",
      test: "id=\"user-template\""
    },
    {
      id: "content",
      description: "Dentro do template, adicione uma div com a classe 'user-card'.",
      hint: "<div class=\"user-card\"></div>",
      test: "class=\"user-card\""
    }
  ]
};
