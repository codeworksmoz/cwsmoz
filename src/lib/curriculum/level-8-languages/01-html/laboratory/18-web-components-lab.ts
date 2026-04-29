
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p18",
  language: "html",
  title: "Projeto Master: Templates e Custom Elements",
  description: "Construa o seu primeiro componente nativo.",
  statement: "Defina um <template> com id='card-template' e utilize a API customElements no script.",
  isProjectPart: true,
  youtubeVideoId: "8ME9u065vD4",
  template: ``,
  detailedExplanation: `
    <h3>🏗️ Peças de Lego Nativas</h3>
    <p>Os Web Components permitem criar uma biblioteca de UI que sobrevive a qualquer framework.</p>
  `,
  objectives: [
    { id: "tpl", description: "Criar tag <template>", test: "<template" },
    { id: "ced", description: "Chamar customElements.define", test: "customElements.define" }
  ]
};
