import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "web-t4-quiz",
  title: "Quiz: Domínio de CSS Flexbox",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual propriedade ativa o modelo Flexbox num elemento?",
      options: ["position: flex", "display: flex", "float: left", "layout: flexible"],
      correctAnswer: 1,
      explanation: "A propriedade display com o valor flex é o interruptor que ativa o contexto flexível para todos os filhos diretos."
    },
    {
      id: "q2",
      question: "O que acontece se mudarmos 'flex-direction' para 'column'?",
      options: [
        "Os itens desaparecem",
        "O Main Axis passa a ser vertical",
        "O justify-content para de funcionar",
        "Os itens ficam um por cima do outro em 3D"
      ],
      correctAnswer: 1,
      explanation: "flex-direction dita a orientação do eixo principal. Em 'column', o fluxo é de cima para baixo."
    },
    {
      id: "q3",
      question: "Qual propriedade alinha os itens no eixo cruzado (Cross Axis)?",
      options: ["justify-content", "align-items", "flex-wrap", "gap"],
      correctAnswer: 1,
      explanation: "align-items controla o alinhamento perpendicular ao fluxo principal."
    },
    {
      id: "q4",
      question: "Qual o valor de 'justify-content' que coloca o máximo de espaço possível ENTRE os itens, mas nenhum nas pontas?",
      options: ["space-around", "center", "space-between", "flex-end"],
      correctAnswer: 2
    },
    {
      id: "q5",
      question: "O que o 'flex-grow: 1' faz num item?",
      options: [
        "Aumenta o tamanho da fonte",
        "Permite que o item estique para ocupar o espaço vazio disponível no container",
        "Faz o item ficar invisível",
        "Cria uma margem externa automática"
      ],
      correctAnswer: 1
    },
    {
      id: "q6",
      question: "Por que se recomenda usar 'gap' em vez de 'margin' para separar itens flex?",
      options: [
        "Porque 'gap' é mais rápido",
        "Porque o 'gap' não cria espaçamentos indesejados nas extremidades do container",
        "Porque 'margin' não funciona em Flexbox",
        "Apenas por uma questão de estética do código"
      ],
      correctAnswer: 1,
      explanation: "O gap define o espaçamento apenas ENTRE os itens, mantendo o alinhamento com as bordas do pai perfeito."
    }
  ]
};
