import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "math-t10",
  title: "Teoria de Grafos: Euler, Hamilton e Coloração",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">🕸️ A Matemática das Redes</h2>
        <p class="text-lg leading-relaxed">Grafos modelam qualquer sistema de relações. O estudo formal dos grafos permite resolver problemas de logística, circuitos e redes sociais de forma otimizada.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Ciclos e Caminhos Históricos</h3>
        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent">Euleriano:</strong> Visita cada ARESTA exatamente uma vez. Possível se e só se o grafo for conexo e todos os nós tiverem grau par.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent">Hamiltoniano:</strong> Visita cada VÉRTICE exatamente uma vez. Encontrar tal ciclo é um problema <strong>NP-Completo</strong>.
          </li>
        </ul>

        <h3 class="text-xl font-bold font-headline">2. Grafos Planares e Teorema de Euler</h3>
        <p class="text-sm">Um grafo é planar se pode ser desenhado sem arestas que se cruzem. Vital para o design de circuitos integrados (motherboards).</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs text-center text-primary">
          V - E + F = 2 (Vértices - Arestas + Faces)
        </div>
      </div>
    </div>
  `,
  quizId: "math-q10"
};
