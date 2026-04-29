import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t14",
  title: "Memória Virtual: A Arquitetura da Abstração",
  youtubeVideoId: "E18Qv2bTkRU",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
          A Ilusão do Espaço Infinito
        </h2>
        <p class="text-lg leading-relaxed">
          A Memória Virtual é uma das abstrações mais poderosas da computação. Ela permite que cada processo acredite ter acesso a um espaço de endereçamento contínuo e privado, isolando-o de falhas noutros programas e permitindo o uso de mais memória do que a RAM física instalada.
        </p>
        <div class="mt-4 flex gap-4 text-sm">
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            <span class="text-gray-400">Conceito: Anos 60 (Atlas Computer)</span>
          </div>
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="2"/></svg>
            <span class="text-gray-400">Base de todo SO moderno</span>
          </div>
        </div>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. MMU e a Tradução de Endereços</h3>
        <p>Os programas trabalham com <strong>Endereços Lógicos (Virtual Addresses)</strong>. A tradução para <strong>Endereços Físicos</strong> (na RAM real) é feita em nanossegundos pelo hardware <strong>MMU (Memory Management Unit)</strong>.</p>
        
        <div class="bg-black/40 p-6 rounded-xl border font-code text-sm shadow-inner space-y-4">
          <div class="flex items-center justify-between text-center">
            <div class="bg-blue-500/20 p-3 rounded border border-blue-500/30 w-32">
              <span class="text-blue-400">Processo</span>
              <br/>
              <span class="text-[10px] text-blue-300/70">End. Lógico</span>
              <br/>
              <span class="text-xs font-bold">0x0804</span>
            </div>
            <div class="text-primary font-bold flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </div>
            <div class="bg-accent/20 p-3 rounded border border-accent/40 w-32 font-bold">
              <span class="text-accent">PAGE</span>
              <br/>
              <span class="text-accent">TABLE</span>
              <br/>
              <span class="text-[10px] text-accent/70">O Mapa</span>
            </div>
            <div class="text-primary font-bold flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </div>
            <div class="bg-green-500/20 p-3 rounded border border-green-500/30 w-32">
              <span class="text-green-400">RAM</span>
              <br/>
              <span class="text-[10px] text-green-300/70">End. Físico</span>
              <br/>
              <span class="text-xs font-bold">0xA3F8</span>
            </div>
          </div>
          <p class="text-xs text-muted-foreground italic text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="inline mr-1"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            O <strong>TLB (Translation Lookaside Buffer)</strong> é uma cache dentro da CPU que guarda as traduções mais recentes para evitar consultas lentas à Page Table na RAM.
          </p>
        </div>

        <!-- ESTRUTURA DO ENDEREÇO VIRTUAL -->
        <div class="bg-gray-900 p-5 rounded-xl border border-primary/20 my-4">
          <h4 class="text-primary font-bold text-sm mb-3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
            Anatomia de um Endereço Virtual (32 bits)
          </h4>
          <div class="bg-black/40 p-4 rounded font-code text-xs text-center">
            <div class="flex gap-2 justify-center">
              <div class="bg-blue-500/20 p-3 rounded-lg flex-1">
                <span class="text-blue-400 font-bold">Número da Página</span>
                <br/>
                <span class="text-[10px] text-gray-400">20 bits (índice na Page Table)</span>
              </div>
              <div class="bg-green-500/20 p-3 rounded-lg flex-1">
                <span class="text-green-400 font-bold">Offset</span>
                <br/>
                <span class="text-[10px] text-gray-400">12 bits (posição dentro da página)</span>
              </div>
            </div>
            <p class="text-gray-400 mt-3 text-[10px]">
              2²⁰ páginas × 2¹² bytes = 4 GB de espaço virtual endereçável
            </p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline mt-8">2. Paginação e Swap</h3>
        <p class="mb-4">A memória é dividida em <strong>Páginas</strong> (lógicas) e <strong>Frames</strong> (físicos), geralmente de 4KB. Quando a RAM enche, o SO move as páginas menos usadas para o disco (Swap/Pagefile).</p>
        
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-card border rounded-xl border-accent/20 hover:border-accent/50 transition-all">
            <h4 class="font-bold text-accent mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
              Demand Paging
            </h4>
            <p class="text-xs opacity-80">As páginas só são carregadas na RAM quando o programa realmente tenta aceder a elas, poupando tempo de boot e memória inicial.</p>
            <p class="text-xs text-accent/70 mt-2">Vantagem: Programas iniciam mais rápido e usam menos RAM.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-red-500/20 hover:border-red-500/50 transition-all">
            <h4 class="font-bold text-red-400 mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              Thrashing
            </h4>
            <p class="text-xs opacity-80">Ocorre quando o sistema tem tão pouca RAM que gasta mais tempo a trocar páginas com o disco do que a executar o código. O sistema "congela".</p>
            <p class="text-xs text-red-400/70 mt-2">Sintoma: LED do disco sempre acesso, sistema irresponsivo.</p>
          </div>
        </div>

        <!-- TABELA DE PÁGINAS -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">3. A Page Table: O Mapa da Memória</h3>
        
        <div class="bg-gray-900 p-6 rounded-2xl border border-primary/20 shadow-inner my-4">
          <h4 class="text-primary font-bold text-lg mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
            Estrutura da Page Table (x86-64)
          </h4>
          <p class="text-sm mb-4">Sistemas modernos usam <strong>tabelas hierárquicas</strong> (multinível) para evitar desperdício de memória com tabelas enormes esparsas:</p>
          
          <div class="flex justify-center items-center gap-2 text-[10px] font-code">
            <div class="bg-yellow-500/10 p-2 rounded border border-yellow-500/20 text-center">
              <span class="text-yellow-400 font-bold">PGD</span>
              <p class="text-gray-500">Page Global Directory</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-gray-600"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            <div class="bg-yellow-500/10 p-2 rounded border border-yellow-500/20 text-center">
              <span class="text-yellow-400 font-bold">PUD</span>
              <p class="text-gray-500">Page Upper Directory</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-gray-600"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            <div class="bg-yellow-500/10 p-2 rounded border border-yellow-500/20 text-center">
              <span class="text-yellow-400 font-bold">PMD</span>
              <p class="text-gray-500">Page Middle Directory</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-gray-600"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            <div class="bg-green-500/10 p-2 rounded border border-green-500/20 text-center">
              <span class="text-green-400 font-bold">PTE</span>
              <p class="text-gray-500">Page Table Entry</p>
            </div>
          </div>
          <p class="text-xs text-gray-400 text-center mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="inline mr-1"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            4 níveis no x86-64, 5 níveis com extensões mais recentes (Intel 5-level paging)
          </p>
        </div>

        <!-- PAGE FAULT -->
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 1 1-9-9"/><polyline points="21 3 21 9 15 9"/></svg>
            O Ciclo do Page Fault
          </h3>
          <p class="text-sm mb-4">Quando a CPU pede um dado e a MMU percebe que a página <strong>não está na RAM</strong> (bit Present = 0):</p>
          
          <div class="space-y-3">
            <div class="flex items-start gap-3">
              <div class="bg-indigo-500/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                <span class="font-bold text-indigo-400 text-sm">1</span>
              </div>
              <div class="bg-black/40 p-3 rounded-lg flex-1">
                <h5 class="text-accent font-bold text-xs">INTERRUPÇÃO</h5>
                <p class="text-xs text-gray-400 mt-1">A CPU pausa o programa e gera uma exceção de Page Fault. O SO (kernel) assume o controlo.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="bg-indigo-500/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                <span class="font-bold text-indigo-400 text-sm">2</span>
              </div>
              <div class="bg-black/40 p-3 rounded-lg flex-1">
                <h5 class="text-accent font-bold text-xs">LOCALIZAÇÃO</h5>
                <p class="text-xs text-gray-400 mt-1">O SO verifica se o endereço é válido. Se for inválido → <strong>Segmentation Fault (crash)</strong>. Se estiver em swap → continua.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="bg-indigo-500/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                <span class="font-bold text-indigo-400 text-sm">3</span>
              </div>
              <div class="bg-black/40 p-3 rounded-lg flex-1">
                <h5 class="text-accent font-bold text-xs">ALOCAÇÃO DE FRAME</h5>
                <p class="text-xs text-gray-400 mt-1">O SO escolhe um frame livre na RAM. Se não houver, usa <strong>LRU (Least Recently Used)</strong> para expulsar uma página antiga para o disco.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="bg-indigo-500/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                <span class="font-bold text-indigo-400 text-sm">4</span>
              </div>
              <div class="bg-black/40 p-3 rounded-lg flex-1">
                <h5 class="text-accent font-bold text-xs">CARREGAMENTO</h5>
                <p class="text-xs text-gray-400 mt-1">O dado é lido do disco (swap/pagefile) para a RAM física. Esta é a etapa mais lenta (~10ms vs ~100ns da RAM).</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="bg-indigo-500/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                <span class="font-bold text-indigo-400 text-sm">5</span>
              </div>
              <div class="bg-black/40 p-3 rounded-lg flex-1">
                <h5 class="text-accent font-bold text-xs">RETOMA</h5>
                <p class="text-xs text-gray-400 mt-1">A Page Table é atualizada (bit Present = 1). O programa retoma a instrução que causou o fault como se nada tivesse acontecido.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- ALGORITMOS DE SUBSTITUIÇÃO -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">4. Políticas de Substituição de Páginas</h3>
        
        <div class="grid md:grid-cols-2 gap-4 my-4">
          <div class="bg-blue-500/10 p-4 rounded-xl border border-blue-500/20">
            <h4 class="flex items-center gap-2 text-blue-400 font-bold mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              LRU (Least Recently Used)
            </h4>
            <p class="text-xs">Substitui a página que não é acedida há mais tempo. Baseia-se na <strong>localidade temporal</strong>. É a política mais usada.</p>
            <p class="text-[10px] text-gray-400 mt-2">Ideal, mas caro de implementar em hardware.</p>
          </div>
          <div class="bg-green-500/10 p-4 rounded-xl border border-green-500/20">
            <h4 class="flex items-center gap-2 text-green-400 font-bold mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/></svg>
              FIFO (First-In, First-Out)
            </h4>
            <p class="text-xs">Substitui a página que está há mais tempo na memória, independentemente do uso. Simples, mas pode remover páginas frequentemente usadas.</p>
            <p class="text-[10px] text-gray-400 mt-2">Pode sofrer da Anomalia de Belady (mais frames = mais faults).</p>
          </div>
          <div class="bg-yellow-500/10 p-4 rounded-xl border border-yellow-500/20">
            <h4 class="flex items-center gap-2 text-yellow-400 font-bold mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              Ótimo (Belady)
            </h4>
            <p class="text-xs">Substitui a página que <strong>não será usada por mais tempo</strong> no futuro. É teoricamente perfeito, mas impossível de implementar (requer prever o futuro).</p>
            <p class="text-[10px] text-gray-400 mt-2">Usado como referência teórica para comparar outros algoritmos.</p>
          </div>
          <div class="bg-purple-500/10 p-4 rounded-xl border border-purple-500/20">
            <h4 class="flex items-center gap-2 text-purple-400 font-bold mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
              Clock (Second Chance)
            </h4>
            <p class="text-xs">Aproximação eficiente do LRU. Usa um bit de referência que é limpo periodicamente. Dá uma "segunda chance" a páginas recentemente usadas.</p>
            <p class="text-[10px] text-gray-400 mt-2">Implementação mais comum em SOs reais (Linux, Windows).</p>
          </div>
        </div>

        <!-- ESPAÇO DE ENDEREÇAMENTO -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">5. Layout do Espaço de Endereçamento Virtual</h3>
        
        <div class="bg-gray-900 p-5 rounded-xl border border-primary/20 my-4">
          <h4 class="text-primary font-bold text-sm mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
            Layout Típico de um Processo (Linux, 32 bits)
          </h4>
          <div class="space-y-2 text-xs">
            <div class="bg-blue-500/10 p-2 rounded text-center">
              <span class="text-blue-400 font-bold">0xFFFFFFFF</span>
              <span class="text-gray-500 ml-2">Kernel Space (1 GB)</span>
            </div>
            <div class="bg-red-500/10 p-2 rounded text-center">
              <span class="text-red-400">Stack (Pilha)</span>
              <span class="text-gray-500 ml-2 text-[10px]">Cresce para baixo ↓</span>
            </div>
            <div class="bg-gray-800 p-2 rounded text-center">
              <span class="text-gray-500 text-[10px]">↓↓↓ Espaço livre (Memory-Mapped) ↓↓↓</span>
            </div>
            <div class="bg-green-500/10 p-2 rounded text-center">
              <span class="text-green-400">Heap</span>
              <span class="text-gray-500 ml-2 text-[10px]">Cresce para cima ↑</span>
            </div>
            <div class="bg-yellow-500/10 p-2 rounded text-center">
              <span class="text-yellow-400">Dados (BSS, Data)</span>
            </div>
            <div class="bg-purple-500/10 p-2 rounded text-center">
              <span class="text-purple-400">Código (Text)</span>
            </div>
            <div class="bg-black/40 p-2 rounded text-center">
              <span class="text-gray-600 font-bold">0x00000000</span>
              <span class="text-gray-500 ml-2 text-[10px]">Não mapeado (proteção)</span>
            </div>
          </div>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Visão de Engenharia: Proteção de Memória
          </h4>
          <p class="text-sm leading-relaxed mb-4">
            A memória virtual não é só sobre espaço; é sobre <strong>Segurança</strong>. O SO utiliza bits de proteção em cada entrada da tabela de páginas (Read, Write, Execute). Tentar escrever em memória de "apenas leitura" ou executar dados (ataque de buffer overflow) dispara um <strong>Segmentation Fault</strong> imediato.
          </p>
          
          <div class="bg-black/40 p-4 rounded-lg">
            <h5 class="text-green-400 font-bold text-sm mb-3 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
              Bits de Proteção na Page Table Entry:
            </h5>
            <div class="grid grid-cols-3 gap-3 text-xs">
              <div class="bg-green-500/10 p-2 rounded text-center">
                <span class="text-green-400 font-bold">R (Read)</span>
                <p class="text-gray-500 text-[10px]">Permite leitura</p>
              </div>
              <div class="bg-yellow-500/10 p-2 rounded text-center">
                <span class="text-yellow-400 font-bold">W (Write)</span>
                <p class="text-gray-500 text-[10px]">Permite escrita</p>
              </div>
              <div class="bg-red-500/10 p-2 rounded text-center">
                <span class="text-red-400 font-bold">X (eXecute)</span>
                <p class="text-gray-500 text-[10px]">Permite execução</p>
              </div>
            </div>
            <p class="text-xs text-gray-400 mt-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="inline mr-1"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <strong>W^X (Write XOR Execute):</strong> Uma página nunca pode ser simultaneamente writable e executable. Previne injeção de código malicioso.
            </p>
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
                <strong class="text-green-400">Otimização de acesso:</strong>
                <p class="text-xs text-gray-400">Aceder arrays sequencialmente evita page faults desnecessários (localidade espacial).</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <div>
                <strong class="text-green-400">Segmentação de memória:</strong>
                <p class="text-xs text-gray-400">Entender virtual memory ajuda a interpretar mapas de memória de processos (/proc/pid/maps).</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <div>
                <strong class="text-green-400">Segurança:</strong>
                <p class="text-xs text-gray-400">ASLR (Address Space Layout Randomization) baseia-se em memória virtual para dificultar exploits.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  quizId: "cs-t14-quiz"
};