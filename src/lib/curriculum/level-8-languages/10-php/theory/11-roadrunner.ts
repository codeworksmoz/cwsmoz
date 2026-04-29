import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-m11",
  title: "Fase 3: RoadRunner: PHP em Alta Escala com Workers de Go",
  enableInteractive: true,
  youtubeVideoId: "R8dYLbJiTUE",
  quizId: "php-mq11",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🏃 O Atleta da Infraestrutura
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O <button>RoadRunner</button> é um servidor de aplicação de alta performance, escrito em <button>Go</button>, que funciona como um gestor de processos para o PHP. Ao contrário do <button>Nginx + PHP-FPM</button>, que cria e destrói o ambiente em cada request, o <button>RoadRunner</button> mantém os seus <button>Workers</button> residentes na memória RAM, eliminando o custo de <button>Bootstrapping</button> e atingindo latências de nível industrial.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. O Protocolo Goridge</h3>
        <p class="text-sm leading-relaxed">
          A comunicação entre o servidor (Go) e o seu código (PHP) não usa o lento <button>FastCGI</button>. O <button>RoadRunner</button> utiliza o <button>Goridge</button>, um protocolo binário de alto desempenho via <button>Unix Sockets</button> ou <button>TCP</button>. Isto permite que o PHP receba o pedido já processado e responda quase instantaneamente.
        </p>
        
        <div class="bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner">
           <h4 class="font-bold text-primary text-xs mb-4 uppercase">Comparação de Fluxo</h4>
           <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-[10px]">
             <div class="p-3 bg-red-500/5 border border-red-500/20 rounded-lg">
               <span class="font-bold text-red-400">PHP-FPM:</span><br>
               Request -> Parse PHP.ini -> Load Extensions -> Load Composer -> Execute -> Kill.
             </div>
             <div class="p-3 bg-green-500/5 border border-green-500/20 rounded-lg">
               <span class="font-bold text-green-400">RoadRunner:</span><br>
               Request -> <button>Goridge</button> -> Execute -> Wait (Worker stays alive).
             </div>
           </div>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Gestão de Workers e Estado</h3>
        <p class="text-sm leading-relaxed">
          Como o PHP não morre ao fim do pedido, as variáveis globais e estáticas <strong>persistem</strong>. Um Engenheiro Master deve garantir que o estado é limpo entre pedidos ou utilizar o <button>RoadRunner</button> para manter caches em memória extremamente rápidos sem precisar de um <button>Redis</button>.
        </p>

        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl">
            <strong class="text-primary block mb-1">Max Jobs:</strong> Configura o worker para reiniciar após X pedidos, prevenindo que <button>Memory Leaks</button> consumam o servidor.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl">
            <strong class="text-primary block mb-1">Hot Reload:</strong> O <button>RoadRunner</button> monitoriza mudanças nos ficheiros e reinicia os workers automaticamente em desenvolvimento.
          </li>
        </ul>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Além do HTTP: gRPC e WebSockets</h3>
        <p class="text-sm leading-relaxed">
          O <button>RoadRunner</button> transforma o PHP numa ferramenta multiplataforma. Podes gerir conexões de <button>WebSockets</button> de longa duração ou servir APIs <button>gRPC</button> (binárias) com a mesma facilidade que serve um site HTML, tudo orquestrado pelo motor em Go.
        </p>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 A Visão da Cloud</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Utilizar <button>RoadRunner</button> é preparar a sua aplicação para <button>Kubernetes</button> e ambientes de alta densidade. Ao remover o peso do sistema de ficheiros e do bootstrapping em cada request, você coloca o PHP no mesmo patamar de performance das linguagens nativas da nuvem."
        </p>
      </section>
    </div>
  `,
};
