import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t14",
  title: "Fundamentos de Kernel de SO",
  youtubeVideoId: "E18Qv2bTkRU",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
          O Coração do Sistema Operativo
        </h2>
        <p class="text-lg leading-relaxed">
          O <strong>Kernel</strong> é o núcleo central de qualquer sistema operativo. É a primeira camada de software carregada na memória e a única com acesso direto e total ao hardware. Toda a comunicação entre os teus programas e o processador, memória ou disco passa obrigatoriamente por ele.
        </p>
        <p class="text-sm text-gray-400 mt-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="inline mr-1"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          A ponte crítica entre o utilizador e o silício: gestão de privilégios e recursos.
        </p>
      </div>

      <div class="space-y-6">
        <!-- O QUE É O KERNEL -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. O Que é o Kernel?</h3>
        
        <div class="bg-gray-900 p-6 rounded-2xl border border-primary/20 shadow-inner">
          <h4 class="text-primary font-bold text-lg mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
            Camadas do Sistema Operativo
          </h4>
          <div class="space-y-3">
            <div class="bg-blue-500/10 p-3 rounded-lg border border-blue-500/20">
              <div class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-blue-400"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                <span class="text-blue-400 font-bold text-sm">Aplicações (User Space)</span>
              </div>
              <p class="text-xs text-gray-400 mt-1">Chrome, VS Code, Jogos - Executam em modo utilizador (Ring 3)</p>
            </div>
            <div class="bg-yellow-500/10 p-3 rounded-lg border border-yellow-500/20">
              <div class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-yellow-400"><rect x="2" y="2" width="20" height="20" rx="2"/><line x1="7" y1="8" x2="17" y2="8"/><line x1="7" y1="12" x2="17" y2="12"/><line x1="7" y1="16" x2="12" y2="16"/></svg>
                <span class="text-yellow-400 font-bold text-sm">API do Sistema (syscalls)</span>
              </div>
              <p class="text-xs text-gray-400 mt-1">Interface de comunicação: open(), read(), write(), fork()</p>
            </div>
            <div class="bg-red-500/10 p-3 rounded-lg border border-red-500/20">
              <div class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-red-400"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                <span class="text-red-400 font-bold text-sm">KERNEL (Kernel Space - Ring 0)</span>
              </div>
              <p class="text-xs text-gray-400 mt-1">Acesso total ao hardware. Executa em modo privilegiado.</p>
            </div>
            <div class="bg-green-500/10 p-3 rounded-lg border border-green-500/20">
              <div class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                <span class="text-green-400 font-bold text-sm">Hardware</span>
              </div>
              <p class="text-xs text-gray-400 mt-1">CPU, RAM, Discos, Placas de Rede, GPU</p>
            </div>
          </div>
        </div>

        <!-- RESPONSABILIDADES DO KERNEL -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">2. As 4 Responsabilidades Fundamentais</h3>
        <p class="mb-4">O kernel não faz apenas uma coisa — ele é um gestor multitarefa com responsabilidades críticas:</p>
        
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-card p-5 rounded-xl border border-primary/20 hover:border-primary/50 transition-all">
            <h4 class="font-bold text-primary mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="2"/></svg>
              Gestão de Memória
            </h4>
            <ul class="text-xs space-y-1 text-muted-foreground">
              <li class="flex items-start gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Aloca e liberta RAM para processos</span>
              </li>
              <li class="flex items-start gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Memória virtual (swap/paging)</span>
              </li>
              <li class="flex items-start gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Proteção entre processos (isolamento)</span>
              </li>
            </ul>
          </div>
          <div class="bg-card p-5 rounded-xl border border-accent/20 hover:border-accent/50 transition-all">
            <h4 class="font-bold text-accent mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              Gestão de Processos
            </h4>
            <ul class="text-xs space-y-1 text-muted-foreground">
              <li class="flex items-start gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-accent mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Cria, pausa e termina processos</span>
              </li>
              <li class="flex items-start gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-accent mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Scheduler: decide quem usa a CPU</span>
              </li>
              <li class="flex items-start gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-accent mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Multitasking (preemptivo/cooperativo)</span>
              </li>
            </ul>
          </div>
          <div class="bg-card p-5 rounded-xl border border-green-500/20 hover:border-green-500/50 transition-all">
            <h4 class="font-bold text-green-400 mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="2"/><line x1="7" y1="12" x2="17" y2="12"/><line x1="12" y1="7" x2="12" y2="17"/></svg>
              Gestão de I/O
            </h4>
            <ul class="text-xs space-y-1 text-muted-foreground">
              <li class="flex items-start gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Drivers para hardware específico</span>
              </li>
              <li class="flex items-start gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Sistema de ficheiros (FAT32, ext4, NTFS)</span>
              </li>
              <li class="flex items-start gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Comunicação com periféricos</span>
              </li>
            </ul>
          </div>
          <div class="bg-card p-5 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all">
            <h4 class="font-bold text-purple-400 mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Segurança e Privilégios
            </h4>
            <ul class="text-xs space-y-1 text-muted-foreground">
              <li class="flex items-start gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-purple-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Modo Kernel (Ring 0) vs Utilizador (Ring 3)</span>
              </li>
              <li class="flex items-start gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-purple-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Controlo de acesso e permissões</span>
              </li>
              <li class="flex items-start gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-purple-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Isolamento de processos (crash de um não afeta outros)</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- SYSCALLS E MUDANÇA DE MODO -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">3. System Calls: Como os Programas Falam com o Kernel</h3>
        
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h4 class="text-indigo-400 font-bold text-lg mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/></svg>
            Transição User Space → Kernel Space
          </h4>
          <p class="text-sm mb-4">Um programa normal não pode aceder diretamente ao disco ou à rede. Ele precisa pedir ao kernel através de <strong>System Calls (syscalls)</strong>.</p>
          
          <div class="bg-black/40 p-4 rounded-lg mb-4">
            <h5 class="text-yellow-400 font-bold text-sm mb-2">Exemplo: Ler um ficheiro em C</h5>
            <div class="font-code text-xs space-y-1">
              <p class="text-gray-400">// Código do utilizador</p>
              <p><span class="text-blue-400">int</span> fd = <span class="text-yellow-400">open</span>(<span class="text-green-400">"dados.txt"</span>, O_RDONLY);</p>
              <p><span class="text-blue-400">char</span> buffer[1024];</p>
              <p><span class="text-yellow-400">read</span>(fd, buffer, 1024);  <span class="text-gray-500">// Syscall!</span></p>
              <p><span class="text-yellow-400">close</span>(fd);</p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-4 text-xs">
            <div class="bg-indigo-500/5 p-3 rounded-lg border border-indigo-500/10">
              <h5 class="text-indigo-400 font-bold mb-1">Syscalls Comuns (POSIX):</h5>
              <ul class="space-y-1 font-code text-gray-400">
                <li>• <span class="text-yellow-400">open()</span> - Abrir ficheiro</li>
                <li>• <span class="text-yellow-400">read()</span> - Ler dados</li>
                <li>• <span class="text-yellow-400">write()</span> - Escrever dados</li>
                <li>• <span class="text-yellow-400">fork()</span> - Criar processo</li>
                <li>• <span class="text-yellow-400">mmap()</span> - Mapear memória</li>
              </ul>
            </div>
            <div class="bg-indigo-500/5 p-3 rounded-lg border border-indigo-500/10">
              <h5 class="text-indigo-400 font-bold mb-1">Custo da Syscall:</h5>
              <ul class="space-y-1 text-gray-400">
                <li>• Mudança de Ring 3 → Ring 0</li>
                <li>• Salvar contexto do processo</li>
                <li>• Executar syscall no kernel</li>
                <li>• Restaurar contexto</li>
                <li>• Retornar ao Ring 3</li>
              </ul>
              <p class="text-yellow-400/70 mt-2 text-[10px]">Syscalls são caras! Bibliotecas fazem buffering para minimizá-las.</p>
            </div>
          </div>
        </div>

        <!-- TIPOS DE KERNEL -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">4. Arquiteturas de Kernel</h3>
        
        <div class="grid md:grid-cols-3 gap-4 my-4">
          <div class="bg-card p-5 rounded-xl border border-primary/20">
            <h4 class="font-bold text-primary text-sm mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              Monolítico
            </h4>
            <p class="text-xs text-muted-foreground">Todo o kernel corre num único espaço de memória privilegiado. Muito rápido, mas um bug num driver pode crashar tudo.</p>
            <div class="mt-3 pt-3 border-t border-white/5">
              <p class="text-[10px] text-primary/70"><strong>Exemplos:</strong> Linux, Unix, BSD</p>
              <p class="text-[10px] text-green-400/70 mt-1">✓ Performance | ✗ Estabilidade</p>
            </div>
          </div>
          <div class="bg-card p-5 rounded-xl border border-accent/20">
            <h4 class="font-bold text-accent text-sm mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
              Microkernel
            </h4>
            <p class="text-xs text-muted-foreground">Apenas o essencial corre em modo kernel (IPC, scheduler). Serviços como drivers e FS correm em user space. Mais estável, mais lento.</p>
            <div class="mt-3 pt-3 border-t border-white/5">
              <p class="text-[10px] text-accent/70"><strong>Exemplos:</strong> MINIX, QNX, L4</p>
              <p class="text-[10px] text-green-400/70 mt-1">✓ Estabilidade | ✗ Performance</p>
            </div>
          </div>
          <div class="bg-card p-5 rounded-xl border border-green-500/20">
            <h4 class="font-bold text-green-400 text-sm mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M21 15v2a4 4 0 0 1-4 4h-2"/></svg>
              Híbrido
            </h4>
            <p class="text-xs text-muted-foreground">Tenta equilibrar performance e estabilidade. O kernel é pequeno, mas alguns serviços críticos correm em modo kernel.</p>
            <div class="mt-3 pt-3 border-t border-white/5">
              <p class="text-[10px] text-green-400/70"><strong>Exemplos:</strong> Windows NT, macOS (XNU)</p>
              <p class="text-[10px] text-green-400/70 mt-1">✓ Equilíbrio entre ambos</p>
            </div>
          </div>
        </div>

        <!-- ANÉIS DE PROTEÇÃO -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">5. Anéis de Proteção (Protection Rings)</h3>
        
        <div class="bg-gray-900 p-6 rounded-2xl border border-primary/20 shadow-inner">
          <h4 class="text-primary font-bold text-lg mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
            Arquitetura x86: Os 4 Anéis
          </h4>
          <div class="flex justify-center">
            <div class="space-y-4 text-center max-w-sm">
              <div class="bg-red-500/20 p-3 rounded-xl border border-red-500/30">
                <span class="text-red-400 font-bold text-sm">Ring 0 (Kernel Mode)</span>
                <p class="text-[10px] text-gray-400">Kernel do SO. Acesso total a tudo.</p>
              </div>
              <div class="bg-yellow-500/20 p-3 rounded-xl border border-yellow-500/30 opacity-70">
                <span class="text-yellow-400 font-bold text-sm">Ring 1 e 2</span>
                <p class="text-[10px] text-gray-400">Drivers de dispositivo (pouco usados hoje)</p>
              </div>
              <div class="bg-green-500/20 p-3 rounded-xl border border-green-500/30">
                <span class="text-green-400 font-bold text-sm">Ring 3 (User Mode)</span>
                <p class="text-[10px] text-gray-400">Todas as aplicações normais</p>
              </div>
            </div>
          </div>
          <p class="text-xs text-center text-gray-400 mt-4">
            Na prática, sistemas modernos (Linux, Windows) usam apenas <strong>Ring 0</strong> (kernel) e <strong>Ring 3</strong> (utilizador).
          </p>
        </div>

        <!-- EXEMPLO LINUX -->
        <div class="bg-blue-500/5 p-5 rounded-xl border border-blue-500/20 my-6">
          <h4 class="flex items-center gap-2 text-blue-400 font-bold mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            Exemplo Real: O Kernel Linux
          </h4>
          <p class="text-xs mb-3">O Linux é o kernel open-source mais famoso do mundo. Ele sozinho já roda em:</p>
          <div class="grid grid-cols-3 gap-3 text-xs text-center">
            <div class="bg-black/40 p-3 rounded">
              <span class="text-blue-400 font-bold">+85%</span>
              <p class="text-gray-400">Smartphones (Android)</p>
            </div>
            <div class="bg-black/40 p-3 rounded">
              <span class="text-blue-400 font-bold">+90%</span>
              <p class="text-gray-400">Servidores Cloud</p>
            </div>
            <div class="bg-black/40 p-3 rounded">
              <span class="text-blue-400 font-bold">100%</span>
              <p class="text-gray-400">Top 500 Supercomputadores</p>
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
                <strong class="text-green-400">Debugging:</strong>
                <p class="text-xs text-gray-400">Entender syscalls ajuda a depurar crashes, analisar logs do kernel (dmesg) e interpretar stack traces.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <div>
                <strong class="text-green-400">Performance:</strong>
                <p class="text-xs text-gray-400">Minimizar syscalls (ex: buffered I/O) pode acelerar dramaticamente o teu código.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <div>
                <strong class="text-green-400">Segurança:</strong>
                <p class="text-xs text-gray-400">Compreender os anéis de proteção explica porque um buffer overflow pode escalar privilégios (exploit).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  quizId: "cs-q14"
};