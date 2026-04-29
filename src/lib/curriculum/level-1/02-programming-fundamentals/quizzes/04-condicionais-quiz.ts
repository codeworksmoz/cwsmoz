import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "pf-t4-quiz",
  title: "Quiz: Lógica de Decisão Profissional",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "O que acontece se a expressão dentro de um 'if' for Falsa e não existir um 'else'?",
      options: [
        "O programa crasha imediatamente",
        "O bloco do 'if' é ignorado e o programa segue para a linha seguinte",
        "O computador reinicia",
        "O programa fica parado à espera que o valor mude"
      ],
      correctAnswer: 1,
      explanation: "O 'else' é opcional. Se a condição falhar, o fluxo simplesmente salta o bloco e continua a execução normal."
    },
    {
      id: "q2",
      question: "Qual operador exige que AMBAS as condições sejam verdadeiras?",
      options: ["OR (||)", "NOT (!)", "AND (&&)", "XOR"],
      correctAnswer: 2,
      explanation: "O operador AND (&&) só retorna verdadeiro se todas as premissas forem verdadeiras."
    },
    {
      id: "q3",
      question: "O que é o fenómeno de 'Short-circuit' (Curto-circuito) no operador OR (||)?",
      options: [
        "Se a primeira condição for Verdadeira, a segunda nem é avaliada",
        "Um erro elétrico no hardware",
        "Se a primeira for Falsa, o programa pára",
        "O programa executa as duas ao mesmo tempo"
      ],
      correctAnswer: 0,
      explanation: "No OR, se o primeiro termo for verdadeiro, o resultado já é verdadeiro, por isso o motor ignora o resto da expressão para poupar tempo."
    },
    {
      id: "q4",
      question: "A estrutura 'switch' é preferível sobre múltiplos 'if/else' quando:",
      options: [
        "Temos muitas condições complexas com AND/OR",
        "Queremos comparar uma única variável com vários valores fixos",
        "O código precisa de correr mais devagar",
        "Não queremos usar variáveis"
      ],
      correctAnswer: 1,
      explanation: "O switch torna o código mais limpo e organizado quando validamos valores discretos de uma mesma variável."
    },
    {
      id: "q5",
      question: "Qual o resultado de !(10 < 5)?",
      options: ["Verdadeiro (True)", "Falso (False)", "Erro", "NaN"],
      correctAnswer: 0,
      explanation: "10 < 5 é Falso. O operador NOT (!) inverte o valor, tornando-o Verdadeiro."
    },
    {
      id: "q6",
      question: "Por que se recomenda colocar a condição mais provável de ser Falsa no início de um AND (&&)?",
      options: [
        "Para gastar menos RAM",
        "Para aproveitar o curto-circuito e evitar processamento inútil do resto da linha",
        "Para dificultar a leitura do código",
        "Não existe razão técnica"
      ],
      correctAnswer: 1,
      explanation: "Se o primeiro já for Falso, o AND falha imediatamente, poupando ciclos de CPU que seriam gastos a avaliar as outras condições."
    }
  ]
};
