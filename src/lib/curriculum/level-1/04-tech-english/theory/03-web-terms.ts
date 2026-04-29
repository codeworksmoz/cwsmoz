import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "eng-t3",
  title: "Phase 1: Web Development Vocabulary",
  content: `
    <div class="space-y-8">
      <div class="bg-accent/5 p-6 rounded-2xl border border-accent/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-accent">🌐 Client & Server Dynamics</h2>
        <p class="text-lg">Understanding the web architecture requires knowing how components talk to each other in English.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="p-5 bg-card border rounded-2xl border-white/5">
          <h4 class="font-bold text-primary mb-2">Frontend (Client)</h4>
          <ul class="text-xs space-y-2 opacity-80">
            <li><strong>Browser:</strong> The engine that renders HTML (Chrome, Safari).</li>
            <li><strong>Viewport:</strong> The visible area of the web page.</li>
            <li><strong>Markup:</strong> Structural tags (HTML).</li>
          </ul>
        </div>
        <div class="p-5 bg-card border rounded-2xl border-white/5">
          <h4 class="font-bold text-primary mb-2">Backend (Server)</h4>
          <ul class="text-xs space-y-2 opacity-80">
            <li><strong>Request:</strong> Asking for data.</li>
            <li><strong>Response:</strong> Sending data back.</li>
            <li><strong>Endpoint:</strong> A specific URL where data is located.</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  quizId: "eng-q3"
};