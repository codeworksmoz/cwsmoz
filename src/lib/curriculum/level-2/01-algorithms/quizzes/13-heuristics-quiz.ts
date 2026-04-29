import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "alg-q13",
  title: "Quiz: Heurísticas",
  passingScore: 70,
  questions: [
    {
      id: "q13_1",
      question: "O que define uma Heurística?",
      options: ["Uma solução perfeita", "Uma regra prática que encontra uma solução aceitável rapidamente", "Um erro de lógica", "Um algoritmo de ordenação"],
      correctAnswer: 1
    },
    {
      id: "q13_2",
      question: "Qual o risco do algoritmo Hill Climbing?",
      options: ["Ficar preso num máximo local e não encontrar o global", "Usar demasiada RAM", "Apagar dados", "Correr em loop infinito"],
      correctAnswer: 0
    },
    {
      id: "q13_3",
      question: "O Simulated Annealing é inspirado em que processo físico?",
      options: ["Cura de doenças", "Resfriamento de metais", "Explosões estelares", "Fluxo de rios"],
      correctAnswer: 1
    },
    {
      id: "q13_4",
      question: "Algoritmos Genéticos baseiam-se em:",
      options: ["Matemática pura", "Teoria da Evolução (Mutação e Seleção)", "Leis da Física", "Sinais de rádio"],
      correctAnswer: 1
    },
    {
      id: "q13_5",
      question: "Quando deves usar uma heurística?",
      options: ["Sempre", "Quando o problema é NP-Hard e o tempo é limitado", "Apenas em exercícios escolares", "Nunca em produção"],
      correctAnswer: 1
    },
    {
      id: "q13_6",
      question: "A 'Distância de Manhattan' num mapa é um exemplo de:",
      options: ["Custo real", "Heurística de distância", "Erro de GPS", "Constante matemática"],
      correctAnswer: 1
    }
  ]
};
