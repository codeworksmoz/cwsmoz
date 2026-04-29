import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p16",
  language: "html",
  title: "Projeto Master: Otimização de LCP",
  description: "Instrua o browser a dar prioridade ao que o utilizador vê primeiro.",
  statement: "Adicione o atributo fetchpriority='high' à sua imagem principal (Hero Image) para acelerar a renderização inicial.",
  isProjectPart: true,
  template: ``,
  detailedExplanation: `
    <h3>⚡ Prioridade de Descarregamento</h3>
    <p>O <code>fetchpriority</code> é uma diretiva recente e poderosa. Ele diz ao motor do browser: 'Não esperes, descarrega este ficheiro AGORA', melhorando drasticamente as métricas de performance.</p>
  `,
  objectives: [
    {
      id: "fetch_priority",
      description: "Adicione fetchpriority='high' à tag <img> de destaque.",
      hint: "<img fetchpriority=\"high\" ...>",
      test: "fetchpriority=\"high\""
    }
  ]
};
