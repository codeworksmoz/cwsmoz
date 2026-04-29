
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "js-m19",
  title: "Custom Events e Comunicação Desacoplada",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">📡 Arquitetura Baseada em Eventos</h2>
        <p class="text-lg">Num sistema de elite, os componentes não devem conhecer os detalhes internos uns dos outros. Usamos <strong>Custom Events</strong> para comunicar mudanças de estado de forma desacoplada.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">Disparando Eventos com Payload</h3>
        <p>Podes passar qualquer dado dentro da propriedade <code>detail</code> do evento.</p>
        
        <div class="bg-black/40 p-5 rounded-xl border font-code text-sm shadow-xl space-y-2">
          <p>const event = <span class="text-primary">new CustomEvent</span>(<span class="text-green-400">'cwm:login'</span>, {</p>
          <p>&nbsp;&nbsp;detail: { user: 'MozDev', role: 'admin' },</p>
          <p>&nbsp;&nbsp;bubbles: true</p>
          <p>});</p>
          <p>window.<span class="text-accent">dispatchEvent</span>(event);</p>
        </div>

        <h3 class="text-xl font-bold font-headline text-accent">Namespacing de Eventos</h3>
        <p>Para evitar conflitos em aplicações grandes, usa sempre um prefixo (ex: <code>app:</code> ou <code>ui:</code>) nos teus eventos personalizados.</p>
      </div>
    </div>
  `,
  quizId: "js-mq19"
};
