
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p19",
  language: "html",
  title: "Projeto Master: Encapsulamento com Shadow DOM",
  description: "Isole estilos e estrutura de forma impenetrável.",
  statement: "Utilize attachShadow({ mode: 'open' }) para isolar a renderização do seu componente master.",
  isProjectPart: true,
  youtubeVideoId: "8ME9u065vD4",
  template: ``,
  detailedExplanation: `
    <h3>🌑 O Escudo do Componente</h3>
    <p>O Shadow DOM garante que o CSS do site não 'vaze' para dentro do seu componente, protegendo a sua integridade visual.</p>
  `,
  objectives: [
    { id: "ashadow", description: "Chamar attachShadow()", test: "attachShadow" }
  ]
};
