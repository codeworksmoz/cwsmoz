import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "kt-m17",
  title: "Fase 4: KSP (Kotlin Symbol Processing) e Geração de Código",
  enableInteractive: true,
  youtubeVideoId: "v4cd1O4zkGw",
  quizId: "kt-mq17",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          ⚙️ Programando o Compilador
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          <strong>KSP</strong> é a API moderna para criar plugins de compilador. Ela permite analisar o código-fonte Kotlin em tempo de compilação e gerar novos ficheiros (como adaptadores JSON ou injeção de dependência) sem o overhead do KAPT ou reflexão em runtime.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Porquê KSP e não KAPT?</h3>
        <p class="text-sm">O KAPT precisa de gerar "stubs" Java para funcionar, o que duplica o tempo de compilação. O KSP entende o Kotlin nativamente, resultando em builds até <strong>2x mais rápidos</strong> em projetos de grande porte.</p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h4 class="font-bold text-indigo-400 mb-2">💎 Uso em Design Systems e ORMs</h4>
          <p class="text-sm leading-relaxed">Com KSP, podes anotar uma classe e ter todo o código de mapeamento para a base de dados gerado automaticamente. É a tecnologia por trás de bibliotecas de elite como <strong>Room</strong> e <strong>Moshi</strong>.</p>
        </div>
      </section>
    </div>
  `
};