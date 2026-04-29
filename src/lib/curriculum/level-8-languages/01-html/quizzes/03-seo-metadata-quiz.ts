import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "html-mq3",
  title: "Quiz: SEO Técnico e Metadados",
  passingScore: 80,
  questions: [
    {
      id: "q3_1",
      question: "Para que serve a tag <link rel='canonical'>?",
      options: [
        "Para mudar o tipo de letra do site",
        "Para indicar aos motores de busca a versão preferencial de uma página e evitar conteúdo duplicado",
        "Para ligar o site a uma base de dados",
        "Para acelerar o carregamento de imagens"
      ],
      correctAnswer: 1
    },
    {
      id: "q3_2",
      question: "Qual prefixo é usado para definir metadados do Open Graph?",
      options: ["web:", "meta:", "og:", "social:"],
      correctAnswer: 2
    }
  ]
};
