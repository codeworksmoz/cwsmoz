import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "alg-t15",
  title: "Geometria Computacional: Algoritmos Espaciais",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">📐 Lógica no Espaço</h2>
        <p class="text-lg leading-relaxed">
          Focada em problemas que envolvem formas geométricas. Essencial para Game Dev, Mapas (GPS) e Visão Computacional.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">Convex Hull (Envoltória Convexa)</h3>
        <p class="text-sm">Imagina esticar um elástico ao redor de vários pregos numa tábua. O elástico forma a envoltória convexa. O algoritmo de <strong>Graham Scan</strong> resolve isto em O(n log n).</p>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">Line Segment Intersection</h3>
        <p class="text-sm">Detectar se dois tiros ou trajetórias se cruzam. Usamos o produto vetorial (Cross Product) para fazer estas verificações sem divisões pesadas ou erros de ponto flutuante.</p>
      </div>
    </div>
  `,
  quizId: "alg-q15"
};
