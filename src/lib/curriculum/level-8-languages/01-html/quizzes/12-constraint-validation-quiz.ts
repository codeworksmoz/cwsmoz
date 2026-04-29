
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "html-mq12",
  title: "Quiz: Constraint Validation API",
  passingScore: 80,
  questions: [
    {
      id: "q12_1",
      question: "Qual método da API de validação nativa é usado para definir uma mensagem de erro customizada?",
      options: ["setError()", "setCustomValidity()", "writeError()", "validationMessage()"],
      correctAnswer: 1
    }
  ]
};
