import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "jv-m1",
  title: "Arquitetura da JVM, JIT e Tiered Compilation",
  content: `
    <div class="space-y-6">
      <div class="bg-orange-500/10 p-6 rounded-2xl border border-orange-500/20">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 text-orange-400">
          ☕ O Motor do Enterprise
        </h2>
        <p class="text-lg leading-relaxed">
          A JVM não é apenas um interpretador; é um ecossistema de otimização dinâmica. O segredo da performance do Java moderno reside na <strong>Tiered Compilation</strong>.
        </p>
      </div>

      <div class="prose prose-invert max-w-none">
        <h3>1. O Compilador JIT (C1 e C2)</h3>
        <p>A JVM começa interpretando o bytecode. À medida que o código "aquece", ela usa o compilador <strong>C1 (Client)</strong> para otimizações rápidas e, finalmente, o <strong>C2 (Server)</strong> para gerar código de máquina altamente otimizado.</p>
        
        <h3>2. Code Cache e Inlining</h3>
        <p>Entenda como a JVM elimina o overhead de chamadas de funções através do <i>Method Inlining</i>, uma das otimizações mais poderosas do ecossistema.</p>
      </div>
    </div>
  `,
  quizId: "jv-mq1"
};