import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "os-t10",
  title: "Segurança e Proteção no SO",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold text-red-400">🛡️ Blindando a Máquina</h2>
      <p>Segurança envolve proteger o sistema contra ameaças externas. Proteção envolve controlar o acesso de processos aos recursos do sistema.</p>
      
      <div class="prose prose-invert max-w-none">
        <h3>Mecanismos:</h3>
        <ul>
          <li><strong>Access Control Lists (ACLs):</strong> Quem pode ler/escrever o quê.</li>
          <li><strong>User/Kernel Mode Separation:</strong> Impedir que apps estraguem o sistema.</li>
          <li><strong>Address Space Layout Randomization (ASLR):</strong> Dificultar ataques de exploit de memória.</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "os-q10"
};