import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "cs-p8",
  language: "concept",
  title: "Laboratório: Identificação",
  description: "Classificação de estilos.",
  statement: "A Programação Orientada a Objetos é conhecida pela sigla? Escreva 'POO'.",
  template: `let sigla = "";`,
  detailedExplanation: `<h3>🧩 Mentalidade</h3><p>Escolher o paradigma certo pode tornar o problema muito mais simples de resolver.</p>`,
  objectives: [
    {
      id: "obj1",
      description: "Sigla do paradigma de objetos",
      test: "sigla = \"POO\""
    }
  ]
};