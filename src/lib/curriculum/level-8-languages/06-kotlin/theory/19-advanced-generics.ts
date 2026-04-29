import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "kt-m19",
  title: "Fase 4: Advanced Generics: Variância e Reified",
  enableInteractive: true,
  youtubeVideoId: "8ME9u065vD4",
  quizId: "kt-mq19",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🧬 Generics de Elite: Variância e Reificação
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Diferente do Java, o Kotlin possui um sistema de Generics muito mais expressivo. No nível Master, utilizamos <strong>Declaration-site Variance</strong> (in/out) para garantir a segurança de tipos em APIs complexas e <strong>Reified Type Parameters</strong> para contornar as limitações da <i>Type Erasure</i> da JVM.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Variância: out (Covariância) e in (Contravariância)</h3>
        <p class="text-sm">O uso de <code>out</code> permite que uma classe seja consumida apenas (produtor), enquanto <code>in</code> permite que ela receba dados apenas (consumidor).</p>
        <pre><code class="language-kotlin">
// Covariância: T só pode sair da classe
interface Producer<out T> {
    fun produce(): T
}

// Contravariância: T só pode entrar na classe
interface Consumer<in T> {
    fun consume(item: T)
}
        </code></pre>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Reified Type Parameters</h3>
        <p class="text-sm leading-relaxed">Normalmente, o tipo genérico é apagado em runtime. Com <code>inline</code> e <code>reified</code>, podes aceder ao tipo real dentro da função.</p>

        <div class="bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner">
           <pre><code class="language-kotlin">
inline fun <reified T> isType(value: Any): Boolean {
    // 🚀 Graças ao 'reified', isto é possível em runtime!
    return value is T
}
           </code></pre>
        </div>
      </section>
    </div>
  `
};
