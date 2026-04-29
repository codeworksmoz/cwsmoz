
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "os-q7",
  title: "Quiz: Paginação e TLB",
  passingScore: 70,
  questions: [
    {
      id: "q7_1",
      question: "Qual o tamanho padrão típico de uma página de memória?",
      options: ["1 byte", "4 KB", "1 MB", "64 KB"],
      correctAnswer: 1
    },
    {
      id: "q7_2",
      question: "O TLB (Translation Lookaside Buffer) é:",
      options: ["Um disco rápido", "Uma cache na CPU para traduções de endereços", "Um sistema de ficheiros", "Um cabo"],
      correctAnswer: 1
    },
    {
      id: "q7_3",
      question: "O que acontece num 'Page Fault'?",
      options: ["O sistema crasha", "O SO busca a página necessária no disco e traz para a RAM", "A memória apaga-se", "A CPU desliga"],
      correctAnswer: 1
    },
    {
      id: "q7_4",
      question: "O algoritmo LRU (Least Recently Used) serve para:",
      options: ["Ordenar nomes", "Escolher qual página remover da RAM quando esta enche", "Aumentar a rede", "Criptografar dados"],
      correctAnswer: 1
    },
    {
      id: "q7_5",
      question: "O fenómeno de 'Thrashing' indica que:",
      options: ["O sistema está super rápido", "O SO gasta mais tempo em I/O do que a executar processos", "O utilizador é um hacker", "O disco é SSD"],
      correctAnswer: 1
    },
    {
      id: "q7_6",
      question: "A Paginação resolve qual tipo de fragmentação?",
      options: ["Interna", "Externa", "Ambas", "Nenhuma"],
      correctAnswer: 1,
      explanation: "A paginação elimina a fragmentação externa porque qualquer frame físico livre pode aceitar qualquer página lógica."
    }
  ]
};
