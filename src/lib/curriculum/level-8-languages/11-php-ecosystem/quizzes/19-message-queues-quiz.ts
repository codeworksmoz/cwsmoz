import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-eco-mq19",
  title: "Quiz Master: Sistemas de Mensageria",
  passingScore: 85,
  questions: [
    {
      id: "q1",
      question: "Qual o principal benefício de usar Message Queues num servidor de eventos?",
      options: [
        "Aumentar a cor do site.",
        "Desacoplar o recebimento do processamento, permitindo resiliência e escala horizontal.",
        "Eliminar a necessidade de PHP.",
        "Criptografar as imagens."
      ],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "O que é uma Dead Letter Queue (DLQ)?",
      options: [
        "Uma fila que apaga dados.",
        "Uma fila especial para mensagens que não puderam ser processadas com sucesso após várias tentativas.",
        "Uma fila que envia e-mails de despedida.",
        "Um erro de conexão de rede."
      ],
      correctAnswer: 1
    }
  ]
};
