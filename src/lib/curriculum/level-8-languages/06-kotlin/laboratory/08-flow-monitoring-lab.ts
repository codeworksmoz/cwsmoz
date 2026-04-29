import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "kt-p8",
  language: "kotlin",
  title: "Projeto Master: Flow - Cold Streams de Progresso",
  description: "Crie um fluxo de progresso reativo.",
  statement: "Implemente uma função que retorna um Flow<Int> emitindo valores de 0 a 100 com delay de 10ms.",
  isProjectPart: true,
  template: `import kotlinx.coroutines.flow.*
import kotlinx.coroutines.delay

fun getProgressFlow(): Flow<Int> = flow {
    // Implemente o loop de emissão aqui
}`,
  detailedExplanation: `
    <h3>🌊 Cold Streams</h3>
    <p>O <strong>Flow</strong> é a resposta do Kotlin para fluxos de dados assíncronos. Ele é "cold", o que significa que o código dentro do bloco só roda quando alguém começa a "colecionar" os dados.</p>
  `,
  objectives: [
    {
      id: "flow_emit",
      description: "Utilize a função emit() dentro do bloco flow.",
      test: "emit("
    },
    {
      id: "flow_delay",
      description: "Utilize delay() para simular tempo de processamento.",
      test: "delay("
    }
  ]
};