import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "js-m16",
  title: "Fase 4: Service Workers e a App Shell Architecture",
  enableInteractive: true,
  youtubeVideoId: "dQw4w9WgXcQ",
  quizId: "js-mq16",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          📶 Sinais na Escuridão: Resiliência Offline
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O <strong>Service Worker</strong> é um script que corre em background, isolado do DOM. Ele atua como um proxy de rede programável, permitindo que a sua aplicação funcione sem internet e carregue instantaneamente através da <strong>App Shell Architecture</strong>.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. O Evento Fetch: O Coração do PWA</h3>
        <p class="text-sm">O Service Worker interceta cada pedido HTTP da sua aplicação. Podes decidir servir o dado do cache, da rede ou uma mistura de ambos (Stale-While-Revalidate).</p>
        
        <pre><code class="language-javascript">
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // ✅ Retorna do cache se existir, senão vai à rede
      return response || fetch(event.request);
    })
  );
});
        </code></pre>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. App Shell Architecture</h3>
        <p class="text-sm leading-relaxed">Separe o "esqueleto" visual (HTML/CSS/Logo) dos "dados" dinâmicos. O esqueleto é guardado permanentemente no cache, garantindo que o utilizador veja a interface em milissegundos, mesmo em redes 2G lentas.</p>
      </section>

      <section class="bg-indigo-500/10 p-8 rounded-[2.5rem] border border-indigo-500/20 shadow-inner">
        <h4 class="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
          🚀 Background Sync e Notificações
        </h4>
        <p class="text-sm leading-relaxed">
          Os Service Workers permitem que a sua aplicação envie dados quando o utilizador recupera a internet (Sync API) e receba notificações Push mesmo quando o browser está fechado. É a ponte definitiva para a experiência de "App Nativa".
        </p>
      </section>
    </div>
  `
};
