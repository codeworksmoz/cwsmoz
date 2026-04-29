import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t2",
  title: "Lógica Booleana: O Pensamento Digital",
  youtubeVideoId: "gI-qXk7XojA",
  content: `
    <div class="space-y-6">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/></svg>
          Verdadeiro ou Falso?
        </h2>
        <p class="text-lg leading-relaxed">
          Na computação, as decisões são baseadas em dois estados: <strong>True</strong> (Verdadeiro) ou <strong>False</strong> (Falso). 
          Esta é a base da inteligência das máquinas, criada por <strong>George Boole</strong> em 1854.
        </p>
      </div>

      <div class="prose prose-invert max-w-none">
        <h3 class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
          Operadores Lógicos Fundamentais
        </h3>
        <p>
          Assim como na matemática temos +, -, ×, ÷, na lógica booleana temos operadores 
          que combinam valores verdadeiro/falso. Os principais são:
        </p>

        <!-- OPERADOR AND -->
        <div class="bg-blue-500/10 p-6 rounded-xl border border-blue-500/20 my-4">
          <h4 class="flex items-center gap-2 text-blue-400 font-bold text-lg mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><path d="M11 18H8a2 2 0 0 1-2-2V9"/></svg>
            AND (E) - Conjunção
          </h4>
          <p class="text-sm mb-4">Retorna <strong>True</strong> apenas quando <strong>TODAS</strong> as condições são verdadeiras.</p>
          
          <div class="bg-gray-900 p-4 rounded-lg">
            <p class="text-sm text-gray-400 mb-2">Exemplo: "Vou à praia se tiver sol <strong>E</strong> tempo livre"</p>
            <div class="grid grid-cols-3 gap-2 text-center font-code text-sm">
              <div class="bg-gray-800 p-2 rounded">A</div>
              <div class="bg-gray-800 p-2 rounded">B</div>
              <div class="bg-gray-800 p-2 rounded">A AND B</div>
              <div class="p-2">0</div><div class="p-2">0</div><div class="p-2 text-red-400">0</div>
              <div class="p-2">0</div><div class="p-2">1</div><div class="p-2 text-red-400">0</div>
              <div class="p-2">1</div><div class="p-2">0</div><div class="p-2 text-red-400">0</div>
              <div class="p-2">1</div><div class="p-2">1</div><div class="p-2 text-green-400 font-bold">1</div>
            </div>
          </div>
          <p class="text-xs text-gray-400 mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="inline mr-1"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            Símbolos: && (JavaScript), and (Python), AND (SQL)
          </p>
        </div>

        <!-- OPERADOR OR -->
        <div class="bg-green-500/10 p-6 rounded-xl border border-green-500/20 my-4">
          <h4 class="flex items-center gap-2 text-green-400 font-bold text-lg mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2v20"/><path d="M2 12h20"/></svg>
            OR (OU) - Disjunção
          </h4>
          <p class="text-sm mb-4">Retorna <strong>True</strong> quando pelo menos <strong>UMA</strong> condição é verdadeira.</p>
          
          <div class="bg-gray-900 p-4 rounded-lg">
            <p class="text-sm text-gray-400 mb-2">Exemplo: "Posso comprar se tiver dinheiro <strong>OU</strong> cartão"</p>
            <div class="grid grid-cols-3 gap-2 text-center font-code text-sm">
              <div class="bg-gray-800 p-2 rounded">A</div>
              <div class="bg-gray-800 p-2 rounded">B</div>
              <div class="bg-gray-800 p-2 rounded">A OR B</div>
              <div class="p-2">0</div><div class="p-2">0</div><div class="p-2 text-red-400">0</div>
              <div class="p-2">0</div><div class="p-2">1</div><div class="p-2 text-green-400 font-bold">1</div>
              <div class="p-2">1</div><div class="p-2">0</div><div class="p-2 text-green-400 font-bold">1</div>
              <div class="p-2">1</div><div class="p-2">1</div><div class="p-2 text-green-400 font-bold">1</div>
            </div>
          </div>
          <p class="text-xs text-gray-400 mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="inline mr-1"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            Símbolos: || (JavaScript), or (Python), OR (SQL)
          </p>
        </div>

        <!-- OPERADOR NOT -->
        <div class="bg-red-500/10 p-6 rounded-xl border border-red-500/20 my-4">
          <h4 class="flex items-center gap-2 text-red-400 font-bold text-lg mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
            NOT (NÃO) - Negação
          </h4>
          <p class="text-sm mb-4">
            Inverte o valor lógico: o que é verdadeiro vira falso e vice-versa.
            É o <strong>único operador unário</strong> (atua sobre um único valor).
          </p>
          
          <div class="bg-gray-900 p-4 rounded-lg">
            <p class="text-sm text-gray-400 mb-2">Exemplo: "Se <strong>NÃO</strong> estiver chovendo, vou sair"</p>
            <div class="grid grid-cols-2 gap-2 text-center font-code text-sm w-48">
              <div class="bg-gray-800 p-2 rounded">A</div>
              <div class="bg-gray-800 p-2 rounded">NOT A</div>
              <div class="p-2">0</div><div class="p-2 text-green-400 font-bold">1</div>
              <div class="p-2">1</div><div class="p-2 text-red-400">0</div>
            </div>
          </div>
          <p class="text-xs text-gray-400 mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="inline mr-1"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            Símbolos: ! (JavaScript), not (Python), NOT (SQL)
          </p>
        </div>

        <h3 class="flex items-center gap-2 mt-8">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
          Tabela Verdade Completa
        </h3>
        <p>Comparação de todos os operadores para as mesmas entradas:</p>
        
        <div class="bg-gray-900 p-6 rounded-xl border border-primary/20 my-4 overflow-x-auto">
          <table class="w-full text-center font-code text-sm">
            <thead>
              <tr class="border-b border-gray-700">
                <th class="p-3">A</th>
                <th class="p-3">B</th>
                <th class="p-3 text-blue-400">AND</th>
                <th class="p-3 text-green-400">OR</th>
                <th class="p-3 text-yellow-400">XOR</th>
                <th class="p-3 text-purple-400">NAND</th>
                <th class="p-3 text-pink-400">NOR</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-gray-700/50">
                <td class="p-3">0</td>
                <td class="p-3">0</td>
                <td class="p-3 text-blue-400">0</td>
                <td class="p-3 text-green-400">0</td>
                <td class="p-3 text-yellow-400">0</td>
                <td class="p-3 text-purple-400">1</td>
                <td class="p-3 text-pink-400">1</td>
              </tr>
              <tr class="border-b border-gray-700/50">
                <td class="p-3">0</td>
                <td class="p-3">1</td>
                <td class="p-3 text-blue-400">0</td>
                <td class="p-3 text-green-400">1</td>
                <td class="p-3 text-yellow-400">1</td>
                <td class="p-3 text-purple-400">1</td>
                <td class="p-3 text-pink-400">0</td>
              </tr>
              <tr class="border-b border-gray-700/50">
                <td class="p-3">1</td>
                <td class="p-3">0</td>
                <td class="p-3 text-blue-400">0</td>
                <td class="p-3 text-green-400">1</td>
                <td class="p-3 text-yellow-400">1</td>
                <td class="p-3 text-purple-400">1</td>
                <td class="p-3 text-pink-400">0</td>
              </tr>
              <tr>
                <td class="p-3">1</td>
                <td class="p-3">1</td>
                <td class="p-3 text-blue-400">1</td>
                <td class="p-3 text-green-400">1</td>
                <td class="p-3 text-yellow-400">0</td>
                <td class="p-3 text-purple-400">0</td>
                <td class="p-3 text-pink-400">0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
          Operadores Derivados
        </h3>
        
        <div class="grid md:grid-cols-2 gap-4 my-4">
          <div class="bg-yellow-500/10 p-4 rounded-xl border border-yellow-500/20">
            <h4 class="flex items-center gap-2 text-yellow-400 font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="M6 6l12 12"/></svg>
              XOR (OU Exclusivo)
            </h4>
            <p class="text-sm mt-2">True se os valores forem <strong>diferentes</strong>.</p>
            <p class="text-xs text-gray-400 mt-1">Símbolo: ⊕ ou ^ (C, Java, JS)</p>
          </div>
          <div class="bg-purple-500/10 p-4 rounded-xl border border-purple-500/20">
            <h4 class="flex items-center gap-2 text-purple-400 font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/></svg>
              NAND (NOT AND)
            </h4>
            <p class="text-sm mt-2">O oposto do AND. Porta universal.</p>
            <p class="text-xs text-gray-400 mt-1">Base para construir todos os circuitos</p>
          </div>
          <div class="bg-pink-500/10 p-4 rounded-xl border border-pink-500/20">
            <h4 class="flex items-center gap-2 text-pink-400 font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/></svg>
              NOR (NOT OR)
            </h4>
            <p class="text-sm mt-2">O oposto do OR. Outra porta universal.</p>
            <p class="text-xs text-gray-400 mt-1">True apenas quando ambos são False</p>
          </div>
          <div class="bg-cyan-500/10 p-4 rounded-xl border border-cyan-500/20">
            <h4 class="flex items-center gap-2 text-cyan-400 font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>
              XNOR (Igualdade)
            </h4>
            <p class="text-sm mt-2">True se os valores forem <strong>iguais</strong>.</p>
            <p class="text-xs text-gray-400 mt-1">Complemento do XOR: A ⊙ B</p>
          </div>
        </div>

        <h3 class="flex items-center gap-2 mt-8">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/><path d="M7 7h.01"/></svg>
          Leis e Propriedades da Álgebra Booleana
        </h3>

        <div class="space-y-3 my-4">
          <div class="bg-gray-900 p-4 rounded-xl border border-primary/20">
            <h4 class="text-primary font-bold text-sm mb-2">📋 Leis Fundamentais</h4>
            <div class="space-y-2 text-sm font-code">
              <div class="flex justify-between border-b border-gray-700/50 pb-1">
                <span>Lei da Identidade</span>
                <span>A AND True = A</span>
              </div>
              <div class="flex justify-between border-b border-gray-700/50 pb-1">
                <span>Lei da Complementação</span>
                <span>A AND NOT A = False</span>
              </div>
              <div class="flex justify-between border-b border-gray-700/50 pb-1">
                <span>Lei da Dupla Negação</span>
                <span>NOT NOT A = A</span>
              </div>
              <div class="flex justify-between border-b border-gray-700/50 pb-1">
                <span>Lei Comutativa</span>
                <span>A AND B = B AND A</span>
              </div>
              <div class="flex justify-between border-b border-gray-700/50 pb-1">
                <span>Lei Associativa</span>
                <span>(A AND B) AND C = A AND (B AND C)</span>
              </div>
              <div class="flex justify-between">
                <span>Lei Distributiva</span>
                <span>A AND (B OR C) = (A AND B) OR (A AND C)</span>
              </div>
            </div>
          </div>

          <div class="bg-gray-900 p-4 rounded-xl border border-primary/20">
            <h4 class="text-primary font-bold text-sm mb-2">🎯 Leis de De Morgan</h4>
            <div class="space-y-2 text-sm font-code">
              <div class="flex justify-between border-b border-gray-700/50 pb-1">
                <span>NOT (A AND B)</span>
                <span>= NOT A OR NOT B</span>
              </div>
              <div class="flex justify-between">
                <span>NOT (A OR B)</span>
                <span>= NOT A AND NOT B</span>
              </div>
            </div>
          </div>
        </div>

        <h3 class="flex items-center gap-2 mt-8">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2"/><line x1="7" y1="8" x2="17" y2="8"/><line x1="7" y1="12" x2="17" y2="12"/><line x1="7" y1="16" x2="12" y2="16"/></svg>
          Aplicações Práticas
        </h3>
        <div class="space-y-3 my-4">
          <div class="bg-green-500/10 p-4 rounded-xl border border-green-500/20">
            <h4 class="flex items-center gap-2 text-green-400 font-bold mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
              Controle de Acesso
            </h4>
            <p class="text-sm font-code">
              <span class="text-gray-400">Exemplo:</span> 
              <span class="text-primary">admin</span> AND <span class="text-primary">logado</span> = acesso ao painel
            </p>
          </div>

          <div class="bg-blue-500/10 p-4 rounded-xl border border-blue-500/20">
            <h4 class="flex items-center gap-2 text-blue-400 font-bold mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              Mecanismos de Busca
            </h4>
            <p class="text-sm">
              <span class="font-code text-primary">"gatos AND cachorros"</span> - ambos os termos<br/>
              <span class="font-code text-primary">"gatos OR felinos"</span> - qualquer um<br/>
              <span class="font-code text-primary">"gatos NOT siameses"</span> - exclui termo
            </p>
          </div>

          <div class="bg-purple-500/10 p-4 rounded-xl border border-purple-500/20">
            <h4 class="flex items-center gap-2 text-purple-400 font-bold mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Filtros e Condições
            </h4>
            <p class="text-sm font-code">
              <span class="text-primary">idade {">"}= 18</span> AND <span class="text-primary">tem_cnh</span> = pode dirigir
            </p>
          </div>
        </div>

        <div class="bg-amber-500/10 p-6 rounded-xl border border-amber-500/20 mt-6">
          <h3 class="flex items-center gap-2 text-amber-400 font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            Curiosidade: O Bit em Circuitos
          </h3>
          <p class="text-sm mt-2">
            Em hardware, cada porta lógica é um circuito eletrônico. Portas NAND e NOR 
            são chamadas de <strong>"portas universais"</strong> porque qualquer outra 
            porta lógica pode ser construída apenas com elas!
          </p>
          <div class="mt-3 text-xs text-gray-400">
            <p>CPU = Milhões de portas lógicas → Processamento Booleano</p>
          </div>
        </div>
      </div>
    </div>
  `,
  quizId: "cs-t2-quiz"
};