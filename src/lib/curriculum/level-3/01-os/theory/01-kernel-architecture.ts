import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "os-t1",
  title: "Arquitetura de Kernels: Monolíticos vs Microkernels",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🏛️ O Coração do Sistema
        </h2>
        <p class="text-lg leading-relaxed">
          O <strong>Kernel</strong> é o programa que corre no modo mais privilegiado do processador (Ring 0). Ele atua como o árbitro supremo, gerindo o acesso das aplicações ao hardware (CPU, RAM, Disco).
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">1. Kernel Monolítico (Ex: Linux)</h3>
        <p class="text-sm">Todos os serviços essenciais (drivers, rede, sistemas de ficheiros) correm no mesmo espaço de endereço do kernel. <br/><strong>Vantagem:</strong> Performance extrema devido à ausência de troca de contexto entre serviços. <br/><strong>Desvantagem:</strong> Um erro num driver pode mandar o sistema inteiro abaixo (Kernel Panic).</p>

        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">2. Microkernel (Ex: Minix, L4)</h3>
        <p class="text-sm">O kernel contém apenas o mínimo (IPC, gestão de memória básica). Tudo o resto (drivers, rede) corre como processos comuns no <i>User Space</i>. <br/><strong>Vantagem:</strong> Alta resiliência e segurança. <br/><strong>Desvantagem:</strong> Overhead de comunicação (IPC) entre os módulos.</p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-2">🚀 System Calls: A Ponte</h4>
          <p class="text-sm leading-relaxed">
            Uma aplicação nunca acede ao hardware diretamente. Ela faz uma <strong>System Call</strong> (chamada de sistema). O CPU muda do modo utilizador para o modo kernel (Trap), executa a tarefa segura e volta para a aplicação. É a base da segurança moderna.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "os-q1"
};