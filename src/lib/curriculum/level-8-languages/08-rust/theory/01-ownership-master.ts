import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "rs-m1",
  title: "Ownership, Borrowing e a Morte do Garbage Collector",
  content: `
    <div class="space-y-6">
      <div class="bg-orange-500/10 p-6 rounded-2xl border border-orange-500/20">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 text-orange-400">
          🦀 Segurança Sem Custo
        </h2>
        <p class="text-lg leading-relaxed">
          Rust resolve a segurança de memória através do <strong>Ownership</strong>. Cada pedaço de memória tem um único dono por vez. Quando o dono sai do escopo, a memória é libertada instantaneamente.
        </p>
      </div>

      <div class="prose prose-invert max-w-none">
        <h3>As 3 Regras de Ouro:</h3>
        <ul class="list-decimal ml-6 space-y-2">
          <li>Cada valor em Rust tem uma variável que é o seu dono.</li>
          <li>Pode haver apenas um dono por vez.</li>
          <li>Quando o dono sai do escopo, o valor é libertado.</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "rs-mq1"
};
