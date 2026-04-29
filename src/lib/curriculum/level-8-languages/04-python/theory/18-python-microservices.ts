import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m18",
  title: "Arquitetura de Microserviços Python",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🏗️ Sistemas Distribuídos</h2>
        <p class="text-lg">Construir microserviços em Python exige foco em **Comunicação Assíncrona**, resiliência e descoberta de serviços.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">gRPC vs REST</h3>
        <p>Para comunicação interna entre microserviços, o <strong>gRPC</strong> (baseado em Protocol Buffers) é muito mais eficiente que o JSON/REST, reduzindo a latência e o payload de rede.</p>
        
        <h3 class="text-xl font-bold font-headline text-accent">Event-Driven Architecture</h3>
        <p>Integração com RabbitMQ ou Kafka utilizando bibliotecas como <code>pika</code> ou <code>confluent-kafka</code> para desacoplar sistemas e garantir escalabilidade horizontal.</p>
      </div>
    </div>
  `,
  quizId: "py-mq18"
};
