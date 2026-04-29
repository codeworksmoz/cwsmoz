import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m9",
  title: "Segurança e Melhores Práticas em Python",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold text-red-400">🛡️ Protegendo a sua Aplicação</h2>
      <p>Python é flexível, mas perigoso se não for usado com cuidado.</p>
      <ul class="list-disc ml-6 space-y-2">
        <li><strong>Dependency Scanning:</strong> Use ferramentas como <code>safety</code> para verificar vulnerabilidades em pacotes.</li>
        <li><strong>Injeção de Código:</strong> Evite <code>eval()</code> e <code>exec()</code> com input de utilizador.</li>
        <li><strong>Secrets Management:</strong> Nunca guarde chaves no código; use variáveis de ambiente.</li>
      </ul>
    </div>
  `,
  quizId: "py-mq9"
};