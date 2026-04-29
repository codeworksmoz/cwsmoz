import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "math-q19",
  title: "Quiz: Funções Geradoras",
  passingScore: 70,
  questions: [
    {
      id: "q19_1",
      question: "Uma função geradora representa uma sequência como:",
      options: ["Uma lista de strings", "Coeficientes de uma série de potências", "Um gráfico 3D", "Uma base de dados SQL"],
      correctAnswer: 1
    },
    {
      id: "q19_2",
      question: "A função 1 / (1-x) gera qual sequência?",
      options: ["1, 1, 1, 1, ...", "1, 2, 3, 4, ...", "0, 0, 0, ...", "1, 0, 1, 0, ..."],
      correctAnswer: 0
    },
    {
      id: "q19_3",
      question: "Funções geradoras são úteis para resolver:",
      options: [
        "Problemas de partição de inteiros e combinatória complexa",
        "Erros de Wi-Fi",
        "A cor dos botões no CSS",
        "O nome das variáveis"
      ],
      correctAnswer: 0
    },
    {
      id: "q19_4",
      question: "O produto de duas funções geradoras equivale a qual operação nas sequências?",
      options: ["Soma", "Convolução", "Divisão", "Subtração"],
      correctAnswer: 1
    },
    {
      id: "q19_5",
      question: "A técnica de 'Partial Fractions' é usada para:",
      options: ["Dividir o ecrã", "Decompor funções geradoras complexas em formas simples para extrair a sequência", "Calcular impostos", "Limpar a memória"],
      correctAnswer: 1
    },
    {
      id: "q19_6",
      question: "Na engenharia de algoritmos, usamos EGf (Exponential Generating Functions) para:",
      options: ["Estruturas ordenadas", "Estruturas rotuladas (Labeled structures)", "Arrays simples", "Loops infinitos"],
      correctAnswer: 1
    }
  ]
};
