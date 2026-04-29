import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t7",
  title: "Complexidade de Algoritmos: A Notação Big O",
  youtubeVideoId: "v4cd1O4zkGw",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9"/><polyline points="21 3 21 9 15 9"/></svg>
          Escala e Eficiência
        </h2>
        <p class="text-lg leading-relaxed">
          Como engenheiros, não medimos a velocidade em segundos (que depende do computador), mas sim em <strong>passos de execução</strong> conforme os dados de entrada (N) crescem. A Notação Big O descreve o pior cenário possível.
        </p>
        <div class="mt-4 flex gap-4 text-sm">
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            <span class="text-gray-400">Notação Bachmann-Landau</span>
          </div>
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/></svg>
            <span class="text-gray-400">Análise Assintótica</span>
          </div>
        </div>
      </div>

      <div class="space-y-6">
        <!-- POR QUE BIG O? -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">Por que usamos Big O e não segundos?</h3>
        
        <div class="bg-gray-900 p-5 rounded-xl border border-primary/20 my-4">
          <div class="space-y-3 text-sm">
            <div class="flex items-start gap-3">
              <div class="bg-red-500/10 p-2 rounded flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-red-400"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
              </div>
              <div>
                <p class="font-bold text-red-400">Problema 1: Hardware diferente</p>
                <p class="text-xs text-gray-400 mt-1">Um algoritmo pode demorar 1s num computador rápido e 10s num lento. Medir em segundos não é confiável.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="bg-red-500/10 p-2 rounded flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-red-400"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
              </div>
              <div>
                <p class="font-bold text-red-400">Problema 2: Linguagens diferentes</p>
                <p class="text-xs text-gray-400 mt-1">C pode ser 100x mais rápido que Python para a mesma tarefa. Big O abstrai a linguagem.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="bg-green-500/10 p-2 rounded flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div>
                <p class="font-bold text-green-400">Solução: Medir operações</p>
                <p class="text-xs text-gray-400 mt-1">Contamos quantas operações o algoritmo faz em relação ao tamanho da entrada (N).</p>
              </div>
            </div>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">As Classes de Complexidade Comuns</h3>
        
        <!-- O(1) -->
        <div class="p-4 bg-card border rounded-xl border-green-500/20 hover:border-green-500/50 transition-all">
          <h4 class="font-bold text-green-500 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            O(1) - Tempo Constante
          </h4>
          <p class="text-xs text-muted-foreground mb-3">Leva o mesmo tempo independentemente de haver 1 ou 1 milhão de itens.</p>
          <div class="bg-black/40 p-3 rounded font-code text-xs">
            <p class="text-gray-400 mb-1">// Exemplo: Aceder ao primeiro item de um array</p>
            <p><span class="text-blue-400">função</span> <span class="text-yellow-400">getFirst</span>(array) {</p>
            <p class="ml-4"><span class="text-purple-400">retorne</span> array[0]</p>
            <p>}</p>
            <p class="mt-2 text-green-400">// 1 operação → O(1)</p>
          </div>
        </div>

        <!-- O(n) -->
        <div class="p-4 bg-card border rounded-xl border-blue-500/20 hover:border-blue-500/50 transition-all">
          <h4 class="font-bold text-blue-500 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            O(n) - Tempo Linear
          </h4>
          <p class="text-xs text-muted-foreground mb-3">O esforço cresce na mesma proporção que os dados. Para N=1000 itens, ~1000 operações.</p>
          <div class="bg-black/40 p-3 rounded font-code text-xs">
            <p class="text-gray-400 mb-1">// Exemplo: Procurar um nome numa lista</p>
            <p><span class="text-blue-400">função</span> <span class="text-yellow-400">findName</span>(lista, alvo) {</p>
            <p class="ml-4"><span class="text-accent">para</span> (cada item <span class="text-accent">em</span> lista) {</p>
            <p class="ml-8"><span class="text-accent">se</span> (item == alvo) <span class="text-purple-400">retorne</span> item</p>
            <p class="ml-4">}</p>
            <p>}</p>
            <p class="mt-2 text-blue-400">// N operações → O(n)</p>
          </div>
        </div>

        <!-- O(log n) -->
        <div class="p-4 bg-card border rounded-xl border-yellow-500/20 hover:border-yellow-500/50 transition-all">
          <h4 class="font-bold text-yellow-500 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            O(log n) - Logarítmico
          </h4>
          <p class="text-xs text-muted-foreground mb-3">Divide o problema ao meio a cada passo. Para 1 milhão de itens, apenas ~20 operações!</p>
          <div class="bg-black/40 p-3 rounded font-code text-xs">
            <p class="text-gray-400 mb-1">// Exemplo: Busca Binária em lista ordenada</p>
            <p><span class="text-blue-400">função</span> <span class="text-yellow-400">binarySearch</span>(lista, alvo) {</p>
            <p class="ml-4">esquerda = 0</p>
            <p class="ml-4">direita = lista.tamanho - 1</p>
            <p class="ml-4"><span class="text-accent">enquanto</span> (esquerda <= direita) {</p>
            <p class="ml-8">meio = (esquerda + direita) / 2</p>
            <p class="ml-8"><span class="text-accent">se</span> (lista[meio] == alvo) <span class="text-purple-400">retorne</span> meio</p>
            <p class="ml-4">}</p>
            <p>}</p>
            <p class="mt-2 text-yellow-400">// log₂(N) operações → O(log n)</p>
          </div>
        </div>

        <!-- O(n²) -->
        <div class="p-4 bg-card border rounded-xl border-red-500/20 hover:border-red-500/50 transition-all">
          <h4 class="font-bold text-red-500 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
            O(n²) - Tempo Quadrático
          </h4>
          <p class="text-xs text-muted-foreground mb-3">Crescimento perigoso! Para N=1000 itens, ~1.000.000 operações. Loops aninhados são o maior vilão.</p>
          <div class="bg-black/40 p-3 rounded font-code text-xs">
            <p class="text-gray-400 mb-1">// Exemplo: Bubble Sort (ordenação)</p>
            <p><span class="text-blue-400">função</span> <span class="text-yellow-400">bubbleSort</span>(lista) {</p>
            <p class="ml-4"><span class="text-accent">para</span> (i = 0; i < N; i++) {</p>
            <p class="ml-8"><span class="text-accent">para</span> (j = 0; j < N; j++) {</p>
            <p class="ml-12"><span class="text-accent">se</span> (lista[j] > lista[j+1]) troca</p>
            <p class="ml-8">}</p>
            <p class="ml-4">}</p>
            <p>}</p>
            <p class="mt-2 text-red-400">// N × N operações → O(n²)</p>
          </div>
        </div>

        <!-- CLASSES ADICIONAIS -->
        <div class="grid md:grid-cols-2 gap-4 my-4">
          <div class="bg-purple-500/10 p-4 rounded-xl border border-purple-500/20">
            <h4 class="font-bold text-purple-400 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
              O(n log n) - Linearítmico
            </h4>
            <p class="text-xs mt-2">Mais eficiente que O(n²). Algoritmos de ordenação eficientes como <strong>Merge Sort</strong> e <strong>Quick Sort</strong>.</p>
            <p class="text-xs font-code text-purple-400/70 mt-1">Ex: Ordenar 1M itens → ~20M operações</p>
          </div>
          <div class="bg-pink-500/10 p-4 rounded-xl border border-pink-500/20">
            <h4 class="font-bold text-pink-400 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              O(2ⁿ) - Exponencial
            </h4>
            <p class="text-xs mt-2">Crescimento explosivo! Impraticável para N > 40. Exemplo: <strong>Fibonacci recursivo ingênuo</strong>.</p>
            <p class="text-xs font-code text-pink-400/70 mt-1">N=50 → 1.125.899.906.842.624 operações!</p>
          </div>
        </div>

        <!-- TABELA COMPARATIVA -->
        <div class="bg-gray-900 p-6 rounded-2xl border border-primary/20 shadow-inner my-8">
          <h3 class="flex items-center gap-2 text-primary font-bold text-lg mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
            Comparação Visual: Operações por Tamanho de Entrada
          </h3>
          <div class="overflow-x-auto">
            <table class="w-full text-xs font-code">
              <thead>
                <tr class="border-b border-gray-700 text-gray-400">
                  <th class="p-2 text-left">Complexidade</th>
                  <th class="p-2 text-right">N = 10</th>
                  <th class="p-2 text-right">N = 100</th>
                  <th class="p-2 text-right">N = 1.000</th>
                  <th class="p-2 text-right">N = 1.000.000</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-gray-700/50">
                  <td class="p-2 text-green-400">O(1)</td>
                  <td class="p-2 text-right">1</td>
                  <td class="p-2 text-right">1</td>
                  <td class="p-2 text-right">1</td>
                  <td class="p-2 text-right">1</td>
                </tr>
                <tr class="border-b border-gray-700/50">
                  <td class="p-2 text-yellow-400">O(log n)</td>
                  <td class="p-2 text-right">~3</td>
                  <td class="p-2 text-right">~7</td>
                  <td class="p-2 text-right">~10</td>
                  <td class="p-2 text-right">~20</td>
                </tr>
                <tr class="border-b border-gray-700/50">
                  <td class="p-2 text-blue-400">O(n)</td>
                  <td class="p-2 text-right">10</td>
                  <td class="p-2 text-right">100</td>
                  <td class="p-2 text-right">1.000</td>
                  <td class="p-2 text-right">1.000.000</td>
                </tr>
                <tr class="border-b border-gray-700/50">
                  <td class="p-2 text-purple-400">O(n log n)</td>
                  <td class="p-2 text-right">~30</td>
                  <td class="p-2 text-right">~700</td>
                  <td class="p-2 text-right">~10.000</td>
                  <td class="p-2 text-right">~20.000.000</td>
                </tr>
                <tr class="border-b border-gray-700/50">
                  <td class="p-2 text-red-400">O(n²)</td>
                  <td class="p-2 text-right">100</td>
                  <td class="p-2 text-right">10.000</td>
                  <td class="p-2 text-right">1.000.000</td>
                  <td class="p-2 text-right text-red-400 font-bold">1.000.000.000.000</td>
                </tr>
                <tr>
                  <td class="p-2 text-red-600">O(2ⁿ)</td>
                  <td class="p-2 text-right">1.024</td>
                  <td class="p-2 text-right text-red-400">1.26 × 10³⁰</td>
                  <td class="p-2 text-right text-red-400 font-bold" colspan="2">Impossível!</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- REGRAS DO BIG O -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">Regras para Calcular Big O</h3>
        
        <div class="space-y-4 my-4">
          <div class="bg-blue-500/10 p-4 rounded-xl border border-blue-500/20">
            <h4 class="flex items-center gap-2 text-blue-400 font-bold mb-2">
              <span class="bg-blue-500/20 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">1</span>
              Ignorar constantes
            </h4>
            <p class="text-xs">O(2n) → O(n) | O(100) → O(1). Constantes não importam para a análise assintótica.</p>
            <div class="bg-black/40 p-2 rounded mt-2 font-code text-[10px]">
              <span class="text-gray-400">3 loops sequenciais = O(3n) = </span><span class="text-blue-400 font-bold">O(n)</span>
            </div>
          </div>

          <div class="bg-green-500/10 p-4 rounded-xl border border-green-500/20">
            <h4 class="flex items-center gap-2 text-green-400 font-bold mb-2">
              <span class="bg-green-500/20 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">2</span>
              Termo dominante vence
            </h4>
            <p class="text-xs">O(n² + n) → O(n²). O termo que cresce mais rápido domina.</p>
            <div class="bg-black/40 p-2 rounded mt-2 font-code text-[10px]">
              <span class="text-gray-400">O(n² + 100n + 500) = </span><span class="text-green-400 font-bold">O(n²)</span>
            </div>
          </div>

          <div class="bg-yellow-500/10 p-4 rounded-xl border border-yellow-500/20">
            <h4 class="flex items-center gap-2 text-yellow-400 font-bold mb-2">
              <span class="bg-yellow-500/20 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">3</span>
              Multiplicar loops aninhados
            </h4>
            <p class="text-xs">Loops aninhados multiplicam-se. Loop dentro de loop = O(n × m) ou O(n²).</p>
            <div class="bg-black/40 p-2 rounded mt-2 font-code text-[10px]">
              <span class="text-gray-400">Loop externo (n) × Loop interno (n) = </span><span class="text-yellow-400 font-bold">O(n²)</span>
            </div>
          </div>

          <div class="bg-purple-500/10 p-4 rounded-xl border border-purple-500/20">
            <h4 class="flex items-center gap-2 text-purple-400 font-bold mb-2">
              <span class="bg-purple-500/20 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">4</span>
              Somar operações sequenciais
            </h4>
            <p class="text-xs">Blocos independentes (um após o outro) somam-se. Pior caso é sempre considerado.</p>
            <div class="bg-black/40 p-2 rounded mt-2 font-code text-[10px]">
              <span class="text-gray-400">O(n) + O(n²) = </span><span class="text-purple-400 font-bold">O(n²)</span>
            </div>
          </div>
        </div>

        <!-- ANÁLISE DE EXEMPLOS REAIS -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">Análise de Algoritmos Reais</h3>
        
        <div class="space-y-4 my-4">
          <div class="bg-gray-900 p-4 rounded-xl border border-primary/20">
            <h4 class="text-primary font-bold text-sm mb-3 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              Exemplo 1: Busca Linear em Array
            </h4>
            <div class="font-code text-xs space-y-2">
              <p class="text-gray-400"><span class="text-blue-400">função</span> buscaLinear(arr, alvo):</p>
              <p class="text-gray-400 ml-4"><span class="text-accent">para</span> cada elemento <span class="text-accent">em</span> arr:</p>
              <p class="text-gray-400 ml-8"><span class="text-accent">se</span> elemento == alvo: <span class="text-purple-400">retorne</span> verdadeiro</p>
              <p class="text-gray-400 ml-4"><span class="text-purple-400">retorne</span> falso</p>
              <div class="bg-black/40 p-2 rounded mt-2">
                <p><span class="text-yellow-400">Pior caso:</span> alvo no final ou não existe → <span class="text-blue-400 font-bold">O(n)</span></p>
                <p><span class="text-green-400">Melhor caso:</span> alvo na primeira posição → <span class="text-green-400 font-bold">Ω(1)</span></p>
              </div>
            </div>
          </div>

          <div class="bg-gray-900 p-4 rounded-xl border border-primary/20">
            <h4 class="text-primary font-bold text-sm mb-3 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              Exemplo 2: Somar todos os pares de um array
            </h4>
            <div class="font-code text-xs space-y-2">
              <p class="text-gray-400"><span class="text-blue-400">função</span> somaPares(arr):</p>
              <p class="text-gray-400 ml-4"><span class="text-accent">para</span> i <span class="text-accent">em</span> arr:</p>
              <p class="text-gray-400 ml-8"><span class="text-accent">para</span> j <span class="text-accent">em</span> arr:</p>
              <p class="text-gray-400 ml-12">soma += arr[i] + arr[j]</p>
              <div class="bg-black/40 p-2 rounded mt-2">
                <p><span class="text-yellow-400">Loop aninhado:</span> N × N = <span class="text-red-400 font-bold">O(n²)</span></p>
                <p class="text-xs text-gray-500 mt-1">Para N=1000 → 1.000.000 iterações!</p>
              </div>
            </div>
          </div>
        </div>

        <!-- BIG O, BIG Ω E BIG Θ -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">As Três Notações da Análise Assintótica</h3>
        
        <div class="grid md:grid-cols-3 gap-4 my-4">
          <div class="bg-red-500/10 p-4 rounded-xl border border-red-500/20">
            <h4 class="font-bold text-red-400 text-sm mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="inline mr-1"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
              Big O (O)
            </h4>
            <p class="text-xs"><strong>Limite superior</strong> (pior caso). O algoritmo NUNCA será pior que isso.</p>
            <p class="text-xs font-code mt-2 bg-black/40 p-2 rounded">Busca Linear: <span class="text-red-400">O(n)</span></p>
          </div>
          <div class="bg-green-500/10 p-4 rounded-xl border border-green-500/20">
            <h4 class="font-bold text-green-400 text-sm mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="inline mr-1"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M21 15v2a4 4 0 0 1-4 4h-2"/></svg>
              Big Ω (Omega)
            </h4>
            <p class="text-xs"><strong>Limite inferior</strong> (melhor caso). O algoritmo NUNCA será melhor que isso.</p>
            <p class="text-xs font-code mt-2 bg-black/40 p-2 rounded">Busca Linear: <span class="text-green-400">Ω(1)</span></p>
          </div>
          <div class="bg-blue-500/10 p-4 rounded-xl border border-blue-500/20">
            <h4 class="font-bold text-blue-400 text-sm mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="inline mr-1"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              Big Θ (Theta)
            </h4>
            <p class="text-xs"><strong>Limite exato</strong>. Quando O e Ω são iguais. Crescimento "justo".</p>
            <p class="text-xs font-code mt-2 bg-black/40 p-2 rounded">Somar array: <span class="text-blue-400">Θ(n)</span></p>
          </div>
        </div>

        <!-- GRÁFICO DE CRESCIMENTO -->
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 mt-8">
          <h3 class="flex items-center gap-2 text-indigo-400 font-bold text-lg mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 1 1-9-9"/><polyline points="21 3 21 9 15 9"/></svg>
            Visualização do Crescimento das Complexidades
          </h3>
          <div class="space-y-2 text-xs font-code">
            <div class="flex items-center gap-2">
              <div class="w-4 h-4 bg-green-500/30 rounded"></div>
              <span class="text-green-400">O(1)</span>
              <div class="flex-1 h-1 bg-green-500/30 rounded"></div>
              <span class="text-gray-500">Plano</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-4 h-4 bg-yellow-500/30 rounded"></div>
              <span class="text-yellow-400">O(log n)</span>
              <div class="flex-1 h-1 bg-yellow-500/30 rounded" style="width: 15%"></div>
              <span class="text-gray-500">Quase plano</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-4 h-4 bg-blue-500/30 rounded"></div>
              <span class="text-blue-400">O(n)</span>
              <div class="flex-1 h-1 bg-blue-500/30 rounded" style="width: 40%"></div>
              <span class="text-gray-500">Crescimento constante</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-4 h-4 bg-purple-500/30 rounded"></div>
              <span class="text-purple-400">O(n log n)</span>
              <div class="flex-1 h-1 bg-purple-500/30 rounded" style="width: 55%"></div>
              <span class="text-gray-500">Aceitável</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-4 h-4 bg-red-500/30 rounded"></div>
              <span class="text-red-400">O(n²)</span>
              <div class="flex-1 h-1 bg-red-500/30 rounded" style="width: 85%"></div>
              <span class="text-red-400 font-bold">Perigoso!</span>
            </div>
          </div>
        </div>

        <div class="bg-indigo-500/5 p-6 rounded-2xl border border-indigo-500/20 mt-6">
          <h4 class="font-bold text-indigo-400 mb-2 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            Porquê o Big O é Vital?
          </h4>
          <p class="text-sm leading-relaxed mb-4">
            Um algoritmo O(n²) pode funcionar bem para 100 utilizadores, mas fará o seu servidor travar quando chegar aos 10.000. Escolher a complexidade certa é o que permite ao software escalar globalmente.
          </p>
          
          <div class="bg-black/40 p-4 rounded-lg mt-3">
            <h5 class="text-green-400 font-bold text-sm mb-2">Dicas para o dia-a-dia:</h5>
            <div class="space-y-2 text-xs">
              <div class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Use <strong>HashMaps/Dicionários</strong> para buscas O(1) em vez de O(n)</span>
              </div>
              <div class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Evite <strong>loops aninhados</strong> sempre que possível (O(n²) → O(n))</span>
              </div>
              <div class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Se os dados estiverem <strong>ordenados</strong>, use Busca Binária (O(log n))</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  quizId: "cs-t7-quiz"
};