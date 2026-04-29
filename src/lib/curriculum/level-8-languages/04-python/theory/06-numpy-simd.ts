import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m6",
  title: "NumPy: Vectorização e Instruções SIMD",
  youtubeVideoId: "v4cd1O4zkGw",
  enableInteractive: true,
  quizId: "py-mq6",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          ⚡ O Fim dos Loops de Python
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          NumPy não é apenas uma biblioteca de arrays; é um motor que executa operações em C e utiliza instruções <strong>SIMD (Single Instruction, Multiple Data)</strong> do processador para atingir performance de computação científica real.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Vectorização: O Segredo da Velocidade</h3>
        <p class="text-sm leading-relaxed">
          Ao realizar uma operação num array NumPy, a iteração acontece em C puro. Isto elimina o overhead do interpretador em cada passo do loop.
        </p>
        <pre><code class="language-python">
import numpy as np

# ❌ Lento (Python Loop)
res = [x * 2 for x in my_list]

# ✅ Rápido (Vectorized)
res = my_array * 2
        </code></pre>
      </section>

      <section class="bg-indigo-500/10 p-8 rounded-[2.5rem] border border-indigo-500/20 shadow-inner">
        <h4 class="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
          🚀 Memória Contígua e Cache
        </h4>
        <p class="text-sm leading-relaxed">
          Arrays NumPy são blocos contíguos na memória RAM. Isto permite que a CPU faça <strong>Prefetching</strong> de dados, minimizando os *Cache Misses* e mantendo o processador alimentado com dados na velocidade máxima.
        </p>
      </section>
    </div>
  `
};
