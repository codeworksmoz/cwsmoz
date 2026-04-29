import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m15",
  title: "Fase 3: FFI: Chamando Código C com Cython",
  youtubeVideoId: "raf_id_cython_master",
  enableInteractive: true,
  quizId: "py-mq15",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🏎️ Rompendo a Barreira da Velocidade
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Quando o Python atinge o seu limite de performance, o Engenheiro Master recorre ao <strong>Cython</strong>. Ele não é apenas um compilador, mas uma ponte que permite misturar a sintaxe do Python com a performance bruta do C, permitindo atingir acelerações de até 100x em tarefas computacionais intensivas.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Tipagem Estática e Compilação AOT</h3>
        <p class="text-sm leading-relaxed">
          O segredo do Cython é a compilação <strong>Ahead-of-Time (AOT)</strong>. Ao adicionar tipos estáticos (<code>cdef</code>), o Cython converte o código Python em código C puro que a CPU executa diretamente, sem o overhead do interpretador.
        </p>
        <div class="bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner">
           <pre><code class="language-python">
# No ficheiro .pyx
cpdef int fast_sum(int n):
    cdef int i
    cdef int total = 0
    for i in range(n):
        total += i
    return total
           </code></pre>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Liberando o GIL (Global Interpreter Lock)</h3>
        <p class="text-sm leading-relaxed">O Cython permite o uso de paralelismo real. Com o bloco <code>with nogil</code>, o Python liberta o lock de execução, permitindo que múltiplos cores do processador trabalhem em simultâneo em threads C.</p>
        <pre><code class="language-python">
with nogil:
    # Código C puro que corre em paralelo real
    process_massive_data(buffer)
        </code></pre>
      </section>

      <section class="bg-indigo-500/10 p-8 rounded-[2.5rem] border border-indigo-500/20 shadow-inner text-center">
        <h4 class="text-xl font-bold text-indigo-400 mb-4">🏆 Performance de Sistemas</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Dominar FFI é essencial para o nosso **System Monitor**. Utilizaremos o Cython para processar pacotes de rede e telemetria no nível do kernel, garantindo que o monitor não consuma mais CPU do que o sistema que ele está a vigiar."
        </p>
      </section>
    </div>
  `
};
