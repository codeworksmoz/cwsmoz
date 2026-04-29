import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "hci-q1",
  title: "Quiz: Fundamentos de HCI",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual é o foco principal da Interação Humano-Computador (HCI)?",
      options: ["Aumentar a velocidade da CPU", "Melhorar a relação entre humanos e máquinas através do design e engenharia", "Reduzir o custo de produção de chips", "Programar em código de máquina"],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "O que é um 'Modelo Mental' no contexto de HCI?",
      options: ["O código fonte do sistema", "A forma como o utilizador imagina que o sistema funciona", "Um tipo de memória RAM", "Um algoritmo de IA"],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "Qual destes é um dispositivo de 'Haptic Output'?",
      options: ["Monitor", "Teclado mecânico", "Vibração de smartphone", "Impressora"],
      correctAnswer: 2
    },
    {
      id: "q4",
      question: "O HCI é uma disciplina puramente estética?",
      options: ["Sim, foca apenas em cores", "Não, é multidisciplinar (psicologia, engenharia, design)", "Sim, é o mesmo que design gráfico", "Não, foca apenas em código de performance"],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "O que representa o pilar 'Interação' no HCI?",
      options: ["A ligação de internet", "O diálogo e troca de sinais entre utilizador e sistema", "O barramento de dados", "A instalação de drivers"],
      correctAnswer: 1
    },
    {
      id: "q6",
      question: "Por que um engenheiro de software deve estudar HCI?",
      options: ["Para desenhar logotipos", "Para evitar erros de utilização e aumentar a eficiência do software", "Para consertar hardware", "Apenas por curiosidade"],
      correctAnswer: 1
    }
  ]
};