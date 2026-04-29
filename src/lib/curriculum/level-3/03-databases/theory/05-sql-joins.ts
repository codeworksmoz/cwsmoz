import type { TheoryLesson } from '../../../types';
export const lesson: TheoryLesson = {
  id: "db-t5",
  title: "SQL Avançado: Joins e Agregações",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold text-primary">🤝 Cruzando Dados</h2>
      <ul class="list-disc ml-6 space-y-2">
        <li><strong>INNER JOIN:</strong> Apenas o que existe em ambas.</li>
        <li><strong>LEFT/RIGHT JOIN:</strong> Mantém tudo de um lado, mesmo sem par.</li>
        <li><strong>GROUP BY:</strong> Agrupar resultados para funções como <code>SUM()</code>, <code>AVG()</code> e <code>COUNT()</code>.</li>
      </ul>
    </div>
  `,
  quizId: "db-q5"
};