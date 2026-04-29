import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "rb-mq2",
  title: "Quiz: Ruby Metaprogramming",
  passingScore: 80,
  questions: [
    {
      id: "q2_1",
      question: "Qual método deve ser sobrescrevido se quiseres que um objeto responda a chamadas dinâmicas?",
      options: ["respond_to?", "method_missing", "call_dynamic", "initialize"],
      correctAnswer: 1
    }
  ]
};