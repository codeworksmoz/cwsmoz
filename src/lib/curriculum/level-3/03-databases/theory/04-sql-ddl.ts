import type { TheoryLesson } from '../../../types';
export const lesson: TheoryLesson = {
  id: "db-t4",
  title: "SQL: Definição de Dados (DDL) e Queries Básicas",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold">✍️ Escrevendo SQL</h2>
      <p>DDL permite criar a estrutura do banco.</p>
      <div class="bg-card p-4 rounded-xl border font-code text-sm">
        CREATE TABLE Usuarios (<br/>
        &nbsp;&nbsp;id INT PRIMARY KEY,<br/>
        &nbsp;&nbsp;nome VARCHAR(100)<br/>
        );
      </div>
      <p>Queries básicas usam <code>SELECT</code>, <code>FROM</code> e <code>WHERE</code>.</p>
    </div>
  `,
  quizId: "db-q4"
};