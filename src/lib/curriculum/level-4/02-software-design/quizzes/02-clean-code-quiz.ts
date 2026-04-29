import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "des-q2-master",
  title: "Quiz: Clean Code e Refatoração",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "Segundo o Clean Code, qual o número ideal de argumentos para uma função?",
      options: ["0 a 2", "Exatamente 3", "Quanto mais melhor", "Depende da RAM"],
      correctAnswer: 0,
      explanation: "Funções com muitos argumentos são difíceis de testar e entender. Se precisas de mais de 3, provavelmente deves passar um objeto."
    },
    {
      id: "q2",
      question: "O que caracteriza um 'Code Smell' de rigidez?",
      options: [
        "O código é muito rápido",
        "Uma mudança simples exige alterações em cascata em muitos módulos",
        "O código não tem comentários",
        "A classe é pequena demais"
      ],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "A regra do 'Early Return' (retorno antecipado) serve para evitar:",
      options: [
        "O uso de variáveis",
        "O aninhamento profundo de blocos 'if' (Arrow Code)",
        "A execução do programa",
        "O uso de loops for"
      ],
      correctAnswer: 1
    },
    {
      id: "q4",
      question: "Qual técnica de refatoração transforma um bloco complexo de código numa nova função bem nomeada?",
      options: ["Extract Class", "Extract Method", "Move Method", "Rename Variable"],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "O princípio YAGNI (You Ain't Gonna Need It) combate:",
      options: [
        "A falta de documentação",
        "O excesso de engenharia e a implementação de funcionalidades 'para o futuro' que não são necessárias agora",
        "O uso de linguagens antigas",
        "A duplicação de código"
      ],
      correctAnswer: 1
    },
    {
      id: "q6",
      question: "Por que deves evitar comentários que explicam 'o que' o código faz?",
      options: [
        "Porque o computador não lê comentários",
        "Porque o código deve ser claro o suficiente para se explicar sozinho; comentários devem explicar o 'porquê'",
        "Porque ocupam espaço em disco",
        "Porque são proibidos por lei"
      ],
      correctAnswer: 1
    }
  ]
};