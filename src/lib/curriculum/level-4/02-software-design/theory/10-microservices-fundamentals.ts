
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "des-t10",
  title: "Microservices Fundamentals: Decomposição e Rede",
  quizId: "des-q10-master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🚀 Escala e Independência
        </h2>
        <p class="text-lg leading-relaxed">
          Microserviços dividem uma aplicação em pequenos serviços autónomos que comunicam via rede. O objetivo é permitir que equipas diferentes lancem código em paralelo sem bloqueios.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">Os 3 Desafios Master</h3>
        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block mb-1">Service Discovery:</strong> Como o serviço A encontra o endereço IP do serviço B num ambiente dinâmico? (Consul, Eureka).
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block mb-1">Data Consistency:</strong> Cada serviço tem a sua própria BD. Como garantir que o stock e o pagamento batem certo? (Eventual Consistency e Sagas).
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block mb-1">Observability:</strong> Se um pedido falha, como rastreá-lo através de 10 serviços diferentes? (Distributed Tracing).
          </li>
        </ul>
      </div>
    </div>
  `
};
