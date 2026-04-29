import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "eng-t5",
  title: "Phase 1: Networking & Cloud Terms",
  content: `
    <div class="space-y-8">
      <div class="bg-blue-500/10 p-6 rounded-2xl border border-blue-500/20 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-blue-400">📡 Connected Systems</h2>
        <p class="text-lg leading-relaxed">Cloud computing is the future. You need to know the terms to manage modern infrastructure.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-4">
        <div class="p-4 bg-card border rounded-xl border-white/5">
          <strong class="text-primary">Hosting:</strong> Where your website lives 24/7.
        </div>
        <div class="p-4 bg-card border rounded-xl border-white/5">
          <strong class="text-primary">Bandwidth:</strong> Data transfer capacity (how much info can flow).
        </div>
        <div class="p-4 bg-card border rounded-xl border-white/5">
          <strong class="text-primary">Latency:</strong> Delay in network communication (ping).
        </div>
        <div class="p-4 bg-card border rounded-xl border-white/5">
          <strong class="text-primary">Deploy:</strong> The process of pushing code to production.
        </div>
      </div>
    </div>
  `,
  quizId: "eng-q5"
};