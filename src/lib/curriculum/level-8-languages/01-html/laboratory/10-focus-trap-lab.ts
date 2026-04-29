import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p10",
  language: "html",
  title: "Projeto Master: Focus Trapping e Acessibilidade",
  description: "Garanta que utilizadores de teclado não fiquem perdidos em janelas modais.",
  statement: "Utilize o atributo 'inert' para desativar o conteúdo de fundo quando o seu componente master estiver ativo.",
  isProjectPart: true,
  template: `<div id="main-content"></div>
<dialog id="master-modal"></dialog>`,
  detailedExplanation: `
    <h3>⌨️ Navegação Robusta</h3>
    <p>O atributo <code>inert</code> é uma ferramenta poderosa. Quando aplicado, o browser ignora completamente esse elemento para fins de foco e acessibilidade, 'prendendo' o utilizador no diálogo ativo.</p>
  `,
  objectives: [
    {
      id: "inert_attr",
      description: "Adicione o atributo 'inert' ao container principal do site via HTML ou JS.",
      hint: "<div id='main-content' inert></div>",
      test: "inert"
    }
  ]
};
