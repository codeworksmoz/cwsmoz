import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "kt-p3",
  language: "kotlin",
  title: "Projeto Master: Sealed Interfaces e Estados de Sync",
  description: "Modele os estados do motor de forma exaustiva e segura.",
  statement: "Defina uma 'sealed interface SyncState' com os estados 'Idle', 'Syncing(progress: Int)' e 'Error(msg: String)'.",
  isProjectPart: true,
  template: `// Defina a hierarquia de estados aqui
sealed interface SyncState

object Idle : SyncState
data class Syncing(val progress: Int) : SyncState
data class Error(val msg: String) : SyncState

fun handleState(state: SyncState): String {
    return when(state) {
        // Implemente o when exaustivo
        else -> ""
    }
}`,
  detailedExplanation: `
    <h3>🛡️ Máquina de Estados Robusta</h3>
    <p>Utilizar <strong>Sealed Interfaces</strong> garante que o compilador verifique se todos os estados possíveis (Idle, Syncing, Error) foram tratados no <code>when</code>, eliminando bugs de estados esquecidos em produção.</p>
  `,
  objectives: [
    {
      id: "sealed",
      description: "Use a keyword 'sealed interface'.",
      test: "sealed interface"
    },
    {
      id: "when_check",
      description: "Implemente o pattern matching com 'when'.",
      test: "when(state)"
    }
  ]
};