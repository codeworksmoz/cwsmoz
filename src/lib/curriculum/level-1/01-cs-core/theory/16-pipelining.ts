import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t16",
  title: "Pipelining: A Linha de Montagem do Processador",
  youtubeVideoId: "E18Qv2bTkRU",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
          Paralelismo a Nível de Instrução
        </h2>
        <p class="text-lg leading-relaxed">
          Um processador sem pipeline executa uma instrução de cada vez: busca, decodifica, executa, e só depois começa a próxima. O <strong>Pipelining</strong> divide o ciclo de instrução em estágios e permite que múltiplas instruções sejam processadas simultaneamente em diferentes fases. É como uma linha de montagem industrial: enquanto um carro está a ser pintado, o próximo já está a receber o motor.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. O Pipeline Clássico RISC de 5 Estágios</h3>
        <p>O pipeline mais famoso, usado em arquiteturas MIPS e ARM:</p>
        
        <div class="bg-black/40 p-6 rounded-xl border font-code text-sm shadow-inner space-y-4">
          <div class="flex flex-wrap justify-center gap-2 text-[10px]">
            <div class="bg-blue-500/20 p-3 rounded-xl border border-blue-500/30 text-center min-w-[100px]">
              <span class="text-blue-400 font-bold text-xs">IF</span>
              <p class="text-gray-400 mt-1">Instruction<br/>Fetch</p>
              <p class="text-[10px] text-blue-300/70 mt-2">Busca a instrução na memória (PC)</p>
            </div>
            <div class="flex items-center text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </div>
            <div class="bg-green-500/20 p-3 rounded-xl border border-green-500/30 text-center min-w-[100px]">
              <span class="text-green-400 font-bold text-xs">ID</span>
              <p class="text-gray-400 mt-1">Instruction<br/>Decode</p>
              <p class="text-[10px] text-green-300/70 mt-2">Decodifica e lê registradores</p>
            </div>
            <div class="flex items-center text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </div>
            <div class="bg-yellow-500/20 p-3 rounded-xl border border-yellow-500/30 text-center min-w-[100px]">
              <span class="text-yellow-400 font-bold text-xs">EX</span>
              <p class="text-gray-400 mt-1">Execute</p>
              <p class="text-[10px] text-yellow-300/70 mt-2">ALU calcula resultado</p>
            </div>
            <div class="flex items-center text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </div>
            <div class="bg-purple-500/20 p-3 rounded-xl border border-purple-500/30 text-center min-w-[100px]">
              <span class="text-purple-400 font-bold text-xs">MEM</span>
              <p class="text-gray-400 mt-1">Memory<br/>Access</p>
              <p class="text-[10px] text-purple-300/70 mt-2">Acede à RAM (LOAD/STORE)</p>
            </div>
            <div class="flex items-center text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </div>
            <div class="bg-pink-500/20 p-3 rounded-xl border border-pink-500/30 text-center min-w-[100px]">
              <span class="text-pink-400 font-bold text-xs">WB</span>
              <p class="text-gray-400 mt-1">Write<br/>Back</p>
              <p class="text-[10px] text-pink-300/70 mt-2">Escreve resultado no registrador</p>
            </div>
          </div>
          <p class="text-xs text-muted-foreground italic text-center mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="inline mr-1"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            Idealmente, a cada ciclo de clock uma nova instrução completa o pipeline. <strong>Throughput = 1 instrução/ciclo.</strong>
          </p>
        </div>

        <!-- COMPARAÇÃO COM E SEM PIPELINE -->
        <div class="bg-gray-900 p-5 rounded-xl border border-primary/20 my-4">
          <h4 class="text-primary font-bold text-sm mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
            Comparação Visual: Sem Pipeline vs Com Pipeline
          </h4>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-red-500/5 p-4 rounded-xl border border-red-500/20">
              <h5 class="text-red-400 font-bold text-sm mb-2">Sem Pipeline (Multiciclo)</h5>
              <div class="font-code text-[10px] space-y-1">
                <p class="text-gray-400">Instrução 1: [IF][ID][EX][MEM][WB]</p>
                <p class="text-gray-400">Instrução 2: .......................[IF][ID][EX][MEM][WB]</p>
                <p class="text-gray-400">Instrução 3: ..............................................[IF][ID][EX][MEM][WB]</p>
              </div>
              <p class="text-xs text-red-400/70 mt-2">9 instruções → 45 ciclos</p>
            </div>
            <div class="bg-green-500/5 p-4 rounded-xl border border-green-500/20">
              <h5 class="text-green-400 font-bold text-sm mb-2">Com Pipeline (5 estágios)</h5>
              <div class="font-code text-[10px] space-y-1">
                <p class="text-gray-400">Instrução 1: [IF][ID][EX][MEM][WB]</p>
                <p class="text-gray-400">Instrução 2: ....[IF][ID][EX][MEM][WB]</p>
                <p class="text-gray-400">Instrução 3: ........[IF][ID][EX][MEM][WB]</p>
              </div>
              <p class="text-xs text-green-400/70 mt-2">9 instruções → 13 ciclos (3.5x mais rápido!)</p>
            </div>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">2. Hazards: Os Inimigos do Pipeline</h3>
        <p class="mb-4">O pipeline ideal raramente acontece. Três tipos de "hazards" (perigos) podem causar bolhas (stalls) no pipeline:</p>
        
        <div class="grid md:grid-cols-3 gap-4">
          <div class="bg-red-500/10 p-4 rounded-xl border border-red-500/20 hover:border-red-500/50 transition-all">
            <h4 class="font-bold text-red-400 mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
              Dados (RAW)
            </h4>
            <p class="text-xs">Uma instrução depende do resultado de uma instrução anterior que ainda está no pipeline.</p>
            <div class="bg-black/40 p-2 rounded mt-2 font-code text-[10px]">
              <p>ADD R1, R2, R3</p>
              <p>SUB R4, R1, R5  <span class="text-red-400">← Precisa de R1!</span></p>
            </div>
            <p class="text-[10px] text-gray-400 mt-2"><strong>Solução:</strong> Forwarding/Bypassing</p>
          </div>
          <div class="bg-yellow-500/10 p-4 rounded-xl border border-yellow-500/20 hover:border-yellow-500/50 transition-all">
            <h4 class="font-bold text-yellow-400 mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
              Controlo (Branch)
            </h4>
            <p class="text-xs">Ocorre com instruções de salto (branch). O CPU não sabe qual o próximo endereço até ao estágio EX.</p>
            <div class="bg-black/40 p-2 rounded mt-2 font-code text-[10px]">
              <p>BEQ R1, R2, label</p>
              <p class="text-yellow-400">← Próxima instrução?</p>
            </div>
            <p class="text-[10px] text-gray-400 mt-2"><strong>Solução:</strong> Branch Prediction</p>
          </div>
          <div class="bg-purple-500/10 p-4 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all">
            <h4 class="font-bold text-purple-400 mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
              Estrutural
            </h4>
            <p class="text-xs">Dois estágios do pipeline precisam do mesmo recurso de hardware ao mesmo tempo.</p>
            <div class="bg-black/40 p-2 rounded mt-2 font-code text-[10px]">
              <p>LOAD R1, [addr]</p>
              <p class="text-purple-400">← IF + MEM competem pela RAM!</p>
            </div>
            <p class="text-[10px] text-gray-400 mt-2"><strong>Solução:</strong> Caches separadas (Harvard)</p>
          </div>
        </div>

        <!-- FORWARDING -->
        <div class="bg-blue-500/5 p-5 rounded-xl border border-blue-500/20 my-4">
          <h4 class="text-blue-400 font-bold text-sm mb-3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            Forwarding (Bypassing): Resolvendo Data Hazards
          </h4>
          <p class="text-xs mb-3">Em vez de esperar que o resultado seja escrito no registrador (estágio WB), o pipeline envia o resultado da ALU diretamente para a entrada da próxima instrução:</p>
          <div class="bg-black/40 p-3 rounded font-code text-[10px]">
            <p class="text-gray-400">ADD R1, R2, R3  →  [IF][ID][EX]<span class="text-green-400">→(forward)→</span>[MEM][WB]</p>
            <p class="text-gray-400">SUB R4, R1, R5  →  [IF][ID]<span class="text-green-400">←(recebe)←</span>[EX][MEM][WB]</p>
          </div>
          <p class="text-xs text-green-400/70 mt-2">Elimina 1-2 ciclos de stall em vez de esperar pelo WB completo!</p>
        </div>

        <!-- BRANCH PREDICTION -->
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
            Predição de Branches: Adivinhar o Futuro
          </h3>
          <p class="text-sm mb-4">Como o pipeline não pode esperar pelo resultado do branch, a CPU <strong>adivinha</strong> o caminho e executa especulativamente:</p>
          
          <div class="grid md:grid-cols-2 gap-4 text-xs">
            <div class="bg-black/40 p-3 rounded">
              <h5 class="text-yellow-400 font-bold mb-2">Preditor Estático</h5>
              <p class="text-gray-400">Assume sempre "não saltar" ou "saltar para trás" (loops). Simples mas pouco preciso.</p>
            </div>
            <div class="bg-black/40 p-3 rounded">
              <h5 class="text-green-400 font-bold mb-2">Preditor Dinâmico (2-bit)</h5>
              <p class="text-gray-400">Mantém histórico de branches anteriores. 2-bit counter: 00→01→10→11. Muito mais preciso (>90%).</p>
            </div>
          </div>
          
          <div class="bg-red-500/10 p-3 rounded mt-4 border border-red-500/20">
            <p class="text-xs text-red-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="inline mr-1"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              <strong>Misprediction:</strong> Se a predição estiver errada, todo o pipeline é "flushed" (descartado). Custo: 10-20 ciclos perdidos.
            </p>
          </div>
        </div>

        <!-- PIPELINE SUPERESCALAR -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">3. Superescalaridade e Execução Fora de Ordem</h3>
        
        <div class="grid md:grid-cols-2 gap-4 my-4">
          <div class="bg-green-500/10 p-4 rounded-xl border border-green-500/20">
            <h4 class="flex items-center gap-2 text-green-400 font-bold mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4m0 12v4M2 12h4m12 0h4"/></svg>
              Superescalar
            </h4>
            <p class="text-xs">Múltiplos pipelines em paralelo (ex: 2 ALUs, 2 Load/Store). Emite 2+ instruções por ciclo. Presente em todos os CPUs modernos.</p>
            <p class="text-xs font-code text-green-400/70 mt-2">IPC (Instructions Per Cycle) > 1</p>
          </div>
          <div class="bg-purple-500/10 p-4 rounded-xl border border-purple-500/20">
            <h4 class="flex items-center gap-2 text-purple-400 font-bold mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/></svg>
              Fora de Ordem (OoO)
            </h4>
            <p class="text-xs">A CPU reordena instruções dinamicamente para evitar stalls. Executa instruções independentes enquanto espera por dependências.</p>
            <p class="text-xs font-code text-purple-400/70 mt-2">Tomasulo Algorithm, Reservation Stations</p>
          </div>
        </div>

        <!-- CPI E PERFORMANCE -->
        <div class="bg-gray-900 p-5 rounded-xl border border-primary/20 my-4">
          <h4 class="text-primary font-bold text-sm mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            Métricas: CPI e Throughput
          </h4>
          <div class="space-y-3 text-xs">
            <div class="bg-black/40 p-3 rounded">
              <p><strong class="text-blue-400">CPI (Cycles Per Instruction):</strong> Média de ciclos que uma instrução leva. Ideal = 1.0</p>
            </div>
            <div class="bg-black/40 p-3 rounded">
              <p><strong class="text-green-400">Throughput:</strong> Instruções completadas por ciclo. Pipeline 5 estágios = até 1 IPC.</p>
            </div>
            <div class="bg-black/40 p-3 rounded">
              <p><strong class="text-yellow-400">Speedup ideal:</strong> Número de estágios do pipeline (ex: 5x mais rápido).</p>
              <p class="text-gray-400 mt-1">Na prática, hazards reduzem o speedup real para ~2-3x.</p>
            </div>
          </div>
        </div>

        <!-- DICA PRÁTICA -->
        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            Por que isso importa para o programador?
          </h4>
          <div class="space-y-3 text-sm">
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <div>
                <strong class="text-green-400">Evitar branches em loops críticos:</strong>
                <p class="text-xs text-gray-400">Branches causam mispredictions. Técnicas como loop unrolling reduzem branches.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <div>
                <strong class="text-green-400">Ordenar código para evitar dependências:</strong>
                <p class="text-xs text-gray-400">Intercalar instruções independentes permite melhor aproveitamento do pipeline.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <div>
                <strong class="text-green-400">__builtin_expect() em C:</strong>
                <p class="text-xs text-gray-400">Dá hints ao compilador sobre qual o caminho mais provável de um branch.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  quizId: "cs-t16-quiz"
};