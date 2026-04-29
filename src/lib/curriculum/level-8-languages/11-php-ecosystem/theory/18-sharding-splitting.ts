import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-eco-t18",
  title: "Fase 4: Database Sharding e Read/Write Splitting",
  enableInteractive: true,
  youtubeVideoId: "raf_id_sharding",
  quizId: "php-eco-mq18",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🗄️ Escala Horizontal de Dados
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Quando uma única base de dados não suporta mais a carga, um Engenheiro Master deve decidir entre duas estratégias de escala: <strong>Read/Write Splitting</strong> (Replicação) para escalar leituras, ou <strong>Sharding</strong> (Particionamento) para escalar escritas e volume.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Read/Write Splitting e ProxySQL</h3>
        <p class="text-sm">Enviamos os <code>INSERT/UPDATE</code> para o servidor Master e distribuímos os <code>SELECT</code> por múltiplas réplicas Slave. Em PHP, usamos o <button>ProxySQL</button> para fazer este roteamento de forma transparente para a aplicação.</p>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Sharding: A Divisão dos Dados</h3>
        <p class="text-sm leading-relaxed">O <strong>Sharding</strong> divide a tabela em pedaços horizontais baseados numa <i>Shard Key</i> (ex: ID do utilizador). Cada pedaço vive num servidor físico diferente.</p>
        
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h4 class="font-bold text-indigo-400 mb-2">💎 Desafios de Sharding:</h4>
          <ul class="list-disc ml-6 space-y-2 text-xs">
            <li><strong>Joins:</strong> Torna-se impossível fazer JOIN entre tabelas de shards diferentes.</li>
            <li><strong>Transações:</strong> Exige protocolos de commit de duas fases (2PC).</li>
            <li><strong>Resharding:</strong> Reequilibrar os shards quando um servidor fica cheio é uma operação de alto risco.</li>
          </ul>
        </div>
      </section>
    </div>
  `,
};
