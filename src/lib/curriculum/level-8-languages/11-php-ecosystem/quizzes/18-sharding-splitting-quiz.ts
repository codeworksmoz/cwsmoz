import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-eco-mq18",
  title: "Quiz Master: Escala de Base de Dados",
  passingScore: 85,
  questions: [
    {
      id: "q1",
      question: "Qual o objetivo do Read/Write Splitting?",
      options: [
        "Aumentar o espaço em disco.",
        "Distribuir a carga de leitura por réplicas, aliviando o servidor master.",
        "Dividir as tabelas por pastas.",
        "Criptografar apenas as escritas."
      ],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "O que define a Shard Key no particionamento horizontal?",
      options: [
        "A cor da tabela.",
        "O campo usado para decidir em qual servidor físico o dado será armazenado.",
        "A senha do administrador.",
        "O nome do driver do banco."
      ],
      correctAnswer: 1
    }
  ]
};
