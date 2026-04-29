import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "web-t3-quiz",
  title: "Quiz: CSS Box Model Master",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual a diferença fundamental entre Padding e Margin?",
      options: [
        "Padding é fora da borda, Margin é dentro",
        "Padding é dentro da borda (espaço interno), Margin é fora da borda (espaço externo)",
        "Padding serve para cores, Margin para tamanhos",
        "Não existe diferença, são sinónimos"
      ],
      correctAnswer: 1,
      explanation: "Padding empurra o conteúdo para dentro; Margin empurra os vizinhos para longe."
    },
    {
      id: "q2",
      question: "Ao definir 'width: 100px' num elemento com 'padding: 10px', qual o tamanho real da caixa no modelo padrão?",
      options: ["100px", "110px", "120px", "80px"],
      correctAnswer: 2,
      explanation: "O browser soma 10px de cada lado (esquerda e direita) aos 100px iniciais. 100 + 10 + 10 = 120px."
    },
    {
      id: "q3",
      question: "Para que serve a propriedade 'box-sizing: border-box'?",
      options: [
        "Para mudar a cor das bordas",
        "Para fazer com que o padding e a borda sejam incluídos na largura total definida",
        "Para arredondar os cantos da caixa",
        "Para esconder o conteúdo que sobra"
      ],
      correctAnswer: 1,
      explanation: "É a salvação do layout! Com border-box, 100px de largura serão sempre 100px, independentemente do padding."
    },
    {
      id: "q4",
      question: "A margem negativa (ex: margin-top: -20px) é permitida no CSS?",
      options: [
        "Não, o CSS ignora valores negativos",
        "Sim, e serve para 'puxar' o elemento para cima ou sobrepor elementos",
        "Apenas em imagens",
        "Sim, mas apenas no browser Firefox"
      ],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "Qual propriedade define se uma borda deve ser sólida, tracejada ou pontilhada?",
      options: ["border-width", "border-color", "border-style", "border-type"],
      correctAnswer: 2
    },
    {
      id: "q6",
      question: "O que acontece com as margens verticais de dois elementos vizinhos (Margin Collapsing)?",
      options: [
        "Elas somam-se",
        "A maior margem 'engole' a menor, e o espaço entre eles será apenas a maior",
        "O browser dá um erro",
        "Os elementos sobrepõem-se obrigatoriamente"
      ],
      correctAnswer: 1,
      explanation: "O colapso de margens é um comportamento clássico onde 20px de margem inferior de um elemento e 30px de margem superior do outro resultam em apenas 30px de espaço real."
    }
  ]
};