
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "py-mq1",
  title: "Quiz: CPython e o GIL",
  passingScore: 85,
  questions: [
    {
      id: "q1",
      question: "Qual o papel fundamental do GIL no CPython?",
      options: [
        "Aumentar a velocidade de execução em 2x",
        "Garantir a thread-safety da contagem de referências dos objetos",
        "Compilar código Python para Java automaticamente",
        "Impedir o uso de variáveis globais"
      ],
      correctAnswer: 1,
      explanation: "O GIL simplifica a implementação do CPython ao garantir que apenas uma thread manipule objetos Python por vez."
    },
    {
      id: "q2",
      question: "Qual estratégia é recomendada para paralelismo real em tarefas CPU-bound?",
      options: ["Threads", "Multiprocessing", "AsyncIO", "Recursão"],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "O que acontece se uma thread Python fizer uma chamada de I/O bloqueante?",
      options: ["A aplicação trava", "O GIL é libertado para permitir que outras threads corram", "O processador aquece", "O erro de nulo ocorre"],
      correctAnswer: 1
    },
    {
      id: "q4",
      question: "Implementações como Jython ou IronPython possuem GIL?",
      options: ["Sim, é obrigatório", "Não, apenas o CPython (implementação em C) possui este lock", "Apenas no Linux", "Apenas em servidores"],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "O GIL é um lock a nível de:",
      options: ["Hardware", "Sistema Operativo", "Interpretador", "Base de Dados"],
      correctAnswer: 2
    },
    {
      id: "q6",
      question: "Por que o GIL ajuda na interoperabilidade com bibliotecas C?",
      options: ["Torna o C mais rápido", "Garante que o estado do interpretador seja consistente durante chamadas externas", "Muda o compilador", "Não ajuda"],
      correctAnswer: 1
    }
  ]
};
