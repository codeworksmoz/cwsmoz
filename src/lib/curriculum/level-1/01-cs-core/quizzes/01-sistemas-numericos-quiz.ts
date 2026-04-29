import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "cs-t1-quiz",
  title: "Quiz: Sistemas Numéricos",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual é a base fundamental do sistema que os computadores usam?",
      options: ["Base 10", "Base 2 (Binário)", "Base 16", "Base 8"],
      correctAnswer: 1,
      explanation: "Os computadores funcionam com eletricidade. Lembra-te que um circuito só tem dois estados: ligado (1) ou desligado (0). Isso corresponde à Base 2."
    },
    {
      id: "q2",
      question: "O que representa o número 1 num circuito digital?",
      options: ["Desligado", "Ligado", "Erro", "Aguardando"],
      correctAnswer: 1,
      explanation: "Pensa na luz de tua casa. Quando o interruptor está 'ligado', a corrente passa. Na computação digital, o bit 1 representa essa passagem de tensão."
    },
    {
      id: "q3",
      question: "Quantos bits são necessários para representar o número decimal 5?",
      options: ["1 bit", "2 bits", "3 bits", "4 bits"],
      correctAnswer: 2,
      explanation: "O número 5 em binário é 101. Faz a conta: (1 * 4) + (0 * 2) + (1 * 1) = 5. Como vês, ocupamos 3 posições (bits)."
    }
  ]
};
