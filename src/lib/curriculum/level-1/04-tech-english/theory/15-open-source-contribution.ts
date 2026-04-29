import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "eng-t15",
  title: "Phase 3: Open Source & Collaboration",
  content: `
    <div class="space-y-8">
      <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-indigo-400">🤝 Contributing to the World</h2>
        <p class="text-lg leading-relaxed">Open source is about shared English-language collaboration. You need to know these GitHub-centric terms.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-4">
        <div class="p-4 bg-card border rounded-xl border-white/5 shadow-lg">
          <strong class="text-primary block mb-1">Fork:</strong> Create your own copy of someone else's project.
        </div>
        <div class="p-4 bg-card border rounded-xl border-white/5 shadow-lg">
          <strong class="text-primary block mb-1">Pull Request (PR):</strong> Proposing your changes to the original author.
        </div>
        <div class="p-4 bg-card border rounded-xl border-white/5 shadow-lg">
          <strong class="text-primary block mb-1">Maintainer:</strong> The person who manages the project and accepts PRs.
        </div>
        <div class="p-4 bg-card border rounded-xl border-white/5 shadow-lg">
          <strong class="text-primary block mb-1">Merge:</strong> Combining the changes into the main code.
        </div>
      </div>
    </div>
  `,
  quizId: "eng-q15"
};