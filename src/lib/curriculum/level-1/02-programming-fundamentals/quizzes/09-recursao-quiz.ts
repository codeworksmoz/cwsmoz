import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "pf-t9-quiz",
  title: "Quiz: Domínio de Recursão",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual o componente mais crítico para evitar um loop infinito numa função recursiva?",
      options: ["Parâmetro global", "Caso Base (Base Case)", "Operador de soma", "O comando return true"],
      correctAnswer: 1,
      explanation: "O caso base é a âncora que interrompe as chamadas sucessivas. Sem ele, a função chama-se infinitamente até esgotar a memória."
    },
    {
      id: "q2",
      question: "O que acontece fisicamente na memória RAM (Stack) durante a recursão?",
      options: [
        "A memória é libertada em cada chamada",
        "Cada chamada adiciona um novo 'frame' na pilha, ocupando mais espaço",
        "O computador desliga o disco rígido",
        "Nada, o JavaScript não usa memória para funções"
      ],
      correctAnswer: 1,
      explanation: "Cada vez que a função se chama, o estado atual é guardado na Call Stack. Por isso, recursões muito profundas podem causar erro de falta de memória."
    },
    {
      id: "q3",
      question: "Qual o resultado de um fatorial de 0 (0!)?",
      options: ["0", "1", "Erro", "Infinito"],
      correctAnswer: 1,
      explanation: "Por definição matemática e lógica de programação, o caso base do fatorial para 0 ou 1 é sempre 1."
    },
    {
      id: "q4",
      question: "O termo 'Stack Overflow' refere-se a:",
      options: [
        "Um site de perguntas apenas",
        "O esgotamento do limite de memória da pilha de chamadas devido a excesso de recursão",
        "Um erro de conexão à internet",
        "Quando o código é muito curto"
      ],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "Qual destas tarefas é mais naturalmente resolvida com recursão?",
      options: [
        "Somar 1 + 1",
        "Percorrer todas as pastas e subpastas de um computador",
        "Imprimir um nome no terminal",
        "Mudar a cor de um botão"
      ],
      correctAnswer: 1,
      explanation: "Pastas dentro de pastas são estruturas recursivas por natureza, tornando a recursão a ferramenta ideal para as navegar."
    },
    {
      id: "q6",
      question: "Dada a função f(n) = n + f(n-1) com caso base f(1)=1, qual o valor de f(3)?",
      options: ["3", "4", "6", "5"],
      correctAnswer: 2,
      explanation: "f(3) = 3 + f(2). f(2) = 2 + f(1). f(1) = 1. Logo: 3 + 2 + 1 = 6."
    }
  ]
};
