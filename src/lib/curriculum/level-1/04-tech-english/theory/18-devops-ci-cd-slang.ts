import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "eng-t18",
  title: "Phase 4: DevOps & CI/CD Jargon",
  content: `
    <div class="space-y-8">
      <div class="bg-green-500/10 p-6 rounded-2xl border border-green-500/20 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-green-400">🚀 Automation & Operations</h2>
        <p class="text-lg leading-relaxed">DevOps bridges the gap between coding and infrastructure management.</p>
      </div>

      <ul class="space-y-4">
        <li class="p-4 bg-muted/20 rounded-xl">
          <strong class="text-accent">Pipeline:</strong> A set of automated steps to build and deploy code.
        </li>
        <li class="p-4 bg-muted/20 rounded-xl">
          <strong class="text-accent">Artifact:</strong> The final output of a build (e.g., a .zip or a Docker image).
        </li>
        <li class="p-4 bg-muted/20 rounded-xl">
          <strong class="text-accent">Rollback:</strong> Returning to a previous version because of an error.
        </li>
        <li class="p-4 bg-muted/20 rounded-xl">
          <strong class="text-accent">Orchestration:</strong> Managing many containers at once (e.g., Kubernetes).
        </li>
      </ul>
    </div>
  `,
  quizId: "eng-q18"
};