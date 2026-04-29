import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p5-js",
  language: "javascript",
  title: "Missão: O Contador Automático",
  description: "Aprenda a automatizar tarefas repetitivas usando loops.",
  statement: "Crie um loop que some os números de 1 a 5 e exiba o total no terminal.",
  isProjectPart: true,
  template: ``,
  youtubeVideoId: "8hly31xKli0",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🔄 O Poder da Repetição</h3>
      <p>Um loop <code>for</code> permite-nos repetir uma ação mudando um contador. Vamos usá-lo para acumular valores numa variável.</p>
      
      <div class="bg-muted p-4 rounded-xl border border-white/10 space-y-2">
        <p class="text-xs font-bold text-yellow-500">A Ferramenta do Dia:</p>
        <p class="text-[11px] font-mono leading-relaxed">
          <span class="text-primary">let</span> total = 0;<br/>
          <span class="text-primary">for</span> (<span class="text-primary">let</span> i = 1; i <= 5; i++) {<br/>
          &nbsp;&nbsp;total += i;<br/>
          }<br/>
          <span class="text-primary">console.log</span>(total);
        </p>
      </div>

      <p class="text-xs">
        <strong>Instruções de Construção:</strong>
        <br/>1. Cria a variável <code>total</code> começando em 0.
        <br/>2. Inicia o loop <code>for</code> com <code>i = 1</code>.
        <br/>3. A condição deve ser <code>i <= 5</code>.
        <br/>4. Dentro do loop, soma o valor de <code>i</code> ao <code>total</code> (Dica: use +=).
        <br/>5. Exibe o <code>total</code> final no terminal usando <code>console.log</code>.
      </p>
    </div>
  `,
  objectives: [
    { id: "obj1", description: "Criar variável total = 0", test: "let total = 0" },
    { id: "obj2", description: "Implementar loop for(let i=1; i<=5; i++)", test: "for" },
    { id: "obj3", description: "Exibir o resultado 15 no terminal", test: "console.log" }
  ]
};