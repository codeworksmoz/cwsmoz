import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "rs-p2",
  language: "rust",
  title: "Projeto Master: Borrowing e Referências",
  description: "Gerencie o acesso a dados sem transferir a posse.",
  statement: "Implemente uma função 'calculate_size' que receba uma referência imutável (&String) e retorne o seu tamanho, permitindo que a variável original continue a ser usada no motor.",
  isProjectPart: true,
  template: `fn main() {
    let data = String::from("CWM-STORAGE-V1");
    let size = calculate_size(&data);
    println!("Dados: {}, Tamanho: {}", data, size);
}

fn calculate_size(s: &String) -> usize {
    // Implemente a lógica aqui
    0
}`,
  detailedExplanation: `
    <h3>🔍 Empréstimo (Borrowing)</h3>
    <p>Em Rust, referências permitem que funções leiam ou modifiquem dados sem "matar" a variável original. É a base da eficiência do motor de armazenamento, eliminando cópias desnecessárias na memória.</p>
  `,
  objectives: [
    {
      id: "ref_param",
      description: "Use &String no parâmetro da função.",
      test: "&String"
    },
    {
      id: "len_call",
      description: "Chame o método .len() sobre a referência.",
      test: "s.len()"
    }
  ]
};