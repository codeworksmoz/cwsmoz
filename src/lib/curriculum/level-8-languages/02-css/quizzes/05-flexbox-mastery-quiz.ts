import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "css-mq5",
  title: "Quiz: Flexbox Mastery",
  passingScore: 80,
  questions: [
    {
      id: "q5_1",
      question: "O que acontece ao usar 'flex: 1 1 auto'?",
      options: [
        "O item não pode crescer nem diminuir",
        "O item cresce e diminui proporcionalmente, começando pelo tamanho do seu conteúdo",
        "O item ocupa sempre 100% da largura",
        "O item ignora o container pai"
      ],
      correctAnswer: 1
    },
    {
      id: "q5_2",
      question: "Qual a vantagem da propriedade 'gap' sobre 'margin' num container flex?",
      options: [
        "Muda a cor do espaçamento",
        "Evita margens indesejadas nas extremidades do container",
        "Funciona apenas no Internet Explorer",
        "Aumenta a velocidade de renderização em 50%"
      ],
      correctAnswer: 1
    }
  ]
};