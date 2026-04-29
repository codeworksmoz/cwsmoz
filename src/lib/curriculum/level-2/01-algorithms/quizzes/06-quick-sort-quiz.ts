
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "alg-q6",
  title: "Quiz: Quick Sort e Pivoteamento",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual a complexidade média do Quick Sort?",
      options: ["O(n log n)", "O(n²)", "O(n)", "O(1)"],
      correctAnswer: 0
    },
    {
      id: "q2",
      question: "Em que situação o Quick Sort atinge o seu pior caso O(n²)?",
      options: [
        "Com listas muito grandes",
        "Quando o pivô escolhido é sempre o maior ou menor elemento (ex: lista já ordenada)",
        "Quando há muitos números repetidos",
        "Sempre que o array for ímpar"
      ],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "O que significa dizer que o Quick Sort é um algoritmo 'In-place'?",
      options: [
        "Ele ordena muito rápido",
        "Ele não precisa de memória extra significativa (O(log n) para a stack)",
        "Ele só funciona em servidores Linux",
        "Ele não usa ponteiros"
      ],
      correctAnswer: 1
    },
    {
      id: "q4",
      question: "Qual estratégia de escolha de pivô ajuda a mitigar o pior caso?",
      options: ["Sempre o primeiro", "Sempre o último", "Mediana de Três ou Aleatório", "O maior da lista"],
      correctAnswer: 2
    },
    {
      id: "q5",
      question: "O Quick Sort padrão é estável?",
      options: [
        "Sim, sempre",
        "Não, elementos iguais podem mudar de ordem relativa durante as partições",
        "Apenas em arrays de strings",
        "Apenas se usar o pivô central"
      ],
      correctAnswer: 1
    },
    {
      id: "q6",
      question: "A operação de 'Partition' serve para:",
      options: [
        "Dividir o array ao meio exato",
        "Mover elementos menores que o pivô para um lado e maiores para o outro",
        "Copiar o array para outro local",
        "Apagar os números negativos"
      ],
      correctAnswer: 1
    }
  ]
};
