import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "go-m10",
  title: "O Escalonador GMP Internals",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">⚙️ O Cérebro da Concorrência</h2>
        <p class="text-lg leading-relaxed">O Go não usa as threads pesadas do Sistema Operativo diretamente para cada tarefa. Ele utiliza o modelo **M:N Scheduler**, abstraindo a execução em três entidades principais.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">As Entidades do Modelo</h3>
        <ul class="space-y-4">
          <li class="flex gap-4">
            <span class="text-3xl">G</span>
            <div>
              <p class="font-bold text-accent">Goroutine:</p>
              <p class="text-sm opacity-70">A unidade de trabalho. Contém o stack e o program counter.</p>
            </div>
          </li>
          <li class="flex gap-4">
            <span class="text-3xl">M</span>
            <div>
              <p class="font-bold text-accent">Machine (Thread):</p>
              <p class="text-sm opacity-70">A thread real do SO que executa o código. Gerida pelo Kernel.</p>
            </div>
          </li>
          <li class="flex gap-4">
            <span class="text-3xl">P</span>
            <div>
              <p class="font-bold text-accent">Processor (Logical):</p>
              <p class="text-sm opacity-70">O recurso que liga G a M. Contém a fila de goroutines prontas a correr.</p>
            </div>
          </li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🚀 Work Stealing e Preempção</h3>
          <p class="text-sm leading-relaxed">
            Se um P fica sem goroutines para executar, ele tenta "roubar" metade das goroutines da fila de outro P. Desde o Go 1.14, o scheduler é **assincronamente preemptivo**, impedindo que uma goroutine em loop infinito trave o sistema.
          </p>
        </div>
      </div>
    </div>
  `,
};
