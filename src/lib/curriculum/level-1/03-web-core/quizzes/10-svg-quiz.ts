import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "web-t10-quiz",
  title: "Quiz: Domínio de SVG e Vetores",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual a principal vantagem de um SVG sobre uma imagem PNG?",
      options: [
        "Tem mais cores disponíveis",
        "Pode ser redimensionado infinitamente sem perder a nitidez",
        "Carrega sempre mais rápido que qualquer imagem",
        "Pode ser aberto apenas no Photoshop"
      ],
      correctAnswer: 1,
      explanation: "SVGs são baseados em fórmulas matemáticas, não em pixels. Por isso, mantêm a qualidade perfeita em qualquer tamanho."
    },
    {
      id: "q2",
      question: "O que define a área visível e o sistema de coordenadas de um SVG?",
      options: ["width e height", "viewBox", "pixel-ratio", "transform"],
      correctAnswer: 1,
      explanation: "O viewBox (min-x, min-y, width, height) define a janela de visualização e a escala interna do desenho."
    },
    {
      id: "q3",
      question: "Qual propriedade CSS deve ser usada para mudar a cor interna de uma forma SVG?",
      options: ["background-color", "color", "fill", "stroke-color"],
      correctAnswer: 2,
      explanation: "Diferente do HTML comum, formas vetoriais usam 'fill' para preenchimento e 'stroke' para contorno."
    },
    {
      id: "q4",
      question: "Na tag <circle>, o que representam os atributos 'cx' e 'cy'?",
      options: [
        "O tamanho da borda",
        "As coordenadas X e Y do centro do círculo",
        "A largura e a altura totais",
        "A cor do círculo"
      ],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "Para que serve a tag <path> no SVG?",
      options: [
        "Apenas para desenhar linhas retas",
        "Para definir o caminho de ficheiros externos",
        "Para desenhar formas complexas e curvas personalizadas",
        "Para criar links entre páginas"
      ],
      correctAnswer: 2,
      explanation: "O elemento <path> é o mais versátil, permitindo desenhar qualquer forma através de comandos de coordenadas."
    },
    {
      id: "q6",
      question: "Como se garante a acessibilidade de um ícone SVG para leitores de ecrã?",
      options: [
        "Usando o atributo 'alt' como numa imagem comum",
        "Inserindo as tags <title> e <desc> dentro do código SVG",
        "Mudando a cor para preto",
        "Não é possível tornar um SVG acessível"
      ],
      correctAnswer: 1,
      explanation: "Como o SVG é código, o browser lê as tags internas de título e descrição para descrever o ícone a utilizadores cegos."
    }
  ]
};
