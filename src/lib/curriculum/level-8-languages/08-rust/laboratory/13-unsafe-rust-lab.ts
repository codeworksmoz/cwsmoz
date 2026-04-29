import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "rs-p13",
  language: "rust",
  title: "Projeto Master: Unsafe Rust e Fronteiras",
  description: "Interaja diretamente com a memória crua para máxima performance.",
  statement: "Implemente um bloco 'unsafe' para dereferenciar um ponteiro cru (raw pointer) de um endereço de memória.",
  isProjectPart: true,
  template: `fn raw_access() {
    let x = 1024;
    let r = &x as *const i32;
    
    // Aceda ao valor de r de forma unsafe aqui
}`,
  detailedExplanation: `
    <h3>⚠️ Saindo da Proteção</h3>
    <p>O modo <code>unsafe</code> não desativa as garantias; ele dá superpoderes para lidar com hardware. É onde a responsabilidade pela segurança passa do compilador para o engenheiro.</p>
  `,
  objectives: [
    {
      id: "unsafe_block",
      description: "Envolva a dereferência em unsafe { ... }.",
      test: "unsafe {"
    }
  ]
};