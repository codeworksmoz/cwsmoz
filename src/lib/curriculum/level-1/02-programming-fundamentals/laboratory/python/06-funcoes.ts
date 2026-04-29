import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p6-py",
  language: "python",
  title: "Missão: Conversor Pythonic",
  description: "Aprenda a definir sub-rotinas reutilizáveis em Python.",
  statement: "Crie uma função que converta Meticais para Dólares e imprima o resultado.",
  isProjectPart: true,
  template: ``,
  youtubeVideoId: "mNst8vX-u8E",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🐍 Funções com 'def'</h3>
      <p>Em Python, usamos <code>def</code> para "definir" uma função. O segredo é manter a indentação correta para o corpo da função.</p>
      
      <div class="bg-muted p-4 rounded-xl border border-white/10 space-y-2">
        <p class="text-xs font-bold text-yellow-500">A Ferramenta do Dia:</p>
        <p class="text-[11px] font-mono leading-relaxed">
          <span class="text-primary">def</span> converter(valor):<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-primary">return</span> valor / 64<br/><br/>
          res = converter(1280)<br/>
          <span class="text-primary">print</span>(res)
        </p>
      </div>

      <p class="text-xs leading-relaxed">
        <strong>Instruções de Construção:</strong>
        <br/>1. Define a função com <code>def converter(valor_mzn):</code>.
        <br/>2. Dentro dela, retorna o cálculo <code>valor_mzn / 64</code>.
        <br/>3. Chama a função passando 1280 e guarda em <code>resultado</code>.
        <br/>4. Imprime <code>resultado</code> no terminal para validação.
      </p>
    </div>
  `,
  objectives: [
    { id: "obj1", description: "Usar def para criar a função", test: "def converter" },
    { id: "obj2", description: "Usar return para devolver o valor", test: "return" },
    { id: "obj3", description: "Mostrar o valor 20.0 no terminal", test: "print" }
  ]
};
