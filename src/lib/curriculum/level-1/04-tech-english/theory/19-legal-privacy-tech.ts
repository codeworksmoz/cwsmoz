import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "eng-t19",
  title: "Phase 4: Legal & Privacy Vocabulary",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline">⚖️ Compliance & Ethics</h2>
        <p class="text-lg leading-relaxed">Modern engineers must understand the legal language of data protection.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-4 text-sm">
        <div class="p-4 bg-card border rounded-xl">
          <strong class="text-primary">GDPR:</strong> General Data Protection Regulation (European law).
        </div>
        <div class="p-4 bg-card border rounded-xl">
          <strong class="text-primary">Compliance:</strong> Following the rules and laws correctly.
        </div>
        <div class="p-4 bg-card border rounded-xl">
          <strong class="text-primary">Terms of Service:</strong> The rules for using a platform.
        </li>
        <div class="p-4 bg-card border rounded-xl">
          <strong class="text-primary">Privacy Policy:</strong> How a company uses your data.
        </li>
      </div>
    </div>
  `,
  quizId: "eng-q19"
};