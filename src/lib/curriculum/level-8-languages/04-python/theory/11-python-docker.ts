import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m20",
  title: "Fase 4: Dockerização de Apps Python de Alta Escala",
  youtubeVideoId: "R8dYLbJiTUE",
  enableInteractive: true,
  quizId: "py-mq20",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🐳 Contentores de Elite
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Não basta criar um Dockerfile genérico. Um engenheiro Master projeta imagens que são <strong>Seguras</strong>, <strong>Pequenas</strong> e <strong>Performáticas</strong>, utilizando técnicas de multi-stage builds e gestão de camadas de cache.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Multi-stage Builds</h3>
        <p class="text-sm leading-relaxed">
          Utilizamos uma imagem pesada (ex: Python-slim com GCC) para compilar as extensões C e dependências. No estágio final, copiamos apenas os binários para uma imagem <strong>Alpine</strong> ou <strong>Distroless</strong>, reduzindo o tamanho de 800MB para 50MB.
        </p>
        <div class="bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner">
           <pre><code class="language-dockerfile">
FROM python:3.11-slim as builder
RUN pip install --user cryptography

FROM python:3.11-alpine
COPY --from=builder /root/.local /root/.local
USER guest
CMD ["python", "main.py"]
           </code></pre>
        </div>
      </section>

      <section class="bg-red-500/10 p-8 rounded-[2.5rem] border border-red-500/20 shadow-inner">
        <h4 class="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
          🛡️ Segurança: Rootless Containers
        </h4>
        <p class="text-sm leading-relaxed">
          Nunca rode o seu **System Monitor** como utilizador root dentro do Docker. Se o atacante escapar do processo Python, ele terá acesso total ao host. Em nível Master, definimos sempre um utilizador sem privilégios.
        </p>
      </section>
    </div>
  `
};
