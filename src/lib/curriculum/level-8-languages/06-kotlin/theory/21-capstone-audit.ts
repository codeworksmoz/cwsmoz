import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "kt-m21",
  title: "Fase 4: Capstone: Deploy do Sync Engine Multiplataforma",
  enableInteractive: true,
  youtubeVideoId: "8ME9u065vD4",
  quizId: "kt-mq21",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl text-center">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🎓 Graduação Kotlin Master</h2>
        <p class="text-lg leading-relaxed opacity-90">
          Chegaste ao fim da jornada. O seu <strong>CWM Sync Engine</strong> é agora um software industrial completo: resiliente a nulos, assíncrono via Coroutines e pronto para rodar em Android e iOS simultaneamente.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <div class="p-6 bg-card border rounded-[2rem] border-white/5 shadow-xl">
          <h4 class="font-bold text-accent mb-4 uppercase tracking-widest text-xs">Auditoria de Engine</h4>
          <ul class="text-xs space-y-3 opacity-80">
            <li class="flex gap-2">✅ <b>Null Safety:</b> 100% de cobertura via tipos nativos.</li>
            <li class="flex gap-2">✅ <b>Concorrência:</b> Structured Scopes implementados.</li>
            <li class="flex gap-2">✅ <b>KMP:</b> Abstrações expect/actual validadas.</li>
            <li class="flex gap-2">✅ <b>Performance:</b> Uso de Inline Classes para IDs.</li>
          </ul>
        </div>
        
        <div class="p-6 bg-card border rounded-[2rem] border-white/5 shadow-xl flex flex-col justify-center">
          <h4 class="font-bold text-primary mb-4 uppercase tracking-widest text-xs">Certificação Técnica</h4>
          <p class="text-sm mb-4">O motor está pronto para o processamento de 50.000 mensagens por segundo em background threads.</p>
          <div class="h-2 bg-secondary rounded-full overflow-hidden">
            <div class="w-[100%] h-full bg-green-500"></div>
          </div>
          <p class="text-[9px] mt-2 text-muted-foreground italic">Selo de Elite: Kotlin Master certified.</p>
        </div>
      </div>

      <section class="bg-primary/5 p-8 rounded-[2.5rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Missão Cumprida</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Você dominou a linguagem mais moderna da JVM. De coroutines a metaprogramação, o seu código agora é um exemplo de elegância e robustez. Parabéns, Engenheiro!"
        </p>
      </section>
    </div>
  `
};