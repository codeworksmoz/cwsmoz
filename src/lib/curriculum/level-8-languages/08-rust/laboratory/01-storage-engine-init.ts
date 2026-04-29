import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "rs-p1",
  language: "rust",
  title: "Projeto Master Rust: High-Perf Storage Engine",
  description: "Inicie o motor de armazenamento focado em segurança de memória.",
  statement: "Implemente uma função que receba a posse (ownership) de uma String e a devolva, validando o conceito de Move.",
  isProjectPart: true,
  template: `fn main() {
    let data = String::from("CWM-ELITE-DATA");
    let result = process_data(data);
    // data já não é válido aqui!
}

fn process_data(input: String) -> String {
    // Retorne o input
    input
}`,
  detailedExplanation: `
    <h3>💾 Engenharia de Baixo Nível</h3>
    <p>O teu projeto master é um motor de base de dados. Entender como os dados "pulam" entre variáveis sem serem copiados (Zero-cost moves) é a chave para a performance do Rust.</p>
  `,
  objectives: [
    {
      id: "move_check",
      description: "Implemente a função process_data para aceitar String (não referência).",
      test: "process_data(input: String)"
    }
  ]
};
