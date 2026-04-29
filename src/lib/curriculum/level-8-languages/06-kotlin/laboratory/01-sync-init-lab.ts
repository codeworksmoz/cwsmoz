import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "kt-p1",
  language: "kotlin",
  title: "Projeto Master: Fundação do Sync Engine",
  description: "Inicie o motor de sincronização com segurança nula nativa.",
  statement: "Defina o modelo 'Update' e a lógica de processamento resiliente.",
  isProjectPart: true,
  template: `// CWM SYNC ENGINE - CHECKPOINT 1
// Inicie a construção aqui

data class Update(
    val id: String,
    val payload: String?
)

fun processUpdate(update: Update?): String {
    // Ação 1: Retorne o payload se existir, ou "EMPTY" se for nulo usando ?:
    return update?.payload ?: "EMPTY"
}`,
  detailedExplanation: `
    <h3>🚀 Iniciando o Motor</h3>
    <p>O teu projeto master será um motor de sincronização multiplataforma. O primeiro passo é garantir que o processamento de mensagens externas (que podem vir nulas) seja 100% resiliente.</p>
  `,
  objectives: [
    { id: "elvis", description: "Utilize o Elvis Operator (?:) para o valor padrão.", test: "?:" }
  ]
};