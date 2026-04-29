import type { TheoryLesson } from '../../../types';
export const lesson: TheoryLesson = {
  id: "net-t10",
  title: "Gestão e Resolução de Problemas (Troubleshooting)",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold text-green-500">🔧 Ferramentas do Administrador</h2>
      <p>Como diagnosticar quando "a Internet caiu".</p>
      <ul class="list-disc ml-6 space-y-2">
        <li><strong>Ping & Traceroute:</strong> Testar conectividade e latência.</li>
        <li><strong>Wireshark:</strong> Análise detalhada de pacotes.</li>
        <li><strong>SNMP:</strong> Monitorização de equipamentos de rede.</li>
      </ul>
    </div>
  `,
  quizId: "net-q10"
};