import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t11",
  title: "ISA: O Contrato entre Hardware e Software",
  youtubeVideoId: "E18Qv2bTkRU",
  content: `
    <div class="space-y-8">
      <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-indigo-400 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
          Instruction Set Architecture (ISA)
        </h2>
        <p class="text-lg leading-relaxed">
          O <strong>ISA</strong> é o manual de instruções do processador. É a ponte que permite ao compilador traduzir código de alto nível (como Java ou C++) para comandos binários que os circuitos da CPU conseguem executar fisicamente.
        </p>
        <p class="text-sm text-gray-400 mt-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="inline mr-1"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          ISA é a interface entre software (compiladores, SO) e hardware (circuitos, transistores)
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. O Vocabulário da Máquina</h3>
        <p class="mb-4">O ISA define o que o processador pode fazer, incluindo:</p>
        
        <ul class="space-y-3">
          <li class="flex gap-3">
            <div class="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-blue-400"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <div>
              <strong class="text-blue-400">Conjunto de Instruções:</strong>
              <p class="text-sm text-muted-foreground">Operações aritméticas (ADD, SUB, MUL), lógicas (AND, OR, NOT) e de controlo (JUMP, BRANCH).</p>
            </div>
          </li>
          <li class="flex gap-3">
            <div class="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400"><rect x="2" y="6" width="20" height="12" rx="2"/></svg>
            </div>
            <div>
              <strong class="text-green-400">Tipos de Dados:</strong>
              <p class="text-sm text-muted-foreground">Inteiros (8, 16, 32, 64 bits), ponto flutuante (IEEE 754), vetores (SIMD).</p>
            </div>
          </li>
          <li class="flex gap-3">
            <div class="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-yellow-400"><rect x="2" y="6" width="20" height="12" rx="2"/></svg>
            </div>
            <div>
              <strong class="text-yellow-400">Registradores:</strong>
              <p class="text-sm text-muted-foreground">Quantos existem (16, 32 registradores) e como podem ser usados (gerais vs especiais).</p>
            </div>
          </li>
          <li class="flex gap-3">
            <div class="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-purple-400"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </div>
            <div>
              <strong class="text-purple-400">Modos de Endereçamento:</strong>
              <p class="text-sm text-muted-foreground">Como a CPU localiza dados na memória RAM: imediato, direto, indireto, indexado.</p>
            </div>
          </li>
        </ul>

        <!-- MODOS DE ENDEREÇAMENTO -->
        <div class="bg-gray-900 p-5 rounded-xl border border-primary/20 my-4">
          <h4 class="text-primary font-bold text-sm mb-3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            Modos de Endereçamento Comuns
          </h4>
          <div class="grid md:grid-cols-2 gap-3 text-xs font-code">
            <div class="bg-black/40 p-3 rounded">
              <span class="text-yellow-400 font-bold">Imediato</span>
              <p class="text-gray-400 mt-1">ADD R1, #5 → O valor 5 está na própria instrução</p>
            </div>
            <div class="bg-black/40 p-3 rounded">
              <span class="text-yellow-400 font-bold">Direto (Registrador)</span>
              <p class="text-gray-400 mt-1">ADD R1, R2 → Usa o valor que está em R2</p>
            </div>
            <div class="bg-black/40 p-3 rounded">
              <span class="text-yellow-400 font-bold">Indireto</span>
              <p class="text-gray-400 mt-1">LOAD R1, [R2] → R2 contém o endereço do dado</p>
            </div>
            <div class="bg-black/40 p-3 rounded">
              <span class="text-yellow-400 font-bold">Indexado (Base+Offset)</span>
              <p class="text-gray-400 mt-1">LOAD R1, [R2 + #100] → Endereço = R2 + 100</p>
            </div>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline">2. Anatomia de uma Instrução</h3>
        <p class="mb-4">Cada comando binário é dividido em partes específicas que a Unidade de Controlo decifra:</p>
        
        <div class="bg-black/40 p-5 rounded-xl border font-code text-sm shadow-inner">
          <div class="flex gap-4 text-center mb-4">
            <div class="flex-1 bg-primary/20 p-3 rounded-lg">
              <span class="block font-black text-primary">OPCODE</span>
              <span class="text-[10px] opacity-60">O que fazer (ex: ADD, SUB, LOAD)</span>
            </div>
            <div class="flex-[2] bg-accent/20 p-3 rounded-lg">
              <span class="block font-black text-accent">OPERANDOS</span>
              <span class="text-[10px] opacity-60">Com quem/quê fazer (Registradores, Imediatos)</span>
            </div>
          </div>
          
          <div class="bg-blue-500/5 p-4 rounded-lg mt-4">
            <h5 class="text-blue-400 font-bold text-sm mb-2">Exemplo Real (MIPS):</h5>
            <div class="grid grid-cols-4 gap-2 text-center text-[11px]">
              <div class="bg-blue-500/20 p-2 rounded">
                <span class="block text-blue-300">OPCODE</span>
                <span>ADD</span>
              </div>
              <div class="bg-green-500/20 p-2 rounded">
                <span class="block text-green-300">Destino</span>
                <span>$t0</span>
              </div>
              <div class="bg-yellow-500/20 p-2 rounded">
                <span class="block text-yellow-300">Fonte 1</span>
                <span>$t1</span>
              </div>
              <div class="bg-purple-500/20 p-2 rounded">
                <span class="block text-purple-300">Fonte 2</span>
                <span>$t2</span>
              </div>
            </div>
            <p class="text-center text-xs mt-3">
              <span class="text-gray-400">ADD $t0, $t1, $t2</span>
              <span class="text-gray-500 ml-2">→ $t0 = $t1 + $t2</span>
            </p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">3. O Grande Debate: RISC vs CISC</h3>
        <p class="text-sm mb-4">Desde os anos 80, duas filosofias de design de ISA competem no mercado:</p>
        
        <div class="grid md:grid-cols-2 gap-6">
          <!-- RISC -->
          <div class="p-5 bg-card border rounded-2xl border-accent/40 shadow-xl hover:border-accent/60 transition-all">
            <h4 class="font-bold text-accent mb-3 flex items-center gap-2 text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              RISC (Reduced Instruction Set Computer)
            </h4>
            <div class="space-y-3">
              <div class="bg-accent/5 p-3 rounded-lg">
                <p class="text-xs font-bold text-accent mb-1">Filosofia:</p>
                <p class="text-xs text-muted-foreground">Instruções simples e fixas que executam num único ciclo de relógio. Foca na eficiência energética e velocidade constante.</p>
              </div>
              <div>
                <p class="text-xs font-bold text-accent/70 mb-1">Características:</p>
                <ul class="text-xs space-y-1 text-muted-foreground">
                  <li class="flex items-start gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-accent mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>Instruções de tamanho fixo (32 bits)</span>
                  </li>
                  <li class="flex items-start gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-accent mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>Load/Store: só acede RAM com LOAD/STORE</span>
                  </li>
                  <li class="flex items-start gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-accent mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>Muitos registradores (16-32)</span>
                  </li>
                  <li class="flex items-start gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-accent mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>Pipeline fácil de implementar</span>
                  </li>
                </ul>
              </div>
              <div class="bg-black/40 p-3 rounded">
                <p class="text-xs font-bold text-accent">Exemplos:</p>
                <p class="text-xs text-gray-400">ARM (Apple M1/M2/M3, smartphones, Raspberry Pi), RISC-V, MIPS</p>
              </div>
            </div>
          </div>

          <!-- CISC -->
          <div class="p-5 bg-card border rounded-2xl border-primary/40 shadow-xl hover:border-primary/60 transition-all">
            <h4 class="font-bold text-primary mb-3 flex items-center gap-2 text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              CISC (Complex Instruction Set Computer)
            </h4>
            <div class="space-y-3">
              <div class="bg-primary/5 p-3 rounded-lg">
                <p class="text-xs font-bold text-primary mb-1">Filosofia:</p>
                <p class="text-xs text-muted-foreground">Instruções complexas que podem realizar várias operações (ex: ler da memória e somar num só comando). Facilita a escrita de compiladores.</p>
              </div>
              <div>
                <p class="text-xs font-bold text-primary/70 mb-1">Características:</p>
                <ul class="text-xs space-y-1 text-muted-foreground">
                  <li class="flex items-start gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>Instruções de tamanho variável (1-15 bytes)</span>
                  </li>
                  <li class="flex items-start gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>Operações diretamente na memória</span>
                  </li>
                  <li class="flex items-start gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>Poucos registradores (8-16)</span>
                  </li>
                  <li class="flex items-start gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>Microcódigo interno para instruções complexas</span>
                  </li>
                </ul>
              </div>
              <div class="bg-black/40 p-3 rounded">
                <p class="text-xs font-bold text-primary">Exemplos:</p>
                <p class="text-xs text-gray-400">Intel x86-64, AMD Ryzen, AMD64 (PCs, servidores clássicos)</p>
              </div>
            </div>
          </div>
        </div>

        <!-- TABELA COMPARATIVA RISC vs CISC -->
        <div class="bg-gray-900 p-5 rounded-xl border border-primary/20 my-6">
          <h4 class="text-primary font-bold text-sm mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
            RISC vs CISC: Comparação Direta
          </h4>
          <div class="overflow-x-auto">
            <table class="w-full text-xs">
              <thead>
                <tr class="border-b border-gray-700 text-gray-400">
                  <th class="p-2 text-left">Característica</th>
                  <th class="p-2 text-left text-accent">RISC (ARM)</th>
                  <th class="p-2 text-left text-primary">CISC (x86)</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-gray-700/50">
                  <td class="p-2">Tamanho instrução</td>
                  <td class="p-2 text-accent">Fixo (32 bits)</td>
                  <td class="p-2 text-primary">Variável (1-15 bytes)</td>
                </tr>
                <tr class="border-b border-gray-700/50">
                  <td class="p-2">Ciclos por instrução</td>
                  <td class="p-2 text-accent">1 (ideal)</td>
                  <td class="p-2 text-primary">Múltiplos ciclos</td>
                </tr>
                <tr class="border-b border-gray-700/50">
                  <td class="p-2">Registradores</td>
                  <td class="p-2 text-accent">16-32</td>
                  <td class="p-2 text-primary">8-16</td>
                </tr>
                <tr class="border-b border-gray-700/50">
                  <td class="p-2">Acesso à memória</td>
                  <td class="p-2 text-accent">Apenas Load/Store</td>
                  <td class="p-2 text-primary">Qualquer instrução pode aceder</td>
                </tr>
                <tr class="border-b border-gray-700/50">
                  <td class="p-2">Consumo energético</td>
                  <td class="p-2 text-green-400">Baixo (ideal para mobile)</td>
                  <td class="p-2 text-yellow-400">Alto (requer refrigeração)</td>
                </tr>
                <tr class="border-b border-gray-700/50">
                  <td class="p-2">Densidade de código</td>
                  <td class="p-2">Menor (mais instruções)</td>
                  <td class="p-2 text-green-400">Maior (menos instruções)</td>
                </tr>
                <tr>
                  <td class="p-2">Pipeline</td>
                  <td class="p-2 text-green-400">Fácil de implementar</td>
                  <td class="p-2 text-yellow-400">Complexo (micro-ops)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- ARQUITETURAS MODERNAS -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">4. O Cenário Atual: Quem Domina?</h3>
        
        <div class="grid md:grid-cols-2 gap-4 my-4">
          <div class="bg-blue-500/10 p-4 rounded-xl border border-blue-500/20">
            <h4 class="flex items-center gap-2 text-blue-400 font-bold mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              ARM (RISC) - Domina Mobile & Embedded
            </h4>
            <ul class="text-xs space-y-1 text-gray-400">
              <li>• 99% dos smartphones (Apple, Samsung, Qualcomm)</li>
              <li>• Apple Silicon (M1/M2/M3) - Laptops/Desktops</li>
              <li>• Raspberry Pi, IoT, automóveis</li>
              <li>• AWS Graviton - Servidores cloud</li>
            </ul>
          </div>
          <div class="bg-purple-500/10 p-4 rounded-xl border border-purple-500/20">
            <h4 class="flex items-center gap-2 text-purple-400 font-bold mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              x86-64 (CISC) - Domina Desktop & Servidor
            </h4>
            <ul class="text-xs space-y-1 text-gray-400">
              <li>• Intel Core i3/i5/i7/i9, Xeon</li>
              <li>• AMD Ryzen, EPYC, Threadripper</li>
              <li>• 90% dos servidores mundiais</li>
              <li>• Legacy de 40+ anos de software</li>
            </ul>
          </div>
        </div>

        <!-- RISC-V -->
        <div class="bg-green-500/5 p-5 rounded-xl border border-green-500/20 my-4">
          <h4 class="flex items-center gap-2 text-green-400 font-bold mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            RISC-V: A Revolução Open-Source
          </h4>
          <p class="text-sm mb-3">
            O <strong>RISC-V</strong> é um ISA livre e aberto (sem royalties) criado na UC Berkeley em 2010. Qualquer pessoa pode desenhar processadores RISC-V sem pagar licenças à ARM ou Intel. É considerado o "Linux dos processadores".
          </p>
          <div class="grid md:grid-cols-2 gap-3 text-xs">
            <div class="bg-black/40 p-3 rounded">
              <span class="text-green-400 font-bold">Vantagens:</span>
              <ul class="mt-1 space-y-1 text-gray-400">
                <li>• Completamente gratuito e aberto</li>
                <li>• Modular (podes adicionar/extensões)</li>
                <li>• Crescimento explosivo na indústria</li>
              </ul>
            </div>
            <div class="bg-black/40 p-3 rounded">
              <span class="text-green-400 font-bold">Adoção:</span>
              <ul class="mt-1 space-y-1 text-gray-400">
                <li>• NVIDIA (GPUs e controladores)</li>
                <li>• Google (TPUs e Android)</li>
                <li>• Western Digital, Seagate</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-yellow-500/5 p-5 rounded-xl border border-yellow-500/20 mt-6">
          <h4 class="font-bold text-yellow-500 mb-2 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            Sabias que? O Segredo dos Processadores Modernos
          </h4>
          <p class="text-sm">
            Os processadores Intel e AMD modernos <strong>não executam instruções x86 diretamente</strong>! Eles são híbridos: aceitam instruções <strong>CISC</strong> (x86-64) por fora, mas internamente transformam-nas em pequenas <strong>Micro-operações</strong> (µops, similares a RISC) para ganhar performance via Pipelining e execução fora de ordem. O hardware de tradução é tão eficiente que a diferença de performance entre RISC e CISC tornou-se quase irrelevante em 2025.
          </p>
        </div>

        <!-- EXEMPLO PRÁTICO -->
        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            Por que isso importa para o programador?
          </h4>
          <div class="space-y-3 text-sm">
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <div>
                <strong class="text-green-400">Portabilidade:</strong>
                <p class="text-xs text-gray-400">Código compilado para x86 NÃO roda em ARM e vice-versa. Compiladores e ISAs diferentes.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <div>
                <strong class="text-green-400">Debugging:</strong>
                <p class="text-xs text-gray-400">Entender assembly ajuda a depurar crashes, otimizar código crítico e reverter engenharia.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <div>
                <strong class="text-green-400">Cross-compilação:</strong>
                <p class="text-xs text-gray-400">Compilar código para uma arquitetura diferente da máquina onde estás a desenvolver.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  quizId: "cs-t11-quiz"
};