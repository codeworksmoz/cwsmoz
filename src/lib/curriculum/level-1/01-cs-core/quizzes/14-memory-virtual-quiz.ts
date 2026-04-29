import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "cs-t14-quiz",
  title: "Quiz: Memória Virtual e Paginação",
  passingScore: 75,
  questions: [
    {
      id: "q1",
      question: "Qual componente de hardware é responsável por traduzir endereços lógicos em endereços físicos em tempo real?",
      options: ["ALU", "Control Unit", "MMU (Memory Management Unit)", "L3 Cache"],
      correctAnswer: 2,
      explanation: "A MMU faz a ponte entre o endereço que o programa vê e o endereço real nos chips de RAM."
    },
    {
      id: "q2",
      question: "O que acontece tecnicamente durante um 'Page Fault'?",
      options: [
        "O processador queima por excesso de calor",
        "A CPU tenta aceder a uma página que não está na RAM física no momento",
        "O sistema operativo apaga o ficheiro do disco",
        "O utilizador desliga o monitor"
      ],
      correctAnswer: 1,
      explanation: "O Page Fault é um sinal de que o dado solicitado está no disco (Swap) e o SO precisa de o carregar para a RAM."
    },
    {
      id: "q3",
      question: "O fenómeno de 'Thrashing' é causado principalmente por:",
      options: [
        "Muitos cliques no rato",
        "Falta de memória RAM física para manter o 'Working Set' dos processos ativos",
        "Um vírus que apaga a BIOS",
        "Aumento da velocidade da internet"
      ],
      correctAnswer: 1,
      explanation: "Quando a RAM é insuficiente, o sistema gasta mais tempo em I/O de disco (troca de páginas) do que em computação real."
    },
    {
      id: "q4",
      question: "Qual o benefício de segurança da Memória Virtual?",
      options: [
        "Torna a internet mais rápida",
        "Impede que um processo aceda ou corrompa a memória de outro processo (Isolamento)",
        "Criptografa o teclado",
        "Impede o aquecimento da CPU"
      ],
      correctAnswer: 1,
      explanation: "Cada processo tem a sua própria tabela de páginas, tornando fisicamente impossível 'espreitar' a memória alheia sem permissão do Kernel."
    },
    {
      id: "q5",
      question: "O que é o TLB (Translation Lookaside Buffer)?",
      options: [
        "Um tipo de disco rígido",
        "Uma cache ultra-rápida dentro da CPU para guardar traduções de endereços",
        "O nome do sistema operativo Linux",
        "Um cabo de rede"
      ],
      correctAnswer: 1,
      explanation: "O TLB evita que a MMU tenha de consultar a Tabela de Páginas na RAM em cada instrução, o que seria muito lento."
    },
    {
      id: "q6",
      question: "Um Segmentation Fault ocorre quando:",
      options: [
        "O disco está cheio",
        "Um programa tenta aceder a um endereço de memória para o qual não tem permissão",
        "A bateria do portátil acaba",
        "O browser é fechado"
      ],
      correctAnswer: 1,
      explanation: "O hardware deteta uma violação dos bits de proteção (ex: escrever numa zona Read-Only) e o SO mata o processo para proteger o sistema."
    }
  ]
};