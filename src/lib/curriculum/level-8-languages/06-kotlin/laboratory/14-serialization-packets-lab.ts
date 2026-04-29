import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "kt-p14",
  language: "kotlin",
  title: "Projeto Master: Kotlinx Serialization",
  description: "Transforme objetos em JSON para envio na rede.",
  statement: "Anote a classe 'Update' com @Serializable para permitir a conversão automática.",
  isProjectPart: true,
  template: `import kotlinx.serialization.Serializable

// Anote a classe aqui
@Serializable
data class SyncPacket(val id: Int, val content: String)`,
  detailedExplanation: `
    <h3>📦 Serialização Multiplataforma</h3>
    <p>A biblioteca <code>kotlinx.serialization</code> não usa reflexão (na maioria dos casos), o que a torna extremamente rápida e compatível com KMP e GraalVM.</p>
  `,
  objectives: [
    {
      id: "serializable_attr",
      description: "Adicione a anotação @Serializable.",
      test: "@Serializable"
    }
  ]
};