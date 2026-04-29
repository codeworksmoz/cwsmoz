import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "go-p20",
  language: "go",
  title: "Projeto Master: CGO Interoperabilidade (Conceitual)",
  description: "Utilize o poder de bibliotecas C legadas.",
  statement: "Indique o comentário especial necessário para o compilador do Go detetar código C. Escreva 'import \"C\"'.",
  isProjectPart: true,
  template: `/*
#include <stdio.h>
*/
import ""`,
  detailedExplanation: `
    <h3>🌉 A Ponte para o Nativo</h3>
    <p>O <strong>CGO</strong> permite invocar funções C diretamente do Go. Embora tenha um custo de performance na transição, é essencial para utilizar drivers de hardware ou bibliotecas matemáticas pesadas já existentes.</p>
  `,
  objectives: [
    {
      id: "cgo_import",
      description: "Identifique o import especial do CGO.",
      test: "import \"C\""
    }
  ]
};
