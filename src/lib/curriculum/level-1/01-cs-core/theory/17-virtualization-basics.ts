import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t17",
  title: "Virtualização: A Abstração do Silício",
  youtubeVideoId: "E18Qv2bTkRU",
  content: `
    <div class="space-y-8">
      <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-indigo-400 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
          Máquinas dentro de Máquinas
        </h2>
        <p class="text-lg leading-relaxed">
          A virtualização é a tecnologia que permite criar uma camada de software entre o hardware físico e os sistemas operativos. Esta camada, o <strong>Hypervisor</strong>, engana os sistemas operativos fazendo-os acreditar que têm hardware exclusivo, quando na verdade estão a partilhar recursos de forma isolada.
        </p>
        <div class="mt-4 flex gap-4 text-sm">
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            <span class="text-gray-400">IBM Mainframes: Anos 60</span>
          </div>
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
            <span class="text-gray-400">Base da Cloud Computing</span>
          </div>
        </div>
      </div>

      <div class="space-y-6">
        <!-- CAMADAS DE VIRTUALIZAÇÃO -->
        <div class="bg-gray-900 p-6 rounded-2xl border border-primary/20 shadow-inner">
          <h3 class="flex items-center gap-2 text-primary font-bold text-lg mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
            Camadas da Virtualização
          </h4>
          <div class="space-y-3">
            <div class="bg-blue-500/10 p-3 rounded-lg border border-blue-500/20">
              <div class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-blue-400"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                <span class="text-blue-400 font-bold text-sm">VM 1, VM 2, VM 3 (Guest OS)</span>
              </div>
              <p class="text-xs text-gray-400 mt-1">Cada VM tem o seu próprio SO completo (Windows, Linux, etc.)</p>
            </div>
            <div class="bg-yellow-500/10 p-3 rounded-lg border border-yellow-500/20">
              <div class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-yellow-400"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                <span class="text-yellow-400 font-bold text-sm">HYPERVISOR (VMM)</span>
              </div>
              <p class="text-xs text-gray-400 mt-1">Camada que gere e isola as VMs, distribuindo CPU, RAM e I/O</p>
            </div>
            <div class="bg-green-500/10 p-3 rounded-lg border border-green-500/20">
              <div class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                <span class="text-green-400 font-bold text-sm">Hardware Físico</span>
              </div>
              <p class="text-xs text-gray-400 mt-1">CPU, RAM, Discos, Rede — os recursos reais da máquina</p>
            </div>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Tipos de Hypervisors (VMM)</h3>
        <p>A arquitetura do gestor de máquinas virtuais dita a performance e o isolamento do sistema:</p>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div class="p-6 bg-card border rounded-2xl border-accent/30 shadow-xl hover:border-accent/60 transition-all">
            <h4 class="font-bold text-accent mb-3 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              Tipo 1: Bare Metal
            </h4>
            <p class="text-xs text-muted-foreground leading-relaxed">Instalado diretamente sobre o hardware. É o padrão em Data Centers (AWS, Azure). Tem performance quase nativa pois não há SO intermediário.</p>
            <div class="mt-4 bg-black/20 p-3 rounded text-xs font-code">
              <p class="text-accent/70 font-bold mb-1">Exemplos:</p>
              <p class="text-gray-400">VMware ESXi, Microsoft Hyper-V, Xen, Proxmox (KVM)</p>
            </div>
            <div class="mt-3 pt-3 border-t border-white/5">
              <p class="text-[10px] text-green-400/70">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="inline mr-1"><polyline points="20 6 9 17 4 12"/></svg>
                Performance quase nativa | Ideal para produção
              </p>
            </div>
          </div>
          <div class="p-6 bg-card border rounded-2xl border-primary/30 shadow-lg hover:border-primary/60 transition-all">
            <h4 class="font-bold text-primary mb-3 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              Tipo 2: Hosted
            </h4>
            <p class="text-xs text-muted-foreground leading-relaxed">Corre como uma aplicação dentro de um SO (Windows/Linux). Útil para desenvolvimento e testes rápidos, mas com performance inferior.</p>
            <div class="mt-4 bg-black/20 p-3 rounded text-xs font-code">
              <p class="text-primary/70 font-bold mb-1">Exemplos:</p>
              <p class="text-gray-400">Oracle VirtualBox, VMware Workstation, Parallels</p>
            </div>
            <div class="mt-3 pt-3 border-t border-white/5">
              <p class="text-[10px] text-yellow-400/70">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="inline mr-1"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/></svg>
                Overhead adicional | Ideal para dev/test
              </p>
            </div>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">2. Porquê Virtualizar? (Os 3 Pilares)</h3>
        
        <ul class="space-y-4">
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl border border-white/5 hover:border-primary/30 transition-all">
            <div class="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-blue-400"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div>
              <p class="font-bold text-sm text-blue-400">Isolamento Total:</p>
              <p class="text-xs text-muted-foreground">Um crash ou vírus na VM 1 não afeta a VM 2 nem o hardware principal. É a base da segurança na Cloud. Cada VM tem o seu próprio kernel e espaço de memória isolado.</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl border border-white/5 hover:border-primary/30 transition-all">
            <div class="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
            </div>
            <div>
              <p class="font-bold text-sm text-green-400">Encapsulamento:</p>
              <p class="text-xs text-muted-foreground">Uma máquina virtual é apenas um conjunto de ficheiros. Podes mover um servidor inteiro de Maputo para Londres apenas copiando um ficheiro .vmdk ou .qcow2. Snapshots permitem voltar atrás no tempo.</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl border border-white/5 hover:border-primary/30 transition-all">
            <div class="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-yellow-400"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </div>
            <div>
              <p class="font-bold text-sm text-yellow-400">Consolidação:</p>
              <p class="text-xs text-muted-foreground">Em vez de ter 10 servidores físicos com 10% de uso cada, tens 1 servidor potente com 10 VMs a 90% de utilização, poupando energia, espaço e custos operacionais.</p>
            </div>
          </li>
        </ul>

        <!-- TÉCNICAS DE VIRTUALIZAÇÃO -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">3. Técnicas de Virtualização de CPU</h3>
        
        <div class="grid md:grid-cols-2 gap-4 my-4">
          <div class="bg-purple-500/10 p-4 rounded-xl border border-purple-500/20">
            <h4 class="flex items-center gap-2 text-purple-400 font-bold mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/></svg>
              Paravirtualização
            </h4>
            <p class="text-xs">O Guest OS é <strong>modificado</strong> para saber que está virtualizado. Faz "hypercalls" diretas ao hypervisor. Muito rápido, mas requer kernel modificado.</p>
            <p class="text-[10px] text-gray-400 mt-2">Ex: Xen com kernel Linux paravirtualizado</p>
          </div>
          <div class="bg-cyan-500/10 p-4 rounded-xl border border-cyan-500/20">
            <h4 class="flex items-center gap-2 text-cyan-400 font-bold mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="2"/><line x1="7" y1="2" x2="7" y2="22"/></svg>
              Virtualização Assistida por Hardware
            </h4>
            <p class="text-xs">CPU tem extensões especiais: <strong>Intel VT-x / AMD-V</strong>. O hypervisor usa estas instruções para criar VMs sem modificar o Guest OS.</p>
            <p class="text-[10px] text-gray-400 mt-2">Ex: KVM, VMware ESXi, Hyper-V</p>
          </div>
        </div>

        <!-- VM VS CONTAINER -->
        <div class="bg-yellow-500/5 p-6 rounded-2xl border border-yellow-500/20 mt-6">
          <h4 class="font-bold text-yellow-500 mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="M6 6l12 12"/></svg>
            Diferença Master: VM vs Container
          </h4>
          
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-black/40 p-4 rounded-lg">
              <h5 class="text-blue-400 font-bold text-sm mb-3 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                Máquina Virtual (VM)
              </h5>
              <ul class="text-xs space-y-2 text-gray-400">
                <li class="flex items-start gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-blue-400 mt-0.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Virtualiza <strong>hardware</strong> completo</span>
                </li>
                <li class="flex items-start gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-blue-400 mt-0.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Cada VM tem <strong>Kernel próprio</strong></span>
                </li>
                <li class="flex items-start gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-blue-400 mt-0.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Pesada: <strong>GBs de disco/RAM</strong></span>
                </li>
                <li class="flex items-start gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-blue-400 mt-0.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Inicia em <strong>minutos</strong></span>
                </li>
                <li class="flex items-start gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-blue-400 mt-0.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Isolamento <strong>total</strong> (segurança máxima)</span>
                </li>
              </ul>
            </div>
            <div class="bg-black/40 p-4 rounded-lg">
              <h5 class="text-green-400 font-bold text-sm mb-3 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                Container (Docker)
              </h5>
              <ul class="text-xs space-y-2 text-gray-400">
                <li class="flex items-start gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Virtualiza <strong>Sistema Operativo</strong></span>
                </li>
                <li class="flex items-start gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Partilha o <strong>Kernel do host</strong></span>
                </li>
                <li class="flex items-start gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Leve: <strong>MBs de disco/RAM</strong></span>
                </li>
                <li class="flex items-start gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Inicia em <strong>milissegundos</strong></span>
                </li>
                <li class="flex items-start gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Isolamento <strong>parcial</strong> (partilha kernel)</span>
                </li>
              </ul>
            </div>
          </div>
          
          <p class="text-sm leading-relaxed mt-4 text-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="inline mr-1"><path d="M12 2L2 7l10 5 10-5-10-5z"/></svg>
            No nível Master, usamos <strong>VMs para isolamento forte</strong> (multi-tenant cloud) e <strong>Containers para microserviços ágeis</strong> (CI/CD).
          </p>
        </div>

        <!-- APLICAÇÕES PRÁTICAS -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">4. Aplicações da Virtualização</h3>
        
        <div class="grid md:grid-cols-3 gap-4 my-4">
          <div class="bg-blue-500/10 p-4 rounded-xl border border-blue-500/20 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mx-auto mb-2 text-blue-400"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
            <span class="text-blue-400 font-bold text-sm">Cloud Computing</span>
            <p class="text-[10px] text-gray-400 mt-1">AWS, Azure, GCP vendem VMs como serviço (IaaS)</p>
          </div>
          <div class="bg-green-500/10 p-4 rounded-xl border border-green-500/20 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mx-auto mb-2 text-green-400"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
            <span class="text-green-400 font-bold text-sm">Desenvolvimento</span>
            <p class="text-[10px] text-gray-400 mt-1">Ambientes isolados para testar sem riscos</p>
          </div>
          <div class="bg-purple-500/10 p-4 rounded-xl border border-purple-500/20 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mx-auto mb-2 text-purple-400"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            <span class="text-purple-400 font-bold text-sm">Migração ao Vivo</span>
            <p class="text-[10px] text-gray-400 mt-1">Mover VMs entre servidores sem downtime</p>
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
                <strong class="text-green-400">Dev/Test:</strong>
                <p class="text-xs text-gray-400">Cria ambientes idênticos à produção sem precisar de hardware extra.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <div>
                <strong class="text-green-400">Disaster Recovery:</strong>
                <p class="text-xs text-gray-400">Snapshots de VMs permitem restaurar sistemas em segundos após falhas.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <div>
                <strong class="text-green-400">Escalabilidade:</strong>
                <p class="text-xs text-gray-400">Cloud providers usam virtualização para escalar aplicações automaticamente (auto-scaling).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  quizId: "cs-t17-quiz"
};