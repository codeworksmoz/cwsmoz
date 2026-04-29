
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p16",
  language: "html",
  title: "Projeto Master: Padrões ARIA de Interface",
  description: "Implemente comportamentos complexos com semântica rica.",
  statement: "Crie a estrutura de um sistema de abas usando role='tablist', role='tab' e aria-controls.",
  isProjectPart: true,
  youtubeVideoId: "u044iM9xsTM",
  template: ``,
  detailedExplanation: `
    <h3>🦾 Além das Tags Nativas</h3>
    <p>O ARIA estabelece o contrato entre o teu código e o sistema operativo, garantindo que widgets complexos sejam utilizáveis por todos.</p>
  `,
  objectives: [
    { id: "role_tab", description: "Usar role='tablist'", test: "role=\"tablist\"" },
    { id: "aria_ctrl", description: "Usar aria-controls para ligar ao painel", test: "aria-controls=" }
  ]
};
