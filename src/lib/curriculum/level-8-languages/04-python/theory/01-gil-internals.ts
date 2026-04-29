import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m1",
  title: "CPython Internals: O GIL e o Gerenciamento de Threads",
  youtubeVideoId: "mNst8vX-u8E",
  enableInteractive: true,
  quizId: "py-mq1",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          ⚙️ Por dentro do Interpretador
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Para dominar o Python em nível de engenharia, é vital entender o <strong>Global Interpreter Lock (GIL)</strong>. Ele é o mecanismo que impede que múltiplas threads executem bytecode Python simultaneamente no CPython. Entender o GIL é o que separa quem usa threads de quem entende <strong>concorrência real</strong>.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. O Propósito do Lock</h3>
        <p class="text-sm leading-relaxed">
          A gestão de memória do CPython (Reference Counting) não é <i>thread-safe</i>. O GIL garante que apenas uma thread manipule objetos Python por vez, prevenindo condições de corrida fatais na memória RAM.
        </p>
        
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-2">Impacto em Tarefas CPU-bound</h4>
          <p class="text-xs leading-relaxed">
            Em cálculos matemáticos puros, usar múltiplas threads em Python pode ser <strong>mais lento</strong> que usar uma única thread, devido ao custo de disputa pelo GIL. Para paralelismo real, utilizamos o módulo <button>multiprocessing</button> ou extensões em C que libertam o lock.
          </p>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. I/O e a Libertação do GIL</h3>
        <p class="text-sm leading-relaxed">O GIL não é um vilão total. Durante operações de <strong>I/O</strong> (espera de rede, leitura de disco), o Python liberta o lock automaticamente, permitindo que outras threads trabalhem enquanto os dados não chegam.</p>

        <div class="space-y-4">
           <pre><code class="language-python">
import threading
import os

def check_context():
    print(f"PID: {os.getpid()} | Thread: {threading.current_thread().name}")

# Threads partilham o mesmo PID mas disputam o GIL
t1 = threading.Thread(target=check_context)
t1.start()
           </code></pre>
        </div>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Visão Master</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "O GIL simplifica a integração com bibliotecas C. No nosso **System Monitor**, utilizaremos threads para monitorizar I/O mas usaremos processos separados para análise massiva de dados, contornando as limitações do lock nativo."
        </p>
      </section>
    </div>
  `
};
