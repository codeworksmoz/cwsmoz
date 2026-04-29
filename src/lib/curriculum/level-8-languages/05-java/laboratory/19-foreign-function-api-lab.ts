import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "jv-p19",
  language: "java",
  title: "Projeto Master Java: Project Panama (FFI)",
  description: "Invoque bibliotecas nativas de segurança em C diretamente do Java.",
  statement: "Simule a obtenção de um 'SymbolLookup' para carregar uma biblioteca nativa num comentário técnico.",
  isProjectPart: true,
  template: `// Linker linker = Linker.nativeLinker();
// SymbolLookup stdlib = linker.defaultLookup();`,
  detailedExplanation: `
    <h3>🌉 A Ponte para o Nativo</h3>
    <p>O Project Panama substitui o antigo JNI, permitindo que o Java aceda a hardware e bibliotecas nativas com performance extrema e segurança de tipos, sem código C intermediário.</p>
  `,
  objectives: [
    {
      id: "native_linker",
      description: "Utilize o termo 'nativeLinker'.",
      test: "nativeLinker"
    }
  ]
};