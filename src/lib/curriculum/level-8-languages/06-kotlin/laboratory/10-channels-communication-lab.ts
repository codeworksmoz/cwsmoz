import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "kt-p10",
  language: "kotlin",
  title: "Projeto Master: Channels e Comunicação entre Coroutines",
  description: "Passe mensagens de log de forma segura entre threads.",
  statement: "Crie um Channel de Strings e implemente o envio de uma mensagem 'SYNC_STARTED'.",
  isProjectPart: true,
  template: `import kotlinx.coroutines.channels.Channel

val logChannel = Channel<String>()

suspend fun sendLog() {
    // Envie a mensagem aqui
}`,
  detailedExplanation: `
    <h3>📦 Pipes Assíncronos</h3>
    <p><strong>Channels</strong> fornecem uma forma de transferir streams de valores. Enquanto o Flow é para produtores passivos, o Channel é ideal para comunicação ativa e segura entre coroutines.</p>
  `,
  objectives: [
    {
      id: "channel_send",
      description: "Utilize o método suspend send() do canal.",
      test: "logChannel.send("
    }
  ]
};