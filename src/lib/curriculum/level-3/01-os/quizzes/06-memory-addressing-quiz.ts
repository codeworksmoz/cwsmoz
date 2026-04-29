
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "os-q6",
  title: "Quiz: Endereçamento de Memória",
  passingScore: 70,
  questions: [
    {
      id: "q6_1",
      question: "Qual a função da MMU (Memory Management Unit)?",
      options: ["Processar gráficos", "Traduzir endereços lógicos em físicos", "Aumentar a internet", "Gerir o disco"],
      correctAnswer: 1
    },
    {
      id: "q6_2",
      question: "A fragmentação externa ocorre quando:",
      options: ["O disco quebra", "Existe memória total livre, mas em blocos pequenos demais", "O processo é muito grande", "A CPU falha"],
      correctAnswer: 1
    },
    {
      id: "q6_3",
      question: "O que é a 'Compactação' de memória?",
      options: ["Zipar a RAM", "Mover processos para unir blocos livres", "Apagar processos", "Aumentar a cache"],
      correctAnswer: 1
    },
    {
      id: "q6_4",
      question: "Qual o benefício da segmentação sobre a alocação contígua simples?",
      options: ["É mais rápida", "Permite que diferentes partes do programa (código, dados, pilha) fiquem em locais diferentes", "Não usa ponteiros", "Reduz o calor"],
      correctAnswer: 1
    },
    {
      id: "q6_5",
      question: "Um endereço de 32 bits pode endereçar quanto de RAM teoricamente?",
      options: ["1 GB", "4 GB", "16 GB", "64 GB"],
      correctAnswer: 1
    },
    {
      id: "q6_6",
      question: "O que causa um 'Segmentation Fault'?",
      options: ["O disco cheio", "Acesso a um endereço de memória não autorizado ou fora do limite do segmento", "Falta de bateria", "Erro de Wi-Fi"],
      correctAnswer: 1
    }
  ]
};
