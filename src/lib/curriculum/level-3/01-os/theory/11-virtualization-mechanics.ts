import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "os-t11",
  title: "Virtualização: Máquinas de Estados Abstratas",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">🖥️ Camadas de Abstração</h2>
        <p class="text-lg">A virtualização permite correr múltiplos sistemas operativos sobre o mesmo hardware físico. O <strong>Hypervisor</strong> (VMM) é o "SO do SO".</p>
      </div>

      <div class="grid md:grid-cols-2 gap-4">
        <div class="p-5 bg-card border rounded-2xl border-accent/20 shadow-lg">
          <h4 class="font-bold text-accent mb-2">Type 1 (Bare Metal)</h4>
          <p class="text-xs">Corre diretamente no hardware. Máxima performance. <br/>Ex: VMware ESXi, Xen.</p>
        </div>
        <div class="p-5 bg-card border rounded-2xl border-accent/20 shadow-lg">
          <h4 class="font-bold text-accent mb-2">Type 2 (Hosted)</h4>
          <p class="text-xs">Corre dentro de um SO hospedeiro. Mais lento, mas fácil de usar. <br/>Ex: VirtualBox.</p>
        </div>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-bold font-headline text-primary">Trap and Emulate</h3>
        <p class="text-sm leading-relaxed">O SO convidado tenta executar uma instrução privilegiada. O hardware gera um <i>Trap</i> para o Hypervisor, que emula o resultado e devolve ao convidado. Nas CPUs modernas (Intel VT-x), isto é acelerado via hardware.</p>
      </div>
    </div>
  `,
  quizId: "os-q11"
};