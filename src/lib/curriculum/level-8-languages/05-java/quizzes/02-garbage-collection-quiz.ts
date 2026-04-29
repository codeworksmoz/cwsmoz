import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "jv-mq2",
  title: "Quiz: Garbage Collection Tuning",
  passingScore: 80,
  questions: [
    {
      id: "q2_1",
      question: "Qual o principal objetivo do G1GC (Garbage First)?",
      options: [
        "Maximizar a throughput do sistema",
        "Fornecer pausas curtas e previsíveis (STW) para heaps grandes",
        "Eliminar a necessidade de memória Stack",
        "Desligar a CPU durante a limpeza"
      ],
      correctAnswer: 1
    },
    {
      id: "q2_2",
      question: "O ZGC (Z Garbage Collector) atinge latências de quanto tempo?",
      options: [
        "Inferiores a 1 milissegundo",
        "Exatamente 1 segundo",
        "Aproximadamente 100ms",
        "A mesma velocidade do disco rígido"
      ],
      correctAnswer: 0
    },
    {
      id: "q2_3",
      question: "Onde vivem os objetos de vida curta (short-lived) no Heap?",
      options: ["Old Generation", "Metaspace", "Young Generation (Eden)", "Code Cache"],
      correctAnswer: 2
    },
    {
      id: "q2_4",
      question: "O que caracteriza um 'Full GC'?",
      options: [
        "A limpeza apenas da Young Generation",
        "A limpeza de todo o Heap (Young + Old), geralmente causando pausas longas",
        "O reinício da JVM",
        "A compactação do Metaspace"
      ],
      correctAnswer: 1
    },
    {
      id: "q2_5",
      question: "A flag -XX:+UseStringDeduplication serve para:",
      options: [
        "Remover strings nulas",
        "Identificar e partilhar o mesmo array de bytes para strings idênticas no Heap",
        "Aumentar a velocidade do log",
        "Encriptar textos do utilizador"
      ],
      correctAnswer: 1
    },
    {
      id: "q2_6",
      question: "O fenómeno de 'Promotion' ocorre quando:",
      options: [
        "O programador recebe um aumento",
        "Objetos sobrevivem a múltiplos ciclos na Young Gen e são movidos para a Old Gen",
        "A memória RAM é dobrada",
        "O JIT compila um método para nativo"
      ],
      correctAnswer: 1
    }
  ]
};