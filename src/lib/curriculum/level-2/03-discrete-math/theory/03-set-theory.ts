import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "math-t3",
  title: "Teoria dos Conjuntos: Fundamentos e Paradoxos",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">📦 O Universo dos Membros</h2>
        <p class="text-lg leading-relaxed">
          Um conjunto é uma coleção desordenada de objetos distintos. Na ciência da computação, os conjuntos são a base para entender tipos de dados, bases de dados relacionais e a própria lógica da computabilidade.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Operações e Identidades</h3>
        <p class="text-sm">Dominar as operações de união (∪), intersecção (∩), diferença (-) e complemento (') é vital para otimizar queries SQL e filtros em código funcional.</p>
        
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <h4 class="font-bold text-accent mb-2">Power Set (Conjunto das Partes)</h4>
            <p class="text-xs">O conjunto de todos os subconjuntos de S. Se |S| = n, então |P(S)| = 2^n. Este crescimento exponencial é a base da complexidade de muitos algoritmos de busca.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <h4 class="font-bold text-accent mb-2">Produto Cartesiano (A × B)</h4>
            <p class="text-xs">O conjunto de todos os pares ordenados (a, b). É a base lógica por trás do CROSS JOIN em bases de dados.</p>
          </div>
        </div>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">⚠️ O Paradoxo de Russell</h3>
          <p class="text-sm leading-relaxed mb-4">
            "O conjunto de todos os conjuntos que não se contêm a si próprios, contém-se a si próprio?"
            <br/><br/>
            Este paradoxo abalou a fundação da matemática e forçou a criação da teoria de tipos, que hoje protege o teu código contra recursões infinitas e erros de inconsistência lógica.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "math-q3"
};
