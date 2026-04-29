import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "os-t12",
  title: "Linux Internals: Namespaces e Cgroups (Docker Engine)",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">📦 A Base Tecnológica dos Contentores</h2>
        <p class="text-lg leading-relaxed">Docker não é virtualização; é **Isolamento**. Ele utiliza duas funcionalidades profundas do Kernel Linux para criar a ilusão de um sistema separado.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">1. Namespaces (Visão)</h3>
        <p class="text-sm">Diz ao processo o que ele pode <strong>ver</strong>. Cada contentor tem a sua própria tabela de processos (PID), rede (NET) e utilizadores (USER). Um processo dentro do contentor acha que é o PID 1 e que está sozinho na rede.</p>

        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">2. Cgroups (Recursos)</h3>
        <p class="text-sm">Control Groups dizem ao processo o que ele pode <strong>gastar</strong>. Limitam o uso de CPU, RAM e banda de disco. Isto impede que um contentor "ruidoso" consuma todos os recursos do servidor (Noisy Neighbor problem).</p>
        
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h4 class="font-bold text-indigo-400 mb-2">💎 Diferença Master:</h4>
          <p class="text-sm">Numa VM, tens 10 cópias do Kernel na RAM. Num contentor, tens apenas 1 Kernel a gerir 10 vizinhanças isoladas. Isto torna os contentores 100x mais leves.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "os-q12"
};