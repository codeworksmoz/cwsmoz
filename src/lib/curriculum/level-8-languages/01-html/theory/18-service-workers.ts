
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m18",
  title: "Service Workers e App Shell Architecture",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline">📶 Sinais na Escuridão (Offline)</h2>
        <p class="text-lg">O Service Worker é um script que corre em background, isolado do DOM. Ele permite que controles cada pedido de rede e sirvas ficheiros do cache mesmo sem internet.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">App Shell Architecture</h3>
        <p>Separe o "esqueleto" (HTML/CSS/Logo) dos "dados" (JSON da API). O esqueleto é guardado permanentemente no cache, permitindo que o site abra instantaneamente em 2G ou 3G.</p>
        
        <h3 class="text-xl font-bold font-headline text-primary">Estratégias de Cache de Elite</h3>
        <div class="grid md:grid-cols-3 gap-4 text-[10px]">
          <div class="p-3 bg-card border rounded"><strong>Network First:</strong> Garante dados frescos, falha para cache se offline.</div>
          <div class="p-3 bg-card border rounded"><strong>Cache First:</strong> Instantâneo para imagens e fontes que nunca mudam.</div>
          <div class="p-3 bg-card border rounded"><strong>Stale-While-Revalidate:</strong> Serve o cache agora, atualiza em silêncio. (UX Perfeita)</div>
        </div>

        <h3 class="text-xl font-bold font-headline">Notificações Push e Sync</h3>
        <p>Os Service Workers permitem que recebas notificações mesmo com a aba fechada e que sincronizes dados quando a internet voltar (Background Sync).</p>
      </div>
    </div>
  `,
  quizId: "html-mq18"
};
