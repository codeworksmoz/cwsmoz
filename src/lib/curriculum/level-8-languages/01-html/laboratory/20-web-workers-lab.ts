
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p20",
  language: "html",
  title: "Projeto Master: Processamento Paralelo",
  description: "Libere a thread principal de tarefas pesadas.",
  statement: "Instancie um 'new Worker()' para processar cálculos de auditoria em background.",
  isProjectPart: true,
  youtubeVideoId: "8aGhZQkoFbQ",
  template: ``,
  detailedExplanation: `
    <h3>🧵 Multithreading Real</h3>
    <p>Web Workers permitem que o teu site continue fluido (60 FPS) enquanto processas dados massivos em segundo plano.</p>
  `,
  objectives: [
    { id: "worker", description: "Instanciar a classe Worker", test: "new Worker(" }
  ]
};
