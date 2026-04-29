
import type { PracticeExercise } from '../../types';

export const exercise1: PracticeExercise = {
  id: "eng-p1",
  language: "english",
  title: "Vocabulary Lab: Key Terms",
  description: "Connect technical terms with their meanings.",
  statement: "Escreve a tradução correcta para 'Input' e 'Output' para validar o teu conhecimento.",
  template: `// Translation Lab
const input_translation = "";
const output_translation = "";`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold">📚 Vocabulário Prático</h3>
      <p>Este exercício valida se compreendes os conceitos básicos de fluxo de dados:</p>
      <ul class="list-disc ml-6 space-y-2">
        <li><strong>Input</strong>: Refere-se a tudo o que entra no sistema (teclado, rato).</li>
        <li><strong>Output</strong>: Refere-se ao que o sistema produz (ecrã, som).</li>
      </ul>
    </div>
  `,
  objectives: [
    {
      id: "obj1",
      description: "Define input_translation como 'Entrada'",
      hint: "input_translation = 'Entrada'",
      test: "input_translation = \"Entrada\""
    },
    {
      id: "obj2",
      description: "Define output_translation como 'Saída'",
      hint: "output_translation = 'Saída'",
      test: "output_translation = \"Saída\""
    }
  ]
};
