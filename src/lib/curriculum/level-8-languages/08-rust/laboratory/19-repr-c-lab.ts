import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "rs-p19",
  language: "rust",
  title: "Projeto Master: Memory Layout e Alinhamento",
  description: "Controle o layout físico das structs para protocolos binários.",
  statement: "Utilize o atributo #[repr(C)] para garantir que a struct tem um layout compatível com C.",
  isProjectPart: true,
  template: `#[repr(C)]
struct BinaryHeader {
    magic: u32,
    version: u16,
}`,
  detailedExplanation: `
    <h3>📐 Engenharia de Memória</h3>
    <p>O Rust reordena campos para poupar espaço. O <code>repr(C)</code> força a ordem exata, essencial para mapear memória de hardware ou protocolos de rede.</p>
  `,
  objectives: [
    {
      id: "repr_c",
      description: "Adicione o atributo #[repr(C)] à struct.",
      test: "#[repr(C)]"
    }
  ]
};