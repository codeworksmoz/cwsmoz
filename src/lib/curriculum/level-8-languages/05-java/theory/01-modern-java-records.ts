
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "jv-m1",
  title: "Modern Java: Records e Sealed Classes",
  content: `
    <div class="space-y-6">
      <div class="bg-orange-500/10 p-6 rounded-2xl border border-orange-500/20">
        <h2 class="text-2xl font-bold mb-4">☕ A Nova Era do Java</h2>
        <p class="text-lg">Java 14+ introduziu <strong>Records</strong> para eliminar o boilerplate de classes de dados imutáveis.</p>
      </div>
      <div class="prose prose-invert max-w-none">
        <h3>Sealed Classes</h3>
        <p>Permitem restringir quais outras classes ou interfaces podem estendê-las, permitindo um controlo de hierarquia muito mais rigoroso (ADTs).</p>
      </div>
    </div>
  `,
  quizId: "jv-mq1"
};
