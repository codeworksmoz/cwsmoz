import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "rs-p4",
  language: "rust",
  title: "Projeto Master: Traits como Contratos",
  description: "Defina o comportamento do motor de armazenamento.",
  statement: "Defina um trait 'Storable' com o método 'checksum(&self) -> u32' e implemente-o para a struct 'DataBlock'.",
  isProjectPart: true,
  template: `trait Storable {
    fn checksum(&self) -> u32;
}

struct DataBlock {
    content: String,
}

// Implemente o trait aqui
impl Storable for DataBlock {
    fn checksum(&self) -> u32 {
        self.content.len() as u32
    }
}`,
  detailedExplanation: `
    <h3>📜 Polimorfismo de Custo Zero</h3>
    <p>Traits são a forma do Rust definir interfaces. O compilador gera código específico para cada tipo (Monomorphization), atingindo a mesma performance de código escrito à mão.</p>
  `,
  objectives: [
    {
      id: "trait_def",
      description: "Declare o trait Storable.",
      test: "trait Storable"
    },
    {
      id: "impl_block",
      description: "Implemente o trait para DataBlock.",
      test: "impl Storable for DataBlock"
    }
  ]
};