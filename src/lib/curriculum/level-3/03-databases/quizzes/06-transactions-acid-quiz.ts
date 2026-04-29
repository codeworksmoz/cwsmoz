import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "db-mq6",
  title: "Quiz: Transações e ACID",
  passingScore: 80,
  questions: [
    {
      id: "q6_1",
      question: "Qual propriedade garante o 'Tudo ou Nada'?",
      options: ["Atomicity", "Consistency", "Isolation", "Durability"],
      correctAnswer: 0
    },
    {
      id: "q6_2",
      question: "O que acontece num 'Rollback'?",
      options: ["O banco apaga tudo", "O banco reverte o estado para o início da transação após uma falha", "O banco acelera a query", "O banco muda a senha"],
      correctAnswer: 1
    },
    {
      id: "q6_3",
      question: "Um 'Dirty Read' ocorre quando qual propriedade é violada?",
      options: ["Atomicity", "Durability", "Isolation", "Consistency"],
      correctAnswer: 2
    },
    {
      id: "q6_4",
      question: "Qual nível de isolamento é o mais rigoroso (e lento)?",
      options: ["Read Uncommitted", "Read Committed", "Repeatable Read", "Serializable"],
      correctAnswer: 3
    },
    {
      id: "q6_5",
      question: "O Write-Ahead Logging (WAL) suporta qual propriedade?",
      options: ["Durability", "Atomicity", "Ambas", "Nenhuma"],
      correctAnswer: 2,
      explanation: "O WAL garante que as mudanças são registadas no log antes de irem para o disco, permitindo recuperação de desastres."
    },
    {
      id: "q6_6",
      question: "Transações ACID são nativas de qual tipo de banco?",
      options: ["NoSQL (geralmente)", "Relacionais (RDBMS)", "Apenas em cache", "Bases de dados em papel"],
      correctAnswer: 1
    }
  ]
};