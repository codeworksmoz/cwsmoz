import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "eng-t12",
  title: "Phase 3: Cloud Native & Virtualization",
  content: `
    <div class="space-y-8">
      <div class="bg-blue-500/10 p-6 rounded-2xl border border-blue-500/20 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-blue-400">☁️ Scalable Infrastructure</h2>
        <p class="text-lg">Modern apps live in the cloud. You must know these terms to scale your code globally.</p>
      </div>

      <ul class="space-y-4">
        <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
          <strong>Container:</strong> An isolated package containing the app and its dependencies (e.g., Docker).
        </li>
        <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
          <strong>Serverless:</strong> Running code without managing the underlying server (e.g., AWS Lambda).
        </li>
        <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
          <strong>Scalability:</strong> The ability to handle more users by adding resources.
        </li>
        <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
          <strong>Cluster:</strong> A group of connected computers working as one.
        </li>
      </ul>
    </div>
  `,
  quizId: "eng-q12"
};