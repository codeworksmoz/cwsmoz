
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p2-java",
  language: "java",
  title: "Lab Java: Casting e Tipagem Estrita",
  description: "Cálculos matemáticos com segurança de tipos.",
  statement: "Calcule a média de dois inteiros garantindo um resultado decimal.",
  template: `public class Main {
    public static void main(String[] args) {
        int a = 15;
        int b = 10;
        
        // Calcule a média. Dica: use 2.0 para evitar a divisão inteira!
        double media = ;
        
        System.out.println(media);
    }
}`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">☕ O Rigor do Java</h3>
      <p>Em Java, se dividires um <code>int</code> por outro <code>int</code>, o resultado será um <code>int</code> (a parte decimal é perdida). Isto chama-se <strong>Divisão Inteira</strong> e é causa de muitos bugs em sistemas enterprise.</p>
      
      <div class="bg-muted p-4 rounded-xl border border-primary/20 space-y-2">
        <p class="text-xs font-bold">🏛️ Exemplo de Aplicação (Banking):</p>
        <p class="text-[10px] text-muted-foreground leading-relaxed">
          Num sistema de core banking, o arredondamento é proibido. <br/>
          <code>double juros = principal * (taxa / 100.0);</code>
        </p>
      </div>

      <p class="text-xs">
        <strong>Missão:</strong> Para obter 12.5 em vez de 12, deves garantir que divides por <code>2.0</code> (um double), forçando o Java a promover o cálculo para decimal.
      </p>
    </div>
  `,
  objectives: [
    {
      id: "java_div",
      description: "Calcular média dividindo por 2.0.",
      test: "/ 2.0"
    }
  ]
};
