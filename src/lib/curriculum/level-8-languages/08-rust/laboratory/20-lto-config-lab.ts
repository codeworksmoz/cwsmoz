import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "rs-p20",
  language: "rust",
  title: "Projeto Master: Link Time Optimization (LTO)",
  description: "Extraia cada gota de performance no momento do link.",
  statement: "Simule a ativação de LTO num comentário do Cargo.toml de produção. Escreva 'lto = true'.",
  isProjectPart: true,
  template: `# [profile.release]
#  = true`,
  detailedExplanation: `
    <h3>🚀 Otimização Global</h3>
    <p>LTO permite ao compilador otimizar o código através de todas as dependências, eliminando funções mortas e permitindo inlining agressivo entre pacotes.</p>
  `,
  objectives: [
    {
      id: "lto_flag",
      description: "Identifique a flag de LTO.",
      test: "lto"
    }
  ]
};