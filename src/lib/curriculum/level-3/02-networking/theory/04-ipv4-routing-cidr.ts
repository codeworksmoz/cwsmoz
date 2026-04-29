import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "net-t4",
  title: "Camada de Rede: IPv4, Subnetting e CIDR",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🛣️ O Endereçamento Global</h2>
        <p class="text-lg">A Camada 3 é onde a Internet acontece. O protocolo <strong>IP (Internet Protocol)</strong> é o responsável por encontrar o caminho entre Maputo e Tóquio através de milhões de routers interligados.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">1. Estrutura do Endereço IPv4</h3>
        <p class="text-sm">Um endereço de 32 bits representado por 4 octetos (ex: 192.168.1.1). Como engenheiro, deves dominar a máscara de sub-rede para saber onde termina a <strong>Rede</strong> e onde começa o <strong>Host</strong>.</p>

        <h3 class="text-xl font-bold font-headline">2. CIDR (Classless Inter-Domain Routing)</h3>
        <p class="text-sm">O antigo sistema de classes (A, B, C) era ineficiente. O <strong>CIDR</strong> utiliza uma barra (ex: /24) para indicar quantos bits pertencem à rede. Isto permitiu que a Internet não colapsasse por falta de endereços nos anos 90.</p>
        
        <div class="bg-black/40 p-5 rounded-xl border font-code text-xs text-accent shadow-inner">
          192.168.1.0 / 24 <br/>
          Mask: 255.255.255.0 <br/>
          Hosts disponíveis: 254 (2^8 - 2)
        </div>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h4 class="font-bold text-indigo-400 mb-2">🚦 Como o Router decide?</h4>
          <p class="text-sm leading-relaxed">Routers usam a <strong>Routing Table</strong> e o princípio do <i>Longest Prefix Match</i>. Se houver duas rotas para o mesmo destino, o router escolhe a mais específica (a que tiver a maior máscara /X).</p>
        </div>
      </div>
    </div>
  `,
  quizId: "net-mq4"
};
