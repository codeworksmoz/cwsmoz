import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t9",
  title: "Aritmética de Ponto Flutuante (IEEE 754)",
  youtubeVideoId: "mNst8vX-u8E",
  content: `
    <div class="space-y-8">
      <div class="bg-red-500/10 p-6 rounded-2xl border border-red-500/20 text-red-100 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-red-400 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          O Mistério: 0.1 + 0.2 = 0.30000000000000004
        </h2>
        <p class="text-lg leading-relaxed">
          Já te perguntaste por que razão um supercomputador falha numa conta de primária? A resposta não é um erro de hardware, mas uma limitação física da base 2 (binário) para representar frações decimais.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. O Padrão IEEE 754</h3>
        <p>Para que todos os computadores do mundo falem a mesma língua matemática, a norma <strong>IEEE 754</strong> define como os números reais (com vírgula) são guardados. Pensa nisto como a "Notação Científica" do computador.</p>
        
        <!-- ANATOMIA DO IEEE 754 -->
        <div class="bg-card p-6 rounded-2xl border border-white/5 shadow-inner">
          <p class="text-xs font-bold uppercase text-primary mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            Anatomia de um Número de 64 bits (Double Precision):
          </p>
          <div class="grid grid-cols-12 gap-1 text-center font-mono text-[10px]">
            <div class="col-span-1 bg-red-600/40 p-2 rounded" title="Sinal">S</div>
            <div class="col-span-3 bg-blue-600/40 p-2 rounded" title="Expoente">Expoente (11b)</div>
            <div class="col-span-8 bg-green-600/40 p-2 rounded" title="Mantissa">Mantissa / Fração (52b)</div>
          </div>
          <ul class="mt-6 space-y-3 text-sm">
            <li class="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-red-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <span><strong class="text-red-400">Sinal (1 bit):</strong> 0 para positivo, 1 para negativo.</span>
            </li>
            <li class="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-blue-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <span><strong class="text-blue-400">Expoente (11 bits):</strong> Determina a posição da "vírgula flutuante". Permite representar números minúsculos ou astronómicos.</span>
            </li>
            <li class="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <span><strong class="text-green-400">Mantissa (52 bits):</strong> Guarda a precisão do número (os algarismos significativos).</span>
            </li>
          </ul>
        </div>

        <!-- FORMATOS DO IEEE 754 -->
        <div class="bg-gray-900 p-5 rounded-xl border border-primary/20 my-4">
          <h4 class="text-primary font-bold text-sm mb-3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            Formatos do Padrão IEEE 754
          </h4>
          <div class="grid md:grid-cols-3 gap-3 text-xs">
            <div class="bg-black/40 p-3 rounded text-center">
              <span class="text-yellow-400 font-bold">Half (16 bits)</span>
              <div class="mt-2 grid grid-cols-3 gap-1 font-code text-[9px]">
                <span class="bg-red-600/40 p-1 rounded">1</span>
                <span class="bg-blue-600/40 p-1 rounded">5</span>
                <span class="bg-green-600/40 p-1 rounded">10</span>
              </div>
              <p class="text-gray-500 mt-1">Baixa precisão, GPU/ML</p>
            </div>
            <div class="bg-black/40 p-3 rounded text-center">
              <span class="text-blue-400 font-bold">Single (32 bits)</span>
              <div class="mt-2 grid grid-cols-3 gap-1 font-code text-[9px]">
                <span class="bg-red-600/40 p-1 rounded">1</span>
                <span class="bg-blue-600/40 p-1 rounded">8</span>
                <span class="bg-green-600/40 p-1 rounded">23</span>
              </div>
              <p class="text-gray-500 mt-1">Float em C, Java, C#</p>
            </div>
            <div class="bg-black/40 p-3 rounded text-center">
              <span class="text-green-400 font-bold">Double (64 bits)</span>
              <div class="mt-2 grid grid-cols-3 gap-1 font-code text-[9px]">
                <span class="bg-red-600/40 p-1 rounded">1</span>
                <span class="bg-blue-600/40 p-1 rounded">11</span>
                <span class="bg-green-600/40 p-1 rounded">52</span>
              </div>
              <p class="text-gray-500 mt-1">Double, padrão em JS</p>
            </div>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. Por que a imprecisão ocorre?</h3>
        
        <div class="bg-gray-900 p-6 rounded-2xl border border-primary/20 my-4">
          <h4 class="text-primary font-bold mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            O Problema: Frações Infinitas em Base 2
          </h4>
          <p class="text-sm leading-relaxed mb-4">
            Na nossa base 10, o número <code>1/3</code> é uma dízima infinita (0.333...). No computador (base 2), o número <code>0.1</code> decimal também é uma dízima infinita.
          </p>

          <div class="bg-black/40 p-4 rounded-lg mb-4">
            <h5 class="text-yellow-400 font-bold text-sm mb-2">Conversão de 0.1 para Binário:</h5>
            <div class="font-code text-xs space-y-1">
              <p>0.1 × 2 = <strong>0</strong>.2 → 0</p>
              <p>0.2 × 2 = <strong>0</strong>.4 → 0</p>
              <p>0.4 × 2 = <strong>0</strong>.8 → 0</p>
              <p>0.8 × 2 = <strong>1</strong>.6 → 1</p>
              <p>0.6 × 2 = <strong>1</strong>.2 → 1</p>
              <p class="text-red-400 font-bold">Repete infinitamente: 0.0001100110011...</p>
            </div>
          </div>

          <p class="text-sm leading-relaxed">
            Como o computador tem bits finitos (64 bits), ele tem de "cortar" o número em algum lugar. Esse minúsculo corte acumula-se em operações matemáticas, gerando resultados como <code class="bg-primary/10 px-1 rounded">0.30000000000000004</code>.
          </p>

          <div class="bg-red-500/10 p-4 rounded-lg mt-4 border border-red-500/20">
            <h5 class="text-red-400 font-bold text-sm mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="inline mr-1"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              Demonstração Prática:
            </h5>
            <div class="font-code text-xs space-y-1">
              <p class="text-gray-400">// JavaScript</p>
              <p>> 0.1 + 0.2</p>
              <p class="text-red-400 font-bold">0.30000000000000004</p>
              <p class="mt-2 text-gray-400">// O correto seria 0.3</p>
            </div>
          </div>
        </div>

        <!-- PREVENDO IMPRECISÃO -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">3. Casos Especiais do IEEE 754</h3>
        
        <div class="grid md:grid-cols-2 gap-4 my-4">
          <div class="bg-purple-500/10 p-4 rounded-xl border border-purple-500/20">
            <h4 class="flex items-center gap-2 text-purple-400 font-bold mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
              NaN (Not a Number)
            </h4>
            <p class="text-xs">Resultado de operações inválidas: 0/0, ∞−∞, √(-1). Importante: <strong>NaN ≠ NaN</strong> (nunca é igual a si mesmo!).</p>
            <div class="bg-black/40 p-2 rounded mt-2 font-code text-[10px]">
              <p class="text-purple-400">Math.sqrt(-1) → NaN</p>
              <p class="text-purple-400">0 / 0 → NaN</p>
            </div>
          </div>

          <div class="bg-cyan-500/10 p-4 rounded-xl border border-cyan-500/20">
            <h4 class="flex items-center gap-2 text-cyan-400 font-bold mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
              Infinity e -Infinity
            </h4>
            <p class="text-xs">Divisão por zero não crasha em floating point! Retorna ±Infinity e pode continuar a computar.</p>
            <div class="bg-black/40 p-2 rounded mt-2 font-code text-[10px]">
              <p class="text-cyan-400">1 / 0 → Infinity</p>
              <p class="text-cyan-400">-1 / 0 → -Infinity</p>
            </div>
          </div>

          <div class="bg-pink-500/10 p-4 rounded-xl border border-pink-500/20">
            <h4 class="flex items-center gap-2 text-pink-400 font-bold mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/></svg>
              Zero Negativo (-0)
            </h4>
            <p class="text-xs">O IEEE 754 distingue +0 de -0. Em operações, -0 pode aparecer como resultado de underflow negativo.</p>
            <div class="bg-black/40 p-2 rounded mt-2 font-code text-[10px]">
              <p class="text-pink-400">-1 / Infinity → -0</p>
              <p class="text-pink-400">+0 === -0 → true (mas são distintos!)</p>
            </div>
          </div>

          <div class="bg-yellow-500/10 p-4 rounded-xl border border-yellow-500/20">
            <h4 class="flex items-center gap-2 text-yellow-400 font-bold mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/></svg>
              Números Subnormais
            </h4>
            <p class="text-xs">Números extremamente pequenos próximos de zero. Têm precisão reduzida e podem causar "underflow gradual".</p>
            <div class="bg-black/40 p-2 rounded mt-2 font-code text-[10px]">
              <p class="text-yellow-400">Menor double: ~5e-324</p>
              <p class="text-yellow-400">Menor normal: ~2.2e-308</p>
            </div>
          </div>
        </div>

        <!-- PRECISÃO E COMPARAÇÃO -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">4. Como Lidar com Imprecisão (Epsilon)</h3>
        
        <div class="bg-blue-500/5 p-5 rounded-xl border border-blue-500/20 my-4">
          <h4 class="text-blue-400 font-bold text-sm mb-3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
            Regra de Comparação: NUNCA compares floats diretamente!
          </h4>
          
          <div class="space-y-4">
            <div class="bg-red-500/10 p-3 rounded border border-red-500/20">
              <p class="text-xs text-red-400 font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="inline mr-1"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
                ERRADO: if (0.1 + 0.2 == 0.3) → FALSE!
              </p>
            </div>
            <div class="bg-green-500/10 p-3 rounded border border-green-500/20">
              <p class="text-xs text-green-400 font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="inline mr-1"><polyline points="20 6 9 17 4 12"/></svg>
                CORRETO: if (Math.abs(a - b) < Number.EPSILON)
              </p>
            </div>
          </div>

          <div class="bg-black/40 p-3 rounded mt-3 font-code text-xs">
            <p class="text-gray-400">// Função segura de comparação</p>
            <p><span class="text-blue-400">function</span> <span class="text-yellow-400">isEqual</span>(a, b) {</p>
            <p class="ml-4"><span class="text-accent">return</span> Math.abs(a - b) < Number.EPSILON;</p>
            <p>}</p>
          </div>
        </div>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="2"/><line x1="7" y1="8" x2="17" y2="8"/><line x1="7" y1="12" x2="17" y2="12"/><line x1="7" y1="16" x2="12" y2="16"/></svg>
            A Regra de Ouro do Engenheiro Financeiro
          </h3>
          <p class="text-sm mb-4">Nunca, sob circunstância alguma, uses <strong>float</strong> ou <strong>double</strong> para guardar dinheiro (saldos, preços, taxas).</p>
          
          <div class="space-y-3">
            <div class="flex gap-2 text-xs bg-green-500/10 p-3 rounded-lg border border-green-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <div>
                <strong class="text-green-400">Caminho de Elite:</strong>
                <p class="text-gray-300">Guarda valores como inteiros na menor unidade (Cêntimos). Ex: 10,00 MT → 1000.</p>
              </div>
            </div>
            <div class="flex gap-2 text-xs bg-red-500/10 p-3 rounded-lg border border-red-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-red-400 mt-0.5 flex-shrink-0"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
              <div>
                <strong class="text-red-400">Caminho Amador:</strong>
                <p class="text-gray-300">Usar <code>let preco = 10.00;</code>. Em larga escala, o banco perderá dinheiro por arredondamentos errados.</p>
              </div>
            </div>
          </div>

          <div class="bg-black/40 p-4 rounded-lg mt-4">
            <h5 class="text-indigo-400 font-bold text-sm mb-2">Exemplo: Cálculo Financeiro Seguro</h5>
            <div class="font-code text-xs space-y-1">
              <p class="text-gray-400">// ❌ ERRADO</p>
              <p><span class="text-red-400">let</span> saldo = 100.50;  // Float!</p>
              <p class="mt-2 text-gray-400">// ✅ CORRETO</p>
              <p><span class="text-green-400">let</span> saldoCentimos = 10050;  // Inteiro!</p>
              <p class="text-gray-500 mt-2">// Ou usar Decimal/BigDecimal em Java, Decimal em Python</p>
            </div>
          </div>
        </div>

        <!-- INTERVALO DE PRECISÃO -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">5. Limites de Precisão: Números que "Desaparecem"</h3>
        
        <div class="bg-gray-900 p-5 rounded-xl border border-primary/20 my-4">
          <h4 class="text-primary font-bold text-sm mb-3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            O Problema do Inteiro Gigante
          </h4>
          <p class="text-xs mb-3">Com double (52 bits de mantissa), só podes representar inteiros exatos até <strong>2⁵³</strong> (9.007.199.254.740.992). Depois disso, alguns inteiros são "pulados"!</p>
          
          <div class="bg-black/40 p-3 rounded font-code text-xs">
            <p class="text-gray-400">// JavaScript</p>
            <p>> <span class="text-yellow-400">9007199254740992</span> + 1</p>
            <p class="text-red-400">9007199254740992  // O 1 foi ignorado!</p>
            <p class="mt-2 text-gray-500">// Solução: BigInt em JS, BigInteger em Java</p>
          </div>
        </div>

        <div class="bg-yellow-500/5 p-5 rounded-xl border border-yellow-500/20">
          <h4 class="font-bold text-yellow-500 mb-2 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            Sabias que?
          </h4>
          <p class="text-sm">O padrão IEEE 754 também define valores especiais como <strong>NaN</strong> (Not a Number), <strong>Infinity</strong> e <strong>-0</strong>. Saber lidar com eles evita que o teu programa crash ao dividir por zero ou processar dados corrompidos.</p>
          
          <div class="mt-3 grid md:grid-cols-3 gap-3 text-xs">
            <div class="bg-black/40 p-3 rounded text-center">
              <p class="text-yellow-400 font-bold">Overflow</p>
              <p class="text-gray-400 mt-1">Número tão grande que vira ±Infinity</p>
            </div>
            <div class="bg-black/40 p-3 rounded text-center">
              <p class="text-yellow-400 font-bold">Underflow</p>
              <p class="text-gray-400 mt-1">Número tão pequeno que vira 0 ou subnormal</p>
            </div>
            <div class="bg-black/40 p-3 rounded text-center">
              <p class="text-yellow-400 font-bold">Perda de Precisão</p>
              <p class="text-gray-400 mt-1">Operações com magnitudes muito diferentes</p>
            </div>
          </div>
        </div>

        <!-- DICA PRÁTICA -->
        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            Checklist: Quando se preocupar com Floating Point?
          </h4>
          <div class="space-y-2 text-sm">
            <div class="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <span>✅ Cálculos <strong>financeiros</strong> → Usar inteiros ou BigDecimal</span>
            </div>
            <div class="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-yellow-400 mt-0.5 flex-shrink-0"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              <span>⚠️ Comparações de <strong>igualdade</strong> → Usar epsilon</span>
            </div>
            <div class="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-yellow-400 mt-0.5 flex-shrink-0"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              <span>⚠️ Grandes <strong>somatórios</strong> → Acumula erros de precisão</span>
            </div>
            <div class="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <span>✅ <strong>Gráficos/Jogos</strong> → Float é suficiente (pequenos erros invisíveis)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  quizId: "cs-t9-quiz"
};