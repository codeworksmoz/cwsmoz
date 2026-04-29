import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "kt-p1",
  language: "kotlin",
  title: "Projeto Master Kotlin: Sync Engine",
  description: "Inicie o motor de sincronização multiplataforma.",
  statement: "Defina uma classe de dados para um 'Update' que aceite um ID obrigatório e uma mensagem opcional (nullable), e implemente uma função de processamento seguro.",
  isProjectPart: true,
  template: `// Defina o modelo de dados e a lógica de processamento seguro
data class Update(
    val id: String,
    val payload: String?
)

fun processUpdate(update: Update?): String {
    // Retorne o payload se existir, ou "EMPTY" se for nulo
    return ""
}`,
  detailedExplanation: `
    <h3>🔄 Motor de Sincronização</h3>
    <p>O teu projeto master será um motor de sincronização de dados. O primeiro passo é garantir que o processamento de mensagens externas (que podem vir nulas da rede) seja 100% resiliente.</p>
  `,
  objectives: [
    {
      id: "safe_call",
      description: "Use o Elvis Operator (?:) para retornar 'EMPTY' em caso de nulo.",
      hint: "update?.payload ?: \"EMPTY\"",
      test: "?:"
    }
  ]
};
