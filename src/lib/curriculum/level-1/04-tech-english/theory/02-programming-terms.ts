import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "eng-t2",
  title: "Phase 1: Programming Terms & Logic",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">💻 Logic Keywords</h2>
        <p class="text-lg leading-relaxed">
          The concepts you learned in "Programming Fundamentals" have universal names. Let's master the English terminology used in every day-to-day coding session.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">The Building Blocks</h3>
        <ul class="space-y-4">
          <li class="bg-muted/20 p-4 rounded-xl">
            <strong class="text-accent">Statement:</strong> A single instruction (a line of code).
          </li>
          <li class="bg-muted/20 p-4 rounded-xl">
            <strong class="text-accent">Conditional:</strong> Decision-making logic (If / Else).
          </li>
          <li class="bg-muted/20 p-4 rounded-xl">
            <strong class="text-accent">Loop:</strong> A sequence of instructions that repeats (For / While).
          </li>
          <li class="bg-muted/20 p-4 rounded-xl">
            <strong class="text-accent">Scope:</strong> The visibility or lifetime of a variable.
          </li>
        </ul>
      </div>
    </div>
  `,
  quizId: "eng-q2"
};