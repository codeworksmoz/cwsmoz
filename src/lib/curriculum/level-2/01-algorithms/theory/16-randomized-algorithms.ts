import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "alg-t16",
  title: "Algoritmos Probabilistas e Aleatoriedade",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🎲 Apostando na Eficiência</h2>
        <p class="text-lg leading-relaxed">
          Algoritmos randomizados usam a sorte para ganhar velocidade. Eles dividem-se em duas categorias principais conforme a sua garantia de correção.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-xl">
          <h4 class="font-bold text-accent mb-2">Las Vegas</h4>
          <p class="text-xs">Sempre retornam a resposta correta, mas o tempo de execução é aleatório. <br/>Ex: <strong>Quick Sort</strong> com pivô aleatório.</p>
        </div>
        <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-xl">
          <h4 class="font-bold text-accent mb-2">Monte Carlo</h4>
          <p class="text-xs">O tempo de execução é fixo, mas existe uma pequena probabilidade de erro. <br/>Ex: Teste de Primalidade de Miller-Rabin.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "alg-q16"
};
