import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "kt-m14",
  title: "Fase 3: Kotlin Multiplatform (KMP) Architecture",
  enableInteractive: true,
  youtubeVideoId: "Z5JC9Ve1sfI",
  quizId: "kt-mq14",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🌍 Código Único, Execução Nativa
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O <strong>Kotlin Multiplatform (KMP)</strong> permite partilhar a lógica de negócio, rede e persistência entre Android, iOS, Web e Desktop. Diferente de outras soluções, o KMP não é uma "caixa preta" de renderização; ele gera código nativo para cada plataforma.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Mecanismo expect / actual</h3>
        <p class="text-sm">Esta é a ferramenta mestre para lidar com hardware e APIs específicas do sistema operativo no código partilhado.</p>
        
        <div class="bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner">
           <pre><code class="language-kotlin">
// No Common Main (Partilhado)
expect fun getDeviceName(): String

// No Android Main (Nativo)
actual fun getDeviceName(): String = android.os.Build.MODEL

// No iOS Main (Nativo)
actual fun getDeviceName(): String = UIDevice.currentDevice.name
           </code></pre>
        </div>
      </section>

      <section class="bg-indigo-500/10 p-8 rounded-[2.5rem] border border-indigo-500/20 shadow-inner">
        <h4 class="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
          🚀 Camadas de Partilha
        </h4>
        <ul class="text-sm space-y-2 opacity-90">
          <li>✅ <strong>Data Layer:</strong> Repositórios e SQLDelight (Base de dados partilhada).</li>
          <li>✅ <strong>Network Layer:</strong> Ktor Client para pedidos HTTP universais.</li>
          <li>✅ <strong>Domain Layer:</strong> Lógica de negócio e validações puras.</li>
        </ul>
      </section>
    </div>
  `
};