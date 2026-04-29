import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "eng-t14",
  title: "Phase 3: System Design Discussion",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">📐 Thinking Big</h2>
        <p class="text-lg leading-relaxed">When you talk about architecture, you need high-level English concepts to explain your decisions.</p>
      </div>

      <ul class="space-y-4">
        <li class="p-4 bg-muted/20 rounded-xl">
          <strong class="text-accent">Load Balancing:</strong> Distributing traffic across multiple servers.
        </li>
        <li class="p-4 bg-muted/20 rounded-xl">
          <strong class="text-accent">Availability:</strong> How much time the system is "up" (e.g., 99.9% uptime).
        </li>
        <li class="p-4 bg-muted/20 rounded-xl">
          <strong class="text-accent">Throughput:</strong> How many requests per second a system can process.
        </li>
        <li class="p-4 bg-muted/20 rounded-xl">
          <strong class="text-accent">Decoupling:</strong> Reducing dependencies between components.
        </li>
      </ul>
    </div>
  `,
  quizId: "eng-q14"
};