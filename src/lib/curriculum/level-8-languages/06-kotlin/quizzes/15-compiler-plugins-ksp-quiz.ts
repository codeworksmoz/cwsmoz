
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "kt-mq15",
  title: "Quiz: KSP e Metaprogramação",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "Por que o KSP é preferível ao KAPT em projetos Kotlin puros?",
      options: [
        "Porque suporta apenas Java",
        "Porque não depende de stubs Java, resultando em compilações mais rápidas",
        "Porque é uma linguagem diferente",
        "Porque permite mudar o hardware do telemóvel"
      ],
      correctAnswer: 1
    }
  ]
};
