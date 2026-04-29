import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "web-q19",
  title: "Quiz: Tipografia e Performance",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual o benefício principal de 'font-display: swap'?",
      options: [
        "Mudar a cor da fonte automaticamente",
        "Garantir que o texto seja legível com uma fonte padrão enquanto a Web Font carrega",
        "Aumentar o tamanho do ficheiro da fonte",
        "Criptografar o texto do site"
      ],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "Por que se prefere a unidade 'rem' sobre 'px' para o tamanho das fontes?",
      options: [
        "Porque o 'rem' é mais rápido",
        "Porque o 'rem' respeita a escala de acessibilidade definida pelo utilizador no browser",
        "Porque 'px' não funciona em telemóveis",
        "Apenas por estética do código"
      ],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "O que caracteriza uma 'Variable Font'?",
      options: [
        "Uma fonte que muda de cor sozinha",
        "Um único ficheiro que contém múltiplos pesos e estilos manipuláveis via eixos",
        "Uma fonte que só funciona em JavaScript",
        "Uma fonte gratuita"
      ],
      correctAnswer: 1
    }
  ]
};
