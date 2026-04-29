import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t24",
  title: "Concorrência e Paralelismo: Threads, Locks e Race Conditions",
  youtubeVideoId: "E18Qv2bTkRU",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4m0 12v4M2 12h4m12 0h4"/></svg>
          Fazendo Múltiplas Coisas ao Mesmo Tempo
        </h2>
        <p class="text-lg leading-relaxed">
          Concorrência não é opcional — está em todo o lado. Desde o teu browser a renderizar enquanto carrega dados, até ao servidor que responde a milhares de utilizadores. Mas com grande poder vêm grandes problemas: race conditions, deadlocks e bugs impossíveis de reproduzir.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Concorrência vs Paralelismo</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-card p-5 rounded-xl border border-blue-500/20">
            <h4 class="font-bold text-blue-400 mb-2">Concorrência</h4>
            <p class="text-xs">Múltiplas tarefas <strong>progridem</strong> ao mesmo tempo, mas não necessariamente executam ao mesmo tempo. Ex: 1 núcleo alterna entre threads.</p>
          </div>
          <div class="bg-card p-5 rounded-xl border border-green-500/20">
            <h4 class="font-bold text-green-400 mb-2">Paralelismo</h4>
            <p class="text-xs">Múltiplas tarefas <strong>executam</strong> literalmente ao mesmo tempo em múltiplos núcleos. Ex: GPU com milhares de cores.</p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">2. Problemas Clássicos</h3>
        <div class="space-y-3">
          <div class="bg-red-500/10 p-4 rounded-xl border border-red-500/20">
            <h4 class="font-bold text-red-400 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
              Race Condition
            </h4>
            <p class="text-xs mt-1">Duas threads leem e escrevem o mesmo dado sem sincronização. O resultado depende da ordem de execução — imprevisível!</p>
            <p class="text-[10px] font-code mt-1">Thread1: x++; Thread2: x++; Resultado pode ser +1 ou +2!</p>
          </div>
          <div class="bg-red-500/10 p-4 rounded-xl border border-red-500/20">
            <h4 class="font-bold text-red-400 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              Deadlock
            </h4>
            <p class="text-xs mt-1">Thread A tem recurso 1 e quer recurso 2. Thread B tem recurso 2 e quer recurso 1. Ambas ficam paradas para sempre.</p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">3. Ferramentas de Sincronização</h3>
        <div class="grid md:grid-cols-3 gap-4 text-xs">
          <div class="bg-card p-4 rounded-xl border"><span class="font-bold text-yellow-400">Mutex (Lock)</span><p class="text-gray-400 mt-1">Apenas UMA thread acede de cada vez. Bloqueia as outras.</p></div>
          <div class="bg-card p-4 rounded-xl border"><span class="font-bold text-blue-400">Semáforo</span><p class="text-gray-400 mt-1">Permite N threads simultâneas (ex: N conexões a uma pool).</p></div>
          <div class="bg-card p-4 rounded-xl border"><span class="font-bold text-green-400">Atomic</span><p class="text-gray-400 mt-1">Operações garantidas sem locks. Ex: compare-and-swap (CAS).</p></div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">4. Modelos de Concorrência</h3>
        <div class="space-y-2 text-sm">
          <p><strong class="text-purple-400">Threads + Locks:</strong> Modelo tradicional (Java, C++). Poderoso mas propenso a erros.</p>
          <p><strong class="text-cyan-400">Event Loop (Assíncrono):</strong> JavaScript, Node.js. 1 thread, nunca bloqueia. Callbacks/Promises/Async-Await.</p>
          <p><strong class="text-green-400">Atores (Actor Model):</strong> Erlang, Elixir, Akka. Cada ator tem estado privado. Comunicam por mensagens — sem shared state, sem locks!</p>
          <p><strong class="text-yellow-400">CSP (Go):</strong> Goroutines e channels. "Don't communicate by sharing memory; share memory by communicating."</p>
        </div>

        <div class="bg-green-500/5 p-4 rounded-xl border border-green-500/20 mt-6">
          <p class="font-bold text-green-500 text-sm">Lei de Amdahl:</p>
          <p class="text-xs">O speedup máximo de paralelizar é limitado pela porção sequencial: speedup = 1 / (S + P/N). Se 10% é sequencial, nunca passas de 10x mais rápido, mesmo com infinitos cores.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "cs-q24"
};