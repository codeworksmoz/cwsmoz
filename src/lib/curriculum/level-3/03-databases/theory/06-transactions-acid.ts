import type { TheoryLesson } from '../../../types';
export const lesson: TheoryLesson = {
  id: "db-t6",
  title: "Transações e Propriedades ACID",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold text-accent">💎 A Integridade dos Dados</h2>
      <p>Garantir que transferências bancárias e reservas nunca falhem de forma parcial.</p>
      <ul class="list-disc ml-6 space-y-2">
        <li><strong>Atomicity:</strong> Tudo ou nada.</li>
        <li><strong>Consistency:</strong> Do estado válido A ao B.</li>
        <li><strong>Isolation:</strong> Transações paralelas não se interferem.</li>
        <li><strong>Durability:</strong> Uma vez gravado, está seguro.</li>
      </ul>
    </div>
  `,
  quizId: "db-q6"
};