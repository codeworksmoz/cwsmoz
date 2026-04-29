import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "web-q13",
  title: "Quiz: Metodologia BEM e Clean CSS",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "O que representa o 'B' na sigla BEM?",
      options: ["Border", "Block", "Background", "Base"],
      correctAnswer: 1,
      explanation: "Block representa um componente independente que pode ser reutilizado em qualquer lugar do site."
    },
    {
      id: "q2",
      question: "Qual o separador correto para identificar um Elemento dentro de um Bloco no BEM?",
      options: ["Um traço (-)", "Dois traços (--)", "Dois underscores (__)", "Um underscore (_)"],
      correctAnswer: 2,
      explanation: "Usamos double underscore (__) para ligar o Elemento ao seu Bloco pai (ex: .nav__link)."
    },
    {
      id: "q3",
      question: "Para que serve o Modificador no BEM?",
      options: [
        "Para criar um novo bloco",
        "Para definir o tamanho da fonte",
        "Para representar variações de estado ou aparência (ex: ativo, desativado, vermelho)",
        "Para esconder o código do utilizador"
      ],
      correctAnswer: 2
    },
    {
      id: "q4",
      question: "Qual a vantagem técnica de usar apenas classes únicas (como exige o BEM) em vez de seletores aninhados (div p span)?",
      options: [
        "O código fica mais longo",
        "Mantém a especificidade baixa, facilitando a manutenção e prevenindo conflitos inesperados",
        "Aumenta o brilho das cores",
        "Não existe vantagem técnica"
      ],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "Numa arquitetura BEM, como seria a classe para um botão que está desativado dentro de um formulário de login?",
      options: [
        ".login-btn-disabled",
        ".login-form__btn--disabled",
        ".login-form .btn .disabled",
        ".form__disabled_btn"
      ],
      correctAnswer: 1,
      explanation: "Seguindo a regra: Bloco (login-form), Elemento (btn) e Modificador (disabled)."
    },
    {
      id: "q6",
      question: "Pode um Elemento existir fora de um Bloco no BEM?",
      options: [
        "Sim, se for um elemento global",
        "Não, um elemento é dependente e pertence sempre ao seu bloco",
        "Apenas se usar a tag <div>",
        "Sim, mas apenas em mobile"
      ],
      correctAnswer: 1
    }
  ]
};
