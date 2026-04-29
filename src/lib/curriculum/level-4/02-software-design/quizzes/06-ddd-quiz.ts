
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "des-q6-master",
  title: "Quiz: Domain Driven Design",
  passingScore: 80,
  questions: [
    {
      id: "q6_1",
      question: "Qual o principal objetivo da Ubiquitous Language?",
      options: ["Tornar o código mais rápido", "Alinhar o vocabulário entre técnicos e especialistas de negócio", "Eliminar o uso de comentários", "Traduzir o sistema para Inglês"],
      correctAnswer: 1
    },
    {
      id: "q6_2",
      question: "Um objeto que é definido apenas pelos seus atributos (ex: Cor, Endereço) é uma:",
      options: ["Entidade", "Value Object", "Aggregate Root", "Service"],
      correctAnswer: 1
    }
  ]
};
