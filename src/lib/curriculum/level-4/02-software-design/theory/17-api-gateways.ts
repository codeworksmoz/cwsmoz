
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "des-t17",
  title: "API Gateways: O Porteiro da Infraestrutura",
  quizId: "des-q17-master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🛡️ Proteção de Borda</h2>
        <p class="text-lg">O Gateway é o único ponto de entrada para o mundo exterior. Ele protege os seus microserviços internos de ataques e simplifica a vida do cliente.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">Funções Críticas</h3>
        <ul class="list-disc ml-6 space-y-2 text-sm">
          <li><strong>Autenticação Centralizada:</strong> Valida o JWT uma única vez no Gateway.</li>
          <li><strong>Rate Limiting:</strong> Impede que um único cliente derrube o sistema.</li>
          <li><strong>Protocol Translation:</strong> Traduz HTTP/JSON para gRPC interno.</li>
        </ul>
      </div>
    </div>
  `
};
