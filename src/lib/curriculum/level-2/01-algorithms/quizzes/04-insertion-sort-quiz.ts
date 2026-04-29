
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "alg-q4",
  title: "Quiz: Insertion Sort e Estabilidade",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual o melhor caso de complexidade do Insertion Sort?",
      options: ["O(n²)", "O(log n)", "O(n)", "O(1)"],
      correctAnswer: 2,
      explanation: "Se a lista já estiver ordenada, o Insertion Sort apenas percorre uma vez verificando cada item."
    },
    {
      id: "q2",
      question: "O que define um algoritmo de ordenação como 'Estável'?",
      options: [
        "Ele nunca trava o computador",
        "Mantém a ordem original de elementos com chaves iguais",
        "Usa sempre a mesma quantidade de RAM",
        "Não usa recursão"
      ],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "Insertion Sort é um algoritmo 'In-place'. O que isto significa?",
      options: [
        "Ele corre apenas em servidores locais",
        "Ele ordena a lista original sem precisar de uma cópia (usa memória O(1))",
        "Ele coloca os itens no lugar certo em um segundo",
        "Ele não pode ser interrompido"
      ],
      correctAnswer: 1
    },
    {
      id: "q4",
      question: "Em que situação o Insertion Sort brilha sobre o Quick Sort?",
      options: [
        "Listas massivas de dados",
        "Quando a lista já está quase toda ordenada",
        "Em processamento de imagens 3D",
        "Nunca, Quick Sort é sempre superior"
      ],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "O Insertion Sort é eficiente para listas 'online' (dados que chegam um a um)?",
      options: [
        "Sim, podes inserir o dado novo na posição correta à medida que ele chega",
        "Não, ele precisa da lista completa no início",
        "Apenas se os dados forem strings",
        "Apenas em sistemas Linux"
      ],
      correctAnswer: 0
    },
    {
      id: "q6",
      question: "Qual a desvantagem do Insertion Sort?",
      options: [
        "É muito complexo de escrever",
        "Performance degrada para O(n²) em listas grandes e desordenadas",
        "Exige muita memória RAM extra",
        "Não suporta números decimais"
      ],
      correctAnswer: 1
    }
  ]
};
