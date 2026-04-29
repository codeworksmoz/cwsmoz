import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "eng-t7",
  title: "Phase 2: Agile & Scrum Jargon",
  content: `
    <div class="space-y-8">
      <div class="bg-green-500/10 p-6 rounded-2xl border border-green-500/20 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-green-400">🏃 Moving Fast in Teams</h2>
        <p class="text-lg">Most modern companies use the Agile methodology. Here is the vocabulary you'll hear in daily meetings.</p>
      </div>

      <div class="grid gap-4">
        <div class="p-4 bg-card border rounded-xl border-white/5">
          <strong class="text-primary">Sprint:</strong> A short period (2-4 weeks) to complete specific tasks.
        </div>
        <div class="p-4 bg-card border rounded-xl border-white/5">
          <strong class="text-primary">Backlog:</strong> The list of all tasks waiting to be done.
        </div>
        <div class="p-4 bg-card border rounded-xl border-white/5">
          <strong class="text-primary">Stand-up Meeting:</strong> A very short daily update meeting.
        </div>
        <div class="p-4 bg-card border rounded-xl border-white/5">
          <strong class="text-primary">Stakeholder:</strong> Anyone interested in the project (clients, bosses).
        </div>
      </div>
    </div>
  `,
  quizId: "eng-q7"
};