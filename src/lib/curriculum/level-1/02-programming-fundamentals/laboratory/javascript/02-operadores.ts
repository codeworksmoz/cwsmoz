import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p2-js",
  language: "javascript",
  title: "Missão: O Motor de Cálculo",
  description: "Aprenda a realizar operações matemáticas e lógicas de comparação.",
  statement: "Calcule a média de notas e valide se o aluno passou.",
  isProjectPart: true,
  template: ``,
  youtubeVideoId: "95v88Oit0H8",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🧮 Operadores e Precedência</h3>
      <p>Para calcular a média, somamos e dividimos. Os parênteses <code>( )</code> garantem que a soma aconteça antes da divisão.</p>
      
      <div class="bg-muted p-4 rounded-xl border border-white/10 space-y-2">
        <p class="text-xs font-bold text-yellow-500">A Ferramenta do Dia:</p>
        <p class="text-[11px] font-mono leading-relaxed">
          <span class="text-primary">const</span> media = (15 + 7) / 2; <br/>
          <span class="text-primary">const</span> passou = media >= 10; <br/>
          <span class="text-primary">console.log</span>(passou);
        </p>
      </div>

      <p class="text-xs">
        <strong>Instruções de Construção:</strong>
        <br/>1. Cria variáveis <code>n1</code> e <code>n2</code> com valores 15 e 7.
        <br/>2. Calcula a <code>media</code> usando (n1 + n2) / 2.
        <br/>3. Cria a variável <code>aprovado</code> comparando se media é maior ou igual (>=) a 10.
        <br/>4. Mostra o valor de <code>aprovado</code> no terminal.
      </p>
    </div>
  `,
  objectives: [
    { id: "obj1", description: "Calcular média com parênteses", test: "(n1 + n2) / 2" },
    { id: "obj2", description: "Usar operador >= para aprovação", test: ">= 10" },
    { id: "obj3", description: "Mostrar resultado no terminal", test: "console.log(" }
  ]
};