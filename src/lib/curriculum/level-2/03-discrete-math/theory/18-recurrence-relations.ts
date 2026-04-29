import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "math-t18",
  title: "Relações de Recorrência e o Teorema Mestre",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">📈 A Matemática da Recursão</h2>
        <p class="text-lg leading-relaxed">
          Como prever o custo de uma função que se chama a si própria? Relações de recorrência expressam o tempo T(n) em termos de chamadas menores.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. O Teorema Mestre (Master Theorem)</h3>
        <p class="text-sm">Fornece uma solução direta para recorrências de "Dividir para Conquistar" (ex: T(n) = 2T(n/2) + n). É a chave para provar que o Merge Sort é O(n log n).</p>
        
        <h3 class="text-xl font-bold font-headline text-accent">2. Recorrências Lineares Homogéneas</h3>
        <p class="text-sm">A sequência de Fibonacci: <code>F(n) = F(n-1) + F(n-2)</code>. Através da Equação Característica, podemos encontrar uma fórmula direta (Binet) que calcula o enésimo termo sem precisar de recursão ou loops.</p>
      </div>
    </div>
  `,
  quizId: "math-q18"
};
