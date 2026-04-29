import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t19",
  title: "Microarquitetura: Além do ISA",
  youtubeVideoId: "E18Qv2bTkRU",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
          Por dentro do Processador
        </h2>
        <p class="text-lg leading-relaxed">
          Enquanto o <strong>ISA (Instruction Set Architecture)</strong> define o contrato externo (as instruções que o processador aceita), a <strong>Microarquitetura</strong> é a implementação física real desse contrato. Dois processadores com o mesmo ISA (ex: x86-64) podem ter microarquiteturas completamente diferentes — e desempenhos radicalmente distintos.
        </p>
        <div class="mt-4 flex gap-4 text-sm">
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            <span class="text-gray-400">ISA = O que faz | Microarquitetura = Como faz</span>
          </div>
        </div>
      </div>

      <div class="space-y-6">
        <!-- ISA vs MICROARQUITETURA -->
        <div class="bg-gray-900 p-6 rounded-2xl border border-primary/20 shadow-inner">
          <h3 class="flex items-center gap-2 text-primary font-bold text-lg mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
            ISA vs Microarquitetura: A Distinção Fundamental
          </h4>
          <div class="grid md:grid-cols-2 gap-4 text-sm">
            <div class="bg-blue-500/10 p-4 rounded-xl border border-blue-500/20">
              <h4 class="flex items-center gap-2 text-blue-400 font-bold mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                ISA (Contrato)
              </h4>
              <ul class="text-xs space-y-2 text-gray-400">
                <li class="flex items-start gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-blue-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Conjunto de instruções disponíveis</span>
                </li>
                <li class="flex items-start gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-blue-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Registradores visíveis ao programador</span>
                </li>
                <li class="flex items-start gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-blue-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Modelo de memória e endereçamento</span>
                </li>
                <li class="flex items-start gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-blue-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Igual para toda a família (ex: x86-64)</span>
                </li>
              </ul>
            </div>
            <div class="bg-green-500/10 p-4 rounded-xl border border-green-500/20">
              <h4 class="flex items-center gap-2 text-green-400 font-bold mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                Microarquitetura (Implementação)
              </h4>
              <ul class="text-xs space-y-2 text-gray-400">
                <li class="flex items-start gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Pipeline (profundidade, estágios)</span>
                </li>
                <li class="flex items-start gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Execução fora de ordem, superescalar</span>
                </li>
                <li class="flex items-start gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Cache, branch predictor, prefetcher</span>
                </li>
                <li class="flex items-start gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Diferente em cada geração (ex: Alder Lake vs Zen 4)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- MICROCÓDIGO -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Microcódigo: O Intérprete dentro da CPU</h3>
        <p class="mb-4">Instruções complexas (CISC) são traduzidas internamente em sequências de <strong>micro-operações (µops)</strong> muito mais simples. Esta camada de microcódigo permite que a microarquitetura evolua sem quebrar o ISA.</p>
        
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h4 class="text-indigo-400 font-bold text-lg mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/></svg>
            Fluxo: Instrução x86 → µops → Execução
          </h4>
          <div class="flex flex-col md:flex-row items-center justify-center gap-3 text-xs">
            <div class="bg-red-500/10 p-3 rounded-xl border border-red-500/20 text-center min-w-[120px]">
              <p class="text-red-400 font-bold">ADD [mem], EAX</p>
              <p class="text-[10px] text-gray-500">Instrução CISC complexa</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-gray-600"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            <div class="bg-yellow-500/10 p-3 rounded-xl border border-yellow-500/20 text-center min-w-[120px]">
              <p class="text-yellow-400 font-bold">Decodificador</p>
              <p class="text-[10px] text-gray-500">Traduz para µops</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-gray-600"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            <div class="bg-green-500/10 p-3 rounded-xl border border-green-500/20 text-center min-w-[120px]">
              <p class="text-green-400 font-bold">µop 1: LOAD</p>
              <p class="text-green-400 font-bold">µop 2: ADD</p>
              <p class="text-green-400 font-bold">µop 3: STORE</p>
              <p class="text-[10px] text-gray-500">3 micro-operações RISC-like</p>
            </div>
          </div>
          <p class="text-xs text-gray-400 text-center mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="inline mr-1"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            CPUs Intel/AMD modernas: 1 instrução CISC → 1-4 µops. Microcódigo guardado em ROM especial.
          </p>
        </div>

        <!-- COMPONENTES DA MICROARQUITETURA -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">2. Blocos da Microarquitetura Moderna</h3>
        
        <div class="grid md:grid-cols-3 gap-4 my-4">
          <div class="bg-card p-5 rounded-xl border border-blue-500/20 hover:border-blue-500/50 transition-all">
            <h4 class="font-bold text-blue-400 mb-3 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/></svg>
              Front-End
            </h4>
            <ul class="text-xs space-y-1 text-gray-400">
              <li>• Branch Predictor (predição de saltos)</li>
              <li>• Instruction Fetch (busca instruções)</li>
              <li>• Prefetcher (carrega antes de precisar)</li>
              <li>• Decoder (CISC → µops)</li>
              <li>• µop Cache (guarda µops já decodificados)</li>
            </ul>
          </div>
          <div class="bg-card p-5 rounded-xl border border-yellow-500/20 hover:border-yellow-500/50 transition-all">
            <h4 class="font-bold text-yellow-400 mb-3 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
              Execution Engine
            </h4>
            <ul class="text-xs space-y-1 text-gray-400">
              <li>• Scheduler (agenda µops para execução)</li>
              <li>• ALUs (múltiplas unidades aritméticas)</li>
              <li>• Load/Store Units (acesso à memória)</li>
              <li>• FPU (unidade de ponto flutuante)</li>
              <li>• SIMD Units (AVX, SSE, NEON)</li>
            </ul>
          </div>
          <div class="bg-card p-5 rounded-xl border border-green-500/20 hover:border-green-500/50 transition-all">
            <h4 class="font-bold text-green-400 mb-3 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="2"/></svg>
              Subsistema de Memória
            </h4>
            <ul class="text-xs space-y-1 text-gray-400">
              <li>• Cache L1 (instruções + dados)</li>
              <li>• Cache L2 (por núcleo)</li>
              <li>• Cache L3 (partilhada)</li>
              <li>• TLB (cache de tradução de endereços)</li>
              <li>• Memory Controller (DDR4/DDR5)</li>
            </ul>
          </div>
        </div>

        <!-- EXECUÇÃO FORA DE ORDEM -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">3. Execução Fora de Ordem (Out-of-Order)</h3>
        
        <div class="bg-purple-500/5 p-6 rounded-2xl border border-purple-500/20">
          <h4 class="text-purple-400 font-bold text-lg mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/></svg>
            Como o CPU Reordena Instruções para Maximizar Performance
          </h4>
          
          <div class="bg-black/40 p-4 rounded-lg mb-4">
            <h5 class="text-yellow-400 font-bold text-sm mb-2">Problema: Dependências paralisam o pipeline</h5>
            <div class="font-code text-[10px] space-y-1">
              <p class="text-gray-400">1. LOAD R1, [addr1]  <span class="text-red-400">← Cache miss! Demora 200 ciclos</span></p>
              <p class="text-gray-400">2. ADD R2, R3, R4    <span class="text-green-400">← Independente! Pode executar JÁ</span></p>
              <p class="text-gray-400">3. SUB R5, R1, R6    <span class="text-yellow-400">← Depende de R1 (LOAD)</span></p>
            </div>
          </div>
          
          <p class="text-sm mb-4">
            O <strong>Tomasulo Algorithm</strong> e as <strong>Reservation Stations</strong> permitem que a CPU execute a instrução 2 enquanto espera pela 1, desde que não haja dependência de dados. O resultado é depois reorganizado (Reorder Buffer) antes de ser escrito nos registradores visíveis ao programador.
          </p>
          
          <div class="grid md:grid-cols-3 gap-3 text-xs text-center">
            <div class="bg-purple-500/10 p-3 rounded border border-purple-500/20">
              <span class="text-purple-400 font-bold">Register Renaming</span>
              <p class="text-gray-400 mt-1">Elimina dependências falsas (WAR, WAW) renomeando registradores internamente</p>
            </div>
            <div class="bg-purple-500/10 p-3 rounded border border-purple-500/20">
              <span class="text-purple-400 font-bold">Reservation Stations</span>
              <p class="text-gray-400 mt-1">Aguardam operandos. Quando prontos, disparam execução imediata</p>
            </div>
            <div class="bg-purple-500/10 p-3 rounded border border-purple-500/20">
              <span class="text-purple-400 font-bold">Reorder Buffer (ROB)</span>
              <p class="text-gray-400 mt-1">Reordena resultados na ordem original do programa (commit in-order)</p>
            </div>
          </div>
        </div>

        <!-- ESPECULAÇÃO -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">4. Execução Especulativa</h3>
        
        <div class="bg-orange-500/5 p-5 rounded-xl border border-orange-500/20">
          <h4 class="text-orange-400 font-bold text-sm mb-3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
            Adivinhar o futuro para não parar o pipeline
          </h4>
          <p class="text-xs mb-3">
            Quando o CPU encontra um branch condicional, em vez de esperar, ele <strong>adivinha</strong> o caminho e executa instruções especulativamente. Se acertar, ganhou tempo. Se errar (misprediction), descarta tudo e volta atrás — a um custo de 15-20 ciclos.
          </p>
          <div class="bg-black/40 p-3 rounded font-code text-xs">
            <p class="text-gray-400">Branch Predictor moderno: <span class="text-green-400">>97% de precisão</span></p>
            <p class="text-gray-400">Técnicas: 2-bit counter, Global History, Perceptron, TAGE</p>
            <p class="text-red-400/70 mt-1 text-[10px]">Spectre/Meltdown (2018): vulnerabilidades que exploravam execução especulativa</p>
          </div>
        </div>

        <!-- EXEMPLOS FAMOSOS -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">5. Microarquiteturas Famosas</h3>
        
        <div class="grid md:grid-cols-2 gap-4 my-4">
          <div class="bg-blue-500/10 p-4 rounded-xl border border-blue-500/20">
            <h4 class="flex items-center gap-2 text-blue-400 font-bold mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              Intel (x86-64)
            </h4>
            <div class="space-y-2 text-xs text-gray-400">
              <p><strong class="text-blue-300">Core (2006):</strong> Revolução pós-NetBurst. Eficiência energética.</p>
              <p><strong class="text-blue-300">Sandy Bridge (2011):</strong> µop cache, AVX, ring bus.</p>
              <p><strong class="text-blue-300">Alder Lake (2021):</strong> Híbrido P-cores + E-cores.</p>
              <p><strong class="text-blue-300">Lunar Lake (2024):</strong> NPU integrada, chiplets.</p>
            </div>
          </div>
          <div class="bg-red-500/10 p-4 rounded-xl border border-red-500/20">
            <h4 class="flex items-center gap-2 text-red-400 font-bold mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              AMD (x86-64)
            </h4>
            <div class="space-y-2 text-xs text-gray-400">
              <p><strong class="text-red-300">Zen 1 (2017):</strong> Renascimento da AMD. SMT, Infinity Fabric.</p>
              <p><strong class="text-red-300">Zen 2 (2019):</strong> Chiplets. 7nm. PCIe 4.0.</p>
              <p><strong class="text-red-300">Zen 3 (2020):</strong> Cache L3 unificada (8-core CCX).</p>
              <p><strong class="text-red-300">Zen 5 (2024):</strong> AVX-512 completo, largura de 8-wide decode.</p>
            </div>
          </div>
        </div>

        <!-- APPLE SILICON -->
        <div class="bg-green-500/5 p-5 rounded-xl border border-green-500/20 my-4">
          <h4 class="flex items-center gap-2 text-green-400 font-bold mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            Apple Silicon (ARM)
          </h4>
          <div class="space-y-2 text-xs text-gray-400">
            <p><strong class="text-green-300">M1 (2020):</strong> 4 performance + 4 efficiency cores. Unified memory. 5nm.</p>
            <p><strong class="text-green-300">M1 Ultra (2022):</strong> 2x M1 Max interligados (UltraFusion). 114B transistores.</p>
            <p><strong class="text-green-300">M3 (2023):</strong> 3nm. Dynamic Caching para GPU. Ray tracing hardware.</p>
            <p><strong class="text-green-300">Inovação:</strong> Wide decode (8-wide), enorme OoO window, baixíssimo consumo.</p>
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
                <strong class="text-green-400">Otimização de código:</strong>
                <p class="text-xs text-gray-400">Código branch-free e data-oriented design exploram melhor OoO e branch prediction.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <div>
                <strong class="text-green-400">Compilação JIT:</strong>
                <p class="text-xs text-gray-400">JITs (Java, V8) geram código diferente para cada microarquitetura.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <div>
                <strong class="text-green-400">Segurança:</strong>
                <p class="text-xs text-gray-400">Spectre/Meltdown mostraram que a microarquitetura pode ter vulnerabilidades mesmo com ISA seguro.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  quizId: "cs-q19"
};