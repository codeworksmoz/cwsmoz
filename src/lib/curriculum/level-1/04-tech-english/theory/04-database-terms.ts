import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "eng-t4",
  title: "Phase 1: Database Vocabulary (SQL/NoSQL)",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🗄️ Handling Data</h2>
        <p class="text-lg leading-relaxed">Data management has its own set of essential English terms, from simple tables to complex queries.</p>
      </div>

      <ul class="space-y-4">
        <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
          <strong class="text-accent">Query:</strong> A specific request for information from a database.
        </li>
        <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
          <strong class="text-accent">Schema:</strong> The formal structure or skeleton of the database.
        </li>
        <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
          <strong class="text-accent">Record:</strong> A single row of data (a tupla).
        </li>
        <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
          <strong class="text-accent">Encryption:</strong> Protecting data by converting it into a secret code.
        </li>
      </ul>
    </div>
  `,
  quizId: "eng-q4"
};