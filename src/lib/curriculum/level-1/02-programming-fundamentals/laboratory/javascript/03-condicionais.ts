import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p3-js",
  language: "javascript",
  title: "Lab JS: Verificador de Idade",
  description: "Use condicionais para validar acesso.",
  statement: "Crie uma condição que defina 'podeEntrar' como true se a idade for maior ou igual a 18.",
  template: `let idade = 20;
let podeEntrar = false;

// Escreve o teu IF abaixo`,
  detailedExplanation: `<p>Utiliza a estrutura <code>if (condicao) { ... }</code>.</p>`,
  objectives: [
    {
      id: "obj1",
      description: "Definir podeEntrar como true se idade >= 18",
      test: "if (idade >= 18) { podeEntrar = true; }"
    }
  ]
};