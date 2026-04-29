
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "js-m14",
  title: "Streams API: Processamento de Dados Massivos",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🌊 Fluxos de Dados Infinitos</h2>
        <p class="text-lg">Como processar um ficheiro de 2GB num browser com apenas 512MB de RAM livre? A resposta são as <strong>Streams</strong>.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">Readable e Writable Streams</h3>
        <p>As Streams permitem-te começar a processar o primeiro <i>chunk</i> de dados enquanto o resto ainda está a ser descarregado da rede ou lido do disco.</p>
        
        <div class="bg-black/40 p-5 rounded-xl border font-code text-sm shadow-inner space-y-1">
          <p>const <span class="text-primary">reader</span> = response.body.<span class="text-accent">getReader</span>();</p>
          <p>while(true) {</p>
          <p>&nbsp;&nbsp;const { <span class="text-accent">done, value</span> } = await reader.read();</p>
          <p>&nbsp;&nbsp;if (done) break;</p>
          <p>&nbsp;&nbsp;processChunk(value);</p>
          <p>}</p>
        </div>

        <h3 class="text-xl font-bold font-headline text-accent">Backpressure</h3>
        <p>O motor de Streams gere automaticamente a velocidade: se o teu processamento for mais lento que o download, a Stream avisa a rede para abrandar, evitando o estouro da memória RAM.</p>
      </div>
    </div>
  `,
  quizId: "js-mq14"
};
