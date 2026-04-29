import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-eco-t16",
  title: "Fase 3: Caching Estratégico: Redis, Memcached e L2",
  enableInteractive: true,
  youtubeVideoId: "raf_id_caching",
  quizId: "php-eco-mq16",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🏎️ A Memória do Sistema
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Cache não é apenas guardar dados na RAM. É uma estratégia de arquitetura que envolve escolher os padrões de escrita e leitura corretos para garantir que a sua base de dados SQL não se torne o gargalo do sistema.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Padrões de Acesso ao Cache</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-5 bg-card border rounded-2xl shadow-lg border-white/5">
            <h4 class="font-bold text-primary mb-2">Cache-Aside (Lazy Loading)</h4>
            <p class="text-xs opacity-70">A aplicação verifica o cache. Se falhar, lê da BD e atualiza o cache. É o padrão mais resiliente e flexível.</p>
          </div>
          <div class="p-5 bg-card border rounded-2xl shadow-lg border-white/5">
            <h4 class="font-bold text-primary mb-2">Write-Through</h4>
            <p class="text-xs opacity-70">Sempre que os dados são escritos, o cache é atualizado em simultâneo. Garante consistência total, mas aumenta a latência de escrita.</p>
          </div>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Redis vs. Memcached</h3>
        <p class="text-sm leading-relaxed">Embora ambos sejam rápidos, o <button>Redis</button> é a escolha Master por suportar estruturas de dados complexas (Sets, Lists, Hashes) e persistência em disco.</p>
        
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-2">🚀 Thundering Herd Problem</h4>
          <p class="text-xs leading-relaxed">
            Ocorre quando um item de cache muito popular expira e milhares de requests tentam consultar a base de dados ao mesmo tempo. Engenheiros Master utilizam <strong>Probabilistic Early Recomputation</strong> ou locks de cache para evitar o colapso do banco.
          </p>
        </div>
      </section>
    </div>
  `,
};
