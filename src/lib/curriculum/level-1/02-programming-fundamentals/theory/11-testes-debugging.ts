import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "pf-t11",
  title: "Fase 3: Testes e Debugging - A Ciência da Caça ao Erro",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🔍 A Arte de Investigar o Invisível
        </h2>
        <p class="text-lg leading-relaxed">
          Escrever código é 50% do trabalho; os outros 50% são garantir que ele funciona e saber onde ele falha. O <strong>Debugging</strong> e os <strong>Testes Automatizados</strong> são as ferramentas que separam um amador de um engenheiro de elite.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. O Processo de Debugging</h3>
        <p>Debugar não é "tentativa e erro". É um processo científico de isolamento de variáveis. As IDEs modernas como o VS Code fornecem ferramentas poderosas:</p>
        <ul class="space-y-4">
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
            <div class="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 font-bold">●</div>
            <div>
              <p class="font-bold text-sm">Breakpoints:</p>
              <p class="text-xs text-muted-foreground">Pontos de paragem onde o programa "congela" para que possas inspecionar o valor exato da memória naquele momento.</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
            <div class="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0 font-bold">👁️</div>
            <div>
              <p class="font-bold text-sm">Watchers:</p>
              <p class="text-xs text-muted-foreground">Monitorização em tempo real de variáveis específicas enquanto passas linha a linha (Step Over/Into).</p>
            </div>
          </li>
        </ul>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. A Pirâmide de Testes</h3>
        <p>Um engenheiro de elite não testa manualmente o site todo em cada mudança. Ele escreve código para testar o código:</p>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="p-4 bg-card border rounded-xl border-green-500/20">
            <h4 class="font-bold text-green-500 text-xs mb-1">Unit Tests</h4>
            <p class="text-[10px] opacity-70">Testam funções isoladas. Rápidos e baratos. Ocupam a base da pirâmide.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-blue-500/20">
            <h4 class="font-bold text-blue-500 text-xs mb-1">Integration Tests</h4>
            <p class="text-[10px] opacity-70">Testam se dois ou mais módulos trabalham bem juntos (ex: App + DB).</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-purple-500/20">
            <h4 class="font-bold text-purple-500 text-xs mb-1">E2E Tests</h4>
            <p class="text-[10px] opacity-70">End-to-End. Simulam o utilizador real clicando no browser. Lentos e caros.</p>
          </div>
        </div>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🧪 TDD: Test Driven Development</h3>
          <p class="text-sm leading-relaxed mb-4">
            No TDD, escreves o teste <strong>antes</strong> do código real. O ciclo é:
          </p>
          <div class="flex items-center justify-between text-center text-[10px] font-bold uppercase tracking-widest">
            <div class="p-2 bg-red-500/20 border border-red-500 rounded-lg w-24">Red<br/><span class="font-normal lowercase">Teste falha</span></div>
            <div class="text-primary">→</div>
            <div class="p-2 bg-green-500/20 border border-green-500 rounded-lg w-24">Green<br/><span class="font-normal lowercase">Código passa</span></div>
            <div class="text-primary">→</div>
            <div class="p-2 bg-blue-500/20 border border-blue-500 rounded-lg w-24">Refactor<br/><span class="font-normal lowercase">Melhora</span></div>
          </div>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Visão Master: Regressão
          </h4>
          <p class="text-sm leading-relaxed">
            A maior vantagem de ter testes é prevenir a <strong>Regressão</strong>: quando adicionas uma funcionalidade nova e, sem querer, quebras algo que já funcionava. Com uma suite de testes de elite, recebes um alerta imediato se algo falhar.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "pf-t11-quiz"
};