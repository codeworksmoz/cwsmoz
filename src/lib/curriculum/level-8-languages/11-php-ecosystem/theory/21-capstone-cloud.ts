import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-eco-t21",
  title: "Fase 4: Capstone II: Deploy Cloud-Native em Larga Escala",
  enableInteractive: true,
  youtubeVideoId: "raf_id_capstone_final",
  quizId: "php-eco-mq21",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl text-center">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🎓 O Ápice da Engenharia de Sistemas</h2>
        <p class="text-lg leading-relaxed">Você chegou ao laboratório final. O seu <strong>High-Scale Event Server</strong> está pronto. Agora, validamos a sua resiliência em ambientes de nuvem elástica, utilizando monitorização proativa e auto-healing.</p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Observabilidade e Telemetria</h3>
        <p class="text-sm">Um sistema Master nunca está "cego". Integramos métricas do <button>Swoole/RoadRunner</button> no <button>Prometheus</button> para visualizar a saúde das corrotinas em tempo real.</p>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Graduação de Ecossistema</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Você agora domina do bytecode ao deploy, do DDD ao gRPC. Este é o selo de elite que o posiciona no topo 1% dos engenheiros de software do mercado."
        </p>
      </section>
    </div>
  `,
};
