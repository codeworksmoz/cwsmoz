import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p9-py",
  language: "python",
  title: "Missão: Regressão Pythonic",
  description: "Crie um algoritmo recursivo em Python.",
  statement: "Implemente uma função de contagem decrescente recursiva.",
  isProjectPart: true,
  template: ``,
  youtubeVideoId: "8ME9u065vD4",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🐍 Recursão em Python</h3>
      <p>Em Python, a recursão funciona de forma idêntica, mas deves respeitar a indentação rigorosa.</p>
      
      <div class="bg-muted p-4 rounded-xl border border-white/10 space-y-2">
        <p class="text-xs font-bold text-yellow-500">A Ferramenta do Dia:</p>
        <p class="text-[11px] font-mono leading-relaxed">
          <span class="text-primary">def</span> contar(n):<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-primary">if</span> n == 0:<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-primary">return</span><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-primary">print</span>(n)<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;contar(n - 1)
        </p>
      </div>

      <p class="text-xs">
        <strong>Instruções de Construção:</strong>
        <br/>1. Define a função <code>contagem_regressiva(n)</code>.
        <br/>2. Caso Base: Se <code>n == 0</code>, <code>return</code>.
        <br/>3. Usa <code>print(n)</code>.
        <br/>4. Chama <code>contagem_regressiva(n - 1)</code>.
        <br/>5. No final, chama <code>contagem_regressiva(3)</code>.
      </p>
    </div>
  `,
  objectives: [
    { id: "obj1", description: "Definir caso base if n == 0", test: "if n == 0:" },
    { id: "obj2", description: "Chamada recursiva n - 1", test: "contagem_regressiva(n - 1)" },
    { id: "obj3", description: "Executar no terminal", test: "contagem_regressiva(3)" }
  ]
};
