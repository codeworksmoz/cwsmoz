import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "kt-p19",
  language: "kotlin",
  title: "Projeto Master: Construindo a DSL do Motor",
  description: "Crie uma API fluida e expressiva para configurar o sync.",
  statement: "Utilize um 'Function Literal with Receiver' para criar uma DSL de configuração.",
  isProjectPart: true,
  template: `class SyncConfig {
    var endpoint: String = ""
}

fun startSync(init: SyncConfig.() -> Unit) {
    val config = SyncConfig().apply(init)
    println("Iniciando sync em: \${config.endpoint}")
}

// Chame a DSL:
// startSync { endpoint = "api.cwm.mz" }`,
  detailedExplanation: `
    <h3>💎 Expressividade Master</h3>
    <p>O segredo das DSLs em Kotlin (como o Gradle ou Compose) são os <strong>Function Literals with Receiver</strong>. Eles permitem que transformes um bloco de código num contexto de classe, criando APIs que parecem linguagem natural.</p>
  `,
  objectives: [
    {
      id: "dsl_receiver",
      description: "Defina o parâmetro de entrada como SyncConfig.() -> Unit.",
      test: "SyncConfig.() -> Unit"
    }
  ]
};