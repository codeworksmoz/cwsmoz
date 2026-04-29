import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "css-mq15",
  title: "Quiz: PostCSS e Tooling",
  passingScore: 80,
  questions: [
    {
      id: "q15_1",
      question: "O que o plugin 'Autoprefixer' faz?",
      options: [
        "Corrige erros de português no CSS",
        "Adiciona prefixos de navegadores (-webkit-, -moz-) baseando-se nos dados do CanIUse",
        "Apaga classes não utilizadas",
        "Muda o tamanho das imagens"
      ],
      correctAnswer: 1
    }
  ]
};