import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "eng-t8",
  title: "Phase 2: Technical Writing & Documentation",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">📝 Documenting the Future</h2>
        <p class="text-lg leading-relaxed">Elite engineers write as well as they code. Documentation is the key to collaboration.</p>
      </div>

      <ul class="space-y-4">
        <li class="p-4 bg-muted/20 rounded-xl">
          <strong class="text-accent">README:</strong> The "manual" that explains what a project is and how to run it.
        </li>
        <li class="p-4 bg-muted/20 rounded-xl">
          <strong class="text-accent">Docstring:</strong> Comments inside the code that explain what a function does.
        </li>
        <li class="p-4 bg-muted/20 rounded-xl">
          <strong class="text-accent">Refactoring:</strong> Cleaning up the code without changing its functionality.
        </li>
        <li class="p-4 bg-muted/20 rounded-xl">
          <strong class="text-accent">Legacy Code:</strong> Old code that is still in use but might be difficult to maintain.
        </li>
      </ul>
    </div>
  `,
  quizId: "eng-q8"
};