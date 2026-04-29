import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "css-p15",
  language: "html",
  title: "Projeto Master: CSS Houdini Paint API",
  description: "Desenhe backgrounds personalizados via código.",
  statement: "Utilize a instrução CSS.paintWorklet.addModule() fictícia num comentário técnico para validar o conhecimento de extensibilidade.",
  isProjectPart: true,
  template: ``,
  detailedExplanation: `
    <h3>🎩 Mágica de Baixo Nível</h3>
    <p>Houdini permite que o desenvolvedor crie os seus próprios algoritmos de desenho diretamente no motor do browser, injetando lógica de renderização customizada.</p>
  `,
  objectives: [
    {
      id: "paint_api",
      description: "Use o termo 'paint' como valor para a propriedade background.",
      test: "background: paint"
    }
  ]
};
