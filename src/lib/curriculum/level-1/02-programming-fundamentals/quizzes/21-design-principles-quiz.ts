import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "pf-t21-quiz",
  title: "Quiz: Princípios de Design e Clean Code",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "O que prega o princípio DRY?",
      options: [
        "Escrever o máximo de código possível",
        "Evitar a duplicação de lógica no sistema",
        "Manter o código sempre seco e sem comentários",
        "Usar apenas funções síncronas"
      ],
      correctAnswer: 1,
      explanation: "DRY = Don't Repeat Yourself. Repetição é a mãe da inconsistência e dos bugs."
    },
    {
      id: "q2",
      question: "O princípio KISS (Keep It Simple, Stupid) sugere que:",
      options: [
        "Devemos ignorar a segurança para ser simples",
        "A simplicidade deve ser um objetivo fundamental; evitar complexidade desnecessária",
        "O código deve ser escrito apenas por estagiários",
        "Não devemos usar funções complexas"
      ],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "Qual o significado da sigla YAGNI?",
      options: [
        "You Always Get New Items",
        "You Ain't Gonna Need It (Não implementes o que não é necessário agora)",
        "Yet Another Great Network Interface",
        "Yield All Great Net Income"
      ],
      correctAnswer: 1,
      explanation: "YAGNI combate o excesso de engenharia e a criação de funcionalidades que 'talvez' sejam úteis no futuro."
    },
    {
      id: "q4",
      question: "Segundo o princípio da Responsabilidade Única, uma função deve:",
      options: [
        "Fazer tudo o que o utilizador pedir",
        "Realizar apenas uma tarefa específica de forma excelente",
        "Ter pelo menos 100 linhas de código",
        "Ser partilhada por todos os módulos do sistema"
      ],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "O que é 'Débito Técnico'?",
      options: [
        "Uma dívida financeira da empresa de software",
        "O custo futuro de retrabalho causado por escolher uma solução rápida/suja agora em vez de uma bem desenhada",
        "O preço das licenças de software",
        "O tempo que o servidor fica offline"
      ],
      correctAnswer: 1
    },
    {
      id: "q6",
      question: "Qual a maior vantagem de seguir padrões de design?",
      options: [
        "O código corre 10x mais rápido",
        "Facilita a manutenção, a leitura por outros engenheiros e a escalabilidade do sistema",
        "Impede que o código seja copiado por outros",
        "Ocupa menos espaço no disco"
      ],
      correctAnswer: 1
    }
  ]
};
