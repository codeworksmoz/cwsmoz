import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "rs-p16",
  language: "rust",
  title: "Projeto Master: Procedural Macros e Custom Derives",
  description: "Gere código complexo analisando as structs do motor.",
  statement: "Indique a keyword necessária para importar o suporte a macros procedurais. Escreva 'proc_macro'.",
  isProjectPart: true,
  template: `// Para criar um #[derive(MyAutoAudit)]
use ;`,
  detailedExplanation: `
    <h3>⚙️ Plugins do Compilador</h3>
    <p>Macros procedurais recebem código fonte e devolvem novo código. É o segredo da magia de bibliotecas como <i>Serde</i> para serialização automática.</p>
  `,
  objectives: [
    {
      id: "proc_macro_id",
      description: "Identifique o pacote de suporte proc_macro.",
      test: "proc_macro"
    }
  ]
};