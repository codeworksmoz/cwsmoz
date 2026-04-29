import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "go-m5",
  title: "Context Package: Propagação e Cancelamento",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">🛡️ O Controlo da Árvore de Execução</h2>
        <p class="text-lg">O pacote <code>context</code> é o padrão industrial em Go para gerir o ciclo de vida de pedidos, permitindo propagar sinais de cancelamento e prazos (deadlines) através de toda a hierarquia de goroutines.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">As 4 Cores do Contexto</h3>
        <ul class="grid md:grid-cols-2 gap-4 text-xs">
          <li class="p-4 bg-card border rounded-xl"><strong>WithCancel:</strong> Cria um sinal manual de paragem.</li>
          <li class="p-4 bg-card border rounded-xl"><strong>WithTimeout:</strong> Cancela automaticamente após X tempo.</li>
          <li class="p-4 bg-card border rounded-xl"><strong>WithDeadline:</strong> Cancela numa hora específica do relógio.</li>
          <li class="p-4 bg-card border rounded-xl"><strong>WithValue:</strong> Transporta metadados (ex: TraceID) entre camadas.</li>
        </ul>

        <div class="bg-red-500/5 p-6 rounded-2xl border border-red-500/20 mt-6">
          <h4 class="font-bold text-red-400 mb-2">⚠️ Anti-padrão Master:</h4>
          <p class="text-sm leading-relaxed">Nunca guarde o Contexto dentro de uma Struct. Ele deve ser passado explicitamente como o <strong>primeiro argumento</strong> de cada função: <code>func Process(ctx context.Context, ...)</code>. Isto garante transparência e rastreabilidade total do ciclo de vida.</p>
        </div>
      </div>
    </div>
  `,
};
