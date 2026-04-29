import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p4",
  language: "html",
  title: "Projeto Master: Performance de Script",
  description: "Otimize como o JavaScript interage com o seu HTML.",
  statement: "Adicione scripts externos de forma otimizada para não bloquear o render.",
  isProjectPart: true,
  template: ``,
  detailedExplanation: `
    <h3>⚡ Non-blocking DOM</h3>
    <p>No nível Master, nunca carregamos scripts que travam o processamento do HTML. Vamos usar os atributos modernos de carregamento.</p>
  `,
  objectives: [
    {
      id: "defer",
      description: "Adicione um script principal com o atributo 'defer' no <head>.",
      hint: "<script src=\"main.js\" defer></script>",
      test: "defer"
    },
    {
      id: "async",
      description: "Adicione um script de analytics com 'async' para execução independente.",
      hint: "<script src=\"analytics.js\" async></script>",
      test: "async"
    }
  ]
};
