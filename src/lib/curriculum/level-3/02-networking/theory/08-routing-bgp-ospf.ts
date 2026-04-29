import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "net-t8",
  title: "Protocolos de Roteamento: OSPF e o Núcleo BGP",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🗺️ O Mapa da Internet</h2>
        <p class="text-lg">Como é que um pacote sabe que deve passar por Portugal para chegar ao Brasil? Routers utilizam protocolos de roteamento para partilhar mapas de rede e calcular o melhor caminho dinamicamente.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">1. OSPF: O Rei do Interior (IGP)</h3>
        <p class="text-sm">Usado dentro de uma única empresa ou ISP (Autonomous System). Utiliza o **Algoritmo de Dijkstra** para encontrar o caminho mais curto baseado no custo das arestas (ex: largura de banda do cabo).</p>

        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2 text-red-400">2. BGP: O Protocolo que gere a Internet (EGP)</h3>
        <p class="text-sm">O <strong>BGP (Border Gateway Protocol)</strong> é o que liga os sistemas autónomos do mundo. Diferente do OSPF, o BGP não olha apenas para velocidade; ele olha para **Políticas e Acordos**. Um ISP moçambicano pode preferir enviar tráfego via África do Sul em vez de Europa por razões comerciais.</p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h4 class="font-bold text-indigo-400 mb-2">⚡ BGP Hijacking: O Perigo</h4>
          <p class="text-sm leading-relaxed">Como o BGP é baseado em confiança, se um router mentir dizendo que "o IP do Google é aqui", a Internet inteira pode desviar o tráfego para um atacante. Por isso, a engenharia moderna foca em <strong>RPKI</strong> (assinatura digital de rotas).</p>
        </div>
      </div>
    </div>
  `,
  quizId: "net-mq8"
};
