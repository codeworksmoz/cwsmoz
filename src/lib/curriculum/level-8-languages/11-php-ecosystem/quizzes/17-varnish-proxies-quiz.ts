import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-eco-mq17",
  title: "Quiz Master: Varnish e HTTP Caching",
  passingScore: 85,
  questions: [
    {
      id: "q1",
      question: "Qual o papel principal do Varnish numa infraestrutura de elite?",
      options: [
        "Executar código PHP mais rápido.",
        "Atuar como proxy reverso para servir conteúdo HTTP do cache em alta velocidade.",
        "Comprimir imagens no disco.",
        "Mudar o CSS do site automaticamente."
      ],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "O que a tecnologia ESI (Edge Side Includes) permite?",
      options: [
        "Encriptar a base de dados.",
        "Compor uma página no cache a partir de fragmentos com diferentes tempos de expiração.",
        "Aumentar o número de cores da interface.",
        "Ligar o site ao Facebook."
      ],
      correctAnswer: 1
    }
  ]
};
