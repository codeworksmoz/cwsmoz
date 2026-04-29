import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m15",
  title: "Fase 4: PostCSS & Build Tooling: O Compilador do CSS",
  enableInteractive: true,
  youtubeVideoId: "v4cd1O4zkGw",
  quizId: "css-mq15",
  content: `<div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          ⚙️ Programando o Motor de Estilos
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O <strong>PostCSS</strong> permite-te usar funcionalidades do futuro hoje, limpando e otimizando os teus ativos para produção.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Plugins de Missão Crítica</h3>
        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-primary block">Autoprefixer:</strong> Adiciona prefixos proprietários automaticamente.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-primary block">CSSNano:</strong> Minificador definitivo.
          </li>
        </ul>
      </section>
    </div>`
};