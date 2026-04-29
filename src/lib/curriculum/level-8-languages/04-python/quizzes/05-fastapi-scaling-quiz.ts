import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "py-mq5",
  title: "Quiz: Escalabilidade com FastAPI",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "Por que o FastAPI é considerado de alta performance?",
      options: [
        "Porque usa apenas HTML",
        "Porque é construído sobre Starlette e Pydantic com suporte nativo a async",
        "Porque não usa base de dados",
        "Porque foi escrito em Java"
      ],
      correctAnswer: 1
    }
  ]
};