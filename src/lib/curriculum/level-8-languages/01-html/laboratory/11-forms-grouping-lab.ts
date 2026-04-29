
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p11",
  language: "html",
  title: "Projeto Master: Agrupamento de Formulários",
  description: "Organize formulários complexos para legibilidade.",
  statement: "Utilize <fieldset> e <legend> para agrupar campos de contacto no seu formulário.",
  isProjectPart: true,
  youtubeVideoId: "u044iM9xsTM",
  template: ``,
  detailedExplanation: `
    <h3>📝 Agrupamento Lógico</h3>
    <p>O par <code>fieldset</code> e <code>legend</code> fornece contexto semântico e visual para grupos de inputs relacionados.</p>
  `,
  objectives: [
    { id: "fieldset", description: "Utilizar <fieldset>", test: "<fieldset>" },
    { id: "legend", description: "Utilizar <legend>", test: "<legend>" }
  ]
};
