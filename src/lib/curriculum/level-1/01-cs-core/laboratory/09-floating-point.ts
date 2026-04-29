
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "cs-p9",
  language: "concept",
  title: "Laboratório: Precisão Numérica",
  description: "Entenda por que 0.1 + 0.2 != 0.3 em binário.",
  statement: "Qual o nome da norma que define a aritmética de ponto flutuante em computadores? Escreva 'IEEE 754'.",
  template: "let norma = '';",
  detailedExplanation: `
    <h3>⚠️ Erros de Arredondamento</h3>
    <p>Computadores representam frações como somas de potências negativas de 2. Algumas frações decimais simples resultam em dízimas infinitas em binário, causando pequenas imprecisões.</p>
  `,
  objectives: [
    {
      id: "obj1",
      description: "Identificar o padrão IEEE 754",
      test: "norma = \"IEEE 754\""
    }
  ]
};
