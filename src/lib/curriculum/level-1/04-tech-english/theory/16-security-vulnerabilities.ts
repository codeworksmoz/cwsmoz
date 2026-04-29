import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "eng-t16",
  title: "Phase 4: Cybersecurity & Vulnerabilities",
  content: `
    <div class="space-y-8">
      <div class="bg-red-500/10 p-6 rounded-2xl border border-red-500/20 text-red-100 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-red-400">🛡️ Defensive Language</h2>
        <p class="text-lg">Security terms are critical for protecting user data and company assets.</p>
      </div>

      <ul class="space-y-4">
        <li class="p-4 bg-muted/20 rounded-xl border border-red-500/20">
          <strong class="text-red-400">Breach:</strong> An unauthorized access to private data.
        </li>
        <li class="p-4 bg-muted/20 rounded-xl border border-red-500/20">
          <strong class="text-red-400">Patch:</strong> A software update to fix a security hole.
        </li>
        <li class="p-4 bg-muted/20 rounded-xl border border-red-500/20">
          <strong class="text-red-400">Exploit:</strong> Code that takes advantage of a vulnerability.
        </li>
        <li class="p-4 bg-muted/20 rounded-xl border border-red-500/20">
          <strong class="text-red-400">Zero-day:</strong> A vulnerability that is exploited before the developers know about it.
        </li>
      </ul>
    </div>
  `,
  quizId: "eng-q16"
};