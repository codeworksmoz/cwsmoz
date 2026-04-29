
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m5",
  title: "Web Components e Shadow DOM: Arquitetura de UI Nativa",
  content: `
    <div class="space-y-8">
      <div class="bg-purple-500/10 p-6 rounded-2xl border border-purple-500/20 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 text-purple-400 font-headline">
          📦 Componentização Agnóstica
        </h2>
        <p class="text-lg leading-relaxed">
          Web Components permitem criar tags personalizadas que funcionam em qualquer lugar (React, Vue, ou HTML puro). É a solução definitiva para <strong>Design Systems</strong> corporativos de longo prazo.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">O Elemento Template</h3>
        <p>O <code>&lt;template&gt;</code> guarda HTML que não é renderizado nem descarrega recursos (como imagens) até ser clonado via JS. É o blueprint perfeito.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs border border-white/5">
          <span class="text-primary">&lt;template</span> <span class="text-accent">id</span>=<span class="text-green-400">"user-card"</span><span class="text-primary">&gt;</span><br/>
          &nbsp;&nbsp;<span class="text-primary">&lt;div</span> <span class="text-accent">class</span>=<span class="text-green-400">"card"</span><span class="text-primary">&gt;</span><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-primary">&lt;slot</span> <span class="text-accent">name</span>=<span class="text-green-400">"username"</span><span class="text-primary">&gt;&lt;/slot&gt;</span><br/>
          &nbsp;&nbsp;<span class="text-primary">&lt;/div&gt;</span><br/>
          <span class="text-primary">&lt;/template&gt;</span>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">Custom Elements (V1)</h3>
        <p>Para registar um componente, o nome deve conter obrigatoriamente um hífen (ex: <code>&lt;cwm-button&gt;</code>) para evitar conflitos com futuras tags nativas.</p>
        <div class="bg-black/40 p-5 rounded-xl font-code text-[11px] text-accent space-y-1">
          <p>class <span class="text-primary">MyComponent</span> extends <span class="text-primary">HTMLElement</span> {</p>
          <p>&nbsp;&nbsp;connectedCallback() { this.innerHTML = 'Ativo!'; }</p>
          <p>}</p>
          <p>customElements.define(<span class="text-green-400">'my-tag'</span>, MyComponent);</p>
        </div>

        <h3 class="text-xl font-bold font-headline text-accent">Slots: Projeção de Conteúdo</h3>
        <p>Permitem que quem usa o componente injete o seu próprio HTML dentro da estrutura pré-definida do Web Component. É o equivalente aos <i>props.children</i> dos frameworks modernos.</p>
      </div>
    </div>
  `,
  quizId: "html-mq5"
};
