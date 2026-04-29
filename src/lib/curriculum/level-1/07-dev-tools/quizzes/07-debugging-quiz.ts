import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "dt-q7",
  title: "Quiz: Debugging e Performance",
  passingScore: 70,
  questions: [
    {
      id: "q7_1",
      question: "O que a Call Stack revela ao engenheiro?",
      options: ["O preço do servidor", "A hierarquia de funções chamadas até ao ponto atual", "O número de utilizadores logados", "A cor do ecrã"],
      correctAnswer: 1
    },
    {
      id: "q7_2",
      question: "Qual ferramenta usas para detetar Memory Leaks?",
      options: ["Network tab", "Memory tab (Heap Snapshot)", "Console log", "Elements tab"],
      correctAnswer: 1
    },
    {
      id: "q7_3",
      question: "O comando 'Step Into' no Debugger faz o quê?",
      options: ["Salta a função atual", "Entra dentro da função na linha atual para ver a sua lógica interna", "Pára o programa permanentemente", "Reinicia a CPU"],
      correctAnswer: 1
    },
    {
      id: "q7_4",
      question: "O que é um 'Conditional Breakpoint'?",
      options: ["Um erro que só acontece às vezes", "Um ponto de paragem que só ativa se uma condição específica for verdadeira", "Um código secreto", "Um botão que desliga o site"],
      correctAnswer: 1
    },
    {
      id: "q7_5",
      question: "Por que deves evitar 'zombie objects' na memória?",
      options: ["Porque assustam o utilizador", "Porque consomem RAM desnecessária e causam lentidão progressiva", "Porque o Google penaliza o site", "Não há problema em tê-los"],
      correctAnswer: 1
    },
    {
      id: "q7_6",
      question: "Para que serve o 'Watch Expression' no VS Code?",
      options: ["Ver as horas", "Monitorizar o valor de uma variável específica durante toda a execução", "Mudar o tema do editor", "Ver vídeos do Youtube"],
      correctAnswer: 1
    }
  ]
};