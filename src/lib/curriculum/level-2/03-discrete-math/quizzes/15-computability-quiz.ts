import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "math-q15",
  title: "Quiz: Máquinas de Turing e Computabilidade",
  passingScore: 70,
  questions: [
    {
      id: "q15_1",
      question: "Qual componente da Máquina de Turing representa a 'Memória Infinita'?",
      options: ["A Unidade de Controlo", "A Fita (Tape)", "A Cabeça de Leitura", "O Alfabeto"],
      correctAnswer: 1
    },
    {
      id: "q15_2",
      question: "O 'Halting Problem' é:",
      options: ["Decidível", "Indecidível", "Resolvido por IA", "Um problema de hardware"],
      correctAnswer: 1
    },
    {
      id: "q15_3",
      question: "A Tese de Church-Turing diz que:",
      options: [
        "Computadores quânticos são mais poderosos que TMs",
        "Qualquer função computável pode ser calculada por uma Máquina de Turing",
        "O Java é melhor que o C",
        "A internet é infinita"
      ],
      correctAnswer: 1
    },
    {
      id: "q15_4",
      question: "O que é uma Máquina de Turing 'Universal'?",
      options: ["Uma máquina que corre em qualquer planeta", "Uma TM que pode simular qualquer outra TM dado o seu código", "Uma máquina que nunca para", "Um supercomputador"],
      correctAnswer: 1
    },
    {
      id: "q15_5",
      question: "Podemos resolver o problema da paragem limitando a memória do computador?",
      options: ["Sim, torna-se decidível mas o limite é impraticável", "Não, continua impossível", "Apenas se usarmos Linux", "Sim, via hardware"],
      correctAnswer: 0,
      explanation: "Em sistemas de memória finita, o número de estados é finito, logo o problema torna-se tecnicamente decidível, mas o tempo necessário seria maior que a vida do universo."
    },
    {
      id: "q15_6",
      question: "Quem provou a incomputabilidade do Halting Problem?",
      options: ["Von Neumann", "Alan Turing", "Steve Jobs", "Claude Shannon"],
      correctAnswer: 1
    }
  ]
};
