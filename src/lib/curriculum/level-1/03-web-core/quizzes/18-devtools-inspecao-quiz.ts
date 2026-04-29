import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "web-q18",
  title: "Quiz: Browser DevTools Master",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual painel das DevTools é usado para modificar o CSS e ver o resultado instantaneamente?",
      options: ["Network", "Console", "Elements", "Application"],
      correctAnswer: 2
    },
    {
      id: "q2",
      question: "Para que serve o painel 'Network'?",
      options: [
        "Para mudar o nome do site",
        "Para monitorizar todos os pedidos de ficheiros e APIs feitos pelo browser",
        "Para ligar o site a uma rede social",
        "Para medir a bateria do telemóvel"
      ],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "Onde podes encontrar erros de execução de JavaScript?",
      options: ["Sources", "Performance", "Console", "Memory"],
      correctAnswer: 2
    },
    {
      id: "q4",
      question: "O que o botão de 'Dispositivo' (Toggle Device Toolbar) permite testar?",
      options: [
        "A segurança do hardware",
        "Como o site se comporta em diferentes tamanhos de ecrã (responsividade)",
        "Se o processador está quente",
        "A cor do teclado"
      ],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "No painel Network, o que representa o 'TTFB'?",
      options: [
        "Total Time For Build",
        "Time to First Byte (Tempo até o primeiro byte chegar do servidor)",
        "Text Transfer Font Block",
        "Test To Find Bugs"
      ],
      correctAnswer: 1
    },
    {
      id: "q6",
      question: "As alterações feitas no painel 'Elements' são guardadas permanentemente no teu ficheiro .html original?",
      options: [
        "Sim, o browser grava o ficheiro sozinho",
        "Não, as mudanças são apenas temporárias na memória do browser e desaparecem ao atualizar a página",
        "Apenas se o site for em WordPress",
        "Sim, mas apenas no browser Chrome"
      ],
      correctAnswer: 1
    }
  ]
};
