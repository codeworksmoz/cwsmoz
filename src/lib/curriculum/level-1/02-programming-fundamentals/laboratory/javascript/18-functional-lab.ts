import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p18-js",
  language: "javascript",
  title: "Missão: O Processador de Coleções",
  description: "Transforme dados usando o poder do Filter e Map.",
  statement: "Filtre números pares de uma lista e multiplique-os por 10.",
  isProjectPart: true,
  template: ``,
  youtubeVideoId: "mNst8vX-u8E",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">λ Transformação em Massa</h3>
      <p>O objetivo é evitar loops manuais e usar o encadeamento de funções funcionais.</p>
      
      <div class="bg-muted p-4 rounded-xl border border-white/10 space-y-2">
        <p class="text-xs font-bold text-yellow-500">A Ferramenta do Dia:</p>
        <p class="text-[11px] font-mono leading-relaxed">
          <span class="text-primary">const</span> res = lista<br/>
          &nbsp;&nbsp;.<span class="text-accent">filter</span>(n => n % 2 === 0)<br/>
          &nbsp;&nbsp;.<span class="text-accent">map</span>(n => n * 10);
        </p>
      </div>

      <p class="text-xs">
        <strong>Instruções de Construção:</strong>
        <br/>1. Cria a constante <code>nums</code> com os valores [1, 2, 3, 4, 5].
        <br/>2. Cria a variável <code>resultado</code>.
        <br/>3. Usa o <code>.filter()</code> para pegar apenas números onde <code>n % 2 === 0</code>.
        <br/>4. Encadeia um <code>.map()</code> para fazer <code>n * 10</code>.
        <br/>5. Mostra o <code>resultado</code> no terminal.
      </p>
    </div>
  `,
  objectives: [
    { id: "obj1", description: "Utilizar o método .filter()", test: ".filter(" },
    { id: "obj2", description: "Utilizar o método .map()", test: ".map(" },
    { id: "obj3", description: "Chegar ao resultado [20, 40]", test: "console.log" }
  ]
};