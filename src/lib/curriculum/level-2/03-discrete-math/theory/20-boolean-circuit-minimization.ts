import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "math-t20",
  title: "Minimização Booleana: Mapas de Karnaugh e Quine-McCluskey",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">⚡ Otimização de Hardware</h2>
        <p class="text-lg leading-relaxed">
          Um circuito lógico mais simples usa menos transístores, gasta menos bateria e gera menos calor. Minimização é a engenharia de reduzir expressões lógicas complexas à sua forma mais eficiente.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Mapas de Karnaugh (K-Maps)</h3>
        <p class="text-sm">Uma técnica visual para encontrar padrões de adjacência de bits (Código de Gray) e eliminar variáveis redundantes em funções de até 6 variáveis.</p>

        <h3 class="text-xl font-bold font-headline">2. Algoritmo de Quine-McCluskey</h3>
        <p class="text-sm">Diferente dos K-Maps, este método é puramente tabular e algorítmico, permitindo que softwares de CAD (Computer-Aided Design) simplifiquem circuitos com centenas de entradas.</p>
        
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs text-center text-accent">
          f(A,B) = (A ∧ B) ∨ (A ∧ ¬B) <br/>
          Simplifica para: <span class="text-green-400">f(A,B) = A</span>
        </div>
      </div>
    </div>
  `,
  quizId: "math-q20"
};
