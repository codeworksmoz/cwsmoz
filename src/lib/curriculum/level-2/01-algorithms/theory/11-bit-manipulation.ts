import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "alg-t11",
  title: "Manipulação de Bits: A Lógica do Silício",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          ⚡ Otimização no Nível do Bit
        </h2>
        <p class="text-lg leading-relaxed">
          Manipular bits diretamente é uma das formas mais poderosas de otimizar software. Muitas operações complexas podem ser substituídas por operações de bits (Bitwise), que executam num único ciclo de CPU.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Operadores Bitwise Essenciais</h3>
        <ul class="grid md:grid-cols-2 gap-4">
          <li class="p-4 bg-card border rounded-xl border-white/5">
            <strong class="text-accent">AND (&):</strong> Extrai bits específicos (Masking).
          </li>
          <li class="p-4 bg-card border rounded-xl border-white/5">
            <strong class="text-accent">OR (|):</strong> Define bits específicos (Setting).
          </li>
          <li class="p-4 bg-card border rounded-xl border-white/5">
            <strong class="text-accent">XOR (^):</strong> Inverte bits (Toggling) ou verifica diferenças.
          </li>
          <li class="p-4 bg-card border rounded-xl border-white/5">
            <strong class="text-accent">Shift (<< >>):</strong> Move os bits para a esquerda ou direita (multiplicação ou divisão por potências de 2).
          </li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">💎 Truques de Elite</h3>
          <ul class="space-y-2 text-xs font-mono">
            <li><strong>Paridade:</strong> (n & 1) == 0 verifica se é par.</li>
            <li><strong>Potência de 2:</strong> (n & (n - 1)) == 0 verifica se N é potência de 2.</li>
            <li><strong>Troca Sem Variável:</strong> x ^= y; y ^= x; x ^= y; (Troca X e Y sem auxiliar).</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  quizId: "alg-q11"
};
