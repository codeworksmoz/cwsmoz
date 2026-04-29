import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t4",
  title: "Arquitetura de Computadores: O Cérebro da Máquina",
  youtubeVideoId: "Z5JC9Ve1sfI",
  quizId: "cs-t4-quiz",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 font-headline">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
          O Modelo de Von Neumann
        </h2>
        <p class="text-lg leading-relaxed">
          Quase todos os computadores modernos baseiam-se na arquitetura proposta por <strong>John von Neumann</strong> em 1945. A grande inovação foi o conceito de <strong>Programa Armazenado</strong>: a ideia de que as instruções e os dados vivem no mesmo espaço de memória.
        </p>
        <div class="flex gap-4 mt-4 text-sm">
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            <span class="text-gray-400">1945 - Primeiro rascunho do EDVAC</span>
          </div>
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            <span class="text-gray-400">Base de +99% dos computadores atuais</span>
          </div>
        </div>
      </div>

      <div class="space-y-6">
        <!-- DIAGRAMA DA ARQUITETURA -->
        <div class="bg-gray-900 p-6 rounded-2xl border border-primary/20 shadow-inner">
          <h3 class="flex items-center gap-2 text-primary font-bold text-lg mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            Diagrama da Arquitetura Von Neumann
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div class="bg-blue-500/10 p-4 rounded-xl border border-blue-500/20">
              <div class="flex justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-blue-400"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <h4 class="font-bold text-blue-400">CPU</h4>
              <p class="text-xs text-gray-400 mt-1">Processamento central</p>
            </div>
            <div class="bg-green-500/10 p-4 rounded-xl border border-green-500/20">
              <div class="flex justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400"><rect x="2" y="6" width="20" height="12" rx="2"/></svg>
              </div>
              <h4 class="font-bold text-green-400">Memória RAM</h4>
              <p class="text-xs text-gray-400 mt-1">Dados + Instruções</p>
            </div>
            <div class="bg-purple-500/10 p-4 rounded-xl border border-purple-500/20">
              <div class="flex justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-purple-400"><rect x="2" y="2" width="20" height="20" rx="2"/><line x1="7" y1="12" x2="17" y2="12"/><line x1="12" y1="7" x2="12" y2="17"/></svg>
              </div>
              <h4 class="font-bold text-purple-400">Dispositivos I/O</h4>
              <p class="text-xs text-gray-400 mt-1">Entrada e Saída</p>
            </div>
          </div>
          <div class="flex justify-center gap-4 mt-4">
            <div class="flex items-center gap-2 text-xs">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              <span class="text-yellow-400">Barramento de Dados</span>
            </div>
            <div class="flex items-center gap-2 text-xs">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
              <span class="text-cyan-400">Barramento de Controle</span>
            </div>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. A Unidade Central de Processamento (CPU)</h3>
        <p>A CPU é o "cérebro". Ela executa instruções matemáticas e lógicas a uma velocidade alucinante. Divide-se em três partes críticas:</p>
        
        <div class="grid md:grid-cols-3 gap-4">
          <div class="bg-card p-5 rounded-xl border border-primary/20 hover:border-primary/50 transition-colors">
            <h4 class="font-bold text-primary mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              ALU (ULA)
            </h4>
            <p class="text-xs text-muted-foreground">Unidade Lógica e Aritmética. É a calculadora real. Faz somas e comparações lógicas (AND, OR).</p>
            <div class="mt-3 text-xs font-code text-primary/70">
              <p>Operações: +, -, ×, ÷, AND, OR, XOR</p>
            </div>
          </div>
          <div class="bg-card p-5 rounded-xl border border-accent/20 hover:border-accent/50 transition-colors">
            <h4 class="font-bold text-accent mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
              UC (Unidade de Controle)
            </h4>
            <p class="text-xs text-muted-foreground">O maestro da orquestra. Ela interpreta a instrução e diz aos outros componentes o que fazer.</p>
            <div class="mt-3 text-xs font-code text-accent/70">
              <p>Função: Decodificar e coordenar</p>
            </div>
          </div>
          <div class="bg-card p-5 rounded-xl border border-yellow-500/20 hover:border-yellow-500/50 transition-colors">
            <h4 class="font-bold text-yellow-500 mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="2"/></svg>
              Registradores
            </h4>
            <p class="text-xs text-muted-foreground">Memórias ultra-rápidas dentro da CPU que guardam os dados exatos processados AGORA.</p>
            <div class="mt-3 text-xs font-code text-yellow-400/70">
              <p>Velocidade: ~0.3 nanosegundos</p>
            </div>
          </div>
        </div>

        <!-- REGISTRADORES ESPECIAIS -->
        <div class="bg-yellow-500/5 p-5 rounded-xl border border-yellow-500/20">
          <h4 class="flex items-center gap-2 text-yellow-400 font-bold mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            Registradores Essenciais da CPU
          </h4>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
            <div class="bg-black/40 p-3 rounded">
              <span class="text-primary font-bold font-code">PC</span>
              <p class="text-xs text-gray-400 mt-1">Program Counter - Aponta para a próxima instrução</p>
            </div>
            <div class="bg-black/40 p-3 rounded">
              <span class="text-primary font-bold font-code">IR</span>
              <p class="text-xs text-gray-400 mt-1">Instruction Register - Guarda a instrução atual</p>
            </div>
            <div class="bg-black/40 p-3 rounded">
              <span class="text-primary font-bold font-code">ACC</span>
              <p class="text-xs text-gray-400 mt-1">Accumulator - Resultados de operações da ALU</p>
            </div>
            <div class="bg-black/40 p-3 rounded">
              <span class="text-primary font-bold font-code">MAR/MDR</span>
              <p class="text-xs text-gray-400 mt-1">Memory Address/Data - Interface com a RAM</p>
            </div>
          </div>
        </div>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            O Ciclo de Instrução (Fetch-Decode-Execute)
          </h3>
          <p class="text-sm mb-4">Tudo o que o teu computador faz resume-se a este loop infinito:</p>
          
          <div class="space-y-4">
            <div class="bg-black/40 p-4 rounded-lg border border-indigo-500/10">
              <div class="flex items-start gap-3">
                <div class="bg-indigo-500/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <span class="font-bold text-indigo-400 text-sm">1</span>
                </div>
                <div>
                  <h4 class="font-bold text-indigo-400 text-sm">FETCH (Busca)</h4>
                  <p class="text-xs text-gray-300 mt-1">A CPU busca a próxima instrução na RAM, usando o endereço armazenado no <strong>PC</strong> (Program Counter).</p>
                  <p class="text-xs font-code text-gray-400 mt-1">PC → MAR → RAM → MDR → IR</p>
                </div>
              </div>
            </div>

            <div class="bg-black/40 p-4 rounded-lg border border-indigo-500/10">
              <div class="flex items-start gap-3">
                <div class="bg-indigo-500/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <span class="font-bold text-indigo-400 text-sm">2</span>
                </div>
                <div>
                  <h4 class="font-bold text-indigo-400 text-sm">DECODE (Decodificação)</h4>
                  <p class="text-xs text-gray-300 mt-1">A <strong>UC</strong> (Unidade de Controle) analisa a instrução para entender a ordem e ativa os circuitos necessários.</p>
                  <p class="text-xs font-code text-gray-400 mt-1">IR → UC → Sinais de controle</p>
                </div>
              </div>
            </div>

            <div class="bg-black/40 p-4 rounded-lg border border-indigo-500/10">
              <div class="flex items-start gap-3">
                <div class="bg-indigo-500/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <span class="font-bold text-indigo-400 text-sm">3</span>
                </div>
                <div>
                  <h4 class="font-bold text-indigo-400 text-sm">EXECUTE (Execução)</h4>
                  <p class="text-xs text-gray-300 mt-1">A <strong>ALU</strong> realiza o cálculo necessário e armazena o resultado no registrador <strong>ACC</strong>.</p>
                  <p class="text-xs font-code text-gray-400 mt-1">ALU → ACC → Memória (se necessário)</p>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-4 text-center">
            <div class="inline-flex items-center gap-2 bg-indigo-500/20 px-4 py-2 rounded-full text-xs">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 1 1-9-9"/><polyline points="21 3 21 9 15 9"/></svg>
              <span>Loop infinito: PC incrementa → volta ao FETCH</span>
            </div>
          </div>
        </div>

        <!-- MEMÓRIA RAM -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">2. A Memória RAM (Random Access Memory)</h3>
        
        <div class="bg-green-500/5 p-5 rounded-xl border border-green-500/20 my-4">
          <h4 class="flex items-center gap-2 text-green-400 font-bold mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="2"/></svg>
            Características da RAM
          </h4>
          <ul class="space-y-2 text-sm">
            <li class="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <span><strong>Volátil:</strong> Perde todos os dados quando o computador desliga</span>
            </li>
            <li class="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <span><strong>Acesso Aleatório:</strong> Qualquer posição pode ser acessada diretamente (mesmo tempo)</span>
            </li>
            <li class="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <span><strong>Endereçável:</strong> Cada byte tem um endereço único (como casas numa rua)</span>
            </li>
          </ul>
        </div>

        <div class="grid md:grid-cols-2 gap-4 my-4">
          <div class="bg-blue-500/10 p-4 rounded-xl border border-blue-500/20">
            <h4 class="flex items-center gap-2 text-blue-400 font-bold mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              Cache L1, L2, L3
            </h4>
            <p class="text-xs">Memórias ultra-rápidas dentro/fora da CPU que armazenam dados frequentemente usados.</p>
            <div class="mt-2 text-xs font-code space-y-1">
              <p class="text-yellow-400">L1: ~32KB (dentro do núcleo)</p>
              <p class="text-yellow-400">L2: ~256KB-1MB</p>
              <p class="text-yellow-400">L3: ~8MB-32MB (compartilhada)</p>
            </div>
          </div>
          <div class="bg-purple-500/10 p-4 rounded-xl border border-purple-500/20">
            <h4 class="flex items-center gap-2 text-purple-400 font-bold mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              Hierarquia de Memória
            </h4>
            <div class="text-xs space-y-1 font-code">
              <p>Registradores → <span class="text-green-400">Mais rápido (0.3ns)</span></p>
              <p>Cache → <span class="text-blue-400">Muito rápido (1-10ns)</span></p>
              <p>RAM → <span class="text-yellow-400">Rápido (50-100ns)</span></p>
              <p>SSD/HD → <span class="text-red-400">Lento (0.1-10ms)</span></p>
            </div>
          </div>
        </div>

        <!-- BARRAMENTOS -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">3. Os Barramentos (BUS)</h3>
        <p class="text-sm">São os "cabos" que conectam todos os componentes e permitem a comunicação entre eles:</p>
        
        <div class="grid md:grid-cols-3 gap-4 my-4">
          <div class="bg-yellow-500/10 p-4 rounded-xl border border-yellow-500/20">
            <h4 class="flex items-center gap-2 text-yellow-400 font-bold mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              Barramento de Dados
            </h4>
            <p class="text-xs">Transporta os dados entre CPU, memória e dispositivos. <strong>Bidirecional</strong>.</p>
            <p class="text-xs font-code mt-2 text-yellow-400/70">Largura: 8, 16, 32, 64 bits</p>
          </div>
          <div class="bg-cyan-500/10 p-4 rounded-xl border border-cyan-500/20">
            <h4 class="flex items-center gap-2 text-cyan-400 font-bold mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/></svg>
              Barramento de Endereços
            </h4>
            <p class="text-xs">Indica <strong>onde</strong> ler/escrever na memória. <strong>Unidirecional</strong> (CPU → RAM).</p>
            <p class="text-xs font-code mt-2 text-cyan-400/70">Define o máximo de RAM possível</p>
          </div>
          <div class="bg-pink-500/10 p-4 rounded-xl border border-pink-500/20">
            <h4 class="flex items-center gap-2 text-pink-400 font-bold mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
              Barramento de Controle
            </h4>
            <p class="text-xs">Coordena as operações (leitura/escrita) e sincroniza os componentes.</p>
            <p class="text-xs font-code mt-2 text-pink-400/70">Clock, R/W, Interrupções</p>
          </div>
        </div>

        <!-- RELÓGIO DO SISTEMA -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">4. O Clock (Relógio do Sistema)</h3>
        
        <div class="bg-gray-900 p-5 rounded-xl border border-primary/20 my-4">
          <div class="flex items-start gap-4">
            <div class="text-4xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div>
              <p class="text-sm">O clock é um sinal elétrico que <strong>sincroniza todas as operações</strong> da CPU. Cada pulso de clock permite que a CPU execute uma etapa do ciclo de instrução.</p>
              <div class="mt-3 bg-black/40 p-3 rounded font-code text-sm">
                <span class="text-gray-400">Frequência típica:</span>
                <span class="text-primary ml-2">3.5 GHz</span>
                <span class="text-gray-500 ml-1">= 3.5 bilhões de ciclos por segundo</span>
              </div>
              <p class="text-xs text-gray-400 mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="inline mr-1"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                Overclock: Aumentar a frequência além do especificado (com riscos de temperatura)
              </p>
            </div>
          </div>
        </div>

        <!-- ARQUITETURA HARVARD (ALTERNATIVA) -->
        <div class="bg-orange-500/5 p-5 rounded-xl border border-orange-500/20 mt-6">
          <h4 class="flex items-center gap-2 text-orange-400 font-bold mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            Arquitetura Harvard (Alternativa a Von Neumann)
          </h4>
          <p class="text-xs">Diferente de Von Neumann, a arquitetura <strong>Harvard</strong> usa memórias e barramentos separados para dados e instruções, permitindo acesso simultâneo (mais rápido, porém mais caro).</p>
          <div class="grid grid-cols-2 gap-3 mt-3 text-xs">
            <div class="bg-black/40 p-3 rounded">
              <span class="text-green-400 font-bold">Von Neumann</span>
              <p class="text-gray-400 mt-1">Memória unificada (dados + instruções)</p>
              <p class="text-gray-500">Mais simples, mais barato</p>
            </div>
            <div class="bg-black/40 p-3 rounded">
              <span class="text-blue-400 font-bold">Harvard</span>
              <p class="text-gray-400 mt-1">Memórias separadas (dados ≠ instruções)</p>
              <p class="text-gray-500">Mais rápido, usado em DSPs e µC</p>
            </div>
          </div>
        </div>

        <!-- APLICAÇÃO PRÁTICA -->
        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 shadow-lg mt-8">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            Por que isso importa para o programador?
          </h4>
          <div class="space-y-3 mt-3 text-sm">
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <p>Entender <strong>cache</strong> ajuda a escrever código com melhor localidade de dados (ex: percorrer arrays em ordem)</p>
            </div>
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <p>Saber o <strong>ciclo de instrução</strong> explica porque algumas operações são mais lentas (ex: divisão é mais lenta que soma)</p>
            </div>
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <p>Compreender <strong>barramentos</strong> mostra porque a largura de banda da memória afeta o desempenho (gargalo de Von Neumann)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
};