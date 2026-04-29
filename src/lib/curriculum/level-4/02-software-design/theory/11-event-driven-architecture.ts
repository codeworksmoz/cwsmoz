
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "des-t11",
  title: "Event-Driven Architecture (EDA) e Reatividade",
  quizId: "des-q11-master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">⚡ Reagindo ao Mundo</h2>
        <p class="text-lg">Em arquiteturas EDA, os componentes não chamam uns aos outros diretamente. Eles produzem <strong>Eventos</strong> que são consumidos de forma assíncrona por outros interessados.</p>
      </div>

      <div class="space-y-6 text-sm">
        <p><strong>Producer:</strong> Dispara o evento (ex: "PedidoCriado").</p>
        <p><strong>Broker:</strong> A infraestrutura que transporta a mensagem (Kafka, RabbitMQ, Redis Pub/Sub).</p>
        <p><strong>Consumer:</strong> Subscreve o evento e reage (ex: Serviço de Email envia boas-vindas).</p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 mt-6">
          <h4 class="font-bold text-indigo-400 mb-2">💎 Porquê EDA?</h4>
          <p class="text-xs leading-relaxed">Desacoplamento total. Podes adicionar um novo serviço de estatísticas amanhã e ele só precisa de ouvir os eventos que já estão a ser disparados hoje, sem que o sistema principal saiba da sua existência.</p>
        </div>
      </div>
    </div>
  `
};
