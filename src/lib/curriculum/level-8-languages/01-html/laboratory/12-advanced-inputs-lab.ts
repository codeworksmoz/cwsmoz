
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p12",
  language: "html",
  title: "Projeto Master: Validação Nativa Avançada",
  description: "Elimine o JS desnecessário com validação nativa.",
  statement: "Configure um input de telefone com inputmode='tel' e um padrão pattern para números moçambicanos.",
  isProjectPart: true,
  youtubeVideoId: "u044iM9xsTM",
  template: ``,
  detailedExplanation: `
    <h3>🛡️ Validação na Origem</h3>
    <p>O <code>inputmode</code> garante que o telemóvel mostre o teclado correto, enquanto o <code>pattern</code> valida o dado antes do submit.</p>
  `,
  objectives: [
    { id: "inputmode", description: "Usar inputmode='tel'", test: "inputmode=\"tel\"" },
    { id: "pattern", description: "Usar o atributo pattern", test: "pattern=" }
  ]
};
