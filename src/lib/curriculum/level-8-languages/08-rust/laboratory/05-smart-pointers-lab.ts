import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "rs-p5",
  language: "rust",
  title: "Projeto Master: Smart Pointers - Box<T>",
  description: "Aloque dados no Heap para estruturas recursivas.",
  statement: "Crie um nó de uma árvore de indexação usando Box para gerir o ponteiro recursivo para o próximo nó.",
  isProjectPart: true,
  template: `enum IndexNode {
    Entry(String, Box<IndexNode>),
    Empty,
}

fn main() {
    // Crie uma entrada aqui
}`,
  detailedExplanation: `
    <h3>📦 Alocação Dinâmica</h3>
    <p><code>Box<T></code> permite guardar dados no Heap em vez da Stack. É essencial para o motor de indexação, onde o tamanho da árvore não pode ser determinado em tempo de compilação.</p>
  `,
  objectives: [
    {
      id: "box_recursive",
      description: "Use Box<IndexNode> na variante Entry.",
      test: "Box<IndexNode>"
    }
  ]
};