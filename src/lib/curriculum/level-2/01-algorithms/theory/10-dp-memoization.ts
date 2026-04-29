
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "alg-t10",
  title: "Programação Dinâmica I: Memoization (Top-Down)",
  content: `
    <div class="space-y-8">
      <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-indigo-400">🧠 Aqueles que não lembram o passado...</h2>
        <p class="text-lg leading-relaxed">
          Programação Dinâmica (DP) é uma técnica para resolver problemas complexos quebrando-os em sub-problemas sobrepostos. O segredo da DP de elite é <strong>nunca calcular o mesmo valor duas vezes</strong>.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">Memoization (Top-Down)</h3>
        <p class="text-sm">É uma abordagem recursiva onde guardamos o resultado de cada chamada de função numa "tabela de consulta" (geralmente um Hash Map ou Array). Se a função for chamada com o mesmo parâmetro novamente, retornamos o valor guardado instantaneamente.</p>
        
        <div class="bg-black/40 p-5 rounded-xl border font-code text-xs text-accent space-y-2">
          <p>// Fibonacci sem Memoization: O(2^n) - Explosão exponencial!</p>
          <p>// Fibonacci COM Memoization: O(n) - Eficiência linear.</p>
        </div>

        <div class="bg-yellow-500/5 p-5 rounded-xl border border-yellow-500/20 mt-6 shadow-inner">
          <h4 class="font-bold text-yellow-500 mb-2">💎 Tradeoff de Engenharia</h4>
          <p class="text-sm leading-relaxed">
            Ganhamos velocidade extrema (Tempo) ao custo de um pouco mais de memória RAM (Espaço) para guardar a tabela de resultados. Em sistemas de escala global, este é quase sempre um excelente negócio.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "alg-q10"
};
