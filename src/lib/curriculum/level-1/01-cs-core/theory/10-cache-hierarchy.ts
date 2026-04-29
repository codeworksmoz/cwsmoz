import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t10",
  title: "Hierarquia de Cache: A Velocidade do Silício",
  youtubeVideoId: "E18Qv2bTkRU",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          Combatendo o Abismo de Latência
        </h2>
        <p class="text-lg leading-relaxed">
          Enquanto um processador moderno pode executar biliões de operações por segundo, a memória RAM demora "séculos" (em tempo de CPU) a entregar um dado. Sem a <strong>Memória Cache</strong>, o processador passaria 99% do tempo à espera.
        </p>
      </div>

      <div class="space-y-6">
        <!-- O PROBLEMA DA LATÊNCIA -->
        <div class="bg-gray-900 p-6 rounded-2xl border border-primary/20 shadow-inner mb-6">
          <h3 class="flex items-center gap-2 text-primary font-bold text-lg mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            O Abismo de Latência (CPU vs RAM)
          </h3>
          <p class="text-sm mb-4">Visualiza o problema: se um ciclo de CPU fosse 1 segundo, quanto tempo levaria para aceder à RAM?</p>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-sm">
            <div class="bg-green-500/10 p-4 rounded-xl border border-green-500/20">
              <div class="text-3xl mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mx-auto text-green-400"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <p class="text-green-400 font-bold">CPU (1 ciclo)</p>
              <p class="text-xs text-gray-400 mt-1">0.3 nanosegundos</p>
              <p class="text-[10px] text-green-400/70 mt-1">= 1 segundo na analogia</p>
            </div>
            <div class="bg-yellow-500/10 p-4 rounded-xl border border-yellow-500/20">
              <div class="text-3xl mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mx-auto text-yellow-400"><rect x="2" y="6" width="20" height="12" rx="2"/></svg>
              </div>
              <p class="text-yellow-400 font-bold">RAM (acesso)</p>
              <p class="text-xs text-gray-400 mt-1">~100 nanosegundos</p>
              <p class="text-[10px] text-yellow-400/70 mt-1">= 6 minutos na analogia!</p>
            </div>
            <div class="bg-red-500/10 p-4 rounded-xl border border-red-500/20">
              <div class="text-3xl mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mx-auto text-red-400"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </div>
              <p class="text-red-400 font-bold">SSD/HDD</p>
              <p class="text-xs text-gray-400 mt-1">0.1 - 10 milissegundos</p>
              <p class="text-[10px] text-red-400/70 mt-1">= Dias/Meses!</p>
            </div>
          </div>
          <p class="text-xs text-center text-gray-400 mt-4">
            Sem cache, a CPU passaria a maior parte do tempo <strong>parada à espera de dados</strong>!
          </p>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Os Níveis de Cache (L1, L2, L3)</h3>
        <p>A cache é organizada em níveis, equilibrando velocidade e capacidade. Quanto mais baixo o nível (L1), mais perto está do núcleo da CPU e mais rápida é.</p>
        
        <div class="grid md:grid-cols-3 gap-4">
          <div class="p-5 bg-card border rounded-2xl border-accent/40 shadow-lg hover:border-accent/60 transition-colors">
            <h4 class="font-bold text-accent mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              L1 Cache
            </h4>
            <p class="text-[10px] text-muted-foreground mb-3">LATÊNCIA: ~1ns (4-5 ciclos)</p>
            <p class="text-xs">Integrada no núcleo. Dividida em <b>L1i</b> (instruções) e <b>L1d</b> (dados). É a memória mais rápida do mundo após os registradores.</p>
            <div class="mt-3 pt-3 border-t border-white/5">
              <p class="text-[10px] text-accent/70">Tamanho: 32-64 KB</p>
              <p class="text-[10px] text-accent/70">Por núcleo: Sim (dedicada)</p>
            </div>
          </div>
          <div class="p-5 bg-card border rounded-2xl border-accent/30 shadow-lg hover:border-accent/60 transition-colors">
            <h4 class="font-bold text-accent mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              L2 Cache
            </h4>
            <p class="text-[10px] text-muted-foreground mb-3">LATÊNCIA: ~4ns (12-15 ciclos)</p>
            <p class="text-xs">Intermédia. Geralmente existe uma por núcleo. Maior que a L1, mas ligeiramente mais lenta devido à maior densidade.</p>
            <div class="mt-3 pt-3 border-t border-white/5">
              <p class="text-[10px] text-accent/70">Tamanho: 256 KB - 1 MB</p>
              <p class="text-[10px] text-accent/70">Por núcleo: Sim (dedicada)</p>
            </div>
          </div>
          <div class="p-5 bg-card border rounded-2xl border-accent/20 shadow-lg hover:border-accent/60 transition-colors">
            <h4 class="font-bold text-accent mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M21 15v2a4 4 0 0 1-4 4h-2"/></svg>
              L3 Cache
            </h4>
            <p class="text-[10px] text-muted-foreground mb-3">LATÊNCIA: ~10-40ns (40+ ciclos)</p>
            <p class="text-xs">Partilhada por todos os núcleos. É massiva (pode chegar a dezenas de MB) e serve como último recurso antes da lenta RAM.</p>
            <div class="mt-3 pt-3 border-t border-white/5">
              <p class="text-[10px] text-accent/70">Tamanho: 8-32 MB</p>
              <p class="text-[10px] text-accent/70">Por núcleo: Partilhada</p>
            </div>
          </div>
        </div>

        <!-- EXEMPLO REAL DE CPU -->
        <div class="bg-blue-500/5 p-5 rounded-xl border border-blue-500/20 my-4">
          <h4 class="flex items-center gap-2 text-blue-400 font-bold mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            Exemplo Real: Apple M1 / Intel i9
          </h4>
          <div class="grid md:grid-cols-4 gap-3 text-center text-xs">
            <div class="bg-black/40 p-3 rounded">
              <span class="text-green-400 font-bold">L1</span>
              <p class="text-gray-400">32+32 KB</p>
              <p class="text-[10px] text-gray-500">4-5 ciclos</p>
            </div>
            <div class="bg-black/40 p-3 rounded">
              <span class="text-blue-400 font-bold">L2</span>
              <p class="text-gray-400">256-512 KB</p>
              <p class="text-[10px] text-gray-500">12-15 ciclos</p>
            </div>
            <div class="bg-black/40 p-3 rounded">
              <span class="text-purple-400 font-bold">L3</span>
              <p class="text-gray-400">8-32 MB</p>
              <p class="text-[10px] text-gray-500">40+ ciclos</p>
            </div>
            <div class="bg-black/40 p-3 rounded">
              <span class="text-red-400 font-bold">RAM</span>
              <p class="text-gray-400">8-64 GB</p>
              <p class="text-[10px] text-gray-500">350+ ciclos</p>
            </div>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">2. Por que a Cache Funciona? (Princípios da Localidade)</h3>
        <p class="text-sm mb-4">O sucesso da cache baseia-se em dois princípios estatísticos do comportamento humano e de software. Sem estes princípios, a cache seria inútil:</p>
        
        <ul class="space-y-4">
          <li class="flex gap-4">
            <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div>
              <p class="font-bold text-primary">Localidade Temporal:</p>
              <p class="text-sm text-muted-foreground">Se acedeste a um dado agora, é muito provável que precises dele novamente em breve (ex: uma variável de controle dentro de um loop).</p>
              <p class="text-xs font-code text-primary/70 mt-1">Exemplo: for(i=0; i<1000; i++) → i é acedido 1000 vezes</p>
            </div>
          </li>
          <li class="flex gap-4">
            <div class="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="2"/><line x1="7" y1="8" x2="17" y2="8"/><line x1="7" y1="12" x2="17" y2="12"/><line x1="7" y1="16" x2="12" y2="16"/></svg>
            </div>
            <div>
              <p class="font-bold text-accent">Localidade Espacial:</p>
              <p class="text-sm text-muted-foreground">Se acedeste ao item A, é provável que precises do item B que está logo ao lado (ex: o próximo elemento de um array).</p>
              <p class="text-xs font-code text-accent/70 mt-1">Exemplo: sum += arr[i] → arr[0], arr[1], arr[2]...</p>
            </div>
          </li>
        </ul>

        <!-- ACERTO E FALHA -->
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            Hit vs Miss: A Batalha pela Performance
          </h3>
          <p class="text-sm mb-4">A eficiência de um engenheiro de sistemas mede-se pelo <strong>Cache Hit Rate</strong> (taxa de acerto):</p>
          
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-green-500/10 p-4 rounded-xl border border-green-500/20">
              <div class="flex items-center gap-2 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400"><polyline points="20 6 9 17 4 12"/></svg>
                <h4 class="font-bold text-green-400">Cache Hit (Acerto)</h4>
              </div>
              <p class="text-xs">O dado <strong>está na cache</strong>. A CPU continua em velocidade máxima sem parar. Uma CPU moderna atinge >95% de taxa de acerto L1!</p>
              <div class="bg-black/40 p-2 rounded mt-2 font-code text-[10px]">
                <p class="text-green-400">Tempo: ~1ns (L1)</p>
                <p class="text-green-400">CPU: Continua a trabalhar!</p>
              </div>
            </div>
            <div class="bg-red-500/10 p-4 rounded-xl border border-red-500/20">
              <div class="flex items-center gap-2 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-red-400"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
                <h4 class="font-bold text-red-400">Cache Miss (Falha)</h4>
              </div>
              <p class="text-xs">O dado <strong>não está na cache</strong>. A CPU entra em <strong>stall</strong> (pausa) e espera que a RAM entregue o dado. É o maior inimigo da performance.</p>
              <div class="bg-black/40 p-2 rounded mt-2 font-code text-[10px]">
                <p class="text-red-400">Tempo: ~100ns (RAM)</p>
                <p class="text-red-400">CPU: PARADA à espera!</p>
              </div>
            </div>
          </div>

          <div class="bg-black/40 p-4 rounded-lg mt-4">
            <h5 class="text-indigo-400 font-bold text-sm mb-2">Fórmula do Tempo Médio de Acesso:</h5>
            <div class="font-code text-xs text-center">
              <p>Tempo Médio = (Hit Rate × Tempo de Hit) + (Miss Rate × Tempo de Miss)</p>
              <div class="mt-2 bg-indigo-500/20 p-2 rounded">
                <p class="text-gray-400">Com 95% Hit Rate L1:</p>
                <p>= (0.95 × 1ns) + (0.05 × 100ns) = <span class="text-green-400 font-bold">5.95ns</span></p>
                <p class="text-[10px] text-gray-500">vs 100ns sem cache (16.8x mais lento!)</p>
              </div>
            </div>
          </div>
        </div>

        <!-- CACHE LINES -->
        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            Dica de Engenharia: Cache Lines (Linhas de Cache)
          </h4>
          <p class="text-sm leading-relaxed mb-4">
            A CPU nunca puxa apenas 1 byte da RAM. Ela puxa uma <strong>"Cache Line"</strong> inteira (geralmente 64 bytes). É por isso que arrays (dados contíguos) são muito mais rápidos que listas ligadas (dados espalhados na memória): eles aproveitam a Localidade Espacial da Cache.
          </p>
          
          <div class="bg-black/40 p-4 rounded-lg">
            <h5 class="text-green-400 font-bold text-sm mb-3">Visualização: Array vs Lista Ligada</h5>
            <div class="grid md:grid-cols-2 gap-4 text-xs">
              <div>
                <p class="text-yellow-400 font-bold mb-1">Array (Contíguo) ✅</p>
                <div class="flex gap-1 font-code text-[10px]">
                  <span class="bg-blue-500/30 px-2 py-1 rounded">A</span>
                  <span class="bg-blue-500/30 px-2 py-1 rounded">B</span>
                  <span class="bg-blue-500/30 px-2 py-1 rounded">C</span>
                  <span class="bg-blue-500/30 px-2 py-1 rounded">D</span>
                </div>
                <p class="text-gray-400 mt-1">1 Cache Line = 4 elementos!</p>
                <p class="text-green-400/70 text-[10px] mt-1">1 Miss → 3 Hits grátis</p>
              </div>
              <div>
                <p class="text-red-400 font-bold mb-1">Lista Ligada ❌</p>
                <div class="flex gap-1 font-code text-[10px] flex-wrap">
                  <span class="bg-red-500/30 px-2 py-1 rounded">A→</span>
                  <span class="text-gray-500">...</span>
                  <span class="bg-red-500/30 px-2 py-1 rounded">B→</span>
                  <span class="text-gray-500">...</span>
                  <span class="bg-red-500/30 px-2 py-1 rounded">C</span>
                </div>
                <p class="text-gray-400 mt-1">Cada nó = 1 Miss potencial</p>
                <p class="text-red-400/70 text-[10px] mt-1">4 acessos = 4 Misses!</p>
              </div>
            </div>
          </div>
        </div>

        <!-- ESTRATÉGIAS DE CACHE -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">3. Como a Cache Decide o que Manter? (Políticas de Substituição)</h3>
        
        <div class="grid md:grid-cols-2 gap-4 my-4">
          <div class="bg-yellow-500/10 p-4 rounded-xl border border-yellow-500/20">
            <h4 class="font-bold text-yellow-400 mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              LRU (Least Recently Used)
            </h4>
            <p class="text-xs">Remove o dado que não é usado há mais tempo. Baseia-se na <strong>Localidade Temporal</strong>. É a política mais comum e eficiente.</p>
            <p class="text-xs font-code text-yellow-400/70 mt-2">"Se não usaste recentemente, provavelmente não vais usar agora"</p>
          </div>
          <div class="bg-purple-500/10 p-4 rounded-xl border border-purple-500/20">
            <h4 class="font-bold text-purple-400 mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/></svg>
              LFU (Least Frequently Used)
            </h4>
            <p class="text-xs">Remove o dado que foi usado menos vezes no total. Útil quando certos dados são claramente mais populares.</p>
            <p class="text-xs font-code text-purple-400/70 mt-2">"Se quase nunca usas, não mereces ficar na cache"</p>
          </div>
        </div>

        <!-- FALSO COMPARTILHAMENTO -->
        <div class="bg-red-500/5 p-5 rounded-xl border border-red-500/20 mt-6">
          <h4 class="font-bold text-red-400 mb-3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            Armadilha da Engenharia: Falso Compartilhamento (False Sharing)
          </h4>
          <p class="text-xs mb-3">Quando dois núcleos acedem a variáveis diferentes mas que estão na <strong>mesma Cache Line</strong> (64 bytes), a cache line fica a "saltar" entre as caches L1 dos núcleos, destruindo a performance!</p>
          
          <div class="bg-black/40 p-3 rounded font-code text-xs">
            <p class="text-gray-400">// Núcleo 1 e Núcleo 2 acedem a variáveis vizinhas</p>
            <p><span class="text-blue-400">struct</span> {</p>
            <p class="ml-4"><span class="text-yellow-400">int</span> contador_nucleo1;  <span class="text-gray-500">// Offset 0</span></p>
            <p class="ml-4"><span class="text-yellow-400">int</span> contador_nucleo2;  <span class="text-gray-500">// Offset 4 (mesma cache line!)</span></p>
            <p>}</p>
            <p class="mt-2 text-red-400">// Solução: Padding para 64 bytes</p>
          </div>
        </div>

        <!-- DICAS PRÁTICAS -->
        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
            Checklist: Código Cache-Friendly (Amigo da Cache)
          </h4>
          <div class="space-y-3 text-sm">
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <div>
                <strong class="text-green-400">Prefira Arrays a Listas Ligadas</strong>
                <p class="text-xs text-gray-400">Dados contíguos aproveitam a localidade espacial e as cache lines de 64 bytes.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <div>
                <strong class="text-green-400">Percorra arrays em ordem (não salte)</strong>
                <p class="text-xs text-gray-400">for(i=0; i<N; i++) ✓ vs for(i=N-1; i>=0; i-=2) ✗</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <div>
                <strong class="text-green-400">Estruturas compactas (padding consciente)</strong>
                <p class="text-xs text-gray-400">Agrupe campos frequentemente acedidos juntos na mesma struct/classe.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <div>
                <strong class="text-green-400">Evite Falso Compartilhamento em multithreading</strong>
                <p class="text-xs text-gray-400">Use padding ou alinhamento a 64 bytes para variáveis partilhadas entre threads.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  quizId: "cs-t10-quiz"
};