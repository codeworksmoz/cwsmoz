import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "html-mq6",
  title: "Quiz: Formulários Profissionais",
  passingScore: 80,
  questions: [
    {
      id: "q6_1",
      question: "Qual atributo permite usar uma expressão regular nativa para validar um input?",
      options: ["regex", "validate", "pattern", "check"],
      correctAnswer: 2
    },
    {
      id: "q6_2",
      question: "Para que serve o atributo 'inputmode'?",
      options: [
        "Para mudar a cor do input",
        "Para sugerir ao browser qual teclado virtual exibir em dispositivos móveis",
        "Para bloquear a escrita de números",
        "Para enviar o formulário automaticamente"
      ],
      correctAnswer: 1
    }
  ]
};
