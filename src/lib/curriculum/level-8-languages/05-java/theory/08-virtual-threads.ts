import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "jv-m8",
  title: "Fase 2: Project Loom: Virtual Threads e a Escala Massiva",
  enableInteractive: true,
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🧵 A Revolução Project Loom
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Durante 25 anos, o Java foi limitado pelo custo das threads do Sistema Operativo. O **Project Loom** (Java 21) introduziu as <strong>Virtual Threads</strong>, permitindo que uma única JVM execute milhões de threads com o custo de memória de meros objetos no Heap, eliminando a necessidade de programação reativa complexa para atingir alta escalabilidade.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Threads do SO vs. Virtual Threads</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-xl">
             <h4 class="font-bold text-primary text-xs mb-3 uppercase tracking-widest">Platform Threads (Antigas)</h4>
             <p class="text-xs opacity-70 leading-relaxed">Mapeadas 1:1 com threads do Kernel. Cada uma consome ~1MB de stack fixo. Limite prático: algumas milhares por servidor.</p>
          </div>
          <div class="p-5 bg-card border rounded-2xl border-green-500/20 shadow-xl">
             <h4 class="font-bold text-green-400 text-xs mb-3 uppercase tracking-widest">Virtual Threads (Loom)</h4>
             <p class="text-xs opacity-70 leading-relaxed">Geridas pelo runtime do Java. Consomem apenas bytes. Mapeadas M:N sobre as carrier threads físicas. Limite: <b>Milhões</b>.</p>
          </div>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. O Fim do Bloqueio de Thread</h3>
        <p class="text-sm leading-relaxed">No modelo antigo, se uma thread esperasse pela base de dados, a thread física do SO ficava bloqueada (ociosa). Com as Virtual Threads, a JVM "desmonta" a tarefa da thread física e corre outra enquanto o I/O não chega.</p>

        <div class="bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner">
           <h4 class="font-bold text-primary text-xs mb-4 uppercase">Implementação de Elite</h4>
           <pre><code class="language-java">
// 🚀 Criando um executor que usa threads leves do Java 21
try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
    IntStream.range(0, 100_000).forEach(i -> {
        executor.submit(() -> {
            Thread.sleep(Duration.ofSeconds(1)); // Não bloqueia o SO!
            return i;
        });
    });
} // O executor fecha e aguarda todas as tarefas
           </code></pre>
        </div>
      </section>

      <section class="bg-indigo-500/10 p-8 rounded-[2.5rem] border border-indigo-500/20 shadow-inner">
        <h4 class="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
          🚀 Porquê no nosso Core Banking?
        </h4>
        <p class="text-sm leading-relaxed">
          Um banco processa milhares de pedidos de consulta de saldo simultâneos. Antes, precisávamos de WebFlux ou RxJava (complexos). Agora, usamos código síncrono simples (imperativo) e deixamos que as Virtual Threads tratem da escala massiva de I/O.
        </p>
      </section>
    </div>
  `,
};
