import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "pf-t2",
  title: "Operadores: A Matemática do Código",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          ➕ Transformando Dados em Resultados
        </h2>
        <p class="text-lg leading-relaxed">
          Operadores são símbolos que instruem o processador a realizar manipulações matemáticas ou lógicas específicas. Eles são os verbos do código: "some", "compare", "atribua".
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Operadores Aritméticos</h3>
        <p>Realizam cálculos matemáticos. Um detalhe crítico para engenheiros é a <strong>Divisão Inteira</strong>.</p>
        <div class="grid md:grid-cols-2 gap-4">
          <ul class="space-y-2 text-sm">
            <li><code class="text-accent">+ - * /</code>: Adição, Subtração, Multiplicação e Divisão.</li>
            <li><code class="text-accent">%</code>: Módulo (Resto da divisão). Vital para algoritmos de paridade ou ciclos.</li>
            <li><code class="text-accent">**</code>: Exponenciação (Python/JS moderno).</li>
          </ul>
          <div class="bg-black/40 p-4 rounded-xl border border-white/5">
            <h4 class="text-xs font-bold text-yellow-500 mb-2">⚠️ Atenção à Linguagem:</h4>
            <p class="text-[10px] leading-relaxed">Em C++ e Java, <code>5 / 2</code> resulta em <code>2</code> (inteiro). Em Python e JS, resulta em <code>2.5</code>. Saber como a sua ferramenta trata frações evita erros financeiros graves.</p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. Operadores de Comparação (Relacionais)</h3>
        <p>Resultam sempre num valor <strong>Booleano</strong> (True ou False). São usados para controlar o fluxo do programa.</p>
        <div class="bg-card p-4 rounded-xl border font-code text-sm">
          x <span class="text-primary">==</span> y <span class="text-muted-foreground">// Igualdade</span><br/>
          x <span class="text-primary">!=</span> y <span class="text-muted-foreground">// Diferente</span><br/>
          x <span class="text-primary">===</span> y <span class="text-muted-foreground">// Estritamente igual (Valor e Tipo - JS)</span><br/>
          x <span class="text-primary">></span> y, x <span class="text-primary"><</span> y <span class="text-muted-foreground">// Maior e Menor</span>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">3. Operadores Lógicos</h3>
        <p>Permitem combinar múltiplas condições. O segredo da performance aqui é o <strong>Curto-circuito</strong>.</p>
        <ul class="space-y-4">
          <li class="flex gap-4">
            <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 font-bold">&&</div>
            <div>
              <p class="font-bold text-sm">AND (E):</p>
              <p class="text-xs text-muted-foreground">Verdadeiro se AMBOS forem verdade. Se o primeiro for Falso, o motor nem olha para o segundo.</p>
            </div>
          </li>
          <li class="flex gap-4">
            <div class="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 font-bold">||</div>
            <div>
              <p class="font-bold text-sm">OR (OU):</p>
              <p class="text-xs text-muted-foreground">Verdadeiro se PELO MENOS UM for verdade. Se o primeiro for Verdadeiro, o resto é ignorado.</p>
            </div>
          </li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">⚖️ Ordem de Precedência</h3>
          <p class="text-sm mb-4">Tal como na escola, o computador segue uma hierarquia. Parênteses têm sempre a prioridade máxima.</p>
          <div class="space-y-2 font-mono text-xs">
            <p>1. <span class="text-accent">( )</span> Parênteses</p>
            <p>2. <span class="text-accent">++ -- !</span> Incremento/Negação</p>
            <p>3. <span class="text-accent">* / %</span> Multiplicação e Divisão</p>
            <p>4. <span class="text-accent">+ -</span> Soma e Subtração</p>
            <p>5. <span class="text-accent">< > ==</span> Comparações</p>
            <p>6. <span class="text-accent">&& ||</span> Lógicos</p>
          </div>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Dica de Elite: Atribuição Composta
          </h4>
          <p class="text-sm leading-relaxed">
            Em vez de escrever <code>x = x + 10</code>, use <code>x += 10</code>. É mais limpo, profissional e, em algumas linguagens compiladas, permite otimizações de registo no CPU.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "pf-t2-quiz"
};
