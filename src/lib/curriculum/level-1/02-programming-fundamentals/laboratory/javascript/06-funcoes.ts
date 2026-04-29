import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p6-js",
  language: "javascript",
  title: "Missão: A Fábrica de Cálculos",
  description: "Aprenda a modularizar lógica para reutilização infinita.",
  statement: "Crie uma função que converta Meticais para Dólares e exiba o resultado no terminal.",
  isProjectPart: true,
  template: ``,
  youtubeVideoId: "mNst8vX-u8E",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🛠️ Construindo Módulos</h3>
      <p>Uma função é como uma máquina: tu dás um valor, ela processa e devolve o resultado. Vamos criar um conversor de moeda profissional.</p>
      
      <div class="bg-muted p-4 rounded-xl border border-white/10 space-y-2">
        <p class="text-xs font-bold text-yellow-500">A Ferramenta do Dia:</p>
        <p class="text-[11px] font-mono leading-relaxed">
          <span class="text-primary">function</span> converter(valor) { <br/>
          &nbsp;&nbsp;<span class="text-primary">return</span> valor / 64; <br/>
          }<br/><br/>
          <span class="text-primary">const</span> res = converter(1280);<br/>
          <span class="text-primary">console.log</span>(res);
        </p>
      </div>

      <p class="text-xs leading-relaxed">
        <strong>Instruções de Construção:</strong>
        <br/>1. Cria uma função chamada <code>converter</code> que aceite o parâmetro <code>valorMZN</code>.
        <br/>2. Dentro dela, usa o <code>return</code> para devolver o valor dividido por 64 (taxa atual).
        <br/>3. Fora da função, chama a <code>converter(1280)</code> e guarda o resultado numa variável chamada <code>resultado</code>.
        <br/>4. Usa o <code>console.log(resultado)</code> para mostrar o valor final no terminal.
      </p>
    </div>
  `,
  objectives: [
    { id: "obj1", description: "Definir a função converter(valorMZN)", test: "function converter" },
    { id: "obj2", description: "Utilizar a palavra-chave return para o cálculo", test: "return" },
    { id: "obj3", description: "Exibir o resultado 20 no terminal", test: "console.log" }
  ]
};
