import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "html-mq2",
  title: "Quiz: Semântica e ARIA",
  passingScore: 80,
  questions: [
    {
      id: "q2_1",
      question: "Qual o propósito principal de usar HTML semântico?",
      options: [
        "Aumentar a velocidade do processador",
        "Melhorar a acessibilidade e o SEO através do significado das tags",
        "Mudar a cor dos botões automaticamente",
        "Executar código JavaScript mais rápido"
      ],
      correctAnswer: 1,
      explanation: "Tags semânticas como <main>, <article> e <nav> ajudam o browser e os motores de busca a entender a estrutura e importância do conteúdo."
    },
    {
      id: "q2_2",
      question: "O que significa a sigla ARIA?",
      options: [
        "Advanced Research Interactive App",
        "Accessible Rich Internet Applications",
        "Automated Responsive Interface Arch",
        "Advanced Robotic Intelligence Agent"
      ],
      correctAnswer: 1,
      explanation: "WAI-ARIA é uma especificação que fornece formas de tornar o conteúdo web e aplicações web mais acessíveis."
    }
  ]
};
