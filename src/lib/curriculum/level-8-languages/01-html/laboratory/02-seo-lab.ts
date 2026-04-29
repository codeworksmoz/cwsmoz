import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p3",
  language: "html",
  title: "Projeto Master: Metadados de Elite",
  description: "Prepare a sua página para ser indexada e partilhada.",
  statement: "Adicione metadados avançados na seção <head> do seu projeto.",
  isProjectPart: true,
  template: ``,
  detailedExplanation: `
    <h3>🚀 Visibilidade Máxima</h3>
    <p>Para o Google e as redes sociais entenderem o seu projeto, precisamos de tags específicas. Vamos configurar a descrição e os cartões de partilha.</p>
  `,
  objectives: [
    {
      id: "desc",
      description: "Adicione uma meta description com uma chamada atrativa.",
      hint: "<meta name=\"description\" content=\"...\">",
      test: "name=\"description\""
    },
    {
      id: "og_title",
      description: "Adicione a tag og:title para o Open Graph.",
      hint: "<meta property=\"og:title\" content=\"Codworks Master\">",
      test: "property=\"og:title\""
    },
    {
      id: "canonical",
      description: "Adicione o link canonical para evitar conteúdo duplicado.",
      hint: "<link rel=\"canonical\" href=\"https://codworks.mz\">",
      test: "rel=\"canonical\""
    }
  ]
};
