import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "rs-p15",
  language: "rust",
  title: "Projeto Master: Macros Declarativas (macro_rules!)",
  description: "Automatize a criação de blocos de dados repetitivos.",
  statement: "Crie uma macro 'storage_log!' que imprima uma mensagem com o prefixo '[CWM-ENGINE]'.",
  isProjectPart: true,
  template: `macro_rules! storage_log {
    ($msg:expr) => {
        println!("[CWM-ENGINE] {}", $msg);
    };
}`,
  detailedExplanation: `
    <h3>🪄 Metaprogramação de Tokens</h3>
    <p>Macros em Rust operam sobre a árvore de sintaxe (AST). Elas permitem criar DSLs e reduzir a repetição de código (DRY) de forma segura em tempo de compilação.</p>
  `,
  objectives: [
    {
      id: "macro_rules",
      description: "Utilize macro_rules! para a definição.",
      test: "macro_rules!"
    }
  ]
};