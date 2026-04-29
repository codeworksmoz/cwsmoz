import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "jv-p8",
  language: "java",
  title: "Projeto Master Java: Virtual Threads e Escala",
  description: "Escale o processamento de transações para milhões de pedidos.",
  statement: "Utilize o novo Executor de Threads Virtuais do Java 21 para processar tarefas leves em paralelo.",
  isProjectPart: true,
  template: `import java.util.concurrent.Executors;

public class ScalingService {
    public void processMillions() {
        try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
            // Submeta tarefas aqui
        }
    }
}`,
  detailedExplanation: `
    <h3>🧵 A Revolução do Loom</h3>
    <p>Virtual Threads permitem que você escreva código síncrono e legível que escala como código assíncrono, eliminando a barreira de custo de memória das threads tradicionais do SO.</p>
  `,
  objectives: [
    {
      id: "new_vt_executor",
      description: "Utilize Executors.newVirtualThreadPerTaskExecutor().",
      test: "newVirtualThreadPerTaskExecutor"
    }
  ]
};