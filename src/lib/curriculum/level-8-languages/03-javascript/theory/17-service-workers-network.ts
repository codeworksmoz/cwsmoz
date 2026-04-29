
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "js-m17",
  title: "Service Workers e Interceção de Rede",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">📶 O Proxy no Browser</h2>
        <p class="text-lg">O Service Worker é um script que corre entre a tua aplicação e a rede. Ele pode intercetar cada pedido HTTP, decidindo se os serve da internet ou do cache local.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">O Evento Fetch</h3>
        <p>É aqui que a mágica offline acontece. Podes criar estratégias complexas como <i>Stale-While-Revalidate</i>.</p>
        
        <div class="bg-black/40 p-5 rounded-xl border font-code text-xs space-y-2 border-white/5">
          <p>self.addEventListener(<span class="text-green-400">'fetch'</span>, (event) => {</p>
          <p>&nbsp;&nbsp;event.<span class="text-primary">respondWith</span>(</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;caches.match(event.request).then(res => res || fetch(event.request))</p>
          <p>&nbsp;&nbsp;);</p>
          <p>});</p>
        </div>

        <h3 class="text-xl font-bold font-headline text-accent">Background Sync</h3>
        <p>Permite que a tua aplicação envie dados (ex: uma mensagem de chat ou um formulário) mesmo que a internet caia. O Service Worker guarda o pedido e envia-o automaticamente assim que a conexão voltar.</p>
      </div>
    </div>
  `,
  quizId: "js-mq17"
};
