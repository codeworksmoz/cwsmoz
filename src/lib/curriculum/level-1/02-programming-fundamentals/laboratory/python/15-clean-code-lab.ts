import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p15-py",
  language: "python",
  title: "Missão: Zen do Python e Refatoração",
  description: "Aplique o estilo snake_case e o princípio DRY para limpar o código.",
  statement: "Limpe o script usando nomes descritivos e eliminando cálculos repetidos.",
  isProjectPart: true,
  template: ``,
  youtubeVideoId: "8hly31xKli0",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🐍 Pythonic & Clean</h3>
      <p>O Zen do Python diz: "Legibilidade conta". Vamos transformar nomes genéricos em nomes de engenharia.</p>
      
      <div class="bg-red-500/10 p-3 rounded border border-red-500/20 mb-4">
        <p class="text-[10px] font-mono leading-tight">
          # AMADOR:<br/>
          x = 1000<br/>
          y = 0.05<br/>
          print(x * y)<br/>
          print((x * y) + x)
        </p>
      </div>

      <p class="text-xs leading-relaxed">
        <strong>Instruções de Limpeza (Python):</strong>
        <br/>1. Renomeia <code>x</code> para <code>saldo</code> e <code>y</code> para <code>taxa_juros</code>.
        <br/>2. Cria a variável <code>valor_juros</code> calculando <code>saldo * taxa_juros</code>.
        <br/>3. Cria <code>saldo_final</code> somando <code>saldo + valor_juros</code>.
        <br/>4. Imprime o <code>saldo_final</code>.
      </p>
    </div>
  `,
  objectives: [
    { id: "obj1", description: "Usar snake_case (taxa_juros)", test: "taxa_juros =" },
    { id: "obj2", description: "Princípio DRY (valor_juros)", test: "valor_juros =" },
    { id: "obj3", description: "Imprimir saldo_final", test: "print(saldo_final)" }
  ]
};
