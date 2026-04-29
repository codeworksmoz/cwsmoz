
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "alg-q1",
  title: "Quiz: Domínio de Complexidade Big O",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "O que a Notação Big O descreve especificamente?",
      options: [
        "O tempo exato em milissegundos",
        "O limite superior do crescimento do tempo de execução (pior caso)",
        "O número de linhas de código",
        "A velocidade da internet necessária"
      ],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "Qual a complexidade de aceder a um elemento num array através do seu índice?",
      options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
      correctAnswer: 2
    },
    {
      id: "q3",
      question: "Um algoritmo que percorre um array de tamanho N com dois loops aninhados (for dentro de for) é:",
      options: ["O(2n)", "O(n²)", "O(n log n)", "O(1)"],
      correctAnswer: 1
    },
    {
      id: "q4",
      question: "Entre O(n) e O(log n), qual escala melhor para 1 bilião de itens?",
      options: ["O(n)", "O(log n)", "Ambos são iguais", "Depende da RAM"],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "O que significa 'Space Complexity'?",
      options: [
        "O tempo que o sinal demora a chegar ao espaço",
        "A quantidade de memória extra que o algoritmo precisa conforme N cresce",
        "O tamanho do ficheiro .exe final",
        "A distância entre os servidores"
      ],
      correctAnswer: 1
    },
    {
      id: "q6",
      question: "A complexidade O(n!) é considerada:",
      options: [
        "Excelente para servidores",
        "Inaceitável para quase qualquer volume de dados real",
        "O padrão para busca binária",
        "Rápida mas usa muita RAM"
      ],
      correctAnswer: 1
    }
  ]
};
