import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p14-js",
  language: "javascript",
  title: "Missão: Auditoria de Memória",
  description: "Entenda a diferença física entre Primitivos e Objetos na memória RAM.",
  statement: "Crie uma variável na Stack e uma no Heap, demonstrando a diferença de alocação.",
  isProjectPart: true,
  template: ``,
  youtubeVideoId: "TQvD-Uq86oY",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🔋 Auditoria de Memória</h3>
      <p>Em JavaScript, o motor V8 decide onde colocar os dados. Vamos simular uma alocação de alta fidelidade.</p>
      
      <div class="bg-muted p-4 rounded-xl border border-white/10 space-y-2">
        <p class="text-xs font-bold text-yellow-500">A Ferramenta do Dia:</p>
        <p class="text-[11px] font-mono leading-relaxed">
          <span class="text-muted-foreground">// Stack: Rápido, valor direto</span> <br/>
          <span class="text-primary">const</span> idade = 25; <br/><br/>
          <span class="text-muted-foreground">// Heap: Dinâmico, via referência</span> <br/>
          <span class="text-primary">const</span> usuario = { nome: "Edson" };
        </p>
      </div>

      <p class="text-xs leading-relaxed">
        <strong>Instruções de Construção:</strong>
        <br/>1. Cria a constante <code>pontos</code> (Stack) com o valor 100.
        <br/>2. Cria a constante <code>config</code> (Heap) contendo um objeto com <code>tema: "dark"</code>.
        <br/>3. Usa o <code>console.log</code> para exibir as duas variáveis.
      </p>
    </div>
  `,
  objectives: [
    { id: "obj1", description: "Criar primitiva (Stack)", test: "const pontos = 100" },
    { id: "obj2", description: "Criar objeto (Heap)", test: "const config = {" },
    { id: "obj3", description: "Exibir no terminal", test: "console.log" }
  ]
};
