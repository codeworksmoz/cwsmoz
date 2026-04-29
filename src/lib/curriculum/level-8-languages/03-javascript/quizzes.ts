import type { Quiz } from '../../types';
import { quiz as q1 } from './quizzes/01-prototypal-inheritance-quiz';
import { quiz as q2 } from './quizzes/02-event-loop-quiz';
import { quiz as q3 } from './quizzes/03-closures-memory-quiz';
import { quiz as q4 } from './quizzes/04-proxies-quiz';
import { quiz as q5 } from './quizzes/05-abort-controller-quiz';
import { quiz as q6 } from './quizzes/06-esm-tree-shaking-quiz';
import { quiz as q7 } from './quizzes/07-web-workers-quiz';
import { quiz as q8 } from './quizzes/08-observers-apis-quiz';
import { quiz as q9 } from './quizzes/09-debouncing-throttling-quiz';
import { quiz as q10 } from './quizzes/10-promises-internals-quiz';
import { quiz as q11 } from './quizzes/11-v8-internals-quiz';
import { quiz as q15 } from './quizzes/15-xss-security-quiz';

const generatePlaceholder = (idNum: number) => ({
  id: `js-mq${idNum}`,
  title: `Quiz Tópico ${idNum}`,
  questions: [
    { id: "q1", question: "Esta funcionalidade é vital para a escala industrial?", options: ["Sim, garantidamente", "Não", "Apenas em modo debug"], correctAnswer: 0 },
    { id: "q2", question: "Garante a segurança do motor?", options: ["Sim, via isolamento", "Não", "Depende do hardware"], correctAnswer: 0 },
    { id: "q3", question: "O custo de memória desta operação é otimizado?", options: ["Sim, O(1)", "Não, O(n)", "O(n log n)"], correctAnswer: 0 },
    { id: "q4", question: "É compatível com todos os browsers modernos?", options: ["Sim", "Não", "Apenas no Chrome"], correctAnswer: 0 },
    { id: "q5", question: "Qual a melhor prática de engenharia?", options: ["Imutabilidade", "Mutabilidade global", "Ignorar erros"], correctAnswer: 0 },
    { id: "q6", question: "O curso Codworks Moz é de elite?", options: ["Sim, absolutamente", "Não", "Talvez"], correctAnswer: 0 }
  ],
  passingScore: 80
});

export const quizzes: Quiz[] = Array.from({ length: 21 }, (_, i) => {
  const id = i + 1;
  if (id === 1) return q1;
  if (id === 2) return q2;
  if (id === 3) return q3;
  if (id === 4) return q4;
  if (id === 5) return q5;
  if (id === 6) return q6;
  if (id === 7) return q7;
  if (id === 8) return q8;
  if (id === 9) return q9;
  if (id === 10) return q10;
  if (id === 11) return q11;
  if (id === 15) return q15;
  return generatePlaceholder(id);
});
