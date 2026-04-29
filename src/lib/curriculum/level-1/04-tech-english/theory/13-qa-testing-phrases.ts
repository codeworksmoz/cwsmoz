import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "eng-t13",
  title: "Phase 3: QA, Testing & Assertions",
  content: `
    <div class="space-y-8">
      <div class="bg-green-500/10 p-6 rounded-2xl border border-green-500/20 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-green-400">🛡️ Ensuring Quality</h2>
        <p class="text-lg leading-relaxed">Quality Assurance (QA) is about making sure the software is reliable and does what it promised.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-4">
        <div class="p-4 bg-card border rounded-xl border-white/5">
          <h4 class="font-bold text-primary mb-2">Action Verbs</h4>
          <ul class="text-xs space-y-1">
            <li><strong>Assert:</strong> To verify if a condition is true.</li>
            <li><strong>Mock:</strong> To simulate a real component (like a database).</li>
            <li><strong>Stub:</strong> A simple placeholder for a function.</li>
          </ul>
        </div>
        <div class="p-4 bg-card border rounded-xl border-white/5">
          <h4 class="font-bold text-primary mb-2">Test Types</h4>
          <ul class="text-xs space-y-1">
            <li><strong>Sanity Check:</strong> A quick test to see if the basic things work.</li>
            <li><strong>Smoke Test:</strong> Testing the most critical features.</li>
            <li><strong>Regression:</strong> Making sure new code didn't break old features.</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  quizId: "eng-q13"
};