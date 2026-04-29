import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p19",
  language: "html",
  title: "Projeto Master: Inicialização WebGPU",
  description: "Detete se o hardware do utilizador suporta a próxima geração de gráficos.",
  statement: "Implemente um script que verifique a presença da API 'gpu' no objeto 'navigator'.",
  isProjectPart: true,
  template: `async function checkGPU() {
    // Verifique o suporte aqui
}`,
  detailedExplanation: `
    <h3>🎮 Contexto de Próxima Geração</h3>
    <p>A WebGPU é a evolução do WebGL. Antes de inicializar um motor de jogos ou IA pesada, o teu HTML deve validar se o ambiente é compatível.</p>
  `,
  objectives: [
    {
      id: "gpu_check",
      description: "Verifique se 'gpu' existe dentro de 'navigator'.",
      hint: "if (navigator.gpu) { ... }",
      test: "navigator.gpu"
    }
  ]
};
