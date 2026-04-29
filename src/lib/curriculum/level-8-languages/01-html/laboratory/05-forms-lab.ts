import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p6",
  language: "html",
  title: "Projeto Master: Formulário de Inscrição",
  description: "Crie um ponto de entrada de dados profissional.",
  statement: "No <main>, adicione um formulário com validação nativa e labels acessíveis.",
  isProjectPart: true,
  template: ``,
  detailedExplanation: `
    <h3>📝 Conversão e Acessibilidade</h3>
    <p>Formulários são a parte mais importante de uma aplicação. Vamos garantir que funcionam bem em mobile e para leitores de ecrã.</p>
  `,
  objectives: [
    {
      id: "form",
      description: "Abra a tag <form> com método 'POST'.",
      hint: "<form method=\"POST\"></form>",
      test: "method=\"POST\""
    },
    {
      id: "label",
      description: "Adicione um <label> com o atributo 'for' ligado ao input de nome.",
      hint: "<label for=\"username\">Nome:</label>",
      test: "for=\"username\""
    },
    {
      id: "input",
      description: "Crie um input com o id 'username' e o atributo 'required'.",
      hint: "<input id=\"username\" required>",
      test: "required"
    }
  ]
};
