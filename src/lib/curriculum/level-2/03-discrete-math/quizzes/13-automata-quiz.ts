import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "math-q13",
  title: "Quiz: Teoria de Autómatos Master",
  passingScore: 70,
  questions: [
    {
      id: "q13_1",
      question: "Qual a diferença fundamental entre DFA e NFA?",
      options: [
        "O DFA é mais rápido que o NFA",
        "No DFA, cada estado/entrada tem exatamente uma transição; no NFA pode ter várias ou nenhuma",
        "O NFA só funciona em software",
        "DFA não tem estados de aceitação"
      ],
      correctAnswer: 1
    },
    {
      id: "q13_2",
      question: "O que representa o alfabeto Σ (Sigma) num autómato?",
      options: ["A soma de todos os estados", "O conjunto finito de símbolos de entrada permitidos", "O erro de sistema", "A fita de memória"],
      correctAnswer: 1
    },
    {
      id: "q13_3",
      question: "O que acontece se uma string termina num estado que NÃO pertence a F (Estados Finais)?",
      options: ["O computador reinicia", "A string é rejeitada pelo autómato", "O autómato entra em loop", "A string é considerada válida"],
      correctAnswer: 1
    },
    {
      id: "q13_4",
      question: "É possível converter qualquer NFA num DFA?",
      options: [
        "Não, são classes de poder diferentes",
        "Sim, através da construção de subconjuntos (Powerset construction)",
        "Apenas se o NFA for pequeno",
        "Sim, mas apenas via hardware"
      ],
      correctAnswer: 1
    },
    {
      id: "q13_5",
      question: "Qual o uso prático de autómatos no desenvolvimento de compiladores?",
      options: [
        "Geração de cores para o terminal",
        "Análise léxica (tokenização) do código fonte",
        "Criptografia de disco",
        "Backup de ficheiros"
      ],
      correctAnswer: 1
    },
    {
      id: "q13_6",
      question: "O que é uma 'ε-transition' (transição epsilon)?",
      options: ["Um erro de sinal", "Uma transição que ocorre sem ler qualquer símbolo de entrada", "O fim do programa", "Uma transição para o estado inicial"],
      correctAnswer: 1
    }
  ]
};