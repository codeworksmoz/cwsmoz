
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "html-mq18",
  title: "Quiz: Service Workers",
  passingScore: 80,
  questions: [
    {
      id: "q18_1",
      question: "Em que local corre um Service Worker?",
      options: [
        "Na thread principal do DOM",
        "Numa thread separada em background, isolada do DOM",
        "Diretamente no servidor backend",
        "Dentro de uma tag <script> convencional"
      ],
      correctAnswer: 1
    }
  ]
};
