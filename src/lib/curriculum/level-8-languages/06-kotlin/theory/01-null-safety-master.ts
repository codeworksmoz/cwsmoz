import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "kt-m1",
  title: "Fase 1: Null Safety Internals e o Type System",
  enableInteractive: true,
  youtubeVideoId: "8aGhZQkoFbQ",
  quizId: "kt-mq1",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🛡️ Eliminando o Erro de Bilhão de Dólares
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O Kotlin não apenas "trata" nulos; ele integra a nulabilidade no seu sistema de tipos. No nível master, entendemos como o compilador utiliza o <strong>Data Flow Analysis</strong> para garantir que uma referência é segura antes de permitires o acesso, eliminando o NullPointerException (NPE) em tempo de compilação.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Tipos Nullable (?) e Non-Null</h3>
        <p class="text-sm">Por padrão, no Kotlin, tipos não podem ser nulos. Se queres permitir nulo, deves declarar explicitamente com <code>?</code>.</p>
        <pre><code class="language-kotlin">
val name: String = "Edson" // Nunca pode ser nula
var email: String? = null // Pode ser nula

// ✅ Compilador bloqueia isto se email for nulo
// println(email.length) // ERRO DE COMPILAÇÃO
        </code></pre>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Safe Calls e Elvis Operator</h3>
        <p class="text-sm">O Kotlin fornece operadores atómicos para lidar com a ausência de valor de forma elegante.</p>
        <ul class="space-y-4">
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
            <div>
              <p class="font-bold text-sm">Safe Call (?.):</p>
              <p class="text-xs text-muted-foreground">Executa a chamada apenas se a referência não for nula. Caso contrário, retorna nulo sem crashar.</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
            <div>
              <p class="font-bold text-sm">Elvis Operator (?:):</p>
              <p class="text-xs text-muted-foreground">Fornece um valor padrão se a expressão à esquerda for nula.</p>
            </div>
          </li>
        </ul>
        <pre><code class="language-kotlin">
val length = email?.length ?: 0
        </code></pre>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Regra do Engenheiro</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Evite o uso do operador !! (Not-Null Assertion). Ele desativa a segurança do compilador e reintroduz o risco de crash. Um código de elite usa Smart Casts e o Elvis Operator para manter o fluxo resiliente."
        </p>
      </section>
    </div>
  `,
};
