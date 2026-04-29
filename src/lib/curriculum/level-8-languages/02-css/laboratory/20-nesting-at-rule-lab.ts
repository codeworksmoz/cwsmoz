import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "css-p20",
  language: "html",
  title: "Projeto Master: Native CSS Nesting",
  description: "Organize o seu CSS de forma hierárquica sem SASS.",
  statement: "Use a sintaxe de aninhamento nativa para colocar estilos de hover dentro da regra do botão.",
  isProjectPart: true,
  template: ``,
  detailedExplanation: `
    <h3>🪆 Hierarquia Nativa</h3>
    <p>O aninhamento nativo permite escrever CSS mais legível e compacto, agrupando seletores relacionados sem ferramentas externas de build.</p>
  `,
  objectives: [
    {
      id: "nesting",
      description: "Use o símbolo '&' para referenciar o pai no hover.",
      test: "&:hover"
    }
  ]
};
