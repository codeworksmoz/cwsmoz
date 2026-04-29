import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "math-q20",
  title: "Quiz: Minimização Lógica",
  passingScore: 70,
  questions: [
    {
      id: "q20_1",
      question: "Um Mapa de Karnaugh de 4 variáveis tem quantas células?",
      options: ["4", "8", "16", "32"],
      correctAnswer: 2,
      explanation: "2 elevado ao número de variáveis (2^4 = 16)."
    },
    {
      id: "q20_2",
      question: "No K-Map, as células vizinhas devem diferir em apenas 1 bit. Como se chama este código?",
      options: ["Código Binário", "Código de Gray", "ASCII", "Unicode"],
      correctAnswer: 1
    },
    {
      id: "q20_3",
      question: "O que é um 'Prime Implicant'?",
      options: [
        "Um número primo",
        "Um agrupamento de uns no K-Map que não pode ser expandido",
        "Uma variável falsa",
        "O resultado final"
      ],
      correctAnswer: 1
    },
    {
      id: "q20_4",
      question: "Qual a limitação dos Mapas de Karnaugh?",
      options: [
        "São lentos",
        "Tornam-se impraticáveis para mais de 6 variáveis devido à dificuldade visual",
        "Não funcionam com 0s",
        "Exigem muito processamento"
      ],
      correctAnswer: 1
    },
    {
      id: "q20_5",
      question: "O método de Quine-McCluskey é preferível em software porque:",
      options: [
        "É mais bonito",
        "É puramente tabular e sistemático, fácil de programar",
        "Usa menos RAM",
        "Foi inventado antes"
      ],
      correctAnswer: 1
    },
    {
      id: "q20_6",
      question: "Minimizar uma função booleana reduz:",
      options: ["O custo de fabrico do chip e o consumo de energia", "A velocidade da CPU", "O tamanho do monitor", "O número de utilizadores"],
      correctAnswer: 0
    }
  ]
};
