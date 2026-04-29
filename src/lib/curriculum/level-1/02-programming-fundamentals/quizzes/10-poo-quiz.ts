import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "pf-t10-quiz",
  title: "Quiz: Fundamentos de Objetos",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Na analogia da construção, o que representa a 'Classe'?",
      options: ["A casa pronta", "O morador", "A planta/molde da casa", "Os tijolos"],
      correctAnswer: 2,
      explanation: "A classe é a definição teórica, o molde que diz como os objetos devem ser criados."
    },
    {
      id: "q2",
      question: "Qual o nome dado a uma ação que um objeto consegue realizar?",
      options: ["Variável", "Atributo", "Método", "Instância"],
      correctAnswer: 2,
      explanation: "Métodos são funções que pertencem a um objeto e definem o seu comportamento."
    },
    {
      id: "q3",
      question: "O que acontece no momento da 'Instanciação'?",
      options: [
        "O código é apagado",
        "Um objeto real é criado na memória a partir de uma classe",
        "O programa é enviado para o servidor",
        "O compilador encontra um erro"
      ],
      correctAnswer: 1
    },
    {
      id: "q4",
      question: "Para que serve o método 'Constructor'?",
      options: [
        "Para destruir o objeto",
        "Para inicializar os dados (atributos) do objeto no momento em que ele nasce",
        "Para mudar a cor da interface",
        "Para ligar o banco de dados"
      ],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "Em POO, o que são os 'Atributos'?",
      options: [
        "As funções do objeto",
        "As características ou dados do objeto",
        "Os erros de sintaxe",
        "Os botões do teclado"
      ],
      correctAnswer: 1,
      explanation: "Atributos são os dados que o objeto guarda. Ex: 'nome', 'idade', 'cor'."
    },
    {
      id: "q6",
      question: "Qual a vantagem de agrupar dados e métodos num objeto?",
      options: [
        "O código corre 2x mais rápido",
        "Organização, reutilização e facilidade de manutenção (Encapsulamento)",
        "Ocupa 0 de memória RAM",
        "Não existem vantagens"
      ],
      correctAnswer: 1
    }
  ]
};
