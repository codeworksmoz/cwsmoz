import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "rb-m2",
  title: "Metaprogramação: method_missing e Introspecção",
  content: `
    <div class="space-y-6">
      <div class="bg-red-500/10 p-6 rounded-2xl border border-red-500/20">
        <h2 class="text-2xl font-bold mb-4 text-red-400">🎭 Código que cria código</h2>
        <p class="text-lg">Ruby é a linguagem rainha da metaprogramação. Podes interceptar chamadas a métodos que não existem e decidir o que fazer dinamicamente.</p>
      </div>
      <div class="prose prose-invert max-w-none">
        <h3>method_missing</h3>
        <p>Quando chamas um método que um objeto não possui, o Ruby sobe a hierarquia e finalmente chama <code>method_missing</code>. Isto é a base de frameworks como o Rails (ex: find_by_name).</p>
      </div>
    </div>
  `,
  quizId: "rb-mq2"
};