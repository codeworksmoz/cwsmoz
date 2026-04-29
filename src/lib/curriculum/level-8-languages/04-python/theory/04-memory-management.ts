import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m4",
  title: "Gestão de Memória e Garbage Collection",
  youtubeVideoId: "TQvD-Uq86oY",
  enableInteractive: true,
  quizId: "py-mq4",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🧠 Como o Python gere a RAM
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O Python automatiza a gestão de memória, mas um engenheiro Master deve entender como os objetos nascem e morrem para evitar <strong>Memory Leaks</strong> e otimizar o consumo em sistemas de larga escala.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Reference Counting (O Contador de Vidas)</h3>
        <p class="text-sm leading-relaxed">
          O mecanismo principal é a contagem de referências. Cada objeto guarda um número: quantas variáveis apontam para ele? Quando o contador chega a <strong>zero</strong>, a memória é libertada instantaneamente.
        </p>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Generational GC: Lidando com Ciclos</h3>
        <p class="text-sm leading-relaxed">O que acontece se o Objeto A aponta para o B, e o B aponta de volta para o A? O contador nunca chega a zero. O <strong>Garbage Collector</strong> do Python resolve isto através de gerações (0, 1 e 2), procurando por ciclos órfãos periodicamente.</p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-2">🚀 Dica de Performance: __slots__</h4>
          <p class="text-xs leading-relaxed">
            Ao usar <code>__slots__</code> numa classe, impeditos a criação do dicionário dinâmico <code>__dict__</code>, economizando centenas de bytes por objeto. Em listas com milhões de itens, isto pode reduzir o uso de RAM em até 60%.
          </p>
        </div>
      </section>
    </div>
  `
};
