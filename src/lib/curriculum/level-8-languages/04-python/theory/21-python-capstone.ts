import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m21",
  title: "Fase 4: Capstone: Deploy de System Monitor de Elite",
  youtubeVideoId: "R8dYLbJiTUE",
  enableInteractive: true,
  quizId: "py-mq21",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl text-center">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🎓 Graduação Python Master</h2>
        <p class="text-lg leading-relaxed opacity-90">
          Chegaste ao fim da jornada. O seu <strong>High-Performance System Monitor</strong> é agora um software industrial completo: assíncrono, performático via Cython, seguro por design e pronto para a Cloud.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <div class="p-6 bg-card border rounded-[2rem] border-white/5 shadow-xl">
          <h4 class="font-bold text-accent mb-4 uppercase tracking-widest text-xs">Matriz de Auditoria Final</h4>
          <ul class="text-xs space-y-3 opacity-80">
            <li class="flex gap-2">✅ <b>Engine:</b> AsyncIO Loop validado com zero bloqueios.</li>
            <li class="flex gap-2">✅ <b>C-Layer:</b> Extensões Cython compiladas e integradas.</li>
            <li class="flex gap-2">✅ <b>Packaging:</b> Poetry Lock determinístico e auditado.</li>
            <li class="flex gap-2">✅ <b>Infra:</b> Docker Multi-stage validado para K8s.</li>
          </ul>
        </div>
        
        <div class="p-6 bg-card border rounded-[2rem] border-white/5 shadow-xl flex flex-col justify-center">
          <h4 class="font-bold text-primary mb-4 uppercase tracking-widest text-xs">Métricas de Performance</h4>
          <p class="text-sm mb-4">O motor processa 100.000 eventos de telemetria por segundo com latência p99 abaixo de 10ms.</p>
          <div class="h-2 bg-secondary rounded-full overflow-hidden">
            <div class="w-[100%] h-full bg-green-500"></div>
          </div>
          <p class="text-[9px] mt-2 text-muted-foreground italic">Arquitetura de Microserviços via gRPC ativa.</p>
        </div>
      </div>

      <section class="bg-primary/5 p-8 rounded-[2.5rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Certificação Concedida</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "O seu projeto reflete o domínio absoluto das entranhas do Python. Você projetou não apenas código, mas infraestrutura resiliente que sustenta o ecossistema digital moçambicano e global. Parabéns, Engenheiro!"
        </p>
      </section>
    </div>
  `
};
