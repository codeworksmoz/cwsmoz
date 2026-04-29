
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m7",
  title: "Fase 2: Posicionamento e Fluxo de Documento",
  enableInteractive: true,
  quizId: "css-mq7",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          📍 O Controle do Espaço
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Dominar o posicionamento é entender como os elementos saem do fluxo natural do documento para criar interfaces complexas. No nível Master, não usamos <code>absolute</code> por tentativa e erro; usamos para criar contextos de empilhamento (Stacking Contexts) controlados.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Position: Sticky e Fixed</h3>
        <p class="text-sm">O <code>sticky</code> é a solução de elite para cabeçalhos e barras laterais que acompanham o scroll sem quebrar o layout, ao contrário do <code>fixed</code> que remove o elemento totalmente do fluxo.</p>
        
        <div class="space-y-4">
           <pre><code class="language-css">
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  /* Garante que o cabeçalho fique por cima sem flutuar no nada */
  background: var(--bg);
}
           </code></pre>
        </div>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Z-Index e Stacking Contexts</h3>
        <p class="text-sm">O <code>z-index</code> só funciona dentro de um contexto de empilhamento. Propriedades como <code>opacity</code> menor que 1, <code>transform</code> ou <code>filter</code> criam novos contextos automaticamente.</p>
        
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-2">🚀 Dica de Engenharia: isolation</h4>
          <p class="text-sm leading-relaxed">
            A propriedade <code>isolation: isolate;</code> permite criar um novo Stacking Context de forma explícita, impedindo que o z-index de um componente interno "lute" com elementos de fora do componente.
          </p>
        </div>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Regra do Arquiteto</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Posicionamento absoluto deve ser a exceção, não a regra. Se podes resolver com Grid ou Flexbox, a manutenção será 10x mais fácil."
        </p>
      </section>
    </div>
  `
};
