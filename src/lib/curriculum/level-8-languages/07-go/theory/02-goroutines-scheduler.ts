import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "go-m2",
  title: "Goroutines e o Escalonador GMP Internals",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          ⚡ Concorrência de Baixo Custo
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Uma Goroutine não é uma thread do Sistema Operativo. É uma <strong>Lightweight Thread</strong> gerida pelo runtime do Go. No nível Master, entendemos como o modelo GMP permite escalar milhões de tarefas com apenas alguns MB de RAM.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. O Modelo GMP</h3>
        <p class="text-sm">O escalonador coordena três entidades essenciais:</p>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-xl">
            <h4 class="font-bold text-primary mb-2">G (Goroutine)</h4>
            <p class="text-[10px] opacity-70">A unidade de código. Consome apenas ~2KB de stack inicial.</p>
          </div>
          <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-xl">
            <h4 class="font-bold text-primary mb-2">M (Machine)</h4>
            <p class="text-[10px] opacity-70">A thread real do SO. O 'braço' que executa o código.</p>
          </div>
          <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-xl">
            <h4 class="font-bold text-primary mb-2">P (Processor)</h4>
            <p class="text-[10px] opacity-70">O recurso lógico que liga G a M e gere a fila de execução.</p>
          </div>
        </div>
      </section>

      <section class="bg-indigo-500/5 p-8 rounded-[2rem] border-2 border-dashed border-indigo-500/20 text-center">
        <h4 class="text-xl font-bold text-indigo-400 mb-4">🚀 Work Stealing</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Se um processador lógico (P) fica sem trabalho, ele 'rouba' metade das goroutines da fila de outro P. Isto garante que todos os cores da CPU de um servidor na Cloud sejam utilizados ao máximo."
        </p>
      </section>
    </div>
  `
};
