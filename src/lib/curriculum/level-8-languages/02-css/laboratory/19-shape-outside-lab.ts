import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "css-p19",
  language: "html",
  title: "Projeto Master: Layouts Orgânicos com shape-outside",
  description: "Faça o texto fluir ao redor de formas não retangulares.",
  statement: "Aplique 'shape-outside: circle()' a uma imagem flutuante para que o texto a contorne perfeitamente.",
  isProjectPart: true,
  template: ``,
  detailedExplanation: `
    <h3>🌀 Quebrando o Retângulo</h3>
    <p>O <code>shape-outside</code> permite criar layouts com cara de revista impressa, onde o texto respeita as curvas e formas do conteúdo visual.</p>
  `,
  objectives: [
    {
      id: "shape_outside",
      description: "Aplique a forma circular ao redor do float.",
      test: "shape-outside: circle"
    }
  ]
};
