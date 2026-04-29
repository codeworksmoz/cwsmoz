import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "rs-p17",
  language: "rust",
  title: "Projeto Master: Unit Testing e TDD",
  description: "Garanta a integridade matemática do sistema de ficheiros.",
  statement: "Adicione um módulo de teste com a anotação #[cfg(test)] e uma função que valide uma igualdade.",
  isProjectPart: true,
  template: `#[cfg(test)]
mod tests {
    #[test]
    fn test_storage_logic() {
        // Use a macro de asserção aqui
    }
}`,
  detailedExplanation: `
    <h3>🛠️ Testes de Primeira Classe</h3>
    <p>Em Rust, os testes vivem no mesmo ficheiro que o código. O compilador garante que eles nunca vão para o binário final de produção (Release).</p>
  `,
  objectives: [
    {
      id: "assert_eq",
      description: "Utilize a macro assert_eq!(2, 1+1).",
      test: "assert_eq!"
    }
  ]
};