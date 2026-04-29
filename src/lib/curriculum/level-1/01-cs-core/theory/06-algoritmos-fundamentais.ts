import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t6",
  title: "Algoritmos Fundamentais: A Lógica do Passo-a-Passo",
  youtubeVideoId: "8hly31xKli0",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 font-headline text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
          O Que é Realmente um Algoritmo?
        </h2>
        <p class="text-lg leading-relaxed">
          Muitos confundem algoritmos com código, mas o algoritmo é a <strong>estratégia pura</strong>. É uma sequência finita, ordenada e não ambígua de passos que levam à solução de um problema ou à execução de uma tarefa.
        </p>
        <div class="mt-4 flex gap-4 text-sm">
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            <span class="text-gray-400">Origem: Al-Khwarizmi (séc. IX)</span>
          </div>
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            <span class="text-gray-400">Base de toda a computação</span>
          </div>
        </div>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. As 5 Propriedades de Ouro</h3>
        <p>Para um conjunto de passos ser considerado um algoritmo de engenharia, ele deve cumprir:</p>
        
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-card border rounded-xl border-white/5 hover:border-primary/30 transition-colors">
            <h4 class="font-bold text-accent mb-1 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              Finitude
            </h4>
            <p class="text-xs text-muted-foreground">O algoritmo deve sempre terminar após um número finito de passos. Um loop infinito não é um algoritmo útil.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5 hover:border-primary/30 transition-colors">
            <h4 class="font-bold text-accent mb-1 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              Definição (Precisão)
            </h4>
            <p class="text-xs text-muted-foreground">Cada passo deve ser claro e sem ambiguidades. "Adicione um pouco de sal" não serve; "Adicione 5g de sal" sim.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5 hover:border-primary/30 transition-colors">
            <h4 class="font-bold text-accent mb-1 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
              Entrada (Input)
            </h4>
            <p class="text-xs text-muted-foreground">Quantidades que lhe são dadas antes do início (podem ser zero ou mais).</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5 hover:border-primary/30 transition-colors">
            <h4 class="font-bold text-accent mb-1 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              Saída (Output)
            </h4>
            <p class="text-xs text-muted-foreground">O resultado final esperado. Um algoritmo sem saída é um motor que trabalha mas não produz nada.</p>
          </div>
        </div>

        <!-- QUINTA PROPRIEDADE (Efetividade) -->
        <div class="bg-yellow-500/5 p-4 rounded-xl border border-yellow-500/20">
          <h4 class="flex items-center gap-2 text-yellow-400 font-bold mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            5. Efetividade
          </h4>
          <p class="text-xs text-muted-foreground">Todas as operações devem ser suficientemente básicas para serem executadas com exatidão e em tempo finito. Cada passo deve ser viável.</p>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">2. Decomposição de Problemas</h3>
        <p>A maior habilidade de um engenheiro é a <strong>Decomposição</strong>: quebrar um grande desafio (ex: "Construir um Banco Digital") em milhares de pequenos algoritmos simples (ex: "Validar se o saldo é maior que o saque").</p>

        <div class="bg-gray-900 p-5 rounded-xl border border-primary/20 my-4">
          <h4 class="flex items-center gap-2 text-primary font-bold mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            Exemplo de Decomposição
          </h4>
          <div class="space-y-2 text-sm">
            <div class="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-red-400"><circle cx="12" cy="12" r="10"/></svg>
              <span class="font-bold">Problema:</span> Fazer um bolo
            </div>
            <div class="ml-7 space-y-1 text-xs text-gray-400">
              <p>→ Sub-problema 1: Medir ingredientes</p>
              <p>→ Sub-problema 2: Misturar massas</p>
              <p>→ Sub-problema 3: Pré-aquecer forno</p>
              <p class="ml-4 text-gray-500">→ Verificar temperatura</p>
              <p class="ml-4 text-gray-500">→ Ajustar timer</p>
              <p>→ Sub-problema 4: Assar e verificar</p>
            </div>
          </div>
        </div>

        <!-- ESTRUTURAS DE CONTROLE -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">3. Estruturas de Controle Essenciais</h3>
        <div class="grid md:grid-cols-3 gap-4 my-4">
          <div class="bg-blue-500/10 p-4 rounded-xl border border-blue-500/20">
            <h4 class="flex items-center gap-2 text-blue-400 font-bold mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="17" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="17" y1="18" x2="3" y2="18"/></svg>
              Sequência
            </h4>
            <p class="text-xs">Passos executados <strong>um após o outro</strong>, em ordem linear.</p>
            <div class="mt-2 font-code text-[10px] bg-black/40 p-2 rounded">
              <p>1. Abrir porta</p>
              <p>2. Entrar</p>
              <p>3. Fechar porta</p>
            </div>
          </div>
          <div class="bg-yellow-500/10 p-4 rounded-xl border border-yellow-500/20">
            <h4 class="flex items-center gap-2 text-yellow-400 font-bold mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
              Decisão (Seleção)
            </h4>
            <p class="text-xs">Escolhe entre caminhos alternativos baseado em <strong>condições</strong> (SE-ENTÃO-SENÃO).</p>
            <div class="mt-2 font-code text-[10px] bg-black/40 p-2 rounded">
              <p><span class="text-accent">SE</span> chovendo</p>
              <p>→ Levar guarda-chuva</p>
              <p><span class="text-accent">SENÃO</span></p>
              <p>→ Não levar</p>
            </div>
          </div>
          <div class="bg-green-500/10 p-4 rounded-xl border border-green-500/20">
            <h4 class="flex items-center gap-2 text-green-400 font-bold mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 1 1-9-9"/><polyline points="21 3 21 9 15 9"/></svg>
              Repetição (Loop)
            </h4>
            <p class="text-xs">Executa um bloco de código <strong>múltiplas vezes</strong> enquanto uma condição for verdadeira.</p>
            <div class="mt-2 font-code text-[10px] bg-black/40 p-2 rounded">
              <p><span class="text-accent">ENQUANTO</span> prato sujo</p>
              <p>→ Lavar prato</p>
              <p>→ Verificar próximo</p>
            </div>
          </div>
        </div>

        <!-- FLUXOGRAMAS -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">4. Representação Visual: Fluxogramas</h3>
        <p class="text-sm">Antes de codificar, muitos engenheiros desenham o fluxo lógico usando símbolos padronizados:</p>
        
        <div class="bg-gray-900 p-5 rounded-xl border border-primary/20 my-4">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-center text-xs">
            <div class="bg-black/40 p-3 rounded">
              <div class="w-12 h-8 bg-primary/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                <span class="text-primary text-[10px]">Início</span>
              </div>
              <p class="text-gray-400">Terminal</p>
              <p class="text-[10px] text-gray-500">Início/Fim</p>
            </div>
            <div class="bg-black/40 p-3 rounded">
              <div class="w-12 h-8 bg-blue-500/20 mx-auto mb-2"></div>
              <p class="text-gray-400">Processo</p>
              <p class="text-[10px] text-gray-500">Ação/Cálculo</p>
            </div>
            <div class="bg-black/40 p-3 rounded">
              <div class="w-8 h-8 bg-yellow-500/20 rotate-45 mx-auto mb-2"></div>
              <p class="text-gray-400 mt-2">Decisão</p>
              <p class="text-[10px] text-gray-500">SE-ENTÃO</p>
            </div>
            <div class="bg-black/40 p-3 rounded">
              <div class="flex justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </div>
              <p class="text-gray-400">Fluxo</p>
              <p class="text-[10px] text-gray-500">Direção</p>
            </div>
          </div>
        </div>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
            Exemplo: Algoritmo de Troca de Lâmpada
          </h3>
          <div class="space-y-2 font-mono text-xs">
            <p>1. Início</p>
            <p>2. Pegar uma escada</p>
            <p>3. <span class="text-accent font-bold">SE</span> a lâmpada estiver quente <span class="text-accent font-bold">ENTÃO</span> esperar 2 minutos</p>
            <p>4. Desenroscar a lâmpada queimada</p>
            <p>5. Enroscar a lâmpada nova</p>
            <p>6. <span class="text-accent font-bold">SE</span> a lâmpada não acender <span class="text-accent font-bold">ENTÃO</span> voltar ao passo 4</p>
            <p>7. Fim</p>
          </div>
          
          <div class="mt-4 bg-black/40 p-3 rounded text-xs">
            <p class="text-indigo-400 font-bold">Análise do algoritmo:</p>
            <ul class="mt-2 space-y-1 text-gray-400">
              <li>✓ <strong>Finitude:</strong> Termina quando a lâmpada acende</li>
              <li>✓ <strong>Precisão:</strong> Cada passo é claro e executável</li>
              <li>✓ <strong>Entrada:</strong> Lâmpada queimada, lâmpada nova</li>
              <li>✓ <strong>Saída:</strong> Lâmpada funcionando</li>
            </ul>
          </div>
        </div>

        <!-- PSEUDOCÓDIGO -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">5. Pseudocódigo: A Ponte para o Código Real</h3>
        <p class="text-sm">Pseudocódigo é uma forma de escrever algoritmos usando uma linguagem simplificada, próxima da linguagem humana, mas com estrutura de programação:</p>
        
        <div class="bg-gray-900 p-5 rounded-xl border border-primary/20 my-4">
          <h4 class="text-primary font-bold text-sm mb-3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="2"/><line x1="7" y1="8" x2="17" y2="8"/><line x1="7" y1="12" x2="17" y2="12"/><line x1="7" y1="16" x2="12" y2="16"/></svg>
            Exemplo: Encontrar o maior número em uma lista
          </h4>
          <div class="bg-black/40 p-4 rounded font-code text-xs space-y-1">
            <p><span class="text-purple-400">ALGORITMO</span> EncontrarMaior</p>
            <p><span class="text-purple-400">VAR</span> lista, maior, i</p>
            <p class="mt-1">maior ← lista[0]</p>
            <p><span class="text-accent">PARA</span> i ← 1 <span class="text-accent">ATÉ</span> fim_da_lista <span class="text-accent">FAÇA</span></p>
            <p class="ml-4"><span class="text-accent">SE</span> lista[i] > maior <span class="text-accent">ENTÃO</span></p>
            <p class="ml-8">maior ← lista[i]</p>
            <p class="ml-4"><span class="text-accent">FIM_SE</span></p>
            <p><span class="text-accent">FIM_PARA</span></p>
            <p><span class="text-purple-400">RETORNE</span> maior</p>
          </div>
        </div>

        <!-- ALGORITMOS CLÁSSICOS -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">6. Algoritmos Clássicos que Todo Programador Deve Conhecer</h3>
        
        <div class="space-y-4 my-4">
          <div class="bg-blue-500/10 p-4 rounded-xl border border-blue-500/20">
            <h4 class="flex items-center gap-2 text-blue-400 font-bold mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              Busca Linear
            </h4>
            <p class="text-xs">Percorre cada elemento da lista sequencialmente até encontrar o valor desejado.</p>
            <div class="mt-2 flex gap-2 text-[10px]">
              <span class="bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">Simples</span>
              <span class="bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">O(n)</span>
              <span class="bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">Listas pequenas</span>
            </div>
          </div>

          <div class="bg-green-500/10 p-4 rounded-xl border border-green-500/20">
            <h4 class="flex items-center gap-2 text-green-400 font-bold mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              Busca Binária
            </h4>
            <p class="text-xs">Divide a lista ordenada ao meio repetidamente. Muito mais rápido que a busca linear.</p>
            <div class="mt-2 flex gap-2 text-[10px]">
              <span class="bg-green-500/20 text-green-300 px-2 py-0.5 rounded">Eficiente</span>
              <span class="bg-green-500/20 text-green-300 px-2 py-0.5 rounded">O(log n)</span>
              <span class="bg-green-500/20 text-green-300 px-2 py-0.5 rounded">Requer lista ordenada</span>
            </div>
          </div>

          <div class="bg-purple-500/10 p-4 rounded-xl border border-purple-500/20">
            <h4 class="flex items-center gap-2 text-purple-400 font-bold mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
              Ordenação (Bubble Sort)
            </h4>
            <p class="text-xs">Compara pares adjacentes e troca-os se estiverem na ordem errada. Simples mas não eficiente.</p>
            <div class="mt-2 flex gap-2 text-[10px]">
              <span class="bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded">Didático</span>
              <span class="bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded">O(n²)</span>
              <span class="bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded">Estável</span>
            </div>
          </div>
        </div>

        <!-- COMPLEXIDADE DE ALGORITMOS -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">7. Introdução à Complexidade (Notação Big-O)</h3>
        <p class="text-sm">A complexidade mede como o tempo de execução <strong>cresce</strong> conforme a entrada aumenta:</p>
        
        <div class="bg-gray-900 p-5 rounded-xl border border-primary/20 my-4">
          <div class="space-y-3 font-code text-xs">
            <div class="flex justify-between items-center border-b border-gray-700 pb-2">
              <span class="text-green-400">O(1)</span>
              <span class="text-gray-400">Constante</span>
              <span class="text-gray-500">Acesso a array por índice</span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-700 pb-2">
              <span class="text-green-400">O(log n)</span>
              <span class="text-gray-400">Logarítmica</span>
              <span class="text-gray-500">Busca Binária</span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-700 pb-2">
              <span class="text-yellow-400">O(n)</span>
              <span class="text-gray-400">Linear</span>
              <span class="text-gray-500">Busca Linear, Loop simples</span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-700 pb-2">
              <span class="text-orange-400">O(n log n)</span>
              <span class="text-gray-400">Linearítmica</span>
              <span class="text-gray-500">Merge Sort, Quick Sort</span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-700 pb-2">
              <span class="text-red-400">O(n²)</span>
              <span class="text-gray-400">Quadrática</span>
              <span class="text-gray-500">Bubble Sort, loops aninhados</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-red-600">O(2ⁿ)</span>
              <span class="text-gray-400">Exponencial</span>
              <span class="text-gray-500">Fibonacci recursivo ingênuo</span>
            </div>
          </div>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            Porquê aprender isto antes do Código?
          </h4>
          <p class="text-sm leading-relaxed">
            Linguagens de programação (Python, JS, C++) mudam a cada década. Mas a <strong>lógica algorítmica</strong> é eterna. Se souberes desenhar o algoritmo na tua mente ou no papel, traduzi-lo para qualquer linguagem torna-se uma tarefa trivial de sintaxe.
          </p>
          
          <div class="mt-4 grid grid-cols-3 gap-3 text-center text-xs">
            <div class="bg-black/40 p-3 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mx-auto mb-1 text-blue-400"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              <p class="font-bold text-blue-400">Abstração</p>
              <p class="text-gray-400">Pensar antes de codar</p>
            </div>
            <div class="bg-black/40 p-3 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mx-auto mb-1 text-green-400"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              <p class="font-bold text-green-400">Eficiência</p>
              <p class="text-gray-400">Escolher a melhor solução</p>
            </div>
            <div class="bg-black/40 p-3 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mx-auto mb-1 text-purple-400"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              <p class="font-bold text-purple-400">Portabilidade</p>
              <p class="text-gray-400">Lógica funciona em qualquer linguagem</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  quizId: "cs-t6-quiz"
};