import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p8",
  language: "html",
  title: "Projeto Master: Finalização e Redes",
  description: "Toques finais de otimização de rede.",
  statement: "Instrua o browser a preparar conexões para domínios de terceiros.",
  isProjectPart: true,
  template: ``,
  detailedExplanation: `
    <h3>⚡ Acelerando a Entrega</h3>
    <p>O <code>preconnect</code> e o <code>dns-prefetch</code> são ferramentas de elite para reduzir a latência percebida pelo usuário.</p>
  `,
  objectives: [
    {
      id: "preconnect",
      description: "Adicione um link preconnect para a API do Google Fonts.",
      hint: "<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">",
      test: "rel=\"preconnect\""
    },
    {
      id: "dns",
      description: "Adicione um dns-prefetch para um domínio de CDN.",
      hint: "<link rel=\"dns-prefetch\" href=\"https://cdn.exemplo.com\">",
      test: "rel=\"dns-prefetch\""
    }
  ]
};
