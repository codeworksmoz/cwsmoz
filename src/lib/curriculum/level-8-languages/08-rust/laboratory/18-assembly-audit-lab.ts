import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "rs-p18",
  language: "rust",
  title: "Projeto Master: Zero-cost Abstractions Audit",
  description: "Analise a eficiência do código de máquina gerado.",
  statement: "Identifique qual comando do Cargo mostra o assembly gerado para auditar o inlining. Escreva 'cargo asm'.",
  isProjectPart: true,
  template: `// Comando para auditar o silício:
// cargo ;`,
  detailedExplanation: `
    <h3>🔍 Olhando o Binário</h3>
    <p>Um Engenheiro Master audita o binário. O objetivo é garantir que as abstrações (Iteradores, Traits) desapareçam e se tornem instruções de CPU puras.</p>
  `,
  objectives: [
    {
      id: "asm_tool",
      description: "Identifique a ferramenta de auditoria de assembly.",
      test: "asm"
    }
  ]
};