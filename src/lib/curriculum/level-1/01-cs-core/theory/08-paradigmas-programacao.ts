import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t8",
  title: "Paradigmas de Programação: Estilos de Pensamento",
  youtubeVideoId: "mNst8vX-u8E",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
          Estilos de Codificação
        </h2>
        <p class="text-lg leading-relaxed">
          Um paradigma é uma forma de pensar e organizar a lógica do software. Linguagens como JavaScript e Python são <strong>multi-paradigma</strong>, permitindo misturar estes estilos.
        </p>
      </div>

      <div class="space-y-6">
        <!-- 1. PARADIGMA IMPERATIVO -->
        <div class="bg-blue-500/5 p-6 rounded-2xl border border-blue-500/20">
          <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-blue-400"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
            1. Paradigma Imperativo (Procedural)
          </h3>
          <p class="text-sm mb-4">Foca no <strong>COMO</strong> fazer. Vais dando ordens passo-a-passo ao computador, mudando o estado da memória a cada linha. É como dar instruções diretas a um robô.</p>
          
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <h4 class="text-blue-400 font-bold text-sm mb-2">Características</h4>
              <ul class="space-y-2 text-xs">
                <li class="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-blue-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Sequências de comandos</span>
                </li>
                <li class="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-blue-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Variáveis que mudam de estado (mutação)</span>
                </li>
                <li class="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-blue-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Loops (for, while) e condicionais (if)</span>
                </li>
                <li class="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-blue-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Linguagens: C, Pascal, Fortran</span>
                </li>
              </ul>
            </div>
            <div class="bg-black/40 p-4 rounded-xl font-code text-xs text-accent">
              <p class="text-gray-400 mb-2">// Exemplo: Percorrer e somar</p>
              <p><span class="text-blue-400">let</span> total = 0;</p>
              <p><span class="text-accent">for</span>(<span class="text-blue-400">let</span> i=0; i < arr.length; i++) {</p>
              <p class="ml-4">total += arr[i];</p>
              <p>}</p>
              <p class="mt-2 text-gray-500">// Comandos passo-a-passo</p>
            </div>
          </div>
        </div>

        <!-- 2. PARADIGMA DECLARATIVO / FUNCIONAL -->
        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20">
          <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
            2. Paradigma Declarativo (Funcional)
          </h3>
          <p class="text-sm mb-4">Foca no <strong>O QUE</strong> queres. Descreves o resultado final sem te preocupares com os loops internos do motor. É como pedir a um chef "quero um bolo" em vez de o ensinar a bater os ovos.</p>
          
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <h4 class="text-green-400 font-bold text-sm mb-2">Características</h4>
              <ul class="space-y-2 text-xs">
                <li class="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Funções puras (sem efeitos colaterais)</span>
                </li>
                <li class="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Imutabilidade (não altera dados originais)</span>
                </li>
                <li class="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Higher-order functions (map, filter, reduce)</span>
                </li>
                <li class="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Linguagens: Haskell, Elm, F#</span>
                </li>
              </ul>
            </div>
            <div class="bg-black/40 p-4 rounded-xl font-code text-xs text-green-400">
              <p class="text-gray-400 mb-2">// Exemplo: Usando reduce</p>
              <p><span class="text-blue-400">const</span> total = arr.reduce(</p>
              <p class="ml-4">(acc, val) => acc + val,</p>
              <p class="ml-4">0</p>
              <p>);</p>
              <p class="mt-2 text-gray-500">// Descreves o resultado, não o processo</p>
            </div>
          </div>

          <!-- CONCEITOS FUNCIONAIS AVANÇADOS -->
          <div class="mt-4 grid md:grid-cols-3 gap-3 text-xs">
            <div class="bg-black/40 p-3 rounded">
              <h5 class="text-green-400 font-bold">Função Pura</h5>
              <p class="text-gray-400">Mesmo input → sempre mesmo output. Sem efeitos colaterais.</p>
            </div>
            <div class="bg-black/40 p-3 rounded">
              <h5 class="text-green-400 font-bold">Imutabilidade</h5>
              <p class="text-gray-400">Dados originais nunca são alterados. Criamos novas cópias.</p>
            </div>
            <div class="bg-black/40 p-3 rounded">
              <h5 class="text-green-400 font-bold">Composição</h5>
              <p class="text-gray-400">Funções pequenas que se combinam: f(g(h(x)))</p>
            </div>
          </div>
        </div>

        <!-- 3. PROGRAMAÇÃO ORIENTADA A OBJETOS -->
        <div class="bg-yellow-500/5 p-6 rounded-2xl border border-yellow-500/20">
          <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-yellow-400"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            3. Programação Orientada a Objetos (POO)
          </h3>
          <p class="text-sm mb-4">Organiza o código em "Objetos" que contêm dados (atributos) e ações (métodos). É a base de sistemas empresariais em Java, C# e C++. O mundo real é modelado como objetos que interagem entre si.</p>
          
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <h4 class="text-yellow-400 font-bold text-sm mb-2">Os 4 Pilares da POO</h4>
              <ul class="space-y-2 text-xs">
                <li class="flex items-start gap-2">
                  <span class="text-yellow-400 font-bold min-w-[80px]">Abstração</span>
                  <span class="text-gray-400">Mostrar apenas o essencial, esconder complexidade</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-yellow-400 font-bold min-w-[80px]">Encapsulamento</span>
                  <span class="text-gray-400">Proteger dados internos (private/public)</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-yellow-400 font-bold min-w-[80px]">Herança</span>
                  <span class="text-gray-400">Reutilizar código de classes pai</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-yellow-400 font-bold min-w-[80px]">Polimorfismo</span>
                  <span class="text-gray-400">Mesmo método, comportamentos diferentes</span>
                </li>
              </ul>
            </div>
            <div class="bg-black/40 p-4 rounded-xl font-code text-xs text-yellow-400">
              <p class="text-gray-400 mb-2">// Exemplo: Classe Carro</p>
              <p><span class="text-purple-400">class</span> <span class="text-yellow-400">Carro</span> {</p>
              <p class="ml-4"><span class="text-blue-400">constructor</span>(marca) {</p>
              <p class="ml-8"><span class="text-accent">this</span>.marca = marca;</p>
              <p class="ml-4">}</p>
              <p class="ml-4">acelerar() {</p>
              <p class="ml-8"><span class="text-accent">return</span> <span class="text-green-400">"Vrum!"</span>;</p>
              <p class="ml-4">}</p>
              <p>}</p>
            </div>
          </div>
        </div>

        <!-- 4. PARADIGMA REATIVO -->
        <div class="bg-purple-500/5 p-6 rounded-2xl border border-purple-500/20">
          <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-purple-400"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            4. Paradigma Reativo
          </h3>
          <p class="text-sm mb-4">Programação baseada em <strong>fluxos de dados</strong> assíncronos. Quando um dado muda, tudo o que depende dele é automaticamente atualizado. Muito usado em interfaces de utilizador (React, Vue, Angular).</p>
          
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <ul class="space-y-2 text-xs">
                <li class="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-purple-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Fluxos de dados (streams/observables)</span>
                </li>
                <li class="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-purple-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Assíncrono por natureza</span>
                </li>
                <li class="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-purple-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Linguagens/Frameworks: RxJS, React, SolidJS</span>
                </li>
              </ul>
            </div>
            <div class="bg-black/40 p-4 rounded-xl font-code text-xs text-purple-400">
              <p class="text-gray-400 mb-2">// Exemplo: React (useState)</p>
              <p><span class="text-blue-400">const</span> [count, setCount] = <span class="text-yellow-400">useState</span>(0);</p>
              <p class="mt-2 text-gray-500">// A UI reage automaticamente</p>
              <p class="text-gray-500">// quando count muda!</p>
            </div>
          </div>
        </div>

        <!-- 5. PARADIGMA LÓGICO -->
        <div class="bg-pink-500/5 p-6 rounded-2xl border border-pink-500/20">
          <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-pink-400"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            5. Paradigma Lógico
          </h3>
          <p class="text-sm mb-4">Baseia-se em <strong>factos e regras</strong>. Em vez de dizer COMO resolver, defines relações lógicas e o sistema deduz a resposta. O exemplo clássico é o <strong>Prolog</strong>.</p>
          
          <div class="bg-black/40 p-4 rounded-xl font-code text-xs text-pink-400">
            <p class="text-gray-400 mb-2">// Exemplo: Prolog</p>
            <p>pai(joao, maria).</p>
            <p>pai(joao, pedro).</p>
            <p class="mt-1 text-gray-500">// Consulta: ?- pai(joao, X)</p>
            <p class="text-gray-500">// Resposta: X = maria; X = pedro</p>
          </div>
        </div>

        <!-- TABELA COMPARATIVA -->
        <div class="bg-gray-900 p-6 rounded-2xl border border-primary/20 shadow-inner my-8">
          <h3 class="flex items-center gap-2 text-primary font-bold text-lg mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
            Comparação: Quando usar cada paradigma?
          </h3>
          <div class="overflow-x-auto">
            <table class="w-full text-xs">
              <thead>
                <tr class="border-b border-gray-700 text-gray-400">
                  <th class="p-2 text-left">Paradigma</th>
                  <th class="p-2 text-left">Ideal para</th>
                  <th class="p-2 text-left">Evitar em</th>
                  <th class="p-2 text-left">Linguagens</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-gray-700/50">
                  <td class="p-2 text-blue-400 font-bold">Imperativo</td>
                  <td class="p-2">Sistemas de baixo nível, drivers</td>
                  <td class="p-2">Lógica de negócio complexa</td>
                  <td class="p-2">C, Pascal, Assembly</td>
                </tr>
                <tr class="border-b border-gray-700/50">
                  <td class="p-2 text-green-400 font-bold">Funcional</td>
                  <td class="p-2">Processamento de dados, IA</td>
                  <td class="p-2">Sistemas com muito estado mutável</td>
                  <td class="p-2">Haskell, Elixir, F#</td>
                </tr>
                <tr class="border-b border-gray-700/50">
                  <td class="p-2 text-yellow-400 font-bold">POO</td>
                  <td class="p-2">Sistemas empresariais, jogos</td>
                  <td class="p-2">Scripts simples, funções matemáticas</td>
                  <td class="p-2">Java, C#, C++</td>
                </tr>
                <tr class="border-b border-gray-700/50">
                  <td class="p-2 text-purple-400 font-bold">Reativo</td>
                  <td class="p-2">Interfaces (UI), apps web</td>
                  <td class="p-2">Sistemas batch, scripts</td>
                  <td class="p-2">React, Vue, Angular</td>
                </tr>
                <tr>
                  <td class="p-2 text-pink-400 font-bold">Lógico</td>
                  <td class="p-2">IA, sistemas especialistas</td>
                  <td class="p-2">Aplicações gerais, UI</td>
                  <td class="p-2">Prolog, Datalog</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- MULTI-PARADIGMA -->
        <div class="bg-cyan-500/5 p-6 rounded-2xl border border-cyan-500/20 mt-6">
          <h3 class="flex items-center gap-2 text-cyan-400 font-bold text-lg mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M21 15v2a4 4 0 0 1-4 4h-2"/></svg>
            Linguagens Multi-Paradigma
          </h3>
          <p class="text-sm mb-4">As linguagens modernas mais populares suportam <strong>múltiplos paradigmas</strong>, permitindo que escolhas o melhor estilo para cada parte do teu projeto:</p>
          
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-black/40 p-4 rounded-xl text-center">
              <h4 class="text-yellow-400 font-bold text-sm mb-2">JavaScript / TypeScript</h4>
              <div class="space-y-1 text-[10px]">
                <span class="bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full">Imperativo</span>
                <span class="bg-green-500/20 text-green-300 px-2 py-0.5 rounded-full">Funcional</span>
                <span class="bg-yellow-500/20 text-yellow-300 px-2 py-0.5 rounded-full">POO</span>
                <span class="bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full">Reativo</span>
              </div>
            </div>
            <div class="bg-black/40 p-4 rounded-xl text-center">
              <h4 class="text-blue-400 font-bold text-sm mb-2">Python</h4>
              <div class="space-y-1 text-[10px]">
                <span class="bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full">Imperativo</span>
                <span class="bg-green-500/20 text-green-300 px-2 py-0.5 rounded-full">Funcional</span>
                <span class="bg-yellow-500/20 text-yellow-300 px-2 py-0.5 rounded-full">POO</span>
              </div>
            </div>
            <div class="bg-black/40 p-4 rounded-xl text-center">
              <h4 class="text-purple-400 font-bold text-sm mb-2">C++</h4>
              <div class="space-y-1 text-[10px]">
                <span class="bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full">Imperativo</span>
                <span class="bg-yellow-500/20 text-yellow-300 px-2 py-0.5 rounded-full">POO</span>
                <span class="bg-green-500/20 text-green-300 px-2 py-0.5 rounded-full">Funcional</span>
              </div>
            </div>
          </div>
        </div>

        <!-- DICA PRÁTICA -->
        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            Conselho Prático para Iniciantes
          </h4>
          <div class="space-y-3 text-sm">
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <p>Começa pelo <strong>paradigma imperativo</strong> para entender os fundamentos de fluxo de controle</p>
            </div>
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <p>Depois explora a <strong>POO</strong> para projetos maiores e mais organizados</p>
            </div>
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <p>Incorpora gradualmente conceitos <strong>funcionais</strong> para código mais previsível e testável</p>
            </div>
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <p>Aprende <strong>reativo</strong> se quiseres trabalhar com interfaces modernas (React, Vue)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  quizId: "cs-t8-quiz"
};