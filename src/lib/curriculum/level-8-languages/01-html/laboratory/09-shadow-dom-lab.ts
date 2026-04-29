import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p9",
  language: "html",
  title: "Projeto Master: Encapsulamento com Shadow DOM",
  description: "Crie uma fronteira de estilo impenetrável para os seus componentes.",
  statement: "Dentro do seu script, implemente a criação de um Shadow Root em modo 'open' para o elemento de perfil.",
  isProjectPart: true,
  template: `<!-- No seu script master -->
const profileElement = document.querySelector('.user-card');
// Crie o shadow root aqui`,
  detailedExplanation: `
    <h3>🌑 Isolamento de Estilos</h3>
    <p>O Shadow DOM permite que o seu componente tenha estilos próprios que não são afetados pelo CSS global do site. É a técnica definitiva para Design Systems resilientes.</p>
  `,
  objectives: [
    {
      id: "attach_shadow",
      description: "Use o método attachShadow({ mode: 'open' }) no elemento de perfil.",
      hint: "profileElement.attachShadow({ mode: 'open' })",
      test: "attachShadow"
    }
  ]
};
