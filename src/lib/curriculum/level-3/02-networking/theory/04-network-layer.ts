import type { TheoryLesson } from '../../../types';
export const lesson: TheoryLesson = {
  id: "net-t4",
  title: "Camada de Rede: IP e Encaminhamento",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold">🛣️ Roteamento Global</h2>
      <p>O objetivo é mover pacotes da origem ao destino através de múltiplas redes.</p>
      <ul class="list-disc ml-6 space-y-2">
        <li><strong>Endereçamento IP:</strong> IPv4 (32-bit) e IPv6 (128-bit).</li>
        <li><strong>Subnetting:</strong> Divisão de redes para eficiência e segurança.</li>
        <li><strong>Protocolos de Routing:</strong> OSPF, BGP (o protocolo que gere a Internet).</li>
      </ul>
    </div>
  `,
  quizId: "net-q4"
};