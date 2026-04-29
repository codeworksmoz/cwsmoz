import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p12",
  language: "html",
  title: "Projeto Master: Constraint Validation Personalizada",
  description: "Use a inteligência nativa do browser para mensagens de erro.",
  statement: "No seu script, utilize o método setCustomValidity() para lançar um erro quando o campo de email estiver vazio.",
  isProjectPart: true,
  template: `const emailInput = document.querySelector('#email');
// Defina a mensagem customizada`,
  detailedExplanation: `
    <h3>🛡️ Validação na Fonte</h3>
    <p>A API de Validação de Restrições permite-te integrar as tuas regras de negócio diretamente no motor de renderização, garantindo mensagens de erro que respeitam o idioma do utilizador.</p>
  `,
  objectives: [
    {
      id: "custom_validity",
      description: "Chame emailInput.setCustomValidity('...') no seu script.",
      hint: "emailInput.setCustomValidity(\"Campo obrigatório\")",
      test: "setCustomValidity"
    }
  ]
};
