import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-eco-t19",
  title: "Fase 4: Message Queues: RabbitMQ, Kafka e Resiliência",
  enableInteractive: true,
  youtubeVideoId: "raf_id_queues",
  quizId: "php-eco-mq19",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          📦 Desacoplamento e Resiliência
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Sistemas de alta escala não processam tudo na hora. As <strong>Message Queues</strong> permitem que o seu servidor de eventos receba o pedido e o coloque numa fila para processamento assíncrono, garantindo que nenhum dado se perca se um componente falhar.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. RabbitMQ vs. Kafka</h3>
        <div class="grid md:grid-cols-2 gap-6 text-sm">
          <div class="p-4 bg-card border rounded-xl">
            <strong class="text-primary">RabbitMQ (Broker):</strong> Focado na garantia de entrega de cada mensagem. Ideal para fluxos de negócio complexos e roteamento flexível.
          </div>
          <div class="p-4 bg-card border rounded-xl">
            <strong class="text-primary">Apache Kafka (Log):</strong> Focado em streaming de dados massivos. Guarda o histórico de eventos, permitindo o re-processamento (Replay).
          </div>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Dead Letter Queues (DLQ)</h3>
        <p class="text-sm leading-relaxed">Se uma mensagem causa erro no processamento 3 vezes seguidas, não deves perdê-la. O Engenheiro Master move-a para uma <button>DLQ</button>. Isto permite que analises o erro manualmente e re-enviies a mensagem corrigida no futuro.</p>
      </section>
    </div>
  `,
};
