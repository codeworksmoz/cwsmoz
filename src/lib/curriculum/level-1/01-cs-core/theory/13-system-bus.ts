import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t13",
  title: "Barramento do Sistema: As Autoestradas de Dados",
  youtubeVideoId: "E18Qv2bTkRU",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          O Sistema de Transporte de Bits
        </h2>
        <p class="text-lg leading-relaxed">
          De nada serve ter um processador ultra-rápido se a informação não consegue chegar a ele a tempo. O <strong>Barramento do Sistema (System Bus)</strong> é o conjunto de linhas elétricas paralelas que transportam dados, endereços e sinais de controlo entre a CPU, a RAM e os dispositivos de I/O.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. O Trio Fundamental de Vias</h3>
        <p>A arquitetura de Von Neumann utiliza três barramentos especializados que trabalham em sintonia:</p>
        
        <div class="grid md:grid-cols-3 gap-4">
          <!-- BARRA DE ENDEREÇOS -->
          <div class="p-5 bg-card border rounded-2xl border-primary/20 shadow-xl hover:border-primary/50 transition-all">
            <h4 class="font-bold text-primary mb-3 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              Endereço (Address Bus)
            </h4>
            <p class="text-xs text-muted-foreground leading-relaxed">Indica a localização física na RAM. É <strong>unidirecional</strong> (apenas a CPU envia). A sua largura determina quanta memória o sistema pode gerir.</p>
            <div class="mt-3 pt-3 border-t border-white/5">
              <p class="text-[10px] text-primary/70"><strong>32 bits:</strong> Até 4 GB de RAM (2³²)</p>
              <p class="text-[10px] text-primary/70"><strong>64 bits:</strong> Até 16 EB de RAM (2⁶⁴)</p>
            </div>
          </div>

          <!-- BARRA DE DADOS -->
          <div class="p-5 bg-card border rounded-2xl border-accent/20 shadow-xl hover:border-accent/50 transition-all">
            <h4 class="font-bold text-accent mb-3 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
              Dados (Data Bus)
            </h4>
            <p class="text-xs text-muted-foreground leading-relaxed">Transporta a informação real (instruções, números, pixels). É <strong>bidirecional</strong>. Quanto mais largo, mais dados viajam por ciclo de clock.</p>
            <div class="mt-3 pt-3 border-t border-white/5">
              <p class="text-[10px] text-accent/70"><strong>8 bits:</strong> 1 byte por ciclo</p>
              <p class="text-[10px] text-accent/70"><strong>64 bits:</strong> 8 bytes por ciclo</p>
            </div>
          </div>

          <!-- BARRA DE CONTROLE -->
          <div class="p-5 bg-card border rounded-2xl border-green-500/20 shadow-xl hover:border-green-500/50 transition-all">
            <h4 class="font-bold text-green-400 mb-3 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
              Controlo (Control Bus)
            </h4>
            <p class="text-xs text-muted-foreground leading-relaxed">Transporta ordens e sinais de estado (ex: "Agora é para ler!", "Memória pronta!", "Erro de hardware!"). Garante a <strong>sincronização</strong>.</p>
            <div class="mt-3 pt-3 border-t border-white/5">
              <p class="text-[10px] text-green-400/70"><strong>R/W:</strong> Leitura/Escrita</p>
              <p class="text-[10px] text-green-400/70"><strong>IRQ:</strong> Interrupções</p>
            </div>
          </div>
        </div>

        <!-- DIAGRAMA DE INTERCONEXÃO -->
        <div class="bg-gray-900 p-6 rounded-2xl border border-primary/20 shadow-inner my-6">
          <h3 class="flex items-center gap-2 text-primary font-bold text-lg mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            Diagrama de Interconexão via Barramento
          </h3>
          <div class="flex flex-col items-center gap-4">
            <div class="grid grid-cols-3 gap-8 w-full max-w-lg">
              <div class="bg-blue-500/10 p-4 rounded-xl border border-blue-500/20 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mx-auto mb-2 text-blue-400"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                <span class="text-xs font-bold text-blue-400">CPU</span>
              </div>
              <div class="bg-green-500/10 p-4 rounded-xl border border-green-500/20 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mx-auto mb-2 text-green-400"><rect x="2" y="6" width="20" height="12" rx="2"/></svg>
                <span class="text-xs font-bold text-green-400">RAM</span>
              </div>
              <div class="bg-purple-500/10 p-4 rounded-xl border border-purple-500/20 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mx-auto mb-2 text-purple-400"><rect x="2" y="2" width="20" height="20" rx="2"/><line x1="7" y1="12" x2="17" y2="12"/><line x1="12" y1="7" x2="12" y2="17"/></svg>
                <span class="text-xs font-bold text-purple-400">I/O</span>
              </div>
            </div>
            <div class="w-full max-w-lg bg-yellow-500/10 px-4 py-3 rounded-lg border border-yellow-500/20 text-center">
              <p class="text-xs font-bold text-yellow-400 flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                Barramento do Sistema (Address + Data + Control)
              </p>
            </div>
            <p class="text-[10px] text-gray-400 text-center">
              Todos os componentes partilham o mesmo barramento físico
            </p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline">2. Largura de Banda e Frequência</h3>
        <p class="text-sm mb-4">A capacidade de um barramento é medida pela sua <strong>Bandwidth</strong> (Largura de Banda). Ela depende de dois fatores:</p>
        
        <div class="grid md:grid-cols-2 gap-4 mb-4">
          <div class="bg-blue-500/10 p-4 rounded-xl border border-blue-500/20">
            <h4 class="flex items-center gap-2 text-blue-400 font-bold mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
              Largura (Width)
            </h4>
            <p class="text-xs">O número de linhas paralelas. Ex: 64 bits transportam 8 bytes de uma vez (como 8 faixas numa autoestrada).</p>
            <div class="bg-black/40 p-2 rounded mt-2 font-code text-[10px]">
              <span class="text-blue-400">64 bits</span> = 8 bytes por transferência
            </div>
          </div>
          <div class="bg-yellow-500/10 p-4 rounded-xl border border-yellow-500/20">
            <h4 class="flex items-center gap-2 text-yellow-400 font-bold mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              Frequência (Clock)
            </h4>
            <p class="text-xs">Quantas vezes por segundo o barramento consegue "pulsar" novos dados. Medida em MHz ou GHz.</p>
            <div class="bg-black/40 p-2 rounded mt-2 font-code text-[10px]">
              <span class="text-yellow-400">100 MHz</span> = 100 milhões de transferências/s
            </div>
          </div>
        </div>

        <!-- FÓRMULA DA BANDWIDTH -->
        <div class="bg-gray-900 p-5 rounded-xl border border-primary/20 my-4">
          <h4 class="text-primary font-bold text-sm mb-3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            Fórmula da Largura de Banda
          </h4>
          <div class="bg-black/40 p-4 rounded-lg text-center font-code">
            <p class="text-lg font-bold text-primary mb-2">
              Bandwidth = Largura × Frequência
            </p>
            <div class="text-xs text-gray-400 space-y-1 mt-3">
              <p><strong class="text-blue-400">Exemplo 1:</strong> Barramento 64 bits @ 100 MHz</p>
              <p>= 64 bits × 100.000.000 Hz = 6.400.000.000 bps</p>
              <p class="text-green-400 font-bold">= 800 MB/s (Megabytes por segundo)</p>
              <div class="border-t border-gray-700 mt-2 pt-2">
                <p><strong class="text-blue-400">Exemplo 2:</strong> PCIe 4.0 x16</p>
                <p class="text-green-400 font-bold">≈ 32 GB/s (Gigabytes por segundo)</p>
              </div>
            </div>
          </div>
        </div>

        <!-- SINAIS DE CONTROLE -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">3. Sinais de Controlo Essenciais</h3>
        
        <div class="grid md:grid-cols-4 gap-3 my-4">
          <div class="bg-purple-500/10 p-3 rounded-xl border border-purple-500/20 text-center">
            <h4 class="text-purple-400 font-bold text-xs">R/W</h4>
            <p class="text-[10px] text-gray-400 mt-1">Read/Write: Define direção da operação</p>
          </div>
          <div class="bg-cyan-500/10 p-3 rounded-xl border border-cyan-500/20 text-center">
            <h4 class="text-cyan-400 font-bold text-xs">CLK</h4>
            <p class="text-[10px] text-gray-400 mt-1">Clock: Sincroniza todos os componentes</p>
          </div>
          <div class="bg-pink-500/10 p-3 rounded-xl border border-pink-500/20 text-center">
            <h4 class="text-pink-400 font-bold text-xs">IRQ</h4>
            <p class="text-[10px] text-gray-400 mt-1">Interrupt Request: Dispositivo precisa de atenção</p>
          </div>
          <div class="bg-orange-500/10 p-3 rounded-xl border border-orange-500/20 text-center">
            <h4 class="text-orange-400 font-bold text-xs">RESET</h4>
            <p class="text-[10px] text-gray-400 mt-1">Reinicia o sistema para estado inicial</p>
          </div>
        </div>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
            O Gargalo de Von Neumann
          </h3>
          <p class="text-sm leading-relaxed">
            Como os dados e as instruções viajam pelo mesmo barramento, a velocidade de execução da CPU é muitas vezes limitada pela velocidade do barramento. É como ter um motor de Fórmula 1 (CPU) mas as estradas para o combustível (Barramento) estarem sempre engarrafadas.
          </p>
          
          <div class="bg-black/40 p-4 rounded-lg mt-4">
            <h5 class="text-indigo-400 font-bold text-sm mb-2">Solução: Arquitetura Harvard</h5>
            <p class="text-xs text-gray-400">Usa barramentos <strong>separados</strong> para instruções e dados, permitindo acesso simultâneo. Comum em DSPs e microcontroladores.</p>
          </div>
        </div>

        <!-- BARRAMENTOS MODERNOS -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">4. Barramentos Modernos (Além do Sistema)</h3>
        
        <div class="space-y-4 my-4">
          <div class="bg-blue-500/10 p-4 rounded-xl border border-blue-500/20">
            <h4 class="flex items-center gap-2 text-blue-400 font-bold mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              PCI Express (PCIe)
            </h4>
            <p class="text-xs">Substituiu o antigo PCI. É serial (não paralelo!), ponto-a-ponto, com múltiplas "lanes". Usado para GPUs, SSDs NVMe.</p>
            <div class="flex gap-2 mt-2 text-[10px]">
              <span class="bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">PCIe 3.0: 1 GB/s por lane</span>
              <span class="bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">PCIe 5.0: 4 GB/s por lane</span>
            </div>
          </div>
          
          <div class="bg-green-500/10 p-4 rounded-xl border border-green-500/20">
            <h4 class="flex items-center gap-2 text-green-400 font-bold mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              USB (Universal Serial Bus)
            </h4>
            <p class="text-xs">Barramento externo mais popular. Hot-swappable, alimentação + dados. Usado para periféricos, armazenamento externo.</p>
            <div class="flex gap-2 mt-2 text-[10px]">
              <span class="bg-green-500/20 text-green-300 px-2 py-0.5 rounded">USB 3.2: 20 Gbps</span>
              <span class="bg-green-500/20 text-green-300 px-2 py-0.5 rounded">USB4: 40 Gbps</span>
            </div>
          </div>

          <div class="bg-yellow-500/10 p-4 rounded-xl border border-yellow-500/20">
            <h4 class="flex items-center gap-2 text-yellow-400 font-bold mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              SATA / SAS
            </h4>
            <p class="text-xs">Específico para armazenamento (HDDs, SSDs SATA). Mais lento que PCIe, mas ainda comum para discos de alta capacidade.</p>
            <div class="flex gap-2 mt-2 text-[10px]">
              <span class="bg-yellow-500/20 text-yellow-300 px-2 py-0.5 rounded">SATA III: 6 Gbps</span>
              <span class="bg-yellow-500/20 text-yellow-300 px-2 py-0.5 rounded">SAS: 12 Gbps</span>
            </div>
          </div>
        </div>

        <!-- CHIPSETS -->
        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20">
          <h4 class="font-bold text-green-500 mb-3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            Curiosidade de Engenharia: Chipsets e Hierarquia de Barramentos
          </h4>
          <p class="text-sm mb-4">Nas motherboards modernas, os barramentos são geridos por "pontes" especializadas que criam uma hierarquia de velocidades:</p>
          
          <div class="grid md:grid-cols-2 gap-4 text-xs">
            <div class="bg-black/40 p-4 rounded-lg">
              <h5 class="text-blue-400 font-bold mb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
                Northbridge (Ponte Norte)
              </h5>
              <ul class="space-y-1 text-gray-400">
                <li>• Alta velocidade (CPU ↔ RAM ↔ GPU)</li>
                <li>• Front-Side Bus (FSB)</li>
                <li>• Memória RAM, PCIe x16 (GPU)</li>
                <li>• <span class="text-yellow-400">Nota:</span> CPUs modernas integram esta função</li>
              </ul>
            </div>
            <div class="bg-black/40 p-4 rounded-lg">
              <h5 class="text-purple-400 font-bold mb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
                Southbridge (Ponte Sul)
              </h5>
              <ul class="space-y-1 text-gray-400">
                <li>• Baixa velocidade (I/O periférico)</li>
                <li>• USB, SATA, Áudio, Rede, BIOS</li>
                <li>• PCIe x1, x4 (placas menores)</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- DICA PRÁTICA -->
        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
            Por que isso importa para o programador?
          </h4>
          <div class="space-y-3 text-sm">
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <div>
                <strong class="text-green-400">DMA (Direct Memory Access):</strong>
                <p class="text-xs text-gray-400">Dispositivos podem transferir dados diretamente para a RAM sem envolver a CPU, libertando-a para outras tarefas.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <div>
                <strong class="text-green-400">Memory-Mapped I/O:</strong>
                <p class="text-xs text-gray-400">Dispositivos são acedidos como se fossem posições de memória normais, simplificando o código de drivers.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <div>
                <strong class="text-green-400">Barramentos partilhados:</strong>
                <p class="text-xs text-gray-400">Entender o gargalo explica porque aceder ao disco enquanto fazes computação pesada pode degradar a performance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  quizId: "cs-t13-quiz"
};