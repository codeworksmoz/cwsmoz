
import type { TheoryLesson } from '../../../../types';
export const lesson: TheoryLesson = {
  id: "se-t2",
  title: "Metodologias Ágeis e Scrum",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold">🏃 Agilidade em Equipa</h2>
      <p>Scrum é a framework ágil mais popular, baseada em transparência, inspeção e adaptação.</p>
      <div class="grid md:grid-cols-3 gap-4">
        <div class="p-3 bg-primary/5 border rounded-lg">
          <h4 class="font-bold">Artifacts</h4>
          <p class="text-[10px]">Backlog, Sprint Backlog, Incremento.</p>
        </div>
        <div class="p-3 bg-accent/5 border rounded-lg">
          <h4 class="font-bold">Events</h4>
          <p class="text-[10px]">Sprint, Planning, Daily, Review, Retrospective.</p>
        </div>
        <div class="p-3 bg-muted border rounded-lg">
          <h4 class="font-bold">Roles</h4>
          <p class="text-[10px]">Product Owner, Scrum Master, Developers.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "se-q2"
};
