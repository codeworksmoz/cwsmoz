import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p1-cp",
  language: "cpp",
  title: "Lab C++: Performance e Tipos",
  description: "Declare variáveis em C++.",
  statement: "Declare um inteiro 'idade' com o valor 20.",
  template: "int idade = 0;",
  detailedExplanation: `
    <h3>⚡ C++: O Poder do Hardware</h3>
    <p>C++ é uma linguagem compilada e rápida. Usamos <code>int</code> para números inteiros.</p>
  `,
  objectives: [
    {
      id: "obj1",
      description: "Idade deve ser 20",
      test: "idade = 20"
    }
  ]
};
