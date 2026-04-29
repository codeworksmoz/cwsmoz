
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "os-t20",
  title: "System Tracing de Elite com eBPF",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🔬 Instrumentação Dinâmica</h2>
        <p class="text-lg leading-relaxed">O <strong>eBPF (extended Berkeley Packet Filter)</strong> permite injetar código seguro dentro do Kernel em tempo de execução. É a revolução da observabilidade moderna na nuvem.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">Sandboxing e Segurança</h3>
        <p class="text-sm">O código eBPF é verificado pelo Kernel antes de rodar para garantir que não tem loops infinitos nem acesso a memória proibida. Permite monitorizar chamadas de sistema e tráfego de rede com zero perda de performance.</p>
      </div>
    </div>
  `,
  quizId: "os-q20"
};
