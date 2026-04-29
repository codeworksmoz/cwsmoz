import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-m21",
  title: "Fase 4: Capstone: Deploy do High-Scale Event Server",
  enableInteractive: true,
  youtubeVideoId: "R8dYLbJiTUE", // Referência para aula de deploy industrial
  quizId: "php-mq21",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl text-center">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🏆 A Graduação Master</h2>
        <p class="text-lg leading-relaxed opacity-90">
          Chegaste ao fim da jornada. O seu <strong>High-Scale Event Server</strong> está pronto para a produção. Nesta lição, validamos a arquitetura final e preparamos o lançamento utilizando padrões de infraestrutura <button>Cloud Native</button>.
        </p>
      </div>

      <!-- 1. RESILIÊNCIA OPERACIONAL -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Health Checks e Auto-recuperação</h3>
        <p class="text-sm leading-relaxed">
          Num ambiente de alta escala, o servidor de aplicação deve ser capaz de dizer ao orquestrador (como <button>Kubernetes</button>) se está saudável. Implementamos dois tipos de sondas:
        </p>
        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-primary block mb-1">Liveness Probe:</strong> "Estou vivo?". Se o processo PHP travar (ex: deadlocks), o orquestrador reinicia o <button>Worker</button> automaticamente.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-primary block mb-1">Readiness Probe:</strong> "Estou pronto para receber tráfego?". Verifica se a conexão com o <button>Redis</button> e <button>MySQL</button> está ativa antes de abrir a porta pública.
          </li>
        </ul>
      </section>

      <!-- 2. ESCALA HORIZONTAL -->
      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Escala Baseada em Carga (HPA)</h3>
        <p class="text-sm leading-relaxed">O nosso motor de eventos utiliza o <button>Swoole</button> ou <button>RoadRunner</button>. A escala não deve ser apenas por CPU, mas pelo tamanho da fila de eventos pendentes. Se a fila cresce, lançamos mais réplicas do servidor PHP instantaneamente.</p>
        
        <div class="bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner">
           <h4 class="font-bold text-primary text-xs mb-4 uppercase">Métricas de Auditoria</h4>
           <ul class="text-[10px] space-y-2 opacity-80 font-mono">
             <li>🚀 <strong>Throughput:</strong> Mensagens processadas por segundo (MPS).</li>
             <li>⏱️ <strong>Latency:</strong> Tempo desde a entrada até o dispatch do evento.</li>
             <li>🧹 <strong>GC Pressure:</strong> Frequência de limpeza da <button>Zend Engine</button>.</li>
           </ul>
        </div>
      </section>

      <!-- 3. SEGURANÇA E AUDITORIA -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Checklist de Produção de Elite</h3>
        <p class="text-sm mb-4">Antes do lançamento oficial, o sistema passou pelas seguintes validações:</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 bg-card border rounded-xl border-green-500/20">
            <h5 class="font-bold text-green-400 text-xs mb-1">Performance</h5>
            <p class="text-[10px] opacity-70">OpCache ativado com JIT em modo Tracing (1255). Buffers de socket otimizados no nível do Kernel Linux.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-green-500/20">
            <h5 class="font-bold text-green-400 text-xs mb-1">Segurança</h5>
            <p class="text-[10px] opacity-70">Sanitização rigorosa, CSP ativa e auditoria de dependências via <button>composer audit</button> integrada no CI/CD.</p>
          </div>
        </div>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🎓 Graduação PHP Master</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Parabéns, Engenheiro! Você construiu um sistema que desafia os limites do PHP. Dominou do bytecode ao <button>gRPC</button>, da <button>Reflection API</button> ao <button>JIT</button>. O seu servidor de eventos é agora um marco de performance e resiliência."
        </p>
      </section>
    </div>
  `,
};
