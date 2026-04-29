import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "dt-t13",
  title: "Performance Profiling: Analisando o Main Thread",
  content: `
    <div class="space-y-8">
      <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-green-400 flex items-center gap-2">
          ⏱️ Além dos Logotipos: Velocidade Real
        </h2>
        <p class="text-lg leading-relaxed">Não adivinhes porque o site está lento; usa o <strong>Profiler</strong>. O painel de performance do DevTools permite gravar a execução e ver exatamente qual milissegundo foi gasto em cada função.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">1. O Flame Graph</h3>
        <p class="text-sm">É a visualização térmica da execução. Funções "largas" no topo indicam processos que estão a bloquear o browser, causando o famoso lag visual.</p>
        
        <h3 class="text-xl font-bold font-headline">2. Layout Thrashing</h3>
        <p class="text-sm">Aprende a detetar quando o teu JavaScript obriga o browser a recalcular o design repetidamente (Reflow), o que é o maior vilão da fluidez em dispositivos móveis.</p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-2">🚀 Dica de Performance</h4>
          <p class="text-sm leading-relaxed">Use o <strong>CPU Throttling</strong> para simular um telemóvel de gama baixa. Se o teu site voa no teu i7 mas trava no simulador, tens um problema de arquitetura de renderização.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "dt-q13"
};