import type { PracticeExercise } from '../../types';

export const exercise: PracticeExercise = {
  id: "cs-p3",
  language: "concept",
  title: "Laboratório: Simplificação Lógica",
  description: "Aplique propriedades da álgebra booleana.",
  statement: "Qual o resultado simplificado da expressão (A AND 1)? Escreva apenas a letra 'A'.",
  template: `let resultadoSimplificado = "";`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold">🧠 Propriedade da Identidade</h3>
      <p>Na álgebra booleana, qualquer valor comparado com 1 (Verdadeiro) usando o operador <strong>AND</strong> resulta no próprio valor.</p>
      <div class="bg-muted p-3 rounded font-code">
        A AND 1 = A<br/>
        A AND 0 = 0
      </div>
    </div>
  `,
  objectives: [
    {
      id: "obj1",
      description: "Identificar o resultado da simplificação",
      test: "resultadoSimplificado = \"A\""
    }
  ]
};