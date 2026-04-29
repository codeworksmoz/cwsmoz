
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "rs-m15",
  title: "MIR: Mid-level Intermediate Representation",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold text-purple-400">⚙️ Otimização do Compilador</h2>
      <p>O MIR é uma representação intermédia simplificada do código Rust que o compilador usa para realizar o <i>Borrow Checking</i> e otimizações antes de gerar o LLVM IR.</p>
    </div>
  `,
  quizId: "rs-mq15"
};
