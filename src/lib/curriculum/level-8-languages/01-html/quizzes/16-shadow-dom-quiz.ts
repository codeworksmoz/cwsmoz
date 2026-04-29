import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "html-mq16",
  title: "Quiz: Shadow DOM e Encapsulamento",
  passingScore: 80,
  questions: [
    {
      id: "q16_1",
      question: "Qual a diferença entre o modo 'open' e 'closed' ao anexar um Shadow Root?",
      options: [
        "O modo 'open' permite que o componente seja visto pelo utilizador.",
        "O modo 'open' permite o acesso à propriedade .shadowRoot via JavaScript externo; o 'closed' não.",
        "O modo 'closed' impede que o CSS funcione.",
        "Nenhuma, ambos são idênticos em navegadores modernos."
      ],
      correctAnswer: 1,
      explanation: "O modo open expõe a raiz da sombra para manipulação externa, facilitando o debugging e a integração."
    },
    {
      id: "q16_2",
      question: "O seletor CSS ':host' serve para:",
      options: [
        "Selecionar todos os elementos da página.",
        "Estilizar o elemento pai (host) a partir de dentro do Shadow DOM.",
        "Mudar a cor de fundo do browser.",
        "Selecionar apenas elementos do Light DOM."
      ],
      correctAnswer: 1
    },
    {
      id: "q16_3",
      question: "O que é o 'Event Retargeting' no Shadow DOM?",
      options: [
        "Mudar o destino de um link automaticamente.",
        "O processo onde o browser altera o alvo do evento (target) para o componente pai ao subir na árvore DOM.",
        "Um erro que impede que cliques funcionem.",
        "Uma forma de acelerar os eventos de scroll."
      ],
      correctAnswer: 1,
      explanation: "Isto garante o encapsulamento, impedindo que scripts externos conheçam a anatomia interna do seu componente."
    },
    {
      id: "q16_4",
      question: "CSS global (ex: p { color: red; }) afeta os parágrafos dentro de um Shadow DOM?",
      options: [
        "Sim, sempre.",
        "Não, a menos que utilizem variáveis CSS (Custom Properties) ou que o estilo seja herdado.",
        "Apenas se o Shadow Root for 'open'.",
        "Apenas em navegadores mobile."
      ],
      correctAnswer: 1
    }
  ]
};
