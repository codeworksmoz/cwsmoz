import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "math-p1",
  language: "concept",
  title: "Laboratório: Tabela da Verdade da Implicação",
  description: "Verifique o valor lógico de P → Q.",
  statement: "Se P é Verdadeiro (V) e Q é Falso (F), qual o valor de P → Q? Escreva 'F'.",
  template: "let resultado = '';",
  detailedExplanation: `
    <h3>🔍 O Mistério da Implicação</h3>
    <p>A implicação <code>P → Q</code> (Se P, então Q) é muito usada em condicionais de programação. A única forma de quebrá-la é ter uma <strong>premissa verdadeira</strong> levando a uma <strong>conclusão falsa</strong>.</p>
  `,
  objectives: [
    {
      id: "obj1",
      description: "Determinar o valor de V → F",
      test: "resultado = 'F'"
    }
  ]
};
