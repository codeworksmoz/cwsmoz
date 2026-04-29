import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t5",
  title: "Memória e Armazenamento: Curto vs Longo Prazo",
  youtubeVideoId: "TQvD-Uq86oY",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 font-headline">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
          A Hierarquia da Memória
        </h2>
        <p class="text-lg leading-relaxed">
          Nem toda a memória de um computador é igual. O hardware precisa de equilibrar três fatores: <strong>Velocidade</strong>, <strong>Capacidade</strong> e <strong>Custo</strong>. Por isso, usamos uma hierarquia que vai desde o interior da CPU até aos discos externos.
        </p>
      </div>

      <!-- PIRÂMIDE DA HIERARQUIA DE MEMÓRIA -->
      <div class="bg-gray-900 p-6 rounded-2xl border border-primary/20 shadow-inner">
        <h3 class="flex items-center gap-2 text-primary font-bold text-lg mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
          Pirâmide da Hierarquia de Memória
        </h3>
        <div class="space-y-3 max-w-lg mx-auto">
          <div class="bg-green-500/20 p-3 rounded-lg text-center text-xs font-bold">
            <div class="flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              Registradores
            </div>
            <span class="text-green-300/70 text-[10px]">~1ns | Bytes</span>
          </div>
          <div class="bg-blue-500/20 p-4 rounded-lg text-center text-xs font-bold">
            <div class="flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="2"/></svg>
              Cache (L1, L2, L3)
            </div>
            <span class="text-blue-300/70 text-[10px]">~5ns | KB</span>
          </div>
          <div class="bg-yellow-500/20 p-5 rounded-lg text-center text-sm font-bold">
            <div class="flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="2"/></svg>
              RAM (Memória Principal)
            </div>
            <span class="text-yellow-300/70 text-[10px]">~100ns | GB</span>
          </div>
          <div class="bg-orange-500/20 p-6 rounded-lg text-center text-sm font-bold">
            <div class="flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="2"/><line x1="7" y1="2" x2="7" y2="22"/></svg>
              SSD / HDD (Armazenamento)
            </div>
            <span class="text-orange-300/70 text-[10px]">~0.1ms (SSD) - 10ms (HDD) | TB</span>
          </div>
        </div>
        <p class="text-[10px] text-center text-gray-400 mt-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="inline mr-1"><polyline points="20 6 9 17 4 12"/></svg>
          Subindo na pirâmide: Mais rápido, menor capacidade, mais caro
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Memória Primária (Volátil)</h3>
        <p>A memória volátil é ultra-rápida, mas tem um "defeito": ela precisa de eletricidade constante. Se desligares o computador, os dados desaparecem.</p>
        
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-card p-5 rounded-xl border border-primary/20 hover:border-primary/50 transition-colors">
            <h4 class="font-bold text-primary mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              Registradores e Cache
            </h4>
            <p class="text-xs text-muted-foreground">Vivem dentro da CPU. São as memórias mais rápidas que existem. Guardam apenas o que o processador está a calcular naquele milissegundo.</p>
            <div class="mt-3 pt-3 border-t border-white/5">
              <div class="text-xs text-primary/70 font-code">
                <span class="text-green-400">Velocidade:</span> 0.3 - 10 nanosegundos
              </div>
              <div class="text-xs text-primary/70 font-code">
                <span class="text-blue-400">Capacidade:</span> Bytes - Kilobytes
              </div>
            </div>
          </div>
          <div class="bg-card p-5 rounded-xl border border-accent/20 hover:border-accent/50 transition-colors">
            <h4 class="font-bold text-accent mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="2"/></svg>
              RAM (Random Access Memory)
            </h4>
            <p class="text-xs text-muted-foreground">O "espaço de trabalho". Quando abres o Chrome ou um Jogo, eles são movidos do disco para a RAM para que a CPU possa aceder-lhes rapidamente.</p>
            <div class="mt-3 pt-3 border-t border-white/5">
              <div class="text-xs text-accent/70 font-code">
                <span class="text-green-400">Velocidade:</span> ~100 nanosegundos
              </div>
              <div class="text-xs text-accent/70 font-code">
                <span class="text-blue-400">Capacidade:</span> 4GB - 64GB
              </div>
              <div class="text-xs text-accent/70 font-code">
                <span class="text-yellow-400">Tipos:</span> DDR4, DDR5
              </div>
            </div>
          </div>
        </div>

        <!-- TIPOS DE RAM -->
        <div class="bg-blue-500/5 p-5 rounded-xl border border-blue-500/20 my-4">
          <h4 class="flex items-center gap-2 text-blue-400 font-bold mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            Tipos de RAM
          </h4>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-black/40 p-4 rounded-lg">
              <h5 class="text-primary font-bold text-sm">SRAM (Static RAM)</h5>
              <p class="text-xs text-gray-400 mt-1">Usa transistores para reter dados. Muito rápida, mas cara. Usada em <strong>Cache L1/L2/L3</strong>.</p>
              <p class="text-xs font-code text-green-400 mt-1">Não precisa de refresh</p>
            </div>
            <div class="bg-black/40 p-4 rounded-lg">
              <h5 class="text-accent font-bold text-sm">DRAM (Dynamic RAM)</h5>
              <p class="text-xs text-gray-400 mt-1">Usa capacitores que perdem carga. Precisa de refresh constante. Mais barata. É a <strong>RAM principal</strong>.</p>
              <p class="text-xs font-code text-yellow-400 mt-1">Precisa de refresh (64ms)</p>
            </div>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">2. Armazenamento Secundário (Não-Volátil)</h3>
        <p>Aqui guardamos a nossa vida digital para sempre. Estes dispositivos não perdem dados sem eletricidade.</p>
        
        <div class="space-y-4">
          <div class="p-4 bg-muted/30 rounded-xl border border-white/5 hover:border-primary/30 transition-colors">
            <h4 class="font-bold text-yellow-500 mb-1 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="2"/><line x1="7" y1="2" x2="7" y2="22"/></svg>
              SSD (Solid State Drive)
            </h4>
            <p class="text-sm">Usa chips de memória flash (eletrónica). Sem peças móveis, o que o torna centenas de vezes mais rápido que os discos antigos. Padrão atual para qualquer engenheiro.</p>
            <div class="mt-3 flex flex-wrap gap-2">
              <span class="bg-yellow-500/10 text-yellow-400 text-xs px-2 py-1 rounded-full">NAND Flash</span>
              <span class="bg-yellow-500/10 text-yellow-400 text-xs px-2 py-1 rounded-full">500-3500 MB/s</span>
              <span class="bg-yellow-500/10 text-yellow-400 text-xs px-2 py-1 rounded-full">NVMe / SATA</span>
            </div>
          </div>
          <div class="p-4 bg-muted/30 rounded-xl border border-white/5 hover:border-primary/30 transition-colors">
            <h4 class="font-bold text-muted-foreground mb-1 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              HDD (Hard Disk Drive)
            </h4>
            <p class="text-sm">Usa discos magnéticos que giram fisicamente. É lento e barulhento, mas muito barato para guardar terabytes de vídeos e fotos antigos.</p>
            <div class="mt-3 flex flex-wrap gap-2">
              <span class="bg-gray-500/10 text-gray-400 text-xs px-2 py-1 rounded-full">Magnético</span>
              <span class="bg-gray-500/10 text-gray-400 text-xs px-2 py-1 rounded-full">80-160 MB/s</span>
              <span class="bg-gray-500/10 text-gray-400 text-xs px-2 py-1 rounded-full">SATA</span>
            </div>
          </div>
        </div>

        <!-- COMPARAÇÃO SSD vs HDD -->
        <div class="bg-gray-900 p-5 rounded-xl border border-primary/20 my-4">
          <h4 class="text-primary font-bold mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="M6 6l12 12"/></svg>
            SSD vs HDD: Comparação Direta
          </h4>
          <div class="overflow-x-auto">
            <table class="w-full text-xs">
              <thead>
                <tr class="border-b border-gray-700 text-gray-400">
                  <th class="p-2 text-left">Característica</th>
                  <th class="p-2 text-left text-yellow-400">SSD</th>
                  <th class="p-2 text-left text-gray-400">HDD</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-gray-700/50">
                  <td class="p-2">Velocidade Leitura</td>
                  <td class="p-2 text-green-400">500-7000 MB/s</td>
                  <td class="p-2">80-200 MB/s</td>
                </tr>
                <tr class="border-b border-gray-700/50">
                  <td class="p-2">Latência</td>
                  <td class="p-2 text-green-400">0.1ms</td>
                  <td class="p-2">5-10ms</td>
                </tr>
                <tr class="border-b border-gray-700/50">
                  <td class="p-2">Peças Móveis</td>
                  <td class="p-2 text-green-400">Nenhuma</td>
                  <td class="p-2">Discos giratórios</td>
                </tr>
                <tr class="border-b border-gray-700/50">
                  <td class="p-2">Resistência</td>
                  <td class="p-2 text-green-400">Alta (sem partes móveis)</td>
                  <td class="p-2">Baixa (choques danificam)</td>
                </tr>
                <tr class="border-b border-gray-700/50">
                  <td class="p-2">Ruído</td>
                  <td class="p-2 text-green-400">Silencioso</td>
                  <td class="p-2">Audível (rotação)</td>
                </tr>
                <tr>
                  <td class="p-2">Custo por GB</td>
                  <td class="p-2">Moderado</td>
                  <td class="p-2 text-green-400">Muito baixo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- ROM E BIOS -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">3. ROM e Memória de Inicialização</h3>
        <div class="bg-purple-500/5 p-5 rounded-xl border border-purple-500/20">
          <h4 class="flex items-center gap-2 text-purple-400 font-bold mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/><path d="M7 7h.01"/></svg>
            ROM (Read-Only Memory)
          </h4>
          <p class="text-sm">A ROM contém instruções essenciais que não podem ser apagadas quando o computador desliga. É onde reside o <strong>BIOS/UEFI</strong>, o firmware que inicializa o sistema.</p>
          <div class="grid grid-cols-2 gap-3 mt-3 text-xs">
            <div class="bg-black/40 p-3 rounded">
              <span class="text-purple-400 font-bold">PROM</span>
              <p class="text-gray-400">Programável uma única vez</p>
            </div>
            <div class="bg-black/40 p-3 rounded">
              <span class="text-purple-400 font-bold">EPROM</span>
              <p class="text-gray-400">Apagável com luz ultravioleta</p>
            </div>
            <div class="bg-black/40 p-3 rounded">
              <span class="text-purple-400 font-bold">EEPROM</span>
              <p class="text-gray-400">Apagável eletricamente (Flash)</p>
            </div>
            <div class="bg-black/40 p-3 rounded">
              <span class="text-purple-400 font-bold">Flash NAND</span>
              <p class="text-gray-400">Base dos SSDs modernos</p>
            </div>
          </div>
        </div>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            O Grande Dilema: Latência
          </h3>
          <p class="text-sm leading-relaxed">
            Aceder a um dado no <strong>Registrador</strong> demora menos de 1 nanosegundo. Aceder à <strong>RAM</strong> demora cerca de 100 nanosegundos. Aceder ao <strong>SSD</strong> pode demorar milissegundos.
            <br/><br/>
            Para o processador, esperar pelo disco é como se tu estivesses a trabalhar e tivesses de ir a pé até à Beira buscar uma caneta para escrever uma nota. Por isso, a engenharia foca-se tanto em manter os dados críticos na RAM e na Cache.
          </p>
          
          <div class="bg-black/40 p-4 rounded-lg mt-4">
            <h4 class="text-indigo-400 font-bold text-sm mb-2">Escala de Latência (em ciclos de CPU)</h4>
            <div class="space-y-2 text-xs font-code">
              <div class="flex justify-between border-b border-indigo-500/10 pb-1">
                <span class="text-green-400">Registrador</span>
                <span>1 ciclo (~0.3ns)</span>
              </div>
              <div class="flex justify-between border-b border-indigo-500/10 pb-1">
                <span class="text-blue-400">Cache L1</span>
                <span>4-5 ciclos (~1.5ns)</span>
              </div>
              <div class="flex justify-between border-b border-indigo-500/10 pb-1">
                <span class="text-cyan-400">Cache L3</span>
                <span>40-50 ciclos (~15ns)</span>
              </div>
              <div class="flex justify-between border-b border-indigo-500/10 pb-1">
                <span class="text-yellow-400">RAM</span>
                <span>~350 ciclos (~100ns)</span>
              </div>
              <div class="flex justify-between border-b border-indigo-500/10 pb-1">
                <span class="text-orange-400">SSD</span>
                <span>~350.000 ciclos (~0.1ms)</span>
              </div>
              <div class="flex justify-between">
                <span class="text-red-400">HDD</span>
                <span>~35.000.000 ciclos (~10ms)</span>
              </div>
            </div>
          </div>
        </div>

        <!-- MEMÓRIA VIRTUAL -->
        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            Dica de Elite: Swap/Paging (Memória Virtual)
          </h4>
          <p class="text-sm leading-relaxed">
            Quando a tua RAM enche, o Sistema Operativo usa um pedaço do SSD como se fosse RAM. Isso chama-se <strong>Swap</strong> ou <strong>Arquivo de Paginação</strong>. Como o SSD é muito mais lento que a RAM, é por isso que o computador começa a "travar" quando tens demasiadas abas abertas.
          </p>
          
          <div class="bg-black/40 p-4 rounded-lg mt-3">
            <h5 class="text-green-400 font-bold text-sm mb-2">Como o Sistema Operativo gere a memória:</h5>
            <div class="space-y-2 text-xs">
              <div class="flex items-start gap-2">
                <span class="text-green-400 font-code">1.</span>
                <span><strong>Memória Virtual:</strong> Cada programa "pensa" que tem toda a RAM só para ele</span>
              </div>
              <div class="flex items-start gap-2">
                <span class="text-green-400 font-code">2.</span>
                <span><strong>Paginação:</strong> Divide a memória em blocos (páginas) de 4KB</span>
              </div>
              <div class="flex items-start gap-2">
                <span class="text-green-400 font-code">3.</span>
                <span><strong>Swap:</strong> Páginas pouco usadas vão para o disco (page out)</span>
              </div>
              <div class="flex items-start gap-2">
                <span class="text-green-400 font-code">4.</span>
                <span><strong>Page Fault:</strong> Quando um programa precisa de uma página que está no disco</span>
              </div>
            </div>
          </div>

          <div class="bg-red-500/10 p-3 rounded-lg mt-3 border border-red-500/20">
            <p class="text-xs flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-red-400 mt-0.5 flex-shrink-0"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              <span><strong>Thrashing:</strong> Quando o sistema passa mais tempo a fazer swap do que a executar programas. O computador fica extremamente lento!</span>
            </p>
          </div>
        </div>

        <!-- ENDEREÇAMENTO DE MEMÓRIA -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">4. Conceitos de Endereçamento</h3>
        <div class="grid md:grid-cols-2 gap-4 my-4">
          <div class="bg-cyan-500/10 p-4 rounded-xl border border-cyan-500/20">
            <h4 class="flex items-center gap-2 text-cyan-400 font-bold mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="2"/><line x1="7" y1="8" x2="17" y2="8"/><line x1="7" y1="12" x2="17" y2="12"/><line x1="7" y1="16" x2="12" y2="16"/></svg>
              Endereço Físico
            </h4>
            <p class="text-xs">O endereço real na memória RAM. A CPU usa o <strong>MAR</strong> para acessar posições físicas específicas.</p>
          </div>
          <div class="bg-pink-500/10 p-4 rounded-xl border border-pink-500/20">
            <h4 class="flex items-center gap-2 text-pink-400 font-bold mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="2"/><line x1="7" y1="2" x2="7" y2="22"/></svg>
              Endereço Virtual
            </h4>
            <p class="text-xs">Cada programa vê um espaço de endereços "virtual". O <strong>MMU</strong> (Memory Management Unit) traduz para o endereço físico real.</p>
          </div>
        </div>

        <!-- APLICAÇÃO PRÁTICA -->
        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 shadow-lg mt-8">
          <h4 class="font-bold text-green-500 mb-3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            Por que isso importa para o programador?
          </h4>
          <div class="space-y-3 text-sm">
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <p><strong>Cache-friendly code:</strong> Aceder arrays sequencialmente é muito mais rápido (cache locality)</p>
            </div>
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <p><strong>Stack vs Heap:</strong> Variáveis locais (stack) são mais rápidas que objetos alocados dinamicamente (heap)</p>
            </div>
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <p><strong>Memory leaks:</strong> Entender a gestão de memória ajuda a evitar fugas e crashes no sistema</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  quizId: "cs-t5-quiz"
};