import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p5-py",
  language: "python",
  title: "Missão: Acumulador Pythonic",
  description: "Aprenda a iterar sobre sequências numéricas de forma eficiente.",
  statement: "Crie um loop que some os números de 1 a 5 e exiba o total.",
  isProjectPart: true,
  template: ``,
  youtubeVideoId: "8hly31xKli0",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🐍 Loops em Python</h3>
      <p>Em Python, usamos <code>for</code> com a função <code>range()</code>. Lembra-te que o range não inclui o número final, por isso para chegar a 5, usamos 6.</p>
      
      <div class="bg-muted p-4 rounded-xl border border-white/10 space-y-2">
        <p class="text-xs font-bold text-yellow-500">A Ferramenta do Dia:</p>
        <p class="text-[11px] font-mono leading-relaxed">
          total = 0<br/>
          <span class="text-primary">for</span> i <span class="text-primary">in</span> range(1, 6):<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;total += i<br/>
          <span class="text-primary">print</span>(total)
        </p>
      </div>

      <p class="text-xs">
        <strong>Instruções de Construção:</strong>
        <br/>1. Cria a variável <code>total = 0</code>.
        <br/>2. Inicia o loop com <code>for i in range(1, 6):</code>.
        <br/>3. Dentro do loop, usa <code>total += i</code> para acumular o valor (não esqueças a indentação!).
        <br/>4. Exibe o resultado final com <code>print(total)</code>.
      </p>
    </div>
  `,
  objectives: [
    { id: "obj1", description: "Usar range(1, 6)", test: "range(1, 6)" },
    { id: "obj2", description: "Acumular valor com +=", test: "+=" },
    { id: "obj3", description: "Mostrar o resultado 15 no terminal", test: "print" }
  ]
};