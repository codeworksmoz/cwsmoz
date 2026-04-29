
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p13",
  language: "html",
  title: "Projeto Master: Constraint Validation API",
  description: "Intercete erros nativos com mensagens personalizadas.",
  statement: "Utilize setCustomValidity() num script para lançar um erro quando um campo exceder um valor específico.",
  isProjectPart: true,
  youtubeVideoId: "95v88Oit0H8",
  template: `<script>\n  // Implemente o hook aqui\n</script>`,
  detailedExplanation: `
    <h3>🔍 Erros de Elite</h3>
    <p>Personalizar a mensagem de erro nativa do browser é vital para uma experiência de utilizador (UX) de alta fidelidade.</p>
  `,
  objectives: [
    { id: "setval", description: "Utilizar setCustomValidity()", test: "setCustomValidity(" }
  ]
};
