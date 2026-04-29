import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "kt-p12",
  language: "kotlin",
  title: "Projeto Master: Multiplatform expect/actual",
  description: "Abstraia o armazenamento de persistência para Android e iOS.",
  statement: "Defina uma 'expect class PlatformStorage' com um método 'save(key: String, value: String)'.",
  isProjectPart: true,
  template: `// Código no Common Main
expect class PlatformStorage {
    fun save(key: String, value: String)
}`,
  detailedExplanation: `
    <h3>🌍 Código Partilhado, Execução Nativa</h3>
    <p>O mecanismo <strong>expect/actual</strong> é o coração do Kotlin Multiplatform (KMP). Ele permite que o motor de sync defina contratos comuns que são implementados usando APIs nativas de cada plataforma.</p>
  `,
  objectives: [
    {
      id: "expect_keyword",
      description: "Utilize a keyword 'expect'.",
      test: "expect class"
    }
  ]
};