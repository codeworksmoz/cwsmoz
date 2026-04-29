import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "pf-t5-quiz",
  title: "Quiz: Automação e Iteração",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual o loop mais adequado quando sabemos exatamente o número de repetições?",
      options: ["While", "For", "If", "Switch"],
      correctAnswer: 1,
      explanation: "O loop 'For' é desenhado para percorrer coleções ou repetir ações um número pré-determinado de vezes."
    },
    {
      id: "q2",
      question: "O que caracteriza um 'Loop Infinito'?",
      options: [
        "Um loop que corre 1 milhão de vezes",
        "Uma condição que nunca se torna Falsa",
        "Um erro de sintaxe no nome da variável",
        "O uso de números negativos"
      ],
      correctAnswer: 1,
      explanation: "Se a condição de paragem nunca for atingida, o CPU ficará preso no mesmo bloco para sempre."
    },
    {
      id: "q3",
      question: "Para que serve a instrução 'break' dentro de um loop?",
      options: [
        "Para pausar o programa por 1 segundo",
        "Para sair imediatamente do loop, ignorando as voltas restantes",
        "Para reiniciar o computador",
        "Para saltar apenas a volta atual"
      ],
      correctAnswer: 1,
      explanation: "O break 'quebra' o laço de repetição, movendo o fluxo para a linha logo após o fim do loop."
    },
    {
      id: "q4",
      question: "Qual a diferença do 'do-while' para o 'while' tradicional?",
      options: [
        "O do-while é mais rápido",
        "O do-while garante que o código execute pelo menos uma vez antes de testar a condição",
        "O while tradicional não aceita números",
        "Não existe diferença real"
      ],
      correctAnswer: 1,
      explanation: "No do-while, a verificação é feita no fim do bloco, por isso a primeira execução acontece sempre."
    },
    {
      id: "q5",
      question: "O que a instrução 'continue' faz?",
      options: [
        "Encerra o programa",
        "Salta o resto do código da volta atual e vai direto para a próxima iteração",
        "Imprime o valor do contador",
        "Cria um novo loop"
      ],
      correctAnswer: 1,
      explanation: "O continue não para o loop, apenas 'pula' o que falta naquela volta específica."
    },
    {
      id: "q6",
      question: "Qual o valor final de 'x' em: x=0; for(i=0; i<3; i++) { x+=2 }?",
      options: ["2", "4", "6", "3"],
      correctAnswer: 2,
      explanation: "O loop roda 3 vezes (i=0, 1, 2). Em cada volta adiciona 2 ao x. 2 + 2 + 2 = 6."
    }
  ]
};