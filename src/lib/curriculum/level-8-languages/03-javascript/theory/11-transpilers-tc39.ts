
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "js-m11",
  title: "Ecossistema: Transpilers e o futuro do TC39",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline">🚀 A Evolução da Linguagem</h2>
        <p class="text-lg">O JavaScript não para. O comité <strong>TC39</strong> define novas funcionalidades anualmente através de um processo de 4 estágios (Proposals).</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">O Papel do Babel e SWC</h3>
        <p>Como nem todos os browsers suportam as funcionalidades mais recentes (ex: Decoradores, Pipeline operator), usamos <strong>Transpilers</strong> para converter código moderno em código compatível com browsers antigos.</p>
        
        <div class="bg-black/40 p-5 rounded-xl border font-code text-sm">
          <p class="text-muted-foreground">// Código Master (Stage 3 Proposal)</p>
          <p><span class="text-primary">@audit</span> class User { ... }</p>
          <p class="text-muted-foreground">// Transpila para funções JS puras que correm em qualquer lugar.</p>
        </div>

        <h3 class="text-xl font-bold font-headline text-accent">Pollyfills</h3>
        <p>Diferente da transpilação (mudança de sintaxe), polyfills são scripts que implementam funcionalidades que faltam no objeto global do browser (ex: <code>Array.prototype.flat</code> ou <code>Promise.allSettled</code>).</p>
      </div>
    </div>
  `,
  quizId: "js-mq11"
};
