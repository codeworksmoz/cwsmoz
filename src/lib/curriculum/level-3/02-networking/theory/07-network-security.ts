import type { TheoryLesson } from '../../../types';
export const lesson: TheoryLesson = {
  id: "net-t7",
  title: "Segurança de Redes: Criptografia e Firewalls",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold text-red-400">🛡️ Protegendo os Dados</h2>
      <p>Redes são inerentemente inseguras. Precisamos de camadas de proteção.</p>
      <ul class="list-disc ml-6 space-y-2">
        <li><strong>TLS/SSL:</strong> Criptografia para HTTPS.</li>
        <li><strong>Firewalls:</strong> Filtragem de tráfego baseada em regras.</li>
        <li><strong>VPN (Virtual Private Network):</strong> Túneis seguros sobre redes públicas.</li>
        <li><strong>Intrusion Detection Systems (IDS):</strong> Monitorização de ataques.</li>
      </ul>
    </div>
  `,
  quizId: "net-q7"
};