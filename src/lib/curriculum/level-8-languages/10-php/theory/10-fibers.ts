import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-m10",
  title: "Fase 3: Fibers e Concorrência Cooperativa em PHP 8.1",
  youtubeVideoId: "dQw4w9WgXcQ", // ID da video-aula sobre concorrência
  enableInteractive: true,
  quizId: "php-mq10",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🧵 A Revolução das Corrotinas Nativas
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Introduzidas no <button>PHP 8.1</button>, as <button>Fibers</button> são blocos de código que podem ser pausados e retomados em qualquer ponto da execução. No nível Master, entendemos que elas são a infraestrutura necessária para criar servidores assíncronos e <button>Event Loops</button> de alta fidelidade sem a complexidade dos <button>Generators</button>.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Suspensão de Stack em Full-stop</h3>
        <p class="text-sm leading-relaxed">
          Ao contrário dos geradores (<button>yield</button>), que só podem ser pausados no nível superior da função, as <button>Fibers</button> permitem a suspensão em <strong>qualquer profundidade</strong> da pilha de chamadas. Quando uma função chama outra, que chama outra, e esta última chama <button>Fiber::suspend()</button>, o motor do PHP congela o estado exato da <button>Zend VM</button> para aquele bloco.
        </p>
        
        <div class="bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner">
           <h4 class="font-bold text-primary text-xs mb-4 uppercase">Anatomia da Execução</h4>
           <pre><code class="language-php">
$fiber = new Fiber(function (): void {
    echo "Fase 1: Iniciando processamento...\n";
    
    // ⏸️ O código pára aqui e devolve o controle ao script principal
    $valorRecebido = Fiber::suspend('Aguardando dados externos');
    
    echo "Fase 2: Retomado com: " . $valorRecebido;
});

// Inicia a execução
$status = $fiber->start();
echo $status; // "Aguardando dados externos"

// ⏯️ Retoma a execução injetando um valor
$fiber->resume('Dados da API v1');
           </code></pre>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Concorrência Cooperativa vs. Preemptiva</h3>
        <p class="text-sm leading-relaxed">
          Diferente das <button>Threads</button> do Sistema Operativo (preemptivas), as <button>Fibers</button> são <strong>cooperativas</strong>. Elas não competem pelo CPU; o desenvolvedor dita exatamente quando uma tarefa deve ceder o controle. Isto elimina a necessidade de <button>Mutexes</button> e locks complexos, pois não existem <button>Race Conditions</button> entre Fibers no mesmo processo.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-xl">
             <h4 class="font-bold text-primary text-xs mb-3 uppercase tracking-widest">Vantagens de Elite</h4>
             <ul class="text-[10px] space-y-2 opacity-80">
               <li>🚀 <strong>Memória Eficiente:</strong> Milhares de Fibers consomem menos RAM que dezenas de Threads.</li>
               <li>🛡️ <strong>Segurança:</strong> Zero risco de corrupção de variáveis globais por acesso simultâneo.</li>
               <li>🧩 <strong>Componibilidade:</strong> Permite escrever código assíncrono com sintaxe puramente síncrona.</li>
             </ul>
          </div>
          <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-xl">
             <h4 class="font-bold text-primary text-xs mb-3 uppercase tracking-widest">O Papel do Scheduler</h4>
             <p class="text-[10px] leading-relaxed">
               As Fibers não resolvem o I/O assíncrono sozinhas. Elas são os "trilhos". Tu precisas de um <button>Scheduler</button> ou <button>Event Loop</button> (como o Revolt) para gerir qual Fiber deve ser retomada quando um socket de rede estiver pronto.
             </p>
          </div>
        </div>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Estados da Fiber</h3>
        <p class="text-sm leading-relaxed">
          Um engenheiro master monitoriza o ciclo de vida do objeto <button>Fiber</button> para garantir que não existem processos órfãos:
        </p>
        <ul class="space-y-2 text-xs font-mono">
          <li><button>isStarted()</button>: Verifica se o processo já foi lançado.</li>
          <li><button>isSuspended()</button>: Indica que a Fiber está aguardando retomada.</li>
          <li><button>isRunning()</button>: A Fiber está ocupando o CPU no momento.</li>
          <li><button>isTerminated()</button>: A função de callback terminou ou lançou exceção.</li>
        </ul>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Regra do Arquiteto de Sistemas</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "As Fibers trouxeram o poder do Go para o PHP. No nosso servidor de eventos, utilizaremos esta tecnologia para processar milhares de mensagens sem nunca bloquear a <button>Main Thread</button>, atingindo uma densidade de concorrência de nível industrial."
        </p>
      </section>
    </div>
  `,
};
