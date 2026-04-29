import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "kt-p6",
  language: "kotlin",
  title: "Projeto Master: Inicialização de Coroutines",
  description: "Lance a primeira tarefa assíncrona do motor.",
  statement: "Utilize o construtor 'launch' dentro de um CoroutineScope para simular o início de um processo de rede.",
  isProjectPart: true,
  template: `import kotlinx.coroutines.*

class SyncWorker(private val scope: CoroutineScope) {
    fun start() {
        // Lance uma coroutine aqui
    }
}`,
  detailedExplanation: `
    <h3>🧵 Threads Leves</h3>
    <p>Coroutines são a alma do Kotlin moderno. Elas permitem que o motor de sincronização execute milhares de tarefas em paralelo sem o custo proibitivo de memória das threads tradicionais.</p>
  `,
  objectives: [
    {
      id: "launch_call",
      description: "Chame a função scope.launch { ... }.",
      test: "scope.launch"
    }
  ]
};