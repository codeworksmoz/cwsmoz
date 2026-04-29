import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "math-t15",
  title: "Computabilidade e Máquinas de Turing",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">⚙️ O Limite do Pensamento Eletrónico</h2>
        <p class="text-lg leading-relaxed">
          A Máquina de Turing (TM) é o modelo supremo da computação. Ela define matematicamente o que é um <strong>Algoritmo</strong>. Se um problema não pode ser resolvido por uma TM, ele é considerado <strong>Incomputável</strong>.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. O Conceito de Universalidade</h3>
        <p class="text-sm">A Máquina de Turing Universal (UTM) é capaz de simular qualquer outra máquina de Turing. É o precursor teórico do computador moderno que carrega diferentes softwares na mesma memória.</p>

        <h3 class="text-xl font-bold font-headline text-red-400">2. O Problema da Paragem (Halting Problem)</h3>
        <p class="text-sm leading-relaxed">
          Alan Turing provou que é impossível escrever um programa que decida, para qualquer outro programa, se ele irá parar ou rodar para sempre. Esta é a prova definitiva de que a lógica tem limites físicos.
        </p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🏆 A Tese de Church-Turing</h3>
          <p class="text-sm leading-relaxed">
            Afirma que qualquer dispositivo de cálculo físico (como um computador quântico ou biológico) não é mais "poderoso" do que uma Máquina de Turing em termos do que pode ser resolvido.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "math-q15"
};
