
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "alg-q3",
  title: "Quiz: Ordenação Básica",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual a complexidade de tempo do Bubble Sort no pior caso?",
      options: ["O(n log n)", "O(n)", "O(n²)", "O(1)"],
      correctAnswer: 2
    },
    {
      id: "q2",
      question: "No Selection Sort, o que é feito em cada iteração do loop externo?",
      options: [
        "O maior elemento é movido para o fim",
        "O menor elemento é encontrado e trocado com a posição atual",
        "A lista é dividida ao meio",
        "Elementos aleatórios são sorteados"
      ],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "Por que o Bubble Sort tem esse nome?",
      options: [
        "Porque o código é redondo",
        "Porque os maiores elementos 'flutuam' para o fim da lista como bolhas",
        "Porque foi inventado por um engenheiro chamado Bubble",
        "Porque usa muita memória temporária"
      ],
      correctAnswer: 1
    },
    {
      id: "q4",
      question: "Qual algoritmo faz menos trocas (swaps) na memória?",
      options: ["Bubble Sort", "Selection Sort", "Ambos fazem as mesmas", "Nenhum faz trocas"],
      correctAnswer: 1,
      explanation: "Selection Sort faz no máximo N trocas, enquanto o Bubble pode fazer N² trocas."
    },
    {
      id: "q5",
      question: "Algoritmos O(n²) são recomendados para:",
      options: [
        "Bases de dados de milhões de registros",
        "Listas muito pequenas ou fins educacionais",
        "Sistemas de tempo real",
        "Motores de busca web"
      ],
      correctAnswer: 1
    },
    {
      id: "q6",
      question: "O que acontece se correres o Bubble Sort numa lista já ordenada?",
      options: [
        "Ele termina em O(1) sozinho",
        "Ele continua a percorrer N² vezes a menos que tenhas uma flag de otimização",
        "Ele inverte a ordem da lista",
        "Ele apaga os dados"
      ],
      correctAnswer: 1
    }
  ]
};
