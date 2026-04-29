import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "html-mq2",
  title: "Quiz: Semântica e ARIA",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "Qual o propósito principal de usar HTML semântico?",
      options: [
        "Aumentar a velocidade do processador",
        "Melhorar a acessibilidade e o SEO através do significado das tags",
        "Mudar a cor dos botões automaticamente",
        "Executar código JavaScript mais rápido"
      ],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "O que significa a sigla ARIA?",
      options: [
        "Advanced Research Interactive App",
        "Accessible Rich Internet Applications",
        "Automated Responsive Interface Arch",
        "Advanced Robotic Intelligence Agent"
      ],
      correctAnswer: 1
    }
  ]
};
