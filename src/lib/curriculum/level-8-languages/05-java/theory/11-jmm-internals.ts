import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "jv-m11",
  title: "Fase 3: JMM Internals: Visibilidade, Volatile e Barreiras de Memória",
  enableInteractive: true,
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🧠 A Ciência da Visibilidade de Dados
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O <strong>Java Memory Model (JMM)</strong> define como e quando as threads vêem as alterações de valores feitos por outras threads. No nível Master, entendemos que o problema não é apenas a mutabilidade, mas o <strong>Cache de CPU</strong> e as reordenações de instruções feitas pelo compilador JIT.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. O Problema da Visibilidade</h3>
        <p class="text-sm">Cada core da CPU tem a sua própria cache L1/L2. Se a Thread A altera uma variável na sua cache, a Thread B no outro core pode continuar a ler o valor antigo da RAM, causando inconsistências fatais num saldo bancário.</p>
        
        <div class="p-4 bg-muted/20 border-l-4 border-accent rounded-r-xl">
           <strong class="text-accent block mb-1">Volatile:</strong> A keyword <code>volatile</code> garante que a leitura e escrita ocorram sempre na <strong>Memória Principal (RAM)</strong> e nunca na cache local do core, estabelecendo uma relação 'Happens-Before'.
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Memory Barriers (Fences)</h3>
        <p class="text-sm leading-relaxed">A JVM insere instruções de hardware chamadas <strong>Barreiras de Memória</strong>. Elas impedem que a CPU reordene instruções de forma otimizada mas perigosa, garantindo que o estado do objeto seja publicado de forma segura.</p>

        <div class="bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner">
           <h4 class="font-bold text-primary text-xs mb-4 uppercase">Double-Checked Locking (Correct Pattern)</h4>
           <pre><code class="language-java">
class Singleton {
    private static volatile Singleton instance;

    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton(); // Publicação segura via volatile
                }
            }
        }
        return instance;
    }
}
           </code></pre>
        </div>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Regra do Arquiteto de Baixo Nível</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Concorrência de elite exige entender o hardware. Use <code>AtomicReference</code> e <code>LongAdder</code> em vez de <code>synchronized</code> sempre que possível. Eles utilizam as primitivas <strong>CAS (Compare-and-Swap)</strong> do processador, atingindo performance de silício sem travar threads."
        </p>
      </section>
    </div>
  `,
};
