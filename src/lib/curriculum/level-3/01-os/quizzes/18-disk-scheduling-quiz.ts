
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "os-q18",
  title: "Quiz: Disk Scheduling",
  passingScore: 70,
  questions: [
    {
      id: "q18_1",
      question: "O algoritmo 'Elevator' é outro nome para:",
      options: ["SSTF", "SCAN", "FIFO", "LIFO"],
      correctAnswer: 1
    },
    {
      id: "q18_2",
      question: "Qual o maior custo num acesso a disco mecânico?",
      options: ["Transferência", "Seek Time (Movimento da agulha)", "Rotação", "Luz"],
      correctAnswer: 1
    },
    {
      id: "q18_3",
      question: "A diferença entre SCAN e C-SCAN é que o C-SCAN:",
      options: ["É mais lento", "Sempre recomeça de uma ponta após chegar ao fim", "Inverte o sentido", "Usa mais RAM"],
      correctAnswer: 1
    },
    {
      id: "q18_4",
      question: "Por que SSDs não precisam de algoritmos SCAN?",
      options: ["Porque são pretos", "Porque o acesso a qualquer bloco é eletrónico e leva o mesmo tempo (O(1))", "Porque não têm memória", "Porque são caros"],
      correctAnswer: 1
    },
    {
      id: "q18_5",
      question: "O que é o 'Wear Leveling' em SSDs?",
      options: ["Limpar o pó", "Distribuir escritas por todas as células para evitar desgaste prematuro", "Aumentar a velocidade", "Criptografar dados"],
      correctAnswer: 1
    },
    {
      id: "q18_6",
      question: "O RAID 0 foca em:",
      options: ["Segurança", "Performance (Striping)", "Redundância", "Custo baixo"],
      correctAnswer: 1
    }
  ]
};
