import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m9",
  title: "PyTorch: Grafo Dinâmico e Tensores na GPU",
  youtubeVideoId: "dQw4w9WgXcQ",
  enableInteractive: true,
  quizId: "py-mq9",
  content: `
    <div class="space-y-12">
      <div class="bg-red-500/5 p-8 rounded-[2.5rem] border border-red-500/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-red-400 flex items-center gap-3">
          🧠 O Motor do Deep Learning
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Diferente das frameworks estáticas, o <strong>PyTorch</strong> reconstrói o seu grafo de computação em cada execução. Isto permite usar estruturas de controlo normais do Python (if, for) dentro da rede neuronal.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Tensores e Aceleração de Hardware</h3>
        <p class="text-sm leading-relaxed">
          Um Tensor é a unidade fundamental. Ele pode viver na CPU ou ser movido para a <strong>GPU (CUDA)</strong> para acelerar cálculos matemáticos em até 50x.
        </p>
        <pre><code class="language-python">
import torch

# Criar tensor e mover para a placa gráfica
device = "cuda" if torch.cuda.is_available() else "cpu"
x = torch.randn(3, 3).to(device)

# Autograd calcula os gradientes automaticamente
x.requires_grad = True
        </code></pre>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Visão Master: Produção com TorchScript</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Embora o modo dinâmico seja excelente para investigação, para produção utilizamos o <strong>TorchScript</strong> para serializar o modelo num formato que corre em C++ puro, independente do interpretador Python."
        </p>
      </section>
    </div>
  `
};
