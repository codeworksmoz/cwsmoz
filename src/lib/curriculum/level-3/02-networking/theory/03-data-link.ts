import type { TheoryLesson } from '../../../types';
export const lesson: TheoryLesson = {
  id: "net-t3",
  title: "Camada de Enlace e Ethernet",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold">🔗 Enquadramento e Controlo de Erros</h2>
      <p>Responsável pela comunicação entre dois nós diretamente ligados.</p>
      <ul class="list-disc ml-6 space-y-2">
        <li><strong>MAC Address:</strong> Endereço físico único da placa de rede.</li>
        <li><strong>Detecção de Erros:</strong> Checksum e CRC (Cyclic Redundancy Check).</li>
        <li><strong>CSMA/CD:</strong> Como o Ethernet gere colisões em meios partilhados.</li>
      </ul>
    </div>
  `,
  quizId: "net-q3"
};