import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "math-t13",
  title: "Teoria de Autómatos: DFA e NFA",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">🤖 O Modelo Abstrato de Computação</h2>
        <p class="text-lg leading-relaxed">
          Um autómato finito é um modelo matemático de um sistema com entradas e saídas digitais. É a base para a criação de analisadores léxicos, compiladores e protocolos de comunicação.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. DFA (Deterministic Finite Automaton)</h3>
        <p class="text-sm">Num DFA, para cada estado e símbolo de entrada, existe <strong>exatamente uma</strong> transição para um próximo estado. É previsível e fácil de implementar em hardware.</p>
        <div class="bg-black/40 p-4 rounded-xl border border-white/5 font-mono text-xs text-accent">
          M = (Q, Σ, δ, q0, F)<br/>
          Q: Conjunto de estados | Σ: Alfabeto | δ: Função de transição<br/>
          q0: Estado inicial | F: Estados de aceitação
        </div>

        <h3 class="text-xl font-bold font-headline">2. NFA (Non-deterministic)</h3>
        <p class="text-sm">Permite múltiplas transições para o mesmo símbolo ou transições vazias (epsilon). Embora pareça mais complexo, qualquer NFA pode ser convertido num DFA equivalente (embora com explosão de estados).</p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-2">🚀 Aplicação Industrial:</h4>
          <p class="text-sm leading-relaxed">As Expressões Regulares (RegEx) que usas no teu código são convertidas internamente pelo motor (V8 ou Python) num autómato para validar o texto de forma ultra-rápida.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "math-q13"
};