import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "eng-t10",
  title: "Phase 2: Debugging & Error Terms",
  content: `
    <div class="space-y-8">
      <div class="bg-red-500/5 p-6 rounded-2xl border border-red-500/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-red-400">🔍 Troubleshooting the Problem</h2>
        <p class="text-lg">When code fails, the terminal speaks to you in English. You must understand the diagnosis.</p>
      </div>

      <ul class="space-y-4">
        <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
          <strong class="text-accent">Fix:</strong> To repair an error or a bug.
        </li>
        <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
          <strong class="text-accent">Issue:</strong> A problem reported in the system (e.g., GitHub Issues).
        </li>
        <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
          <strong class="text-accent">Log:</strong> A record of events that happened in the system.
        </li>
        <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
          <strong class="text-accent">Unhandled Exception:</strong> An error that the code didn't know how to deal with.
        </li>
      </ul>
    </div>
  `,
  quizId: "eng-q10"
};