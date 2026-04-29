import type { Quiz } from '../../types';
import { quiz as q1 } from './quizzes/01-null-safety-quiz';
import { quiz as q2 } from './quizzes/02-extensions-quiz';

const generateHighComplexityQuiz = (id: number, title: string) => ({
  id: `kt-mq${id}`,
  title: `Quiz Master: ${title}`,
  questions: [
    {
      id: "q1",
      question: "Qual o impacto desta funcionalidade na gestão de memória da JVM?",
      options: ["Reduz a pressão no GC", "Aumenta o overhead", "Não tem impacto", "Depende do sistema operativo"],
      correctAnswer: 0
    },
    {
      id: "q2",
      question: "Esta abordagem é compatível com Kotlin Multiplatform (KMP)?",
      options: ["Sim, é agnóstica à plataforma", "Não, exige a JVM", "Apenas no Android", "Apenas no iOS"],
      correctAnswer: 0
    },
    {
      id: "q3",
      question: "Qual a complexidade de tempo média para esta operação?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
      correctAnswer: 0
    },
    {
      id: "q4",
      question: "Como o compilador otimiza este padrão de código?",
      options: ["Monomorphization", "Inlining", "Type Erasure", "Escape Analysis"],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "Qual a principal vantagem desta técnica em sistemas de alta escala?",
      options: ["Imutabilidade e Thread-safety", "Mutabilidade global", "Simplicidade sintática apenas", "Eliminação de logs"],
      correctAnswer: 0
    },
    {
      id: "q6",
      question: "Este recurso suporta suspensão de Coroutines?",
      options: ["Sim, nativamente", "Não, é bloqueante", "Apenas com threads externas", "Apenas no modo debug"],
      correctAnswer: 0
    }
  ],
  passingScore: 80
});

const titles = [
  "Null Safety", "Extensions & Delegates", "Sealed Classes", "Functional Logic", "Performance",
  "Coroutines Basics", "Structured Concurrency", "Suspension Internals", "Flow API", "Hot Streams",
  "Channels", "Context & Dispatchers", "Exception Handling", "KMP Architecture", "Serialization",
  "Dependency Injection", "KSP Codegen", "Reflection", "Generics", "DSLs", "Capstone Audit"
];

export const quizzes = Array.from({ length: 21 }, (_, i) => {
  const id = i + 1;
  if (id === 1) return q1;
  if (id === 2) return q2;
  return generateHighComplexityQuiz(id, titles[i]);
});
