import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "ds-t18",
  title: "Sparse Data Formats: CSR e CSC para Big Data",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">📊 Otimizando o Vazio</h2>
        <p class="text-lg leading-relaxed">
          Em redes sociais ou sistemas de recomendação, a maioria dos nós não está ligada entre si (Matrizes Esparsas). Guardar uma matriz 1M x 1M é impossível. Usamos formatos comprimidos.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">CSR (Compressed Sparse Row)</h3>
        <p class="text-sm">Em vez de guardar zeros, guardamos apenas os valores existentes, os seus índices de coluna e um "ponteiro de linha". Isto reduz o uso de memória de Petabytes para Megabytes em grafos de larga escala.</p>
        
        <h3 class="text-xl font-bold font-headline text-accent">Aplicações em AI</h3>
        <p class="text-sm">Motores de Machine Learning e processamento de grafos massivos dependem destes formatos para realizar multiplicações de matrizes de forma eficiente.</p>
      </div>
    </div>
  `,
  quizId: "ds-mq18"
};
