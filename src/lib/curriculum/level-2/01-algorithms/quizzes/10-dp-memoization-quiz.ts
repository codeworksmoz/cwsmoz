
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "alg-q10",
  title: "Quiz: Programação Dinâmica e Memoization",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "O que define a Programação Dinâmica (DP)?",
      options: [
        "Programas que mudam de cor",
        "Resolver problemas complexos quebrando-os em sub-problemas sobrepostos",
        "O uso de loops em vez de funções",
        "Programas que rodam em servidores dinâmicos"
      ],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "O que é 'Memoization'?",
      options: [
        "Um erro de memória",
        "Guardar resultados de cálculos caros para reutilizá-los mais tarde",
        "Apagar a memória RAM periodicamente",
        "Um tipo de algoritmo de ordenação"
      ],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "A abordagem 'Top-Down' na DP refere-se a:",
      options: [
        "Começar do menor sub-problema e subir",
        "Começar do problema original e usar recursão com memoization para descer",
        "Escrever o código de cima para baixo no ficheiro",
        "Priorizar a interface sobre o banco de dados"
      ],
      correctAnswer: 1
    },
    {
      id: "q4",
      question: "Qual a complexidade de tempo do Fibonacci RECURSIVO sem DP para N?",
      options: ["O(n)", "O(n²)", "O(2^n)", "O(1)"],
      correctAnswer: 2
    },
    {
      id: "q5",
      question: "Qual a complexidade de tempo do Fibonacci com MEMOIZATION?",
      options: ["O(n)", "O(n²)", "O(2^n)", "O(log n)"],
      correctAnswer: 0,
      explanation: "Cada valor de 1 a N é calculado apenas UMA vez e guardado."
    },
    {
      id: "q6",
      question: "Quando deves preferir DP sobre Recursão simples?",
      options: [
        "Sempre, para qualquer problema",
        "Quando os sub-problemas se repetem (Overlap) muitas vezes",
        "Apenas quando tens muita memória RAM",
        "Apenas em linguagens compiladas"
      ],
      correctAnswer: 1
    }
  ]
};
