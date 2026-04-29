import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "pf-t9",
  title: "Recursão: A Arte da Auto-chamada",
  youtubeVideoId: "8ME9u065vD4",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🔄 O Loop Infinito Controlado
        </h2>
        <p class="text-lg leading-relaxed">
          Recursão é uma técnica onde uma função resolve um problema chamando uma versão menor de si mesma. É a base para algoritmos de busca complexos e estruturas de dados como árvores e grafos.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Os Dois Pilares da Recursão</h3>
        <p>Para uma função recursiva não crashar o computador, ela deve cumprir:</p>
        <ul class="space-y-4">
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
            <div class="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 font-bold">1</div>
            <div>
              <p class="font-bold text-sm">Caso Base (Stop Condition):</p>
              <p class="text-xs text-muted-foreground">A condição que faz a função parar de se chamar. Sem isto, terás um <strong>Stack Overflow</strong>.</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
            <div class="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 shrink-0 font-bold">2</div>
            <div>
              <p class="font-bold text-sm">Caso Recursivo:</p>
              <p class="text-xs text-muted-foreground">Onde a função se chama novamente com um valor menor, aproximando-se do caso base.</p>
            </div>
          </li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🧠 A Call Stack (Pilha de Chamadas)</h3>
          <p class="text-sm leading-relaxed mb-4">
            Imagina que a cada chamada, o computador coloca um "prato" numa pilha. Ele só começa a tirar os pratos (resolver o valor final) quando atinge o caso base.
          </p>
          <div class="bg-black/40 p-4 rounded-xl font-code text-xs text-accent">
            fatorial(3) <br/>
            &nbsp;&nbsp;-> 3 * fatorial(2) <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;-> 2 * fatorial(1) <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-> Caso Base: 1
          </div>
        </div>

        <div class="bg-yellow-500/5 p-6 rounded-2xl border border-yellow-500/20 mt-6">
          <h4 class="font-bold text-yellow-500 mb-2 flex items-center gap-2">
            🚀 Dica de Elite: Quando usar?
          </h4>
          <p class="text-sm leading-relaxed">
            Recursão é excelente para problemas que podem ser divididos em sub-problemas idênticos (Dividir para Conquistar). No entanto, para tarefas simples, um loop <code>for</code> costuma ser mais performático e consome menos memória da <i>Stack</i>.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "pf-t9-quiz"
};
