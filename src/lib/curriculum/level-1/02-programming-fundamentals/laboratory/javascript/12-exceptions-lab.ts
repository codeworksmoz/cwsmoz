import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p12-js",
  language: "javascript",
  title: "Missão: Blindagem de Cálculos",
  description: "Crie uma função resiliente que lida com erros matemáticos.",
  statement: "Implemente uma função de divisão que lance um erro se o divisor for zero, e use try/catch para a executar.",
  isProjectPart: true,
  template: ``,
  youtubeVideoId: "95v88Oit0H8",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🛡️ Protegendo a Divisão</h3>
      <p>Dividir por zero é um erro matemático clássico. Vamos proteger o nosso motor de cálculo usando <code>throw</code> e <code>try/catch</code>.</p>
      
      <div class="bg-muted p-4 rounded-xl border border-white/10 space-y-2">
        <p class="text-xs font-bold text-yellow-500">A Ferramenta do Dia:</p>
        <p class="text-[11px] font-mono leading-relaxed">
          <span class="text-primary">if</span> (b === 0) <span class="text-primary">throw</span> new Error("Zero!"); <br/>
          <span class="text-primary">try</span> { ... } <span class="text-primary">catch</span> (e) { console.log(e.message); }
        </p>
      </div>

      <p class="text-xs">
        <strong>Instruções de Construção:</strong>
        <br/>1. Cria a função <code>dividir(a, b)</code>.
        <br/>2. Se <code>b</code> for 0, lança o erro: <code>throw new Error("Erro: Divisao por zero")</code>.
        <br/>3. Fora da função, usa um bloco <code>try</code> para chamar <code>dividir(10, 0)</code>.
        <br/>4. No <code>catch</code>, mostra a mensagem do erro no terminal com <code>console.log</code>.
      </p>
    </div>
  `,
  objectives: [
    { id: "obj1", description: "Lançar erro se divisor for 0", test: "throw new Error" },
    { id: "obj2", description: "Utilizar bloco try/catch", test: "catch" },
    { id: "obj3", description: "Exibir a mensagem de erro", test: "console.log" }
  ]
};