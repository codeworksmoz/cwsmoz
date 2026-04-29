
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "dt-t3",
  title: "Browser DevTools: Inspecção de Performance e Rede",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🔬 O Laboratório de Runtime
        </h2>
        <p class="text-lg leading-relaxed">
          As DevTools são o sistema de monitorização em tempo real do seu código no browser. Um engenheiro de elite utiliza-as não apenas para mudar cores, mas para auditar o tráfego de rede e o consumo de recursos.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">1. Painel Network (Rede)</h3>
        <p class="text-sm">Analise cada pedido HTTP. Entenda o que é o <strong>TTFB (Time to First Byte)</strong> e como o tamanho dos ficheiros impacta o carregamento inicial.</p>
        <ul class="list-disc ml-6 space-y-2 text-xs">
          <li><strong>Throttling:</strong> Simule conexões lentas (3G/4G) para testar a resiliência do seu site em mercados emergentes.</li>
          <li><strong>Headers:</strong> Verifique se os cookies e tokens de segurança estão a ser enviados corretamente.</li>
        </ul>

        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">2. Painel Application e Storage</h3>
        <p class="text-sm">Onde vivem os dados do cliente. Gerencie <strong>LocalStorage</strong>, <strong>SessionStorage</strong> e visualize os <strong>Service Workers</strong> ativos para PWAs.</p>
        
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-2">🚀 Dica Master: Remote Debugging</h4>
          <p class="text-sm leading-relaxed">
            Sabia que pode ligar o seu telemóvel Android via USB e usar as DevTools do computador para debugar o site real no telemóvel? Isto é vital para encontrar bugs que só acontecem em touchscreens.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "dt-q3"
};
