import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "math-t6",
  title: "Teoria dos Números: Primos, MDC e RSA",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🔢 A Linguagem Secreta da Web</h2>
        <p class="text-lg leading-relaxed">
          A Teoria dos Números estuda as propriedades dos inteiros. É o pilar da <strong>Criptografia Moderna</strong>. Sem ela, não existiriam cartões de crédito seguros nem comunicações HTTPS.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Divisibilidade e Algoritmo de Euclides</h3>
        <p class="text-sm">Encontrar o Máximo Divisor Comum (MDC) é vital para simplificar frações e gerar chaves criptográficas. O algoritmo de Euclides resolve isto em O(log min(a,b)).</p>

        <h3 class="text-xl font-bold font-headline">2. Aritmética Modular (Relógios Matemáticos)</h3>
        <p class="text-sm">Trabalhar com restos. <code>a ≡ b (mod n)</code> significa que (a-b) é divisível por n. Isto é a base de tabelas hash e do protocolo RSA.</p>
        
        <div class="bg-black/40 p-5 rounded-xl border font-code text-sm text-accent shadow-inner">
          7 ≡ 2 (mod 5)<br/>
          (2 * 3) mod 5 = 1 <span class="text-muted-foreground">// Inverso Modular</span>
        </div>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🔐 Teorema de Fermat e Primalidade</h3>
          <p class="text-sm leading-relaxed">
            O Pequeno Teorema de Fermat diz que se p é primo, então a^(p-1) ≡ 1 (mod p). Este teste é usado por browsers para validar se um servidor é seguro antes mesmo de começares a digitar.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "math-q6"
};
