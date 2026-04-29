import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p1-jv",
  language: "java",
  title: "Lab Java: Tipagem Estática",
  description: "Declare variáveis em Java.",
  statement: "Crie uma variável String chamada 'linguagem' com o valor 'Java'.",
  template: "String linguagem = \"\";",
  detailedExplanation: `
    <h3>☕ Java: Tipos Fortes</h3>
    <p>Em Java, deves sempre declarar o tipo da variável antes do nome. No final, todas as linhas de comando devem terminar com ponto e vírgula <code>;</code>.</p>
  `,
  objectives: [
    {
      id: "obj1",
      description: "Variável linguagem deve ser Java",
      test: "linguagem = \"Java\""
    }
  ]
};
