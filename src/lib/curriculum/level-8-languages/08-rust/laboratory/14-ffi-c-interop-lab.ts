import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "rs-p14",
  language: "rust",
  title: "Projeto Master: FFI - Interoperabilidade com C",
  description: "Ligue o motor Rust a bibliotecas nativas legadas.",
  statement: "Declare uma função externa da biblioteca padrão de C (libc) usando o bloco 'extern \"C\"'.",
  isProjectPart: true,
  template: `extern "C" {
    fn abs(input: i32) -> i32;
}

fn main() {
    // Chame a função C de forma segura
    let res = unsafe { abs(-42) };
}`,
  detailedExplanation: `
    <h3>🌉 A Ponte Nativa</h3>
    <p>FFI permite que o Rust invoque código C sem overhead. Isso permite utilizar drivers de hardware ou bibliotecas de compressão ultra-otimizadas já existentes.</p>
  `,
  objectives: [
    {
      id: "extern_block",
      description: "Defina o bloco extern \"C\".",
      test: "extern \"C\""
    }
  ]
};