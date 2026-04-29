import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t20",
  title: "Ciclos de Relógio e Frequência",
  youtubeVideoId: "E18Qv2bTkRU",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          O Ritmo da Máquina
        </h2>
        <p class="text-lg leading-relaxed">
          No coração de cada processador existe um <strong>cristal de quartzo</strong> que vibra milhões ou biliões de vezes por segundo. Este sinal elétrico rítmico — o <strong>clock</strong> — é o metrónomo que coordena cada operação dentro da CPU. Sem ele, os biliões de transístores seriam apenas areia organizada.
        </p>
        <div class="mt-4 flex gap-4 text-sm">
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            <span class="text-gray-400">Oscilador de cristal: efeito piezoelétrico</span>
          </div>
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            <span class="text-gray-400">Determina a velocidade de tudo</span>
          </div>
        </div>
      </div>

      <div class="space-y-6">
        <!-- O QUE É O CLOCK -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. O Sinal de Clock: Onda Quadrada</h3>
        <p class="mb-4">O clock é uma <strong>onda quadrada</strong> — um sinal elétrico que alterna entre 0 e 1 a uma frequência fixa. Cada transição de 0→1 (ou 1→0) pode disparar ações dentro da CPU.</p>
        
        <div class="bg-gray-900 p-6 rounded-2xl border border-primary/20 shadow-inner">
          <h4 class="text-primary font-bold text-lg mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            Anatomia do Sinal de Clock
          </h4>
          <div class="space-y-4">
            <div class="bg-black/40 p-4 rounded-lg">
              <div class="flex justify-center items-center gap-1 mb-4">
                <div class="h-12 w-4 bg-green-500/40 rounded"></div>
                <div class="h-12 w-4 bg-gray-800 rounded"></div>
                <div class="h-12 w-4 bg-green-500/40 rounded"></div>
                <div class="h-12 w-4 bg-gray-800 rounded"></div>
                <div class="h-12 w-4 bg-green-500/40 rounded"></div>
                <div class="h-12 w-4 bg-gray-800 rounded"></div>
              </div>
              <div class="flex justify-between text-[10px] font-code text-gray-400">
                <span class="text-green-400">↑ Borda de subida (Rising Edge)</span>
                <span class="text-gray-500">Alto (1)</span>
                <span class="text-red-400">↓ Borda de descida (Falling Edge)</span>
                <span class="text-gray-500">Baixo (0)</span>
              </div>
            </div>
            <div class="grid md:grid-cols-3 gap-3 text-xs text-center">
              <div class="bg-blue-500/10 p-3 rounded border border-blue-500/20">
                <span class="text-blue-400 font-bold">Período (T)</span>
                <p class="text-gray-400 mt-1">Tempo entre duas bordas de subida</p>
                <p class="text-blue-400/70 text-[10px] mt-1">Ex: 0.25ns a 4GHz</p>
              </div>
              <div class="bg-green-500/10 p-3 rounded border border-green-500/20">
                <span class="text-green-400 font-bold">Frequência (f)</span>
                <p class="text-gray-400 mt-1">Número de ciclos por segundo</p>
                <p class="text-green-400/70 text-[10px] mt-1">f = 1/T (em Hertz)</p>
              </div>
              <div class="bg-yellow-500/10 p-3 rounded border border-yellow-500/20">
                <span class="text-yellow-400 font-bold">Duty Cycle</span>
                <p class="text-gray-400 mt-1">% do tempo em estado alto</p>
                <p class="text-yellow-400/70 text-[10px] mt-1">Tipicamente 50%</p>
              </div>
            </div>
          </div>
        </div>

        <!-- FREQUÊNCIA E PERÍODO -->
        <div class="bg-gray-900 p-5 rounded-xl border border-primary/20 my-4">
          <h4 class="text-primary font-bold text-sm mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
            Relação Frequência vs Período
          </h4>
          <div class="overflow-x-auto">
            <table class="w-full text-xs">
              <thead>
                <tr class="border-b border-gray-700 text-gray-400">
                  <th class="p-2 text-left">Frequência</th>
                  <th class="p-2 text-left">Período</th>
                  <th class="p-2 text-left">Contexto</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-gray-700/50">
                  <td class="p-2 text-blue-400 font-bold">1 MHz</td>
                  <td class="p-2">1 µs (microssegundo)</td>
                  <td class="p-2 text-gray-400">Apple II (1977)</td>
                </tr>
                <tr class="border-b border-gray-700/50">
                  <td class="p-2 text-yellow-400 font-bold">100 MHz</td>
                  <td class="p-2">10 ns (nanossegundos)</td>
                  <td class="p-2 text-gray-400">Pentium I (1993)</td>
                </tr>
                <tr class="border-b border-gray-700/50">
                  <td class="p-2 text-green-400 font-bold">1 GHz</td>
                  <td class="p-2">1 ns</td>
                  <td class="p-2 text-gray-400">Pentium 4 / Athlon (2000)</td>
                </tr>
                <tr class="border-b border-gray-700/50">
                  <td class="p-2 text-purple-400 font-bold">3-4 GHz</td>
                  <td class="p-2">0.25 - 0.33 ns</td>
                  <td class="p-2 text-gray-400">CPUs Desktop modernas</td>
                </tr>
                <tr>
                  <td class="p-2 text-pink-400 font-bold">5+ GHz</td>
                  <td class="p-2">&lt; 0.2 ns</td>
                  <td class="p-2 text-gray-400">Overclock extremo / CPUs de topo</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="text-[10px] text-gray-400 mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="inline mr-1"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            A <strong>luz</strong> viaja apenas <strong>~5 cm em 0.17 ns</strong> — por isso a velocidade da luz já é um fator limitante nos processadores modernos!
          </p>
        </div>

        <!-- COMO O CLOCK CONTROLA O PIPELINE -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">2. Clock e o Pipeline: Sincronismo Perfeito</h3>
        
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h4 class="text-indigo-400 font-bold text-lg mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            Como o Clock Avança o Pipeline (5 estágios)
          </h4>
          <p class="text-sm mb-4">Em cada <strong>borda de subida do clock</strong>, todos os estágios do pipeline avançam simultaneamente. Os registradores de pipeline (latches) entre estágios guardam os resultados intermediários.</p>
          
          <div class="bg-black/40 p-4 rounded-lg overflow-x-auto">
            <div class="min-w-[600px]">
              <p class="text-[10px] text-gray-400 mb-2">Cada linha = um ciclo de clock:</p>
              <div class="font-code text-[9px] space-y-1">
                <div class="flex">
                  <span class="text-gray-500 w-12">Ciclo 1:</span>
                  <span class="bg-blue-500/20 px-2 py-1 rounded mr-1">IF(I1)</span>
                  <span class="w-16"></span><span class="w-16"></span><span class="w-16"></span><span class="w-16"></span>
                </div>
                <div class="flex">
                  <span class="text-gray-500 w-12">Ciclo 2:</span>
                  <span class="bg-blue-500/20 px-2 py-1 rounded mr-1">IF(I2)</span>
                  <span class="bg-green-500/20 px-2 py-1 rounded mr-1">ID(I1)</span>
                  <span class="w-16"></span><span class="w-16"></span><span class="w-16"></span>
                </div>
                <div class="flex">
                  <span class="text-gray-500 w-12">Ciclo 3:</span>
                  <span class="bg-blue-500/20 px-2 py-1 rounded mr-1">IF(I3)</span>
                  <span class="bg-green-500/20 px-2 py-1 rounded mr-1">ID(I2)</span>
                  <span class="bg-yellow-500/20 px-2 py-1 rounded mr-1">EX(I1)</span>
                  <span class="w-16"></span><span class="w-16"></span>
                </div>
                <div class="flex">
                  <span class="text-gray-500 w-12">Ciclo 4:</span>
                  <span class="bg-blue-500/20 px-2 py-1 rounded mr-1">IF(I4)</span>
                  <span class="bg-green-500/20 px-2 py-1 rounded mr-1">ID(I3)</span>
                  <span class="bg-yellow-500/20 px-2 py-1 rounded mr-1">EX(I2)</span>
                  <span class="bg-purple-500/20 px-2 py-1 rounded mr-1">MEM(I1)</span>
                  <span class="w-16"></span>
                </div>
                <div class="flex">
                  <span class="text-gray-500 w-12">Ciclo 5:</span>
                  <span class="bg-blue-500/20 px-2 py-1 rounded mr-1">IF(I5)</span>
                  <span class="bg-green-500/20 px-2 py-1 rounded mr-1">ID(I4)</span>
                  <span class="bg-yellow-500/20 px-2 py-1 rounded mr-1">EX(I3)</span>
                  <span class="bg-purple-500/20 px-2 py-1 rounded mr-1">MEM(I2)</span>
                  <span class="bg-pink-500/20 px-2 py-1 rounded">WB(I1)</span>
                </div>
              </div>
            </div>
          </div>
          <p class="text-xs text-indigo-300/70 text-center mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="inline mr-1"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            A frequência máxima é limitada pelo <strong>estágio mais lento</strong> do pipeline (critical path).
          </p>
        </div>

        <!-- CRITICAL PATH -->
        <div class="bg-red-500/5 p-5 rounded-xl border border-red-500/20 my-4">
          <h4 class="text-red-400 font-bold text-sm mb-3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            Caminho Crítico (Critical Path)
          </h4>
          <p class="text-xs mb-3">
            O período do clock <strong>deve ser maior</strong> que o tempo de propagação do caminho mais longo entre dois registradores de pipeline. Se o clock for rápido demais, o sinal não chega a tempo e ocorre uma <strong>violação de setup/hold</strong>.
          </p>
          <div class="bg-black/40 p-3 rounded font-code text-xs text-center">
            <p class="text-gray-400">T<sub>clock</sub> > T<sub>critical_path</sub> + T<sub>setup</sub> + T<sub>skew</sub></p>
            <div class="mt-3 grid grid-cols-3 gap-2 text-[10px]">
              <div class="bg-red-500/10 p-2 rounded">
                <span class="text-red-400 font-bold">T critical_path</span>
                <p class="text-gray-500">Atraso da lógica combinacional mais longa</p>
              </div>
              <div class="bg-yellow-500/10 p-2 rounded">
                <span class="text-yellow-400 font-bold">T setup</span>
                <p class="text-gray-500">Tempo que o dado deve estar estável antes do clock</p>
              </div>
              <div class="bg-blue-500/10 p-2 rounded">
                <span class="text-blue-400 font-bold">T skew</span>
                <p class="text-gray-500">Diferença de chegada do clock a diferentes partes</p>
              </div>
            </div>
          </div>
        </div>

        <!-- OVERCLOCKING -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">3. Overclocking e Underclocking</h3>
        
        <div class="grid md:grid-cols-2 gap-4 my-4">
          <div class="bg-orange-500/10 p-5 rounded-xl border border-orange-500/20">
            <h4 class="flex items-center gap-2 text-orange-400 font-bold mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              Overclocking
            </h4>
            <p class="text-xs mb-3">Aumentar a frequência além da especificação de fábrica para ganhar performance. Requer melhor refrigeração e pode causar instabilidade.</p>
            <ul class="text-xs space-y-2 text-gray-400">
              <li class="flex items-start gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-orange-400 mt-0.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Aumenta performance, mas também temperatura</span>
              </li>
              <li class="flex items-start gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-orange-400 mt-0.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Pode reduzir a vida útil do chip (eletromigração)</span>
              </li>
              <li class="flex items-start gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-orange-400 mt-0.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Mundo recorde: ~9 GHz (com nitrogénio líquido)</span>
              </li>
            </ul>
          </div>
          <div class="bg-green-500/10 p-5 rounded-xl border border-green-500/20">
            <h4 class="flex items-center gap-2 text-green-400 font-bold mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              Underclocking / DVFS
            </h4>
            <p class="text-xs mb-3">Reduzir dinamicamente a frequência e voltagem para poupar energia quando o CPU está ocioso. Essencial em dispositivos móveis.</p>
            <ul class="text-xs space-y-2 text-gray-400">
              <li class="flex items-start gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Intel SpeedStep, AMD Cool'n'Quiet</span>
              </li>
              <li class="flex items-start gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Poupança de energia → menor temperatura</span>
              </li>
              <li class="flex items-start gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Turbo Boost: aumenta frequência temporariamente</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- MÚLTIPLOS DOMÍNIOS DE CLOCK -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">4. Domínios de Clock no Sistema</h3>
        
        <div class="bg-gray-900 p-5 rounded-xl border border-primary/20 my-4">
          <h4 class="text-primary font-bold text-sm mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            Nem tudo corre à mesma velocidade!
          </h4>
          <div class="space-y-3 text-xs">
            <div class="bg-black/40 p-3 rounded flex justify-between items-center">
              <div>
                <span class="text-blue-400 font-bold">Core Clock</span>
                <p class="text-gray-400 text-[10px]">Núcleos da CPU (P-cores, E-cores)</p>
              </div>
              <span class="text-blue-400 font-code">3.0 - 5.7 GHz</span>
            </div>
            <div class="bg-black/40 p-3 rounded flex justify-between items-center">
              <div>
                <span class="text-green-400 font-bold">Ring/Mesh Bus</span>
                <p class="text-gray-400 text-[10px]">Interconexão entre núcleos e cache L3</p>
              </div>
              <span class="text-green-400 font-code">2.0 - 3.0 GHz</span>
            </div>
            <div class="bg-black/40 p-3 rounded flex justify-between items-center">
              <div>
                <span class="text-yellow-400 font-bold">Memory Controller</span>
                <p class="text-gray-400 text-[10px]">Controlador de RAM (DDR4/DDR5)</p>
              </div>
              <span class="text-yellow-400 font-code">1.6 - 3.6 GHz</span>
            </div>
            <div class="bg-black/40 p-3 rounded flex justify-between items-center">
              <div>
                <span class="text-purple-400 font-bold">Uncore / SA</span>
                <p class="text-gray-400 text-[10px]">PCIe, DMI, gráficos integrados</p>
              </div>
              <span class="text-purple-400 font-code">0.8 - 2.4 GHz</span>
            </div>
          </div>
          <p class="text-[10px] text-gray-400 mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="inline mr-1"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            <strong>Base Clock (BCLK):</strong> 100 MHz. Multiplicadores geram todas as outras frequências.
          </p>
        </div>

        <!-- GERADOR DE CLOCK -->
        <div class="bg-blue-500/5 p-5 rounded-xl border border-blue-500/20 my-4">
          <h4 class="text-blue-400 font-bold text-sm mb-3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            Phase-Locked Loop (PLL): O Multiplicador de Frequência
          </h4>
          <p class="text-xs mb-3">O cristal base oscila a uma frequência fixa (ex: 100 MHz). O <strong>PLL</strong> é um circuito que multiplica esta frequência para gerar clocks mais altos para diferentes partes do chip.</p>
          <div class="bg-black/40 p-3 rounded font-code text-xs text-center">
            <p class="text-gray-400">100 MHz (BCLK) × <span class="text-yellow-400">Multiplicador 45x</span> = <span class="text-green-400 font-bold">4.5 GHz (Core Clock)</span></p>
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
                <strong class="text-green-400">Medir performance em ciclos:</strong>
                <p class="text-xs text-gray-400">Ferramentas como perf e RDTSC medem ciclos de clock, não segundos — métrica mais precisa que wall-clock time.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <div>
                <strong class="text-green-400">Latência de instruções:</strong>
                <p class="text-xs text-gray-400">Saber que uma divisão leva 20-80 ciclos vs 1 ciclo para ADD ajuda a otimizar código crítico.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <div>
                <strong class="text-green-400">Turbo Boost e Throttling:</strong>
                <p class="text-xs text-gray-400">A frequência varia dinamicamente. Benchmarks devem considerar warm-up para evitar medições falsas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  quizId: "cs-q20"
};