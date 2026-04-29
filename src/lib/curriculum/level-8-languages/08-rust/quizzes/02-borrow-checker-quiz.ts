
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "rs-mq2",
  title: "Quiz: Borrow Checker e Segurança de Referência",
  passingScore: 80,
  questions: [
    {
      id: "q2_1",
      question: "Qual a regra principal para referências mutáveis (&mut)?",
      options: [
        "Podes ter quantas quiseres",
        "Podes ter apenas uma referência mutável por vez para um dado dado",
        "Não podes ter referências mutáveis em funções",
        "Exigem sempre o uso de Smart Pointers"
      ],
      correctAnswer: 1,
      explanation: "Esta regra impede data races garantindo exclusão mútua em tempo de compilação."
    },
    {
      id: "q2_2",
      question: "Podes ter uma referência mutável enquanto existem referências imutáveis ativas?",
      options: [
        "Sim, sem problemas",
        "Não, o dado não pode mudar enquanto outros o estão a ler",
        "Apenas se o dado for pequeno",
        "Sim, mas apenas dentro de um loop"
      ],
      correctAnswer: 1
    },
    {
      id: "q2_3",
      question: "O que o compilador faz ao detetar um 'Dangling Pointer'?",
      options: [
        "Emite um aviso no log",
        "Impede a compilação do programa",
        "Corrige o ponteiro automaticamente",
        "Usa o Garbage Collector"
      ],
      correctAnswer: 1
    },
    {
      id: "q2_4",
      question: "Referências em Rust são ponteiros crus (raw pointers) por baixo do capô?",
      options: [
        "Sim, mas com garantias de validade verificadas pelo compilador",
        "Não, são objetos complexos",
        "Sim, mas apenas no modo unsafe",
        "Não, são identificadores de base de dados"
      ],
      correctAnswer: 0
    },
    {
      id: "q2_5",
      question: "Qual o impacto de performance de usar o Borrow Checker?",
      options: [
        "Aumenta a latência do programa",
        "Zero impacto em runtime (custo apenas no tempo de compilação)",
        "Ocupa mais memória RAM",
        "Exige mais threads"
      ],
      correctAnswer: 1
    },
    {
      id: "q2_6",
      question: "O ato de criar uma referência chama-se:",
      options: ["Moving", "Cloning", "Borrowing", "Dropping"],
      correctAnswer: 2
    }
  ]
};
