
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "alg-t2",
  title: "Busca Binária: Divisão e Conquista",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🔍 Encontrando a Agulha em O(log n)
        </h2>
        <p class="text-lg leading-relaxed">
          A Busca Binária é um dos algoritmos mais eficientes da computação. Em vez de verificar um por um, ela "adivinha" o meio e descarta metade da lista em cada tentativa.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 text-red-400">⚠️ O Requisito Obrigatório</h3>
        <p class="text-sm">A Busca Binária <strong>APENAS</strong> funciona se a lista estiver <strong>ORDENADA</strong>. Sem ordenação, o motor de busca não consegue saber se o alvo está para a esquerda ou para a direita.</p>

        <h3 class="text-xl font-bold font-headline">O Algoritmo em 3 Passos:</h3>
        <ul class="space-y-4">
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl border border-white/5">
            <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 font-bold">1</div>
            <div>
              <p class="font-bold">Calcular o Meio:</p>
              <p class="text-xs text-muted-foreground"><code>meio = (inicio + fim) / 2</code></p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl border border-white/5">
            <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 font-bold">2</div>
            <div>
              <p class="font-bold">Comparar:</p>
              <p class="text-xs text-muted-foreground">Se o valor do meio for o alvo, terminámos. Se o alvo for menor, movemos o "fim" para <code>meio - 1</code>.</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl border border-white/5">
            <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 font-bold">3</div>
            <div>
              <p class="font-bold">Repetir:</p>
              <p class="text-xs text-muted-foreground">Continue até encontrar o valor ou até o "inicio" ultrapassar o "fim".</p>
            </div>
          </li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h4 class="font-bold text-indigo-400 mb-2 italic">Exemplo de Escala:</h4>
          <p class="text-sm leading-relaxed">
            Numa lista de 1 MILHÃO de nomes:<br/>
            - Busca Linear: Pode levar 1.000.000 de passos.<br/>
            - Busca Binária: Leva no máximo <strong>20 passos</strong>.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "alg-q2"
};
