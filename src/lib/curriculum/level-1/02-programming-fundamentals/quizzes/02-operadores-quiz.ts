import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "pf-t2-quiz",
  title: "Quiz: Operadores e Lógica de Cálculo",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual o resultado da expressão 10 + 5 * 2?",
      options: ["30", "20", "25", "10"],
      correctAnswer: 1,
      explanation: "Precedência: Multiplicação (5 * 2 = 10) ocorre antes da soma (10 + 10 = 20)."
    },
    {
      id: "q2",
      question: "O que o operador '%' (módulo) faz?",
      options: [
        "Calcula a percentagem de um valor",
        "Retorna o quociente da divisão",
        "Retorna o resto da divisão entre dois números",
        "Multiplica o valor por 100"
      ],
      correctAnswer: 2,
      explanation: "O módulo é essencial para descobrir se um número é par (x % 2 == 0) ou para ciclos circulares."
    },
    {
      id: "q3",
      question: "Qual operador verifica se dois valores são iguais e também se são do mesmo tipo no JavaScript?",
      options: ["==", "=", "===", "!="],
      correctAnswer: 2,
      explanation: "O operador de igualdade estrita (===) evita erros de coerção automática de tipos (ex: 5 == '5' é true, mas 5 === '5' é false)."
    },
    {
      id: "q4",
      question: "No contexto de curto-circuito lógico, o que acontece em 'False && (Qualquer Coisa)'?",
      options: [
        "A segunda parte é avaliada normalmente",
        "O programa lança um erro",
        "A segunda parte é ignorada porque o resultado final será sempre False",
        "O resultado torna-se True"
      ],
      correctAnswer: 2,
      explanation: "No operador AND (&&), se o primeiro termo é falso, a expressão inteira é falsa. O motor poupa tempo não processando o resto."
    },
    {
      id: "q5",
      question: "Qual o valor de 'x' após as operações: x = 10; x += 5; x *= 2;?",
      options: ["20", "25", "30", "15"],
      correctAnswer: 2,
      explanation: "Passo 1: x = 10. Passo 2: x = 10 + 5 (15). Passo 3: x = 15 * 2 (30)."
    },
    {
      id: "q6",
      question: "O operador NOT (!) aplicado a uma expressão verdadeira resulta em:",
      options: ["True", "Null", "False", "1"],
      correctAnswer: 2,
      explanation: "O operador de negação inverte o valor booleano. !True vira False."
    }
  ]
};
