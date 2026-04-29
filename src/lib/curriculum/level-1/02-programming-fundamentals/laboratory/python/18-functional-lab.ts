import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p18-py",
  language: "python",
  title: "Missão: Compreensões Pythonic",
  description: "Processe listas de forma elegante e performática usando List Comprehensions.",
  statement: "Crie uma nova lista apenas com os nomes que começam com 'A' em maiúsculas.",
  isProjectPart: true,
  template: ``,
  youtubeVideoId: "mNst8vX-u8E",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🐍 O Jeito Funcional do Python</h3>
      <p>Em Python, as 'List Comprehensions' são a forma mais rápida de realizar Map e Filter simultaneamente.</p>
      
      <div class="bg-muted p-4 rounded-xl border border-white/10 space-y-2">
        <p class="text-xs font-bold text-yellow-500">A Ferramenta do Dia:</p>
        <p class="text-[11px] font-mono leading-relaxed">
          res = [x.upper() <span class="text-primary">for</span> x <span class="text-primary">in</span> lista <span class="text-primary">if</span> x.startswith("A")]
        </p>
      </div>

      <p class="text-xs">
        <strong>Instruções de Construção:</strong>
        <br/>1. Cria a lista <code>nomes</code> com ["Ana", "Beto", "Amélia"].
        <br/>2. Cria a variável <code>filtro</code>.
        <br/>3. Usa uma List Comprehension para transformar em maiúsculas (<code>n.upper()</code>) se o nome começar com "A" (<code>n.startswith("A")</code>).
        <br/>4. Imprime <code>filtro</code> no terminal.
      </p>
    </div>
  `,
  objectives: [
    { id: "obj1", description: "Usar List Comprehension [ ... ]", test: "for" },
    { id: "obj2", description: "Usar condição if dentro da lista", test: "if" },
    { id: "obj3", description: "Usar o método .upper()", test: ".upper()" }
  ]
};