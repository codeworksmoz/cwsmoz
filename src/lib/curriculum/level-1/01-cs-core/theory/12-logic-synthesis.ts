import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t12",
  title: "Síntese Lógica: Do Papel ao Silício",
  youtubeVideoId: "E18Qv2bTkRU",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          O Nascimento do Circuito
        </h2>
        <p class="text-lg leading-relaxed">
          A <strong>Síntese Lógica</strong> é o processo de converter uma especificação abstrata (como uma Tabela da Verdade ou uma equação booleana) num design de portas lógicas interligadas que podem ser fabricadas num chip.
        </p>
        <div class="mt-3 flex items-center gap-2 text-sm text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          <span>HDL (Verilog, VHDL) → Síntese → Netlist de portas lógicas</span>
        </div>
      </div>

      <div class="space-y-6">
        <!-- FLUXO DE SÍNTESE -->
        <div class="bg-gray-900 p-6 rounded-2xl border border-primary/20 shadow-inner">
          <h3 class="flex items-center gap-2 text-primary font-bold text-lg mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            Fluxo da Síntese Lógica
          </h3>
          <div class="flex flex-col md:flex-row items-center justify-center gap-3 text-xs">
            <div class="bg-blue-500/10 p-3 rounded-xl border border-blue-500/20 text-center min-w-[120px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mx-auto mb-1 text-blue-400"><rect x="2" y="2" width="20" height="20" rx="2"/><line x1="7" y1="8" x2="17" y2="8"/><line x1="7" y1="12" x2="17" y2="12"/><line x1="7" y1="16" x2="12" y2="16"/></svg>
              <p class="font-bold text-blue-400">HDL/RTL</p>
              <p class="text-gray-500 text-[10px]">Verilog, VHDL</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-gray-600"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            <div class="bg-yellow-500/10 p-3 rounded-xl border border-yellow-500/20 text-center min-w-[120px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mx-auto mb-1 text-yellow-400"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
              <p class="font-bold text-yellow-400">Síntese</p>
              <p class="text-gray-500 text-[10px]">Otimização lógica</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-gray-600"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            <div class="bg-green-500/10 p-3 rounded-xl border border-green-500/20 text-center min-w-[120px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mx-auto mb-1 text-green-400"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
              <p class="font-bold text-green-400">Netlist</p>
              <p class="text-gray-500 text-[10px]">Portas + Conexões</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-gray-600"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            <div class="bg-purple-500/10 p-3 rounded-xl border border-purple-500/20 text-center min-w-[120px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mx-auto mb-1 text-purple-400"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              <p class="font-bold text-purple-400">Fabricação</p>
              <p class="text-gray-500 text-[10px]">ASIC/FPGA</p>
            </div>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Portas Universais: NAND e NOR</h3>
        <p class="mb-4">Na engenharia de hardware, as portas <strong>NAND</strong> e <strong>NOR</strong> são chamadas de "Universais" porque qualquer outra função lógica (AND, OR, NOT, XOR) pode ser construída utilizando apenas elas.</p>
        
        <!-- PROVA: PORTA UNIVERSAL -->
        <div class="grid md:grid-cols-2 gap-4 mb-4">
          <div class="bg-red-500/5 p-4 rounded-xl border border-red-500/20">
            <h4 class="flex items-center gap-2 text-red-400 font-bold mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="M6 6l12 12"/></svg>
              Construindo NOT com NAND
            </h4>
            <div class="font-code text-xs space-y-2">
              <p class="text-gray-400">NOT A = A NAND A</p>
              <div class="bg-black/40 p-3 rounded text-center">
                <p>A → <span class="text-yellow-400">[NAND]</span> → NOT A</p>
                <p class="text-[10px] text-gray-500 mt-1">Liga a mesma entrada aos dois pinos</p>
              </div>
              <div class="grid grid-cols-2 gap-1 text-[10px]">
                <div class="bg-black/40 p-1 rounded">A=0 → 1</div>
                <div class="bg-black/40 p-1 rounded">A=1 → 0</div>
              </div>
            </div>
          </div>
          <div class="bg-red-500/5 p-4 rounded-xl border border-red-500/20">
            <h4 class="flex items-center gap-2 text-red-400 font-bold mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="M6 6l12 12"/></svg>
              Construindo AND com NAND
            </h4>
            <div class="font-code text-xs space-y-2">
              <p class="text-gray-400">A AND B = NOT (A NAND B)</p>
              <div class="bg-black/40 p-3 rounded text-center">
                <p>A,B → <span class="text-yellow-400">[NAND]</span> → <span class="text-red-400">[NOT]</span> → A AND B</p>
              </div>
              <p class="text-[10px] text-gray-500">Dois NANDs: um como NAND, outro como NOT</p>
            </div>
          </div>
        </div>

        <div class="bg-indigo-500/5 p-5 rounded-xl border border-indigo-500/20">
          <h4 class="font-bold text-indigo-400 mb-2 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            Porquê usar apenas NAND?
          </h4>
          <p class="text-sm">
            É mais barato e fácil fabricar milhões de transístores iguais do que misturar diferentes tipos de portas. Além disso, as portas NAND são fisicamente mais rápidas que as AND em tecnologias como CMOS.
          </p>
          <div class="mt-3 bg-black/40 p-3 rounded text-xs">
            <p class="text-indigo-400 font-bold">CMOS (Tecnologia dominante):</p>
            <p class="text-gray-400 mt-1">NAND = 4 transistores | AND = 6 transistores (NAND + NOT)</p>
            <p class="text-green-400/70 mt-1">✓ NAND é naturalmente mais eficiente em silício!</p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline mt-8">2. Soma de Produtos (SOP - Sum of Products)</h3>
        <p class="mb-4">Para sintetizar um circuito, olhamos para a Tabela da Verdade e identificamos todas as linhas onde o resultado é <strong>1</strong>. Cada linha torna-se um termo AND (produto), e juntamos todos com portas OR (soma).</p>
        
        <!-- EXEMPLO SOP -->
        <div class="bg-gray-900 p-5 rounded-xl border border-primary/20 my-4">
          <h4 class="text-primary font-bold text-sm mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
            Exemplo: Síntese de uma Função Maioria
          </h4>
          <p class="text-xs text-gray-400 mb-3">Função que retorna 1 se a maioria das entradas (A,B,C) for 1:</p>
          
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <h5 class="text-yellow-400 font-bold text-xs mb-2">Tabela da Verdade</h5>
              <div class="font-code text-[10px]">
                <div class="grid grid-cols-4 gap-1 text-center">
                  <div class="bg-black/40 p-1 rounded">A</div><div class="bg-black/40 p-1 rounded">B</div><div class="bg-black/40 p-1 rounded">C</div><div class="bg-black/40 p-1 rounded">F</div>
                  <div class="p-1">0</div><div class="p-1">0</div><div class="p-1">0</div><div class="p-1">0</div>
                  <div class="p-1">0</div><div class="p-1">0</div><div class="p-1">1</div><div class="p-1">0</div>
                  <div class="p-1">0</div><div class="p-1">1</div><div class="p-1">0</div><div class="p-1">0</div>
                  <div class="p-1">0</div><div class="p-1">1</div><div class="p-1">1</div><div class="p-1 text-green-400 font-bold">1</div>
                  <div class="p-1">1</div><div class="p-1">0</div><div class="p-1">0</div><div class="p-1">0</div>
                  <div class="p-1">1</div><div class="p-1">0</div><div class="p-1">1</div><div class="p-1 text-green-400 font-bold">1</div>
                  <div class="p-1">1</div><div class="p-1">1</div><div class="p-1">0</div><div class="p-1 text-green-400 font-bold">1</div>
                  <div class="p-1">1</div><div class="p-1">1</div><div class="p-1">1</div><div class="p-1 text-green-400 font-bold">1</div>
                </div>
              </div>
            </div>
            <div>
              <h5 class="text-yellow-400 font-bold text-xs mb-2">Expressão SOP</h5>
              <div class="bg-black/40 p-3 rounded font-code text-[10px]">
                <p class="text-gray-400">Linhas onde F=1:</p>
                <p class="text-green-400 mt-1">F = (!A·B·C) + (A·!B·C) + (A·B·!C) + (A·B·C)</p>
                <p class="text-gray-400 mt-2">Simplificando:</p>
                <p class="text-yellow-400 font-bold">F = AB + BC + AC</p>
              </div>
            </div>
          </div>
        </div>

        <!-- PRODUTO DE SOMAS -->
        <div class="bg-blue-500/5 p-4 rounded-xl border border-blue-500/20 my-4">
          <h4 class="flex items-center gap-2 text-blue-400 font-bold mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M21 15v2a4 4 0 0 1-4 4h-2"/></svg>
            Alternativa: Produto de Somas (POS - Product of Sums)
          </h4>
          <p class="text-xs">Em vez de focar nos 1's, foca nos <strong>0's</strong> da tabela. Cada 0 gera um termo OR, e todos são multiplicados com AND. Complementar ao SOP.</p>
          <p class="text-xs font-code text-blue-400/70 mt-2">Ex: F = (A+B+C) · (A+B+!C) · (A+!B+C) · (!A+B+C)</p>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 text-accent mt-8">3. O Objetivo Final: Minimização Lógica</h3>
        <p class="mb-4">Um circuito complexo com 100 portas lógicas pode muitas vezes ser simplificado para apenas 10 portas usando Álgebra Booleana ou <strong>Mapas de Karnaugh</strong>.</p>
        
        <!-- MAPA DE KARNAUGH -->
        <div class="bg-gray-900 p-5 rounded-xl border border-primary/20 my-4">
          <h4 class="text-primary font-bold text-sm mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            Mapa de Karnaugh (K-Map) - Para 3 Variáveis
          </h4>
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <p class="text-xs text-gray-400 mb-2">Ferramenta visual para simplificar expressões booleanas agrupando 1's adjacentes:</p>
              <div class="font-code text-[10px]">
                <div class="grid grid-cols-4 gap-1 text-center max-w-[200px]">
                  <div class="text-gray-500"></div>
                  <div class="text-gray-500">00</div>
                  <div class="text-gray-500">01</div>
                  <div class="text-gray-500">11</div>
                  <div class="text-gray-500">0</div>
                  <div class="bg-black/40 p-1 rounded">0</div>
                  <div class="bg-black/40 p-1 rounded">0</div>
                  <div class="bg-green-500/20 p-1 rounded">1</div>
                  <div class="text-gray-500">1</div>
                  <div class="bg-black/40 p-1 rounded">0</div>
                  <div class="bg-green-500/20 p-1 rounded">1</div>
                  <div class="bg-green-500/20 p-1 rounded">1</div>
                </div>
              </div>
            </div>
            <div>
              <h5 class="text-yellow-400 font-bold text-xs mb-2">Regras de Agrupamento:</h5>
              <ul class="text-xs space-y-1 text-gray-400">
                <li class="flex items-start gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Agrupa apenas 1's adjacentes</span>
                </li>
                <li class="flex items-start gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Grupos de 1, 2, 4, 8 (potências de 2)</span>
                </li>
                <li class="flex items-start gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Grupos maiores = melhor simplificação</span>
                </li>
                <li class="flex items-start gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Bordas são adjacentes (cilindro)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-4 text-center text-xs font-bold uppercase mt-4">
          <div class="p-4 bg-card border rounded-xl border-red-500/20 hover:border-red-500/40 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mx-auto mb-2 text-red-400"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
            <span class="text-red-400">Menos Calor</span>
            <p class="text-[10px] text-gray-400 normal-case font-normal mt-1">Menos portas = menos energia dissipada</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-blue-500/20 hover:border-blue-500/40 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mx-auto mb-2 text-blue-400"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            <span class="text-blue-400">Menos Espaço</span>
            <p class="text-[10px] text-gray-400 normal-case font-normal mt-1">Chip menor = mais barato de fabricar</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-green-500/20 hover:border-green-500/40 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mx-auto mb-2 text-green-400"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            <span class="text-green-400">Mais Velocidade</span>
            <p class="text-[10px] text-gray-400 normal-case font-normal mt-1">Menor propagation delay (atraso)</p>
          </div>
        </div>

        <!-- FERRAMENTAS EDA -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">4. Ferramentas de Automação (EDA)</h3>
        
        <div class="grid md:grid-cols-2 gap-4 my-4">
          <div class="bg-purple-500/10 p-4 rounded-xl border border-purple-500/20">
            <h4 class="flex items-center gap-2 text-purple-400 font-bold mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="2"/><line x1="7" y1="8" x2="17" y2="8"/><line x1="7" y1="12" x2="17" y2="12"/><line x1="7" y1="16" x2="12" y2="16"/></svg>
              FPGA (Field-Programmable Gate Array)
            </h4>
            <p class="text-xs">Chip reprogramável que permite testar designs de hardware sem fabricar um chip físico. Ideal para prototipagem.</p>
            <div class="mt-2 flex gap-2 text-[10px]">
              <span class="bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded">Xilinx</span>
              <span class="bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded">Intel (Altera)</span>
            </div>
          </div>
          <div class="bg-cyan-500/10 p-4 rounded-xl border border-cyan-500/20">
            <h4 class="flex items-center gap-2 text-cyan-400 font-bold mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              ASIC (Application-Specific IC)
            </h4>
            <p class="text-xs">Chip fabricado para uma função específica. Caro para desenvolver (milhões de USD), mas extremamente eficiente em produção em massa.</p>
            <div class="mt-2 flex gap-2 text-[10px]">
              <span class="bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded">Apple Silicon</span>
              <span class="bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded">Google TPU</span>
            </div>
          </div>
        </div>

        <!-- PROPAGATION DELAY -->
        <div class="bg-red-500/5 p-5 rounded-xl border border-red-500/20 mt-6">
          <h4 class="font-bold text-red-400 mb-3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            Propagation Delay: O Limitador de Velocidade
          </h4>
          <p class="text-xs mb-3">
            Cada porta lógica tem um <strong>atraso de propagação</strong> (tempo que o sinal demora a atravessá-la). O caminho mais longo entre entrada e saída determina a <strong>frequência máxima de clock</strong> do circuito.
          </p>
          <div class="bg-black/40 p-3 rounded font-code text-xs">
            <p class="text-gray-400">// Caminho Crítico</p>
            <p>Entrada → [AND] → [OR] → [NOT] → [AND] → Saída</p>
            <p class="text-gray-400 mt-2">// 4 portas de atraso = limite de velocidade</p>
          </div>
          <p class="text-[10px] text-gray-400 mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="inline mr-1"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            Minimizar portas no caminho crítico é o principal objetivo da síntese!
          </p>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            Visão de Elite
          </h4>
          <p class="text-sm leading-relaxed">
            Sistemas modernos como FPGAs e ASICs utilizam ferramentas de síntese automatizada (EDA - Electronic Design Automation), mas o engenheiro deve entender a lógica por trás para auditar o consumo de energia e os atrasos de propagação de sinal (Propagation Delay).
          </p>
          
          <div class="mt-4 bg-black/40 p-4 rounded-lg">
            <h5 class="text-green-400 font-bold text-sm mb-2">Ferramentas EDA Populares:</h5>
            <div class="grid md:grid-cols-3 gap-2 text-xs">
              <div class="bg-green-500/10 p-2 rounded text-center">
                <span class="text-green-400">Synopsys</span>
                <p class="text-gray-500 text-[10px]">Design Compiler</p>
              </div>
              <div class="bg-green-500/10 p-2 rounded text-center">
                <span class="text-green-400">Cadence</span>
                <p class="text-gray-500 text-[10px]">Genus, Virtuoso</p>
              </div>
              <div class="bg-green-500/10 p-2 rounded text-center">
                <span class="text-green-400">Open-Source</span>
                <p class="text-gray-500 text-[10px]">Yosys, OpenROAD</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  quizId: "cs-q12"
};