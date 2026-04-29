
import type { Quiz } from '../../types';
import { quiz as q1 } from './quizzes/01-ownership-semantics-quiz';
import { quiz as q2 } from './quizzes/02-borrow-checker-quiz';

const generateRustQuiz = (id: number, title: string) => ({
  id: `rs-mq${id}`,
  title: `Quiz Master: ${title}`,
  questions: [
    { id: "q1", question: "Esta funcionalidade do Rust foca em garantir qual tipo de segurança?", options: ["Memória sem GC", "Velocidade de rede", "Interface visual", "Tamanho do binário"], correctAnswer: 0 },
    { id: "q2", question: "O compilador Rust valida este conceito em qual fase?", options: ["Runtime", "Compile-time (Static Analysis)", "No deploy", "Na instalação"], correctAnswer: 1 },
    { id: "q3", question: "Qual a complexidade de tempo média para esta abstração de custo zero?", options: ["O(1)", "O(n)", "O(log n)", "O(n!)"], correctAnswer: 0 },
    { id: "q4", question: "Como o Borrow Checker lida com este cenário?", options: ["Bloqueando o build", "Lançando um erro em runtime", "Usando um Garbage Collector", "Ignorando a regra"], correctAnswer: 0 },
    { id: "q5", question: "Qual a melhor prática de engenharia recomendada?", options: ["Minimizar alocações no Heap", "Usar globais mutáveis", "Ignorar erros silenciosamente", "Aumentar o número de threads sem limite"], correctAnswer: 0 },
    { id: "q6", question: "Este padrão suporta segurança em ambiente multi-thread?", options: ["Sim, via Send/Sync traits", "Não, é imutável", "Apenas em modo single-core", "Somente no Linux"], correctAnswer: 0 }
  ],
  passingScore: 80
});

const titles = [
  "Ownership & Moves", "Borrowing Rules", "Lifetimes", "Pattern Matching", "Traits & Dispatch",
  "Generics", "Error Handling", "Collections", "Iterators", "Smart Pointers I",
  "Smart Pointers II", "Concurrency", "Async/Tokio", "Unsafe & FFI", "Macros",
  "Memory Layout", "LTO & SIMD", "Networking", "Web Engineering", "WASM", "Final Audit"
];

export const quizzes = Array.from({ length: 21 }, (_, i) => {
  const id = i + 1;
  if (id === 1) return q1;
  if (id === 2) return q2;
  return generateRustQuiz(id, titles[i]);
});
