import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "kt-p18",
  language: "kotlin",
  title: "Projeto Master: Testando Coroutines com runTest",
  description: "Garanta a confiabilidade do motor assíncrono.",
  statement: "Utilize o construtor 'runTest' da biblioteca de testes de coroutines para validar uma função suspensa.",
  isProjectPart: true,
  template: `import kotlinx.coroutines.test.runTest
import kotlin.test.Test

class SyncTest {
    @Test
    fun testProcess() = runTest {
        // Chame a sua função suspend aqui
    }
}`,
  detailedExplanation: `
    <h3>🛠️ Testes de Velocidade da Luz</h3>
    <p>O <code>runTest</code> avança o tempo virtual automaticamente. Isso permite testar delays de horas em milissegundos, garantindo que a lógica do motor de sync está correcta sem esperar tempo real.</p>
  `,
  objectives: [
    {
      id: "run_test_fn",
      description: "Utilize o bloco runTest para o corpo do teste.",
      test: "runTest {"
    }
  ]
};