import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "eng-t11",
  title: "Phase 3: API Endpoints & Documentation",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">📡 Connecting Systems</h2>
        <p class="text-lg">Web services communicate through APIs. Here is the vocabulary of the "bridge".</p>
      </div>

      <div class="space-y-4">
        <p class="text-sm"><strong>Payload:</strong> The actual data you are sending or receiving (the "meat" of the message).</p>
        <p class="text-sm"><strong>Header:</strong> Metadata about the request (e.g., authentication, content-type).</p>
        <p class="text-sm"><strong>Authorization:</strong> Checking if you have permission to access the resource.</p>
        <p class="text-sm"><strong>Query Params:</strong> Filters added to the URL (e.g., ?page=1).</p>
      </div>

      <div class="bg-indigo-500/5 p-6 rounded-2xl border border-indigo-500/20 mt-6 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-2">🚀 Pro Tip:</h4>
          <p class="text-sm">When you read an API documentation (like Stripe or Google Maps), look for the "Quickstart" or "Getting Started" sections first. These use a very specific set of English action verbs.</p>
      </div>
    </div>
  `,
  quizId: "eng-q11"
};