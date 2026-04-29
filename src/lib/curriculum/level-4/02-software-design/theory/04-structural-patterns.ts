import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "des-t4",
  title: "Design Patterns: Padrões Estruturais (Structural)",
  quizId: "des-q4-master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🧩 Montando a Engrenagem</h2>
        <p class="text-lg leading-relaxed">
          Padrões estruturais explicam como montar objetos e classes em estruturas maiores, mantendo estas estruturas flexíveis e eficientes.
        </p>
      </div>

      <div class="space-y-6">
        <div class="p-4 bg-card border rounded-xl border-white/5">
          <h4 class="font-bold text-accent mb-1">Adapter (Adaptador)</h4>
          <p class="text-xs">Permite que interfaces incompatíveis trabalhem juntas. É a "tomada universal" da engenharia de software.</p>
        </div>

        <div class="p-4 bg-card border rounded-xl border-white/5">
          <h4 class="font-bold text-accent mb-1">Facade (Fachada)</h4>
          <p class="text-xs">Fornece uma interface simplificada para uma biblioteca complexa ou um subsistema difícil de usar. Esconde a complexidade do utilizador.</p>
        </div>

        <div class="p-4 bg-card border rounded-xl border-white/5">
          <h4 class="font-bold text-accent mb-1">Proxy</h4>
          <p class="text-xs">Um substituto que controla o acesso ao objeto original. Útil para Lazy Loading, Logging ou Cache sem que o cliente saiba.</p>
        </div>

        <div class="p-4 bg-card border rounded-xl border-white/5">
          <h4 class="font-bold text-accent mb-1">Decorator</h4>
          <p class="text-xs">Adiciona responsabilidades a objetos dinamicamente. Uma alternativa flexível à herança para estender funcionalidades.</p>
        </div>
      </div>
    </div>
  `
};