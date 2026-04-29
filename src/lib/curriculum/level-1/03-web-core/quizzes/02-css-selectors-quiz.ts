import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "web-t2-quiz",
  title: "Quiz: Seletores e Cascata CSS",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Num conflito de estilos, qual seletor tem maior 'peso' de especificidade?",
      options: [
        "Seletor de Tag (ex: p)",
        "Seletor de Classe (ex: .texto)",
        "Seletor de ID (ex: #principal)",
        "Seletor Universal (*)"
      ],
      correctAnswer: 2,
      explanation: "IDs têm 100 pontos de especificidade, superando em muito classes (10 pts) e tags (1 pt)."
    },
    {
      id: "q2",
      question: "O que significa a 'Cascata' no CSS?",
      options: [
        "O código corre de baixo para cima",
        "A ordem de definição importa: em caso de empate de peso, a última regra escrita ganha",
        "As cores mudam sozinhas conforme o tempo",
        "Os estilos são aplicados apenas a elementos filhos"
      ],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "Qual destas propriedades NÃO é herdada automaticamente pelos elementos filhos?",
      options: ["color", "font-family", "border", "line-height"],
      correctAnswer: 2,
      explanation: "Bordas, margens e paddings não são herdados; cada elemento deve definir o seu próprio contorno físico."
    },
    {
      id: "q4",
      question: "Para que serve o seletor combinado 'div p'?",
      options: [
        "Seleciona todas as divs e todos os parágrafos",
        "Seleciona apenas parágrafos que estão DENTRO de uma div",
        "Seleciona divs que têm parágrafos",
        "É um erro de sintaxe"
      ],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "Qual o perigo de usar exaustivamente o seletor !important?",
      options: [
        "O browser fica mais lento",
        "Quebra a lógica da cascata e torna a manutenção e correção de bugs muito difícil",
        "As cores ficam menos vibrantes",
        "Não existe perigo, é uma boa prática"
      ],
      correctAnswer: 1
    },
    {
      id: "q6",
      question: "Como se seleciona um elemento com a classe 'ativo' que está no estado de hover (passar o rato)?",
      options: [".ativo::hover", ".ativo:hover", "ativo.hover", "#ativo:hover"],
      correctAnswer: 1,
      explanation: "Pseudo-classes de estado como :hover usam apenas um sinal de dois pontos."
    }
  ]
};