import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "eng-t6",
  title: "Phase 1: SDLC - The Lifecycle of Code",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline">🛠️ Building Software</h2>
        <p class="text-lg leading-relaxed">Software engineering isn't just coding; it's a process. Each phase has a standardized English name.</p>
      </div>

      <ol class="space-y-4">
        <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
          <span class="font-bold text-accent">Analysis:</span> Understanding user needs.
        </li>
        <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
          <span class="font-bold text-accent">Design:</span> Creating the architecture and blueprints.
        </li>
        <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
          <span class="font-bold text-accent">Implementation:</span> The actual coding stage.
        </li>
        <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
          <span class="font-bold text-accent">Testing:</span> Searching for bugs and verifying quality.
        </li>
        <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
          <span class="font-bold text-accent">Maintenance:</span> Updating and fixing the software over time.
        </li>
      </ol>
    </div>
  `,
  quizId: "eng-q6"
};