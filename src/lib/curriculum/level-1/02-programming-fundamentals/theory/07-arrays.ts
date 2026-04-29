import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "pf-t7",
  title: "Arrays e Coleções: A Ciência da Organização em Massa",
  youtubeVideoId: "v4cd1O4zkGw",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          📚 O que é um Array?
        </h2>
        <p class="text-lg leading-relaxed">
          Um <strong>Array</strong> (ou vetor) é uma estrutura de dados que armazena uma coleção de elementos, geralmente do mesmo tipo, em blocos contíguos de memória. Em vez de criar 100 variáveis, criamos uma "caixa" com 100 compartimentos numerados.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Indexação: Por que começamos no Zero?</h3>
        <p>Na engenharia, o índice não é apenas uma contagem, é um <strong>deslocamento (offset)</strong> da posição inicial da memória. O primeiro item está a "zero" distância do início.</p>
        <div class="bg-black/40 p-4 rounded-xl border font-code text-center text-accent tracking-[0.5em] shadow-inner">
          ["Moz", "Dev", "Elite"] <br/>
          &nbsp;&nbsp;[0]&nbsp;&nbsp;&nbsp;&nbsp;[1]&nbsp;&nbsp;&nbsp;&nbsp;[2]
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. Dinâmica de Manipulação</h3>
        <p>Trabalhar com arrays envolve quatro operações fundamentais que todo o engenheiro deve dominar:</p>
        <ul class="space-y-4">
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl border border-white/5">
            <div class="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 shrink-0 font-bold">+</div>
            <div>
              <p class="font-bold text-sm">Inserção (Push/Unshift):</p>
              <p class="text-xs text-muted-foreground">Adicionar elementos no fim ou no início da lista.</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl border border-white/5">
            <div class="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 font-bold">-</div>
            <div>
              <p class="font-bold text-sm">Remoção (Pop/Shift):</p>
              <p class="text-xs text-muted-foreground">Retirar o último ou o primeiro elemento da coleção.</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl border border-white/5">
            <div class="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0 font-bold">#</div>
            <div>
              <p class="font-bold text-sm">Contagem (Length):</p>
              <p class="text-xs text-muted-foreground">Saber quantos itens existem. Nota: O último índice é sempre <code>length - 1</code>.</p>
            </div>
          </li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🔄 Iteração Master</h3>
          <p class="text-sm mb-4">A forma mais comum de processar arrays é através de loops. Podemos percorrer cada item para realizar cálculos ou exibir informações.</p>
          <div class="bg-black/40 p-4 rounded-xl font-code text-xs text-accent">
            // Exemplo JS: <br/>
            for (let item of lista) { console.log(item); }
          </div>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Performance e Memória
          </h4>
          <p class="text-sm leading-relaxed">
            Aceder a um item de um array via índice (ex: <code>lista[5]</code>) tem complexidade <strong>O(1)</strong>, o que significa que é instantâneo, não importa se o array tem 10 ou 10 milhões de itens. É por isso que arrays são a base de quase todos os algoritmos de alta performance.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "pf-t7-quiz"
};
