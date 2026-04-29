import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "dt-q1",
  title: "Quiz: Domínio do VS Code",
  passingScore: 70,
  questions: [
    {
      id: "q1_1",
      question: "Qual atalho abre a 'Command Palette' no VS Code?",
      options: ["Ctrl + S", "Ctrl + Shift + P", "Alt + F4", "Ctrl + P"],
      correctAnswer: 1,
      explanation: "A Paleta de Comandos é o centro nervoso do editor, permitindo acesso a qualquer funcionalidade via teclado."
    },
    {
      id: "q1_2",
      question: "Para que serve a extensão 'Prettier'?",
      options: [
        "Para mudar a cor do editor",
        "Para formatar o código automaticamente seguindo padrões de estilo",
        "Para encontrar erros de lógica",
        "Para ligar à base de dados"
      ],
      correctAnswer: 1
    },
    {
      id: "q1_3",
      question: "Qual a função do arquivo 'settings.json'?",
      options: [
        "Guardar senhas de utilizador",
        "Configurar preferências personalizadas do editor de forma programática",
        "É um vírus de sistema",
        "Guardar a lista de amigos do GitHub"
      ],
      correctAnswer: 1
    },
    {
      id: "q1_4",
      question: "Como se chama a funcionalidade que permite ver quem alterou cada linha de código?",
      options: ["Git Bash", "Git Blame", "Git Push", "Git View"],
      correctAnswer: 1
    },
    {
      id: "q1_5",
      question: "O atalho 'Ctrl + P' serve para:",
      options: [
        "Imprimir o código em papel",
        "Pesquisar e abrir ficheiros rapidamente pelo nome",
        "Apagar a linha atual",
        "Colar texto do clipboard"
      ],
      correctAnswer: 1
    },
    {
      id: "q1_6",
      question: "Qual painel do VS Code permite gerir extensões?",
      options: ["Explorer", "Source Control", "Extensions (Ctrl+Shift+X)", "Debug"],
      correctAnswer: 2
    }
  ]
};
