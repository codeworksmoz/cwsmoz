import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t3",
  title: "Álgebra Booleana: A Matemática da Lógica",
  youtubeVideoId: "95v88Oit0H8",
  quizId: "cs-t3-quiz",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          O Que é a Álgebra Booleana?
        </h2>
        <p class="text-lg leading-relaxed">
          Na matemática comum, usamos números de 0 a infinito. Na <strong>Álgebra Booleana</strong>, o nosso universo tem apenas dois valores: <strong>0 (Falso)</strong> e <strong>1 (Verdadeiro)</strong>. É o sistema matemático que permite que os computadores tomem decisões e processem dados.
        </p>
        <div class="flex gap-4 mt-4 text-sm">
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            <span class="text-gray-400">George Boole - 1854</span>
          </div>
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
            <span class="text-gray-400">Base da Computação Moderna</span>
          </div>
        </div>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. A Lei da Identidade (Por que A AND 1 = A?)</h3>
        <p class="text-sm">Muitos iniciantes perguntam: "Por que o resultado é a própria variável?". Imagina que o <b>1</b> é uma porta sempre aberta (energia a passar). O resultado final depende apenas de ti (<b>A</b>):</p>
        
        <div class="bg-black/40 p-6 rounded-xl border border-white/5 space-y-4 shadow-inner">
          <p class="font-bold text-primary italic">Prova linha por linha:</p>
          <ul class="space-y-3 text-sm font-mono">
            <li class="flex gap-4 border-b border-white/5 pb-2">
              <span class="text-accent">Cenário 1:</span>
              <span>Se A = 1 (Verdadeiro), então: 1 AND 1 = <b class="text-green-400">1</b> (O resultado foi igual a A)</span>
            </li>
            <li class="flex gap-4 pb-2">
              <span class="text-accent">Cenário 2:</span>
              <span>Se A = 0 (Falso), então: 0 AND 1 = <b class="text-red-400">0</b> (O resultado foi igual a A)</span>
            </li>
          </ul>
          <p class="text-xs text-muted-foreground mt-4 leading-relaxed">
            <b>Conclusão:</b> Como em ambos os casos o resultado final foi exatamente o valor que estava guardado na variável A, dizemos que <code class="bg-primary/10 px-1 py-0.5 rounded">A AND 1 = A</code>. O 1 é o "Elemento Neutro" do operador AND.
          </p>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. A Lei do Nulo (O "Buraco Negro")</h3>
        <p class="text-sm">Existem valores que dominam a expressão, independentemente do que a variável <b>A</b> tente fazer:</p>
        <ul class="grid md:grid-cols-2 gap-4">
          <li class="bg-card p-5 rounded-xl border border-white/5 hover:border-primary/30 transition-colors">
            <h4 class="font-bold text-primary mb-1 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
              A AND 0 = 0
            </h4>
            <p class="text-xs opacity-70">Se um dos lados é 0 num AND, o resultado é sempre 0. O zero "aniquila" a variável.</p>
          </li>
          <li class="bg-card p-5 rounded-xl border border-white/5 hover:border-primary/30 transition-colors">
            <h4 class="font-bold text-primary mb-1 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m8 12 4 4 4-4"/></svg>
              A OR 1 = 1
            </h4>
            <p class="text-xs opacity-70">No OR, se já tens um 1, o sucesso é garantido. O resultado é sempre 1.</p>
          </li>
        </ul>

        <!-- TABELA RESUMO DAS LEIS BÁSICAS -->
        <div class="bg-gray-900 p-5 rounded-xl border border-primary/20 my-6">
          <h4 class="flex items-center gap-2 text-primary font-bold mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
            Resumo das Leis de Identidade e Nulo
          </h4>
          <div class="grid grid-cols-2 gap-3 text-sm font-code">
            <div class="bg-black/40 p-3 rounded text-center">
              <div class="text-green-400 mb-1">Identidade AND</div>
              <div>A · 1 = A</div>
            </div>
            <div class="bg-black/40 p-3 rounded text-center">
              <div class="text-green-400 mb-1">Identidade OR</div>
              <div>A + 0 = A</div>
            </div>
            <div class="bg-black/40 p-3 rounded text-center">
              <div class="text-red-400 mb-1">Nulo AND</div>
              <div>A · 0 = 0</div>
            </div>
            <div class="bg-black/40 p-3 rounded text-center">
              <div class="text-red-400 mb-1">Nulo OR</div>
              <div>A + 1 = 1</div>
            </div>
          </div>
          <p class="text-xs text-gray-400 mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="inline mr-1"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            Notação: <strong>·</strong> = AND, <strong>+</strong> = OR (usada em circuitos digitais)
          </p>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">3. Lei da Idempotência (Sem Repetições)</h3>
        <p class="text-sm">Diferente da álgebra comum onde <code>X + X = 2X</code>, na lógica booleana:</p>
        <div class="bg-primary/5 p-4 rounded-xl border border-primary/20 text-center font-code text-sm">
          A AND A = A <br/>
          A OR A = A
        </div>
        <p class="text-xs text-gray-400 mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="inline mr-1"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          Isso é útil para eliminar redundâncias em expressões lógicas complexas.
        </p>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 text-red-400">4. Lei da Contradição e do Terceiro Excluído</h3>
        <p class="text-sm">O que acontece quando comparas algo com o seu oposto (NOT A)?</p>
        <ul class="space-y-4">
          <li class="flex gap-4 items-start">
            <div class="bg-black/60 p-3 rounded font-code text-xs text-yellow-500 min-w-[200px]">
              <span class="text-red-400">Contradição:</span><br/>
              A AND (NOT A) = 0
            </div>
            <p class="text-xs text-muted-foreground pt-2">Algo não pode ser Verdadeiro e Falso ao mesmo tempo.</p>
          </li>
          <li class="flex gap-4 items-start">
            <div class="bg-black/60 p-3 rounded font-code text-xs text-yellow-500 min-w-[200px]">
              <span class="text-green-400">Terceiro Excluído:</span><br/>
              A OR (NOT A) = 1
            </div>
            <p class="text-xs text-muted-foreground pt-2">Algo é Verdadeiro ou é Falso. Não existe terceira opção.</p>
          </li>
        </ul>

        <!-- NOVA SEÇÃO: Leis da Absorção -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">5. Leis da Absorção (Simplificação Poderosa)</h3>
        <p class="text-sm">Estas leis permitem eliminar termos redundantes em expressões complexas:</p>
        
        <div class="bg-gray-900 p-5 rounded-xl border border-primary/20 my-4 space-y-3">
          <div class="flex justify-between items-center border-b border-gray-700/50 pb-2">
            <span class="text-sm">Absorção 1:</span>
            <span class="font-code text-primary">A + (A · B) = A</span>
          </div>
          <div class="flex justify-between items-center border-b border-gray-700/50 pb-2">
            <span class="text-sm">Absorção 2:</span>
            <span class="font-code text-primary">A · (A + B) = A</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm">Absorção com negação:</span>
            <span class="font-code text-primary">A + (¬A · B) = A + B</span>
          </div>
        </div>
        <p class="text-xs text-muted-foreground italic">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="inline mr-1"><path d="M12 2L2 7l10 5 10-5-10-5z"/></svg>
          Exemplo prático: <code class="bg-primary/10 px-1 rounded">if (isAdmin || (isAdmin && hasKey))</code> → pode simplificar para <code class="bg-primary/10 px-1 rounded">if (isAdmin)</code>
        </p>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">6. As Leis de De Morgan (A Chave da Simplificação)</h3>
        <p class="text-sm">Estas leis são fundamentais para engenheiros escreverem código limpo. Elas dizem-nos como "distribuir" uma negação:</p>
        <div class="bg-indigo-500/10 p-5 rounded-xl border border-indigo-500/20 space-y-4">
          <div class="bg-black/60 p-4 rounded-lg font-code text-xs text-accent text-center">
            NOT (A AND B) = (NOT A) OR (NOT B) <br/><br/>
            NOT (A OR B) = (NOT A) AND (NOT B)
          </div>
          <p class="text-xs italic text-center text-muted-foreground">"Negar um 'E' transforma-o num 'OU' de partes negadas."</p>
        </div>

        <!-- DEMONSTRAÇÃO VISUAL DE DE MORGAN -->
        <div class="bg-purple-500/10 p-5 rounded-xl border border-purple-500/20 my-4">
          <h4 class="flex items-center gap-2 text-purple-400 font-bold mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 0-3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            Demonstração Prática - De Morgan
          </h4>
          <div class="font-code text-sm space-y-2">
            <div class="text-gray-400 mb-2">Para A=1, B=0:</div>
            <div class="bg-black/40 p-3 rounded">
              <span class="text-yellow-400">NOT (1 AND 0)</span>
              <span class="text-gray-500 mx-2">=</span>
              <span class="text-yellow-400">NOT (0)</span>
              <span class="text-gray-500 mx-2">=</span>
              <span class="text-green-400 font-bold">1</span>
            </div>
            <div class="bg-black/40 p-3 rounded">
              <span class="text-blue-400">(NOT 1) OR (NOT 0)</span>
              <span class="text-gray-500 mx-2">=</span>
              <span class="text-blue-400">0 OR 1</span>
              <span class="text-gray-500 mx-2">=</span>
              <span class="text-green-400 font-bold">1</span>
            </div>
          </div>
          <p class="text-xs text-center mt-3 text-green-400">✓ Ambos os lados produzem o mesmo resultado!</p>
        </div>

        <!-- LEIS DA COMUTATIVIDADE E ASSOCIATIVIDADE -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">7. Leis da Comutatividade e Associatividade</h3>
        <div class="grid md:grid-cols-2 gap-4 my-4">
          <div class="bg-blue-500/10 p-4 rounded-xl border border-blue-500/20">
            <h4 class="flex items-center gap-2 text-blue-400 font-bold mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>
              Comutatividade
            </h4>
            <div class="font-code text-sm space-y-1">
              <p>A AND B = B AND A</p>
              <p>A OR B = B OR A</p>
            </div>
            <p class="text-xs text-gray-400 mt-2">A ordem não importa!</p>
          </div>
          <div class="bg-cyan-500/10 p-4 rounded-xl border border-cyan-500/20">
            <h4 class="flex items-center gap-2 text-cyan-400 font-bold mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
              Associatividade
            </h4>
            <div class="font-code text-sm space-y-1">
              <p>(A AND B) AND C = A AND (B AND C)</p>
              <p>(A OR B) OR C = A OR (B OR C)</p>
            </div>
            <p class="text-xs text-gray-400 mt-2">Agrupamento não altera o resultado!</p>
          </div>
        </div>

        <!-- LEI DA DISTRIBUTIVIDADE -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">8. Lei da Distributividade</h3>
        <div class="bg-gray-900 p-5 rounded-xl border border-primary/20 my-4">
          <div class="space-y-3 font-code text-sm">
            <div class="bg-black/40 p-3 rounded">
              <span class="text-primary">A AND (B OR C)</span>
              <span class="text-gray-500 mx-2">=</span>
              <span class="text-green-400">(A AND B) OR (A AND C)</span>
            </div>
            <div class="bg-black/40 p-3 rounded">
              <span class="text-primary">A OR (B AND C)</span>
              <span class="text-gray-500 mx-2">=</span>
              <span class="text-green-400">(A OR B) AND (A OR C)</span>
            </div>
          </div>
          <p class="text-xs text-gray-400 mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="inline mr-1"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            Similar à matemática: 2 × (3 + 4) = (2 × 3) + (2 × 4)
          </p>
        </div>
      </div>

      <!-- TABELA COMPLETA DE LEIS -->
      <div class="bg-gray-900 p-6 rounded-2xl border border-primary/20 shadow-lg my-8">
        <h3 class="flex items-center gap-2 text-primary font-bold text-lg mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
          Tabela Resumo - Todas as Leis da Álgebra Booleana
        </h3>
        <div class="overflow-x-auto">
          <table class="w-full text-sm font-code">
            <thead>
              <tr class="border-b border-gray-700 text-primary">
                <th class="p-3 text-left">Lei</th>
                <th class="p-3 text-left">Expressão AND</th>
                <th class="p-3 text-left">Expressão OR</th>
              </tr>
            </thead>
            <tbody class="text-xs">
              <tr class="border-b border-gray-700/50">
                <td class="p-3 text-yellow-400">Identidade</td>
                <td class="p-3">A · 1 = A</td>
                <td class="p-3">A + 0 = A</td>
              </tr>
              <tr class="border-b border-gray-700/50">
                <td class="p-3 text-red-400">Nulo</td>
                <td class="p-3">A · 0 = 0</td>
                <td class="p-3">A + 1 = 1</td>
              </tr>
              <tr class="border-b border-gray-700/50">
                <td class="p-3 text-blue-400">Idempotência</td>
                <td class="p-3">A · A = A</td>
                <td class="p-3">A + A = A</td>
              </tr>
              <tr class="border-b border-gray-700/50">
                <td class="p-3 text-purple-400">Complementação</td>
                <td class="p-3">A · ¬A = 0</td>
                <td class="p-3">A + ¬A = 1</td>
              </tr>
              <tr class="border-b border-gray-700/50">
                <td class="p-3 text-green-400">Dupla Negação</td>
                <td class="p-3" colspan="2">¬(¬A) = A</td>
              </tr>
              <tr class="border-b border-gray-700/50">
                <td class="p-3 text-cyan-400">Comutativa</td>
                <td class="p-3">A · B = B · A</td>
                <td class="p-3">A + B = B + A</td>
              </tr>
              <tr class="border-b border-gray-700/50">
                <td class="p-3 text-pink-400">Associativa</td>
                <td class="p-3">(A·B)·C = A·(B·C)</td>
                <td class="p-3">(A+B)+C = A+(B+C)</td>
              </tr>
              <tr class="border-b border-gray-700/50">
                <td class="p-3 text-orange-400">Distributiva</td>
                <td class="p-3">A·(B+C) = A·B + A·C</td>
                <td class="p-3">A + B·C = (A+B)·(A+C)</td>
              </tr>
              <tr>
                <td class="p-3 text-indigo-400">De Morgan</td>
                <td class="p-3">¬(A·B) = ¬A + ¬B</td>
                <td class="p-3">¬(A+B) = ¬A · ¬B</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 shadow-lg">
        <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          Aplicação Prática na Engenharia
        </h4>
        <p class="text-sm leading-relaxed">
          Saber estas leis permite-te otimizar o teu código. Por exemplo, transformar uma condição complexa como <code class="bg-black/40 px-1 py-0.5 rounded text-xs">if (!(user.isLogged && user.hasPermission))</code> em algo mais legível como <code class="bg-black/40 px-1 py-0.5 rounded text-xs">if (!user.isLogged || !user.hasPermission)</code>, economizando ciclos de processamento e aumentando a clareza do sistema.
        </p>
        
        <div class="mt-4 bg-black/40 p-4 rounded-lg">
          <h5 class="text-sm font-bold text-green-400 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="inline mr-1"><rect x="2" y="2" width="20" height="20" rx="2"/><line x1="7" y1="8" x2="17" y2="8"/><line x1="7" y1="12" x2="17" y2="12"/><line x1="7" y1="16" x2="12" y2="16"/></svg>
            Exemplos de Otimização:
          </h5>
          <ul class="text-xs space-y-2 font-code">
            <li class="flex items-start gap-2">
              <span class="text-green-400 mt-0.5">✓</span>
              <span><span class="text-red-400/70 line-through">if (isAdmin == true)</span> → <span class="text-green-400">if (isAdmin)</span> (Identidade)</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-400 mt-0.5">✓</span>
              <span><span class="text-red-400/70 line-through">if (x && x)</span> → <span class="text-green-400">if (x)</span> (Idempotência)</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-400 mt-0.5">✓</span>
              <span><span class="text-red-400/70 line-through">return !(a && b)</span> → <span class="text-green-400">return !a || !b</span> (De Morgan)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `
};