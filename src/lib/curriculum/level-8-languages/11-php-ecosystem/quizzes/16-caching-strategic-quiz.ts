import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-eco-mq16",
  title: "Quiz Master: Caching Estratégico",
  passingScore: 85,
  questions: [
    {
      id: "q1",
      question: "Qual o padrão de cache onde a aplicação é responsável por ler do banco se houver um miss?",
      options: ["Write-back", "Write-through", "Cache-aside", "Read-through"],
      correctAnswer: 2
    },
    {
      id: "q2",
      question: "O que o 'Thundering Herd' pode causar num sistema de alta escala?",
      options: [
        "Aumento da memória RAM disponível.",
        "Sobrecarga repentina na base de dados após a expiração de uma chave de cache popular.",
        "Aceleração do tempo de resposta.",
        "Uma mudança nas cores da interface."
      ],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "Qual a vantagem do Redis sobre o Memcached em termos de dados?",
      options: [
        "Nenhuma, são iguais.",
        "Suporte a tipos de dados complexos e persistência em disco.",
        "O Redis é mais lento.",
        "O Memcached suporta apenas strings binárias."
      ],
      correctAnswer: 1
    }
  ]
};
