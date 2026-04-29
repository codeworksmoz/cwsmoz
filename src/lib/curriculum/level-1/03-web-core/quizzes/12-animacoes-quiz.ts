import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "web-t12-quiz",
  title: "Quiz: Animações e Performance Visual",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual propriedade é mais performática para animar o movimento de um elemento?",
      options: ["margin-left", "left", "transform", "padding-left"],
      correctAnswer: 2,
      explanation: "A propriedade transform (translate) é processada pela GPU e não causa 'layout reflow', mantendo a fluidez de 60 FPS."
    },
    {
      id: "q2",
      question: "Para que serve a regra @keyframes?",
      options: [
        "Para mudar o tipo de letra",
        "Para definir os estágios e estados de uma animação ao longo do tempo",
        "Para proteger o site contra hackers",
        "Para criar links entre páginas"
      ],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "Qual valor de animation-fill-mode mantém o estado final da animação?",
      options: ["none", "backwards", "forwards", "both"],
      correctAnswer: 2,
      explanation: "O valor 'forwards' diz ao browser para manter os estilos definidos no último frame (100%) após a animação terminar."
    },
    {
      id: "q4",
      question: "O que faz a função timing-function 'ease-in-out'?",
      options: [
        "A animação começa rápida e termina lenta",
        "A animação tem uma velocidade constante do início ao fim",
        "A animação começa lenta, acelera no meio e termina lenta novamente",
        "A animação executa apenas metade das vezes"
      ],
      correctAnswer: 2
    },
    {
      id: "q5",
      question: "Pode uma transição ser disparada automaticamente sem interação do utilizador?",
      options: [
        "Sim, basta definir um delay",
        "Não, transições exigem uma mudança de estado (ex: :hover ou via JS)",
        "Apenas no browser Chrome",
        "Sim, usando a tag <transition>"
      ],
      correctAnswer: 1,
      explanation: "Transições precisam de um gatilho de mudança de propriedade. Para animações autónomas, usa-se a propriedade 'animation'."
    },
    {
      id: "q6",
      question: "Qual o impacto de animar a propriedade 'width' de um elemento com muito conteúdo?",
      options: [
        "Nenhum impacto perceptível",
        "Alta carga de CPU, pois o browser tem de recalcular o layout de todos os elementos vizinhos em cada frame",
        "A animação fica automaticamente mais rápida",
        "As cores do site podem desaparecer"
      ],
      correctAnswer: 1
    }
  ]
};
