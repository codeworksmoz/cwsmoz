import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "ds-mq1",
  title: "Quiz: Arrays e Aritmética de Memória",
  passingScore: 80,
  questions: [
    {
      id: "q1_1",
      question: "Qual a complexidade de tempo para aceder a um elemento num array via índice?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
      correctAnswer: 0
    },
    {
      id: "q1_2",
      question: "O que acontece tecnicamente durante um redimensionamento de array dinâmico?",
      options: ["O array cresce no lugar", "Um novo bloco é alocado e os dados são copiados", "O programa apaga o array antigo", "Nenhuma das anteriores"],
      correctAnswer: 1
    },
    {
      id: "q1_3",
      question: "Qual o custo amortizado de inserção num array dinâmico com estratégia de doubling?",
      options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
      correctAnswer: 2
    },
    {
      id: "q1_4",
      question: "Por que arrays são eficientes para o cache do CPU?",
      options: ["Pelo uso de ponteiros", "Devido à localidade espacial de dados contíguos", "Porque são pequenos", "Porque usam menos energia"],
      correctAnswer: 1
    },
    {
      id: "q1_5",
      question: "O que o cálculo 'Base + (i * size)' permite?",
      options: ["Encontrar o próximo nó", "Calcular o endereço físico de um elemento", "Saber o tamanho do array", "Verificar se o array está cheio"],
      correctAnswer: 1
    },
    {
      id: "q1_6",
      question: "Inserir no INÍCIO de um array de tamanho N tem qual complexidade?",
      options: ["O(1)", "O(n)", "O(n²)", "O(log n)"],
      correctAnswer: 1,
      explanation: "É necessário 'empurrar' todos os N elementos existentes para a direita para abrir espaço."
    }
  ]
};
