import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "kt-p2",
  language: "kotlin",
  title: "Projeto Master: Extensões e Lazy Loading",
  description: "Dê superpoderes ao motor e otimize o carregamento.",
  statement: "Adicione uma extensão para sanitizar strings e configure o logger por delegação.",
  isProjectPart: true,
  template: `// CWM SYNC ENGINE - CHECKPOINT 2
data class Update(val id: String, val payload: String?)

fun processUpdate(update: Update?): String = update?.payload ?: "EMPTY"

// Ação 1: Crie uma Extension Function String.sanitize() que remova espaços
fun String.sanitize(): String = this.trim()

class SyncEngine {
    // Ação 2: Inicialize o logger via 'by lazy'
    val logger: String by lazy { "Engine Initialized" }
}`,
  detailedExplanation: `
    <h3>🧩 Evoluindo a Estrutura</h3>
    <p>Utilizamos <strong>Extensions</strong> para manter o código limpo e <strong>Lazy Loading</strong> para garantir que o motor só consuma memória quando o logger for realmente necessário.</p>
  `,
  objectives: [
    { id: "ext_fn", description: "Implementar a extensão String.sanitize().", test: "String.sanitize" },
    { id: "lazy_prop", description: "Usar by lazy para o logger.", test: "by lazy" }
  ]
};