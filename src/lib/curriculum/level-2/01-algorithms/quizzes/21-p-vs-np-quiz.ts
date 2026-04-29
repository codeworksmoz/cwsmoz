import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "alg-q21",
  title: "Quiz: Teoria da Complexidade",
  passingScore: 70,
  questions: [
    {
      id: "q21_1",
      question: "O que define um problema na classe P?",
      options: ["Impossível de resolver", "Pode ser resolvido em tempo polinomial (eficiente)", "Só pode ser resolvido por IA", "Ocupa todo o disco"],
      correctAnswer: 1
    },
    {
      id: "q21_2",
      question: "Qual a característica principal de problemas em NP?",
      options: ["Não têm solução", "A solução pode ser verificada rapidamente, mas encontrá-la é (presumivelmente) difícil", "São resolvidos em tempo linear", "Não usam bits"],
      correctAnswer: 1
    },
    {
      id: "q21_3",
      question: "O que significa 'NP-Complete'?",
      options: ["O problema terminou", "Um problema em NP ao qual todos os outros problemas de NP podem ser reduzidos", "Um erro de sistema", "Um problema fácil"],
      correctAnswer: 1
    },
    {
      id: "q21_4",
      question: "Atualmente, a maioria dos cientistas acredita que:",
      options: ["P = NP", "P ≠ NP", "Ninguém sabe", "P = 0"],
      correctAnswer: 1
    },
    {
      id: "q21_5",
      question: "Se P = NP fosse provado verdadeiro, qual o impacto imediato?",
      options: ["A internet ficaria azul", "Quase toda a criptografia moderna (RSA) seria quebrada instantaneamente", "O preço dos computadores cairia", "O HTML morreria"],
      correctAnswer: 1
    },
    {
      id: "q21_6",
      question: "O problema do Caixeiro Viajante (Traveling Salesman) é:",
      options: ["P", "Linear", "NP-Hard", "Constante"],
      correctAnswer: 2
    }
  ]
};
