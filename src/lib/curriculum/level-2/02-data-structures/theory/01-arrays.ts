import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "ds-t1",
  title: "Arrays: Layout de Memória e Estratégias de Crescimento",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          📦 Blocos Contíguos de Memória
        </h2>
        <p class="text-lg leading-relaxed">
          O Array é a estrutura mais fundamental porque mapeia diretamente a forma como a RAM funciona: uma sequência de endereços físicos. No nível Master, entendemos que a rapidez do Array (O(1)) vem da aritmética de ponteiros.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Endereçamento e Performance</h3>
        <p class="text-sm">Para encontrar o elemento no índice <code>i</code>, o CPU faz: <code>Endereço = Base + (i * tamanho_do_tipo)</code>. Esta conta matemática é instantânea.</p>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. Arrays Estáticos vs Dinâmicos</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <h4 class="font-bold text-accent mb-1">Estático (Fixed Size)</h4>
            <p class="text-xs">Tamanho definido no compile-time. Sem overhead, mas causa desperdício ou falta de espaço.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <h4 class="font-bold text-accent mb-1">Dinâmico (Resizable)</h4>
            <p class="text-xs">Usa uma estratégia de <strong>Doubling</strong>. Quando enche, o SO aloca um novo bloco com o dobro do tamanho e copia os dados.</p>
          </div>
        </div>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-2">💎 Análise Amortizada</h4>
          <p class="text-sm leading-relaxed">
            Inserir num array dinâmico é tecnicamente O(n) no pior caso (quando precisa de redimensionar). No entanto, como isto acontece raramente, o <strong>Custo Amortizado</strong> é O(1), tornando-o viável para sistemas de alta performance.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "ds-mq1"
};
