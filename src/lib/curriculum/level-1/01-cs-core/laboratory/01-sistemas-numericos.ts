import type { PracticeExercise } from '../../types';

export const exercise: PracticeExercise = {
  id: "cs-p1",
  language: "concept",
  title: "Laboratório: Conversão Binária",
  description: "Pratique a lógica de bits e bytes.",
  statement: "Converta o número decimal 5 para binário usando exatamente 4 bits no editor. (Ex: 0000)",
  template: `// DESAFIO DE LÓGICA PURA
// Escreva apenas a sequência de 0s e 1s na linha abaixo:
`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🧠 Raciocínio Binário</h3>
      <p>Neste desafio, não estamos a programar, estamos a pensar como a máquina. O computador usa posições de potência de 2.</p>
      <div class="bg-muted p-4 rounded-xl font-mono text-center space-y-2 border border-primary/20">
        <p class="text-[10px] text-muted-foreground">POSIÇÕES DE 4 BITS:</p>
        <p class="text-lg">8 | 4 | 2 | 1</p>
      </div>
      <p>Para o número <strong>5</strong>:</p>
      <ul class="list-disc ml-6 space-y-1 text-xs">
        <li>Cabe 8? Não (0)</li>
        <li>Cabe 4? Sim (1). Resta 1.</li>
        <li>Cabe 2? Não (0).</li>
        <li>Cabe 1? Sim (1).</li>
      </ul>
      <p class="font-bold text-green-500">O resultado final deve ser a sequência destes quatro bits no editor.</p>
    </div>
  `,
  objectives: [
    {
      id: "obj1",
      description: "Escrever a sequência lógica 0101 no editor",
      hint: "O número 5 em 4 bits é representado por 0101",
      test: "0101"
    }
  ]
};
