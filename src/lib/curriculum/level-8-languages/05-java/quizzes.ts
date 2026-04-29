import type { Quiz } from '../../types';
import { quiz as q1 } from './quizzes/01-jvm-architecture-quiz';
import { quiz as q2 } from './quizzes/02-garbage-collection-quiz';
import { quiz as q3 } from './quizzes/03-virtual-threads-quiz';
import { quiz as q4 } from './quizzes/04-oop-advanced-quiz';
import { quiz as q6 } from './quizzes/06-transactions-acid-quiz';
import { quiz as q8 } from './quizzes/08-virtual-threads-quiz';
import { quiz as q15 } from './quizzes/15-classloaders-quiz';

const generateJavaQuiz = (id: number, title: string) => ({
  id: `jv-mq${id}`,
  title: `Quiz Master: ${title}`,
  questions: [
    { id: "q1", question: "Esta funcionalidade foca em performance de baixa latência?", options: ["Sim, é o objetivo principal", "Não", "Apenas em modo debug"], correctAnswer: 0 },
    { id: "q2", question: "Garante a integridade do Core Banking?", options: ["Sim, via atomização", "Não", "Depende do hardware"], correctAnswer: 0 },
    { id: "q3", question: "O custo de memória desta operação é otimizado?", options: ["Sim, O(1)", "Não, O(n)", "O(n log n)"], correctAnswer: 0 },
    { id: "q4", question: "É compatível com GraalVM Native Image?", options: ["Sim", "Não, exige configuração de reflexão", "Apenas em Java 8"], correctAnswer: 1 },
    { id: "q5", question: "Qual a melhor prática de engenharia aqui?", options: ["Imutabilidade", "Mutabilidade global", "Ignorar erros"], correctAnswer: 0 },
    { id: "q6", question: "A escala do sistema é beneficiada?", options: ["Sim, escala horizontalmente", "Não", "Apenas verticalmente"], correctAnswer: 0 }
  ],
  passingScore: 80
});

const titles = [
  "JVM Architecture", "Garbage Collection", "Virtual Threads", "OOP Advanced", "Generics & Type Erasure", 
  "Transactions & ACID", "NIO & Channels", "Concurrency Locks", "JMX Monitoring",
  "Reactive Stream Patterns", "Hibernate L2 Cache", "Spring Security JWT", "Resilience4j Patterns",
  "Testcontainers & Docker", "ClassLoaders Internals", "Off-heap Memory", "GraalVM Native Image", "Sealed Hierarchies",
  "Foreign Function API", "ZGC Tuning", "Enterprise Deploy"
];

export const quizzes = Array.from({ length: 21 }, (_, i) => {
  const id = i + 1;
  if (id === 1) return q1;
  if (id === 2) return q2;
  if (id === 3) return q3;
  if (id === 4) return q4;
  if (id === 6) return q6;
  if (id === 8) return q8;
  if (id === 15) return q15;
  return generateJavaQuiz(id, titles[i]);
});
