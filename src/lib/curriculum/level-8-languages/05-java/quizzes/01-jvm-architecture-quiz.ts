import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "jv-mq1",
  title: "Quiz: Arquitetura JVM e JIT",
  passingScore: 80,
  questions: [
    {
      id: "q1_1",
      question: "O que caracteriza a 'Tiered Compilation' no HotSpot?",
      options: [
        "Dividir a memória em camadas físicas",
        "O uso coordenado de interpretador, compilador C1 e compilador C2",
        "Uma técnica de rede para Java",
        "A hierarquia de pacotes"
      ],
      correctAnswer: 1,
      explanation: "A JVM começa interpretando o código, depois usa o C1 para otimizações rápidas e o C2 para o código de alto desempenho (hot paths)."
    },
    {
      id: "q1_2",
      question: "Qual componente da JVM é responsável pelo 'Method Inlining'?",
      options: ["Garbage Collector", "JIT Compiler", "ClassLoader", "Verifier"],
      correctAnswer: 1
    },
    {
      id: "q1_3",
      question: "Onde o código de máquina gerado pelo JIT é armazenado?",
      options: ["Heap", "Stack", "Code Cache", "Metaspace"],
      correctAnswer: 2
    },
    {
      id: "q1_4",
      question: "O que o 'Graal JIT' oferece em relação ao C2 tradicional?",
      options: [
        "É escrito em C++",
        "É escrito em Java e permite otimizações especulativas mais agressivas",
        "Apenas suporte a versões antigas",
        "Redução do tamanho do JAR"
      ],
      correctAnswer: 1
    },
    {
      id: "q1_5",
      question: "A fase de 'Profiling' no JIT serve para:",
      options: [
        "Mudar a senha do banco",
        "Coletar dados estatísticos sobre a execução para guiar otimizações futuras",
        "Limpar a memória RAM",
        "Verificar a licença do software"
      ],
      correctAnswer: 1
    },
    {
      id: "q1_6",
      question: "O que acontece num 'Deoptimization'?",
      options: [
        "O programa crasha",
        "O JIT descarta o código otimizado e volta ao interpretador se uma suposição for quebrada",
        "O computador desliga",
        "A internet fica lenta"
      ],
      correctAnswer: 1
    }
  ]
};