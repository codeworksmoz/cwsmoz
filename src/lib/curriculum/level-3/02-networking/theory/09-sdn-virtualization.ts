import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "net-t9",
  title: "SDN: Redes Definidas por Software e NFV",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">⚙️ Programando o Tráfego</h2>
        <p class="text-lg">Tradicionalmente, a inteligência da rede estava dentro de routers caros e fechados. O <strong>SDN (Software Defined Networking)</strong> separa o plano de dados (o envio do pacote) do plano de controlo (a decisão de por onde enviar).</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. O Controlador Central</h3>
        <p class="text-sm">Numa rede SDN, um software central (Controller) tem a visão global da rede e envia instruções para switches "burros" e rápidos (via protocolo OpenFlow). Isto permite mudar a rota de milhares de servidores com uma linha de código.</p>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. NFV (Network Function Virtualization)</h3>
        <p class="text-sm">Em vez de comprares uma caixa física para ser a tua Firewall e outra para ser o teu Load Balancer, o NFV permite correres estas funções como **Máquinas Virtuais ou Contentores** em servidores comuns, reduzindo custos massivamente.</p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h4 class="font-bold text-indigo-400 mb-2">🚀 Vantagem Cloud Native</h4>
          <p class="text-sm leading-relaxed">Plataformas como AWS e Google Cloud baseiam-se inteiramente em SDN. É por isso que podes criar uma rede VPC e configurar uma firewall em segundos através de um painel web ou API.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "net-mq9"
};
