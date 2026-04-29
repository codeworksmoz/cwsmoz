
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "alg-q5",
  title: "Quiz: Merge Sort e Dividir para Conquistar",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual a complexidade de tempo do Merge Sort no pior caso?",
      options: ["O(n²)", "O(n)", "O(n log n)", "O(log n)"],
      correctAnswer: 2
    },
    {
      id: "q2",
      question: "Qual a principal desvantagem do Merge Sort em relação ao Quick Sort?",
      options: [
        "É mais lento",
        "Não é estável",
        "Exige memória extra O(n) para o processo de intercalação",
        "Não funciona com recursão"
      ],
      correctAnswer: 2
    },
    {
      id: "q3",
      question: "O Merge Sort é um algoritmo estável?",
      options: [
        "Sim, preserva a ordem de elementos iguais",
        "Não, as trocas são aleatórias",
        "Apenas na versão iterativa",
        "Depende do tamanho do array"
      ],
      correctAnswer: 0
    },
    {
      id: "q4",
      question: "O que acontece na fase de 'Conquista' (Merge)?",
      options: [
        "A lista é dividida ao meio",
        "Duas sub-listas ordenadas são combinadas numa única lista ordenada",
        "O pivô é escolhido",
        "O programa é compilado"
      ],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "Qual o caso base da recursão no Merge Sort?",
      options: [
        "Quando a lista tem 100 itens",
        "Quando a lista tem 1 ou 0 elementos (já está ordenada)",
        "Quando o pivô é encontrado",
        "Quando a memória RAM acaba"
      ],
      correctAnswer: 1
    },
    {
      id: "q6",
      question: "Em termos de arquitetura, por que o Merge Sort é bom para sistemas distribuídos?",
      options: [
        "Porque usa menos CPU",
        "Porque as divisões são independentes e podem ser ordenadas em máquinas diferentes em paralelo",
        "Porque não usa ponteiros",
        "Porque foi feito para a internet"
      ],
      correctAnswer: 1
    }
  ]
};
