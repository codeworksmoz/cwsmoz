
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "des-t15",
  title: "Messaging Queues: RabbitMQ, Kafka e Resiliência",
  quizId: "des-q15-master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">📦 Garantindo a Entrega</h2>
        <p class="text-lg">Filas de mensagens permitem que o sistema continue a funcionar mesmo que partes dele estejam offline. Elas amortecem picos de tráfego e garantem o processamento de cada tarefa.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">Kafka vs RabbitMQ</h3>
        <p class="text-sm"><strong>RabbitMQ:</strong> Focado em roteamento complexo e garantia de entrega de mensagens individuais. <br/><strong>Kafka:</strong> Focado em streaming de dados massivos e re-processamento (Log imutável).</p>
      </div>
    </div>
  `
};
