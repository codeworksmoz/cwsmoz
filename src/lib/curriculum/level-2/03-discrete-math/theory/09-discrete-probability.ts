import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "math-t9",
  title: "Probabilidade Discreta e Teorema de Bayes",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🎲 Lógica sob Incerteza</h2>
        <p class="text-lg leading-relaxed">
          A probabilidade discreta lida com eventos contáveis. Na engenharia, é o que permite criar filtros de SPAM, prever falhas em servidores e otimizar algoritmos randomizados.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Espaço Amostral e Eventos</h3>
        <p class="text-sm">P(A) = |A| / |S|. A probabilidade de um evento é a razão entre os casos favoráveis e o total de possibilidades.</p>

        <h3 class="text-xl font-bold font-headline">2. Probabilidade Condicional e Bayes</h3>
        <p class="text-sm">Como atualizar a probabilidade de um evento após recebermos nova informação? O <strong>Teorema de Bayes</strong> é a fundação da IA moderna e dos sistemas de recomendação.</p>
        
        <div class="bg-black/40 p-5 rounded-xl border font-code text-sm text-center text-accent">
          P(A|B) = [P(B|A) * P(A)] / P(B)
        </div>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">📈 Valor Esperado (E)</h3>
          <p class="text-sm leading-relaxed">
            É a média ponderada dos resultados possíveis. Usamos isto para calcular a complexidade média (Average Case) de algoritmos como o Quick Sort.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "math-q9"
};
