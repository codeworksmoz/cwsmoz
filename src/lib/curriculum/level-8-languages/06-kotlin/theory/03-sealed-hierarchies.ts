import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "kt-m3",
  title: "Fase 1: Sealed Hierarchies e Pattern Matching (When)",
  enableInteractive: true,
  youtubeVideoId: "mNst8vX-u8E",
  quizId: "kt-mq3",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🛡️ Hierarquias Fechadas e Segurança de Fluxo
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          <strong>Sealed Classes</strong> e <strong>Sealed Interfaces</strong> permitem que o engenheiro defina restrições rígidas sobre a herança. Diferente de classes abstratas comuns, todas as subclasses de um tipo selado devem ser conhecidas em tempo de compilação, permitindo que o compilador valide a exaustividade da sua lógica.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Exaustividade do 'when'</h3>
        <p class="text-sm">Ao usar uma Sealed Interface, o compilador Kotlin garante que tu tratas todos os cenários. Se esqueceres um estado, o código não compila.</p>
        
        <div class="bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner">
           <pre><code class="language-kotlin">
sealed interface SyncResult
data class Success(val data: String) : SyncResult
data class Failure(val error: Throwable) : SyncResult

fun handle(res: SyncResult) = when(res) {
    is Success -> println("Sucesso: \${res.data}")
    is Failure -> println("Erro: \${res.error.message}")
    // 🚀 Não precisa de 'else'! O compilador prova que cobriste tudo.
}
           </code></pre>
        </div>
      </section>

      <section class="bg-indigo-500/10 p-8 rounded-[2.5rem] border border-indigo-500/20 shadow-inner">
        <h4 class="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
          🚀 Algebraic Data Types (ADTs)
        </h4>
        <p class="text-sm leading-relaxed">
          Esta combinação de Sealed Types e Data Classes permite modelar estados complexos de domínio com uma precisão matemática. É o padrão de ouro para representar estados de UI ou fluxos de sincronização no nosso motor.
        </p>
      </section>
    </div>
  `
};
