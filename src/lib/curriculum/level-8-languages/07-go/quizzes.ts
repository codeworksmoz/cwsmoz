import type { Quiz } from '../../types';
import { quiz as q1 } from './quizzes/01-interfaces-quiz';
import { quiz as q2 } from './quizzes/02-goroutines-quiz';

const generateGoQuiz = (id: number, title: string) => ({
  id: `go-mq${id}`,
  title: `Quiz Master: ${title}`,
  questions: [
    { id: "q1", question: "Esta funcionalidade do Go foca em reduzir qual tipo de custo?", options: ["Latência de rede", "Alocação no Heap", "Tempo de compilação", "Context Switch do SO"], correctAnswer: 1 },
    { id: "q2", question: "Garante a integridade do motor de tarefas distribuídas?", options: ["Sim, via canais seguros", "Não, exige locks manuais", "Apenas em modo single-core"], correctAnswer: 0 },
    { id: "q3", question: "Qual a complexidade de tempo para esta operação no pior caso?", options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"], correctAnswer: 0 },
    { id: "q4", question: "Como o escalonador GMP lida com este cenário?", options: ["Bloqueando a thread", "Work Stealing", "Preempção cooperativa", "Matando o processo"], correctAnswer: 1 },
    { id: "q5", question: "Qual a melhor prática de engenharia recomendada?", options: ["Evitar ponteiros desnecessários", "Usar globais sempre", "Ignorar erros silenciosamente", "Aumentar o número de goroutines infinitamente"], correctAnswer: 0 },
    { id: "q6", question: "Este padrão suporta propagação de cancelamento?", options: ["Sim, via context.Context", "Não, é imutável", "Apenas se for síncrono", "Somente no Linux"], correctAnswer: 0 }
  ],
  passingScore: 80
});

const titles = [
  "Implicit Interfaces", "Goroutines & GMP", "Channels & CSP", "Select Multiplexing", "Context Propagation",
  "Mutex & WaitGroups", "Atomic Operations", "Memory Internals", "Error Handling", "Generics",
  "Defer & Resilience", "Escape Analysis", "Pprof Profiling", "Reflection", "Testing & Fuzzing",
  "Compiler Optimizations", "TCP Sockets", "HTTP Servers", "CGO Interop", "Observability", "Final Audit"
];

export const quizzes = Array.from({ length: 21 }, (_, i) => {
  const id = i + 1;
  if (id === 1) return q1;
  if (id === 2) return q2;
  return generateGoQuiz(id, titles[i]);
});
