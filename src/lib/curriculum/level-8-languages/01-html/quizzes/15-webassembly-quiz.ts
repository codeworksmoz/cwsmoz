
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "html-mq15",
  title: "Quiz: WebAssembly e HTML",
  passingScore: 80,
  questions: [
    {
      id: "q15_1",
      question: "O WebAssembly (Wasm) substitui completamente o JavaScript?",
      options: [
        "Sim, para todas as tarefas",
        "Não, eles coexistem e comunicam através de uma ponte via JS API",
        "Apenas se o site for compilado em Rust",
        "O WebAssembly é apenas para armazenamento"
      ],
      correctAnswer: 1
    }
  ]
};
