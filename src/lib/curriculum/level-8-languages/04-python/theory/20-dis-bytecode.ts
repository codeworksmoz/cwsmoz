import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m19",
  title: "Fase 4: Internals: Bytecode, AST e Máquina de Pilha",
  youtubeVideoId: "mNst8vX-u8E",
  enableInteractive: true,
  quizId: "py-mq19",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          ⚙️ Desmontando o Interpretador
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Como o Python executa o código realmente? No nível Master, olhamos para as entranhas do CPython: do parsing do ficheiro texto até à geração da <strong>AST (Abstract Syntax Tree)</strong> e, finalmente, às instruções da <strong>Máquina de Pilha</strong> (Bytecode).
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. O Módulo dis: Inspecionando a Pilha</h3>
        <p class="text-sm leading-relaxed">
          O módulo <code>dis</code> permite descompilar qualquer função em instruções binárias. Isto revela por que <code>tuple</code> é mais rápido que <code>list</code> e como o motor otimiza as suas chamadas.
        </p>
        <div class="bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner">
           <pre><code class="language-python">
import dis

def sum_logic(a, b):
    return a + b

# 🕵️ Auditando o Bytecode
dis.dis(sum_logic)
# Exibirá: LOAD_FAST, BINARY_ADD, RETURN_VALUE
           </code></pre>
        </div>
      </section>

      <section class="bg-indigo-500/10 p-8 rounded-[2.5rem] border border-indigo-500/20 shadow-inner text-center">
        <h4 class="text-xl font-bold text-indigo-400 mb-4">🚀 Otimização de Bytecode</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Entender a máquina de pilha é fundamental para identificar onde o seu código gera instruções desnecessárias. Engenheiros de elite desenham lógica que minimiza a movimentação de dados na pilha do interpretador."
        </p>
      </section>
    </div>
  `
};
