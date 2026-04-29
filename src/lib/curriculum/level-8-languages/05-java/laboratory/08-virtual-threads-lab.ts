import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "jv-p8",
  language: "java",
  title: "Laboratório: Virtual Threads",
  description: "Execute tarefas leves em massa.",
  statement: "Use Executors.newVirtualThreadPerTaskExecutor() para processar uma lista.",
  template: "try (var executor = Executors.newVirtualThreadPerTaskExecutor()) { }",
  detailedExplanation: "<h3>🧵 Project Loom</h3><p>Virtual threads permitem escalar para milhões de execuções simultâneas sem esgotar a memória do sistema operativo.</p>",
  objectives: [
    { id: "obj1", description: "Usar executor de threads virtuais", test: "newVirtualThreadPerTaskExecutor" }
  ]
};