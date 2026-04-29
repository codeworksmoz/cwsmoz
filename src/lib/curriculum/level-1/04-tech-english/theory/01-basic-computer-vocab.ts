import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "eng-t1",
  title: "Phase 1: Basic Computer Vocabulary",
  content: `
    <div class="space-y-6">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
          🇬🇧 Why English is the Master Language
        </h2>
        <p class="text-lg leading-relaxed">
          English is the <strong>lingua franca</strong> of technology. Almost every programming language, documentation, and cloud provider uses English keywords. Mastering this vocabulary is the first step to becoming a global engineer.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-4">
        <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-lg">
          <h4 class="font-bold text-primary mb-3">Hardware Terms</h4>
          <ul class="text-xs space-y-2">
            <li><strong>Input:</strong> Data entering the system (mouse, keyboard).</li>
            <li><strong>Output:</strong> Information leaving the system (monitor, speakers).</li>
            <li><strong>Storage:</strong> Long-term data retention (SSD, HDD).</li>
            <li><strong>Memory:</strong> Short-term workspace (RAM).</li>
          </ul>
        </div>
        <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-lg">
          <h4 class="font-bold text-accent mb-3">Software Terms</h4>
          <ul class="text-xs space-y-2">
            <li><strong>Run:</strong> To execute a program.</li>
            <li><strong>Bug:</strong> A flaw or error in the code.</li>
            <li><strong>Feature:</strong> A specific functionality of the app.</li>
            <li><strong>Release:</strong> Launching a new version.</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  quizId: "eng-t1-quiz"
};