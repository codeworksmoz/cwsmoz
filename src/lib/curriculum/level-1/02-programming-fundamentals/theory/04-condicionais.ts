import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "pf-t4",
  title: "Estruturas Condicionais: A Lógica de Decisão",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline flex items-center gap-2">
          🚦 Ramificando o Fluxo
        </h2>
        <p class="text-lg leading-relaxed">
          Um programa sem condicionais é apenas uma lista de ordens linear. As <strong>Estruturas Condicionais</strong> permitem que o código tome decisões e execute blocos diferentes baseados em condições lógicas (True/False).
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. O Clássico IF / ELSE</h3>
        <p>A estrutura fundamental de qualquer linguagem. Se a expressão entre parênteses for verdadeira, o primeiro bloco corre; caso contrário, o <code>else</code> assume o controlo.</p>
        <div class="bg-black/40 p-5 rounded-xl border font-code text-sm shadow-inner">
          <span class="text-accent">if</span> (user.isPremium) { <br/>
          &nbsp;&nbsp;showHighQualityVideo(); <br/>
          } <span class="text-accent">else</span> { <br/>
          &nbsp;&nbsp;showStandardVideo(); <br/>
          }
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. Encadeamento (ELSE IF)</h3>
        <p>Quando temos mais de duas opções, encadeamos as verificações. O motor de execução para na primeira condição verdadeira que encontrar.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs text-primary">
          if (score >= 90) { grade = 'A' } <br/>
          else if (score >= 80) { grade = 'B' } <br/>
          else { grade = 'F' }
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">3. Switch: O Escolhedor de Opções</h3>
        <p>O <code>switch</code> é uma alternativa elegante ao <code>if/else</code> quando precisamos de comparar uma única variável com vários valores fixos (discretos). É muito mais legível quando tens 5 ou mais opções.</p>
        <div class="bg-black/40 p-5 rounded-xl border font-code text-sm">
          <span class="text-accent">switch</span> (dia) { <br/>
          &nbsp;&nbsp;<span class="text-accent">case</span> 1: console.log("Segunda"); <span class="text-accent">break</span>; <br/>
          &nbsp;&nbsp;<span class="text-accent">case</span> 2: console.log("Terça"); <span class="text-accent">break</span>; <br/>
          &nbsp;&nbsp;<span class="text-accent">default</span>: console.log("Outro dia"); <br/>
          }
        </div>
        <p class="text-xs text-muted-foreground italic">Nota: O 'break' é obrigatório para o código não "escorregar" para o próximo caso.</p>

        <h3 class="text-xl font-bold font-headline">4. Operadores Lógicos em Condições</h3>
        <ul class="space-y-3 text-sm">
          <li><strong>AND (&&):</strong> Ambas devem ser verdade.</li>
          <li><strong>OR (||):</strong> Pelo menos uma deve ser verdade.</li>
          <li><strong>NOT (!):</strong> Inverte o valor lógico.</li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 mt-6 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-2 flex items-center gap-2">
            🚀 Dica de Elite: Curto-circuito (Short-circuit)
          </h4>
          <p class="text-sm leading-relaxed">
            Motores modernos são inteligentes. Num <code>AND</code>, se a primeira condição for <strong>Falsa</strong>, o programa nem sequer olha para a segunda, pois sabe que o resultado final será Falso. Usamos isto para evitar erros (ex: verificar se um objeto existe antes de aceder a uma propriedade dele).
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "pf-t4-quiz"
};