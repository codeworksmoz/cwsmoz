import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "js-p9",
  language: "html",
  title: "Projeto Master: Segurança com Sanitizer API",
  description: "Proteja o seu projeto contra injeção de scripts maliciosos.",
  statement: "Utilize a lógica de sanitização para limpar uma string de HTML vinda de um input antes de a inserir no DOM.",
  isProjectPart: true,
  template: `const dirtyHTML = '<img src=x onerror=alert(1)> Ola!';
// Utilize uma técnica de limpeza segura
function safeInsert(container, html) {
    // Implemente aqui
}`,
  detailedExplanation: `
    <h3>🛡️ Blindagem de Dados</h3>
    <p>Nunca uses <code>innerHTML</code> diretamente com dados do utilizador. O Sanitizer API (ou técnicas equivalentes como <code>textContent</code> ou templates inertes) é a primeira linha de defesa contra XSS (Cross-Site Scripting).</p>
  `,
  objectives: [
    {
      id: "no_innerhtml",
      description: "Evite o uso direto de innerHTML sem tratamento.",
      test: "!"
    },
    {
      id: "safe_method",
      description: "Use textContent ou instancie um objeto Sanitizer fictício.",
      test: "textContent"
    }
  ]
};
