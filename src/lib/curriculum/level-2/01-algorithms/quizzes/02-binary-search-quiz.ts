
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "alg-q2",
  title: "Quiz: Busca Binária e Divisão",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual o requisito fundamental de uma lista para que a Busca Binária funcione?",
      options: [
        "Deve ser pequena",
        "Deve conter apenas números positivos",
        "Deve estar obrigatoriamente ordenada",
        "Deve estar guardada numa base de dados SQL"
      ],
      correctAnswer: 2
    },
    {
      id: "q2",
      question: "Qual a complexidade de tempo da Busca Binária?",
      options: ["O(n)", "O(n²)", "O(log n)", "O(1)"],
      correctAnswer: 2
    },
    {
      id: "q3",
      question: "Se uma lista tem 8 itens, qual o número máximo de tentativas da Busca Binária?",
      options: ["8", "4", "3", "1"],
      correctAnswer: 2,
      explanation: "log2(8) = 3. Em cada passo descartamos metade: 8 -> 4 -> 2 -> 1."
    },
    {
      id: "q4",
      question: "O que acontece ao ponteiro 'inicio' se o valor do meio for MENOR que o alvo?",
      options: [
        "O inicio move-se para meio + 1",
        "O inicio move-se para 0",
        "O programa termina com erro",
        "O fim move-se para meio - 1"
      ],
      correctAnswer: 0
    },
    {
      id: "q5",
      question: "Por que a Busca Binária é considerada 'Divisão e Conquista'?",
      options: [
        "Porque ela apaga os dados que não servem",
        "Porque quebra o problema em metades sucessivas menores",
        "Porque exige múltiplos processadores",
        "Porque foi inventada por generais militares"
      ],
      correctAnswer: 1
    },
    {
      id: "q6",
      question: "Qual o valor retornado tipicamente se o alvo não for encontrado?",
      options: ["0", "null", "-1", "undefined"],
      correctAnswer: 2
    }
  ]
};
