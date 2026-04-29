import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "rs-p11",
  language: "rust",
  title: "Projeto Master: Closures e Fn Traits",
  description: "Injete lógica de transformação personalizada no motor.",
  statement: "Crie uma função que aceite um closure 'Fn(i32) -> i32' para processar metadados de blocos.",
  isProjectPart: true,
  template: `fn transform_block<F>(val: i32, operation: F) -> i32 
where F: Fn(i32) -> i32 {
    operation(val)
}`,
  detailedExplanation: `
    <h3>🎭 Lambdas de Elite</h3>
    <p>Rust distingue entre closures que apenas leem (Fn), que mutam (FnMut) e que consomem (FnOnce), garantindo segurança mesmo em lógica injetada externamente.</p>
  `,
  objectives: [
    {
      id: "fn_bound",
      description: "Use o Trait Bound Fn na definição genérica.",
      test: "where F: Fn("
    }
  ]
};