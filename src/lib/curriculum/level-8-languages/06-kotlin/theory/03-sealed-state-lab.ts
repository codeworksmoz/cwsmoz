import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "kt-m3",
  title: "Sealed Hierarchies e Pattern Matching (When)",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🛡️ Hierarquias Fechadas
        </h2>
        <p class="text-lg leading-relaxed">
          <strong>Sealed Classes</strong> e <strong>Sealed Interfaces</strong> permitem que o engenheiro defina restrições rígidas sobre a herança. Diferente de classes abstratas comuns, todas as subclasses de um tipo selado devem ser conhecidas em tempo de compilação.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Exaustividade do 'when'</h3>
        <p class="text-sm">Ao usar uma Sealed Interface, o compilador Kotlin garante que tu tratas todos os cenários. Se esqueceres um estado, o código não compila.</p>
        
        <div class="bg-black/40 p-5 rounded-xl border font-code text-sm text-accent shadow-inner">
          <p>sealed interface Result</p>
          <p>data class Success(val data: String) : Result</p>
          <p>data class Error(val exception: Exception) : Result</p>
          <br/>
          <p>val message = when(res) {</p>
          <p>&nbsp;&nbsp;is Success -> "Dados: \${res.data}"</p>
          <p>&nbsp;&nbsp;is Error -> "Falha: \${res.exception}"</p>
          <p>&nbsp;&nbsp;<span class="text-muted-foreground">// Não precisa de 'else'!</span></p>
          <p>}</p>
        </div>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h4 class="font-bold text-indigo-400 mb-2">💎 Algebraic Data Types (ADTs)</h4>
          <p class="text-sm leading-relaxed">Esta combinação de Sealed Types e Data Classes permite modelar estados complexos de domínio (como fluxos financeiros ou estados de UI) com uma precisão matemática impossível no Java tradicional.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "kt-mq3"
};
