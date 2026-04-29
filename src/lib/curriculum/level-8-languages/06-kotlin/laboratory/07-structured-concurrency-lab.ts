import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "kt-p7",
  language: "kotlin",
  title: "Projeto Master: Concorrência Estruturada",
  description: "Gerencie o ciclo de vida de múltiplas tarefas de sync.",
  statement: "Utilize 'coroutineScope' (minúsculo) para garantir que duas tarefas terminem antes de prosseguir.",
  isProjectPart: true,
  template: `import kotlinx.coroutines.*

suspend fun syncBatch() = coroutineScope {
    // Lance duas tarefas e aguarde
}`,
  detailedExplanation: `
    <h3>🏗️ Hierarquia de Tarefas</h3>
    <p>A <strong>Concorrência Estruturada</strong> garante que tarefas órfãs não fiquem rodando em background. Se o pai for cancelado, todos os filhos também serão, protegendo a integridade do motor.</p>
  `,
  objectives: [
    {
      id: "coroutine_scope_fn",
      description: "Utilize a função de suspensão coroutineScope.",
      test: "coroutineScope {"
    }
  ]
};