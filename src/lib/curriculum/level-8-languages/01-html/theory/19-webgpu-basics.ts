
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m19",
  title: "WebGPU: O Futuro do Gráfico no Browser",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🎮 A Próxima Geração de Computação</h2>
        <p class="text-lg leading-relaxed">
          A WebGPU é a sucessora do WebGL. Ela dá acesso direto às capacidades modernas das placas gráficas, permitindo não só gráficos 3D cinemáticos, mas também aceleração massiva de IA no browser.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">Porquê WebGPU em vez de WebGL?</h3>
        <p>O WebGL é baseado num modelo de estado antigo e síncrono. A WebGPU utiliza <strong>Pipelines</strong> pré-compilados e comandos assíncronos, reduzindo drasticamente o trabalho da CPU.</p>
        
        <h3 class="text-xl font-bold font-headline">WGSL: A Linguagem de Shaders</h3>
        <p>A WebGPU introduz a <i>WebGPU Shading Language</i>. É uma linguagem de baixo nível similar ao Rust que corre diretamente nos núcleos da sua placa de vídeo.</p>

        <h3 class="text-xl font-bold font-headline text-accent">GPGPU: Além dos Pixels</h3>
        <p>A maior vantagem Master é a <strong>Computação Genérica</strong>. Podes usar a placa de vídeo do utilizador para processar Big Data ou treinar modelos de Machine Learning leves sem sair do HTML.</p>
      </div>
    </div>
  `,
  quizId: "html-mq19"
};
