import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-eco-mq15",
  title: "Quiz Master: Profiling e Performance Industrial",
  passingScore: 85,
  questions: [
    {
      id: "q15_1",
      question: "Qual a diferença entre Wall Time e CPU Time num relatório de profiling?",
      options: [
        "Não há diferença técnica.",
        "Wall Time é o tempo real percebido; CPU Time é apenas o tempo gasto em cálculos no processador.",
        "CPU Time é sempre maior que o Wall Time.",
        "Wall Time mede apenas o tempo de disco."
      ],
      correctAnswer: 1
    },
    {
      id: "q15_2",
      question: "Por que o Xdebug não é recomendado para ambientes de produção de alta escala?",
      options: [
        "Porque não suporta HTTPS.",
        "Devido ao overhead massivo de instrumentação que reduz a performance em até 50x.",
        "Porque só funciona no Windows.",
        "Porque consome toda a largura de banda de rede."
      ],
      correctAnswer: 1
    },
    {
      id: "q15_3",
      question: "O que representa uma barra muito larga num Flame Graph?",
      options: [
        "Um erro de sintaxe.",
        "Uma função ou método que consome uma grande fatia do tempo total de execução.",
        "Uma variável global muito grande.",
        "O tempo de inicialização do PHP."
      ],
      correctAnswer: 1
    },
    {
      id: "q15_4",
      question: "Qual ferramenta de elite permite realizar o 'Deterministic Profiling' em produção com baixo overhead?",
      options: ["PHPUnit", "Blackfire.io", "Composer", "Xdebug"],
      correctAnswer: 1
    },
    {
      id: "q15_5",
      question: "O processo de identificar funções que se chamam recursivamente e consomem a stack chama-se:",
      options: ["Stack Tracing", "Recursive Profiling", "Memory Leak Detection", "Inlining"],
      correctAnswer: 0
    },
    {
      id: "q15_6",
      question: "Se o seu CPU Time é baixo mas o Wall Time é alto, qual o diagnóstico mais provável?",
      options: [
        "O algoritmo é ineficiente em CPU.",
        "O sistema está bloqueado por I/O (espera por BD ou serviços externos).",
        "O JIT está desativado.",
        "A memória RAM está lenta."
      ],
      correctAnswer: 1
    }
  ]
};
