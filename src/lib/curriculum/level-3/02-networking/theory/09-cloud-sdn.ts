import type { TheoryLesson } from '../../../types';
export const lesson: TheoryLesson = {
  id: "net-t9",
  title: "Redes na Nuvem e SDN",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold">☁️ Virtualização de Redes</h2>
      <p>O hardware está a ser substituído por software (Software Defined Networking).</p>
      <ul class="list-disc ml-6 space-y-2">
        <li><strong>VPC (Virtual Private Cloud):</strong> Redes isoladas na nuvem.</li>
        <li><strong>Load Balancers:</strong> Distribuição de tráfego entre servidores.</li>
        <li><strong>Content Delivery Networks (CDN):</strong> Réplicas de dados próximas do utilizador.</li>
      </ul>
    </div>
  `,
  quizId: "net-q9"
};