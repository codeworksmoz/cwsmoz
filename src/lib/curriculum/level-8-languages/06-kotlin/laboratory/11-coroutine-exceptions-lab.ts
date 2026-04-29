import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "kt-p11",
  language: "kotlin",
  title: "Projeto Master: Resiliência e Exception Handling",
  description: "Evite que uma falha de rede derrube todo o motor.",
  statement: "Utilize o 'CoroutineExceptionHandler' para capturar erros silenciosamente num contexto de lançamento.",
  isProjectPart: true,
  template: `import kotlinx.coroutines.*

val handler = CoroutineExceptionHandler { _, exception ->
    println("Erro capturado: \${exception.message}")
}

fun safeSync(scope: CoroutineScope) {
    // Lance a tarefa usando o handler no contexto
}`,
  detailedExplanation: `
    <h3>🛡️ Blindagem Assíncrona</h3>
    <p>Em concorrência estruturada, um erro num filho cancela o pai. O <strong>CoroutineExceptionHandler</strong> permite interceptar falhas críticas sem interromper o fluxo global do sistema.</p>
  `,
  objectives: [
    {
      id: "handler_context",
      description: "Passe o handler como argumento para o launch.",
      hint: "scope.launch(handler) { ... }",
      test: "launch(handler)"
    }
  ]
};