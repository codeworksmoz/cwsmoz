
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p7",
  language: "html",
  title: "Projeto Master: Ganchos de Identidade (Hooks)",
  description: "Prepare o HTML para receber o estilo e a lógica.",
  statement: "Adicione um ID ao seu <main> e crie um parágrafo com um data-attribute personalizado.",
  isProjectPart: true,
  youtubeVideoId: "TQvD-Uq86oY",
  template: ``,
  detailedExplanation: `
    <h3>⚓ Atributos de Identidade</h3>
    <p>O <strong>ID</strong> é o endereço único para o JS; a <strong>Class</strong> é o gancho para o CSS; e o <strong>data-*</strong> é onde guardamos metadados de sistema.</p>
  `,
  objectives: [
    { id: "id", description: "Main com id='main-content'", test: "id=\"main-content\"" },
    { id: "data", description: "Parágrafo com data-status='ready'", test: "data-status=\"ready\"" }
  ]
};
