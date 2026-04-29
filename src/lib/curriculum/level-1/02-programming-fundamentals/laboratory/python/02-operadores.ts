
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p2-py",
  language: "python",
  title: "Missão: Matemática Pythonic",
  description: "Realize cálculos de precisão e lógica booleana.",
  statement: "Calcule a média e verifique se o número é par.",
  isProjectPart: true,
  template: ``,
  youtubeVideoId: "95v88Oit0H8",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🧮 Operadores e Módulo</h3>
      <p>Em Python, o símbolo <code>%</code> (módulo) devolve o resto da divisão. Se o resto da divisão por 2 for zero, o número é par!</p>
      
      <div class="bg-muted p-4 rounded-xl border border-white/10 space-y-2">
        <p class="text-xs font-bold text-yellow-500">A Ferramenta do Dia:</p>
        <p class="text-[11px] font-mono leading-relaxed">
          media = (15 + 7) / 2 <br/>
          eh_par = 10 % 2 == 0 <br/>
          print(eh_par)
        </p>
      </div>

      <p class="text-xs">
        <strong>Instruções de Construção:</strong>
        <br/>1. Cria a variável <code>media</code> calculando (15 + 7) / 2.
        <br/>2. Cria a variável <code>num</code> com valor 42.
        <br/>3. Cria <code>eh_par</code> usando o operador <code>% 2 == 0</code> sobre o num.
        <br/>4. Usa <code>print(eh_par)</code> para ver True ou False.
      </p>
    </div>
  `,
  objectives: [
    { id: "obj1", description: "Calcular média real", test: "/ 2" },
    { id: "obj2", description: "Usar operador % para paridade", test: "% 2 == 0" },
    { id: "obj3", description: "Mostrar resultado no terminal", test: "print(" }
  ]
};
