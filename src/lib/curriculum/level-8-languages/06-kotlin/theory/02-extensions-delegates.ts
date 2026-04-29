import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "kt-m2",
  title: "Fase 1: Extension Functions e Property Delegation",
  enableInteractive: true,
  youtubeVideoId: "dQw4w9WgXcQ",
  quizId: "kt-mq2",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🧩 Extensibilidade sem Herança
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O Kotlin permite que dês "superpoderes" a classes existentes (mesmo as de bibliotecas fechadas como o JDK) através de <strong>Extension Functions</strong> e que delegues a lógica de propriedades para objetos especializados.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Extension Functions</h3>
        <p class="text-sm">Tu podes adicionar métodos a uma classe sem precisar de a herdar. É resolvido estaticamente, garantindo performance de método nativo.</p>
        <pre><code class="language-kotlin">
fun String.toSlug(): String = this.lowercase().replace(" ", "-")

val url = "Kotlin Master Class".toSlug() // "kotlin-master-class"
        </code></pre>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Delegated Properties (by)</h3>
        <p class="text-sm">Delegar significa que a lógica de <code>get()</code> e <code>set()</code> é transferida para outro objeto. O uso mais comum é o <code>lazy</code>.</p>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-card border rounded-xl shadow-lg">
            <h4 class="font-bold text-primary mb-2">by lazy { ... }</h4>
            <p class="text-xs opacity-70">O código só corre quando a variável é lida pela primeira vez. Ideal para carregar recursos pesados como Bases de Dados.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl shadow-lg">
            <h4 class="font-bold text-primary mb-2">Delegates.observable</h4>
            <p class="text-xs opacity-70">Interceta mudanças no valor e executa uma ação (ex: atualizar a UI automaticamente).</p>
          </div>
        </div>
      </section>
    </div>
  `
};