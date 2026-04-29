import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "hci-q21",
  title: "Quiz: O Futuro da Interação",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "O que significa a sigla BCI?",
      options: ["Basic Computer Interface", "Brain-Computer Interface", "Binary Code Integration", "Browser Connection Info"],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "Qual o objetivo de uma 'Calm Interface'?",
      options: ["Tocar música relaxante", "Reduzir a carga mental e desaparecer no ambiente", "Aumentar o número de notificações", "Forçar o utilizador a dormir"],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "Interfaces neurais visam inicialmente ajudar qual grupo?",
      options: ["Gamers profissionais", "Pessoas com paralisia motora severa", "Engenheiros de rede", "Crianças em idade escolar"],
      correctAnswer: 1
    },
    {
      id: "q4",
      question: "O futuro do HCI aponta para:",
      options: ["Mais ecrãs por todo o lado", "Interfaces que se tornam invisíveis e integradas na vida", "O fim do uso de computadores", "O regresso ao papel e caneta"],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "Qual o principal desafio ético do BCI?",
      options: ["O custo do hardware", "Privacidade do pensamento e segurança cerebral", "A velocidade da internet", "A bateria do dispositivo"],
      correctAnswer: 1
    },
    {
      id: "q6",
      question: "A engenharia de interface está a evoluir do 'clique' para o:",
      options: ["Teclado virtual apenas", "Contexto e Intenção", "Comando de voz obrigatório", "Toque físico permanente"],
      correctAnswer: 1
    }
  ]
};