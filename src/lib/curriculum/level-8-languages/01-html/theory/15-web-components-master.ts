import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m15",
  title: "Fase 3: Web Components: Templates e Custom Elements",
  enableInteractive: true,
  youtubeVideoId: "raf_id_web_components",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          📦 Componentização Agnóstica Nativa
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Web Components permitem criar tags HTML personalizadas, reutilizáveis e encapsuladas que funcionam em qualquer lugar. No nível Master, utilizamos estas APIs para construir <strong>Design Systems</strong> de longo prazo que não dependem da moda dos frameworks.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. O Elemento &lt;template&gt;</h3>
        <p class="text-sm">O <code>&lt;template&gt;</code> é um mecanismo para guardar conteúdo HTML que não é renderizado no carregamento. O browser verifica a sintaxe, mas não descarrega imagens até que o clones via JavaScript.</p>
        
        <div class="space-y-4">
           <pre><code class="language-html">
&lt;template id="user-card-template"&gt;
  &lt;div class="card"&gt;
    &lt;img src="" alt="Avatar"&gt;
    &lt;h2 class="username"&gt;&lt;/h2&gt;
    &lt;slot name="bio"&gt;Biografia padrão...&lt;/slot&gt;
  &lt;/div&gt;
&lt;/template&gt;
           </code></pre>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Custom Elements e Ciclo de Vida</h3>
        <p class="text-sm leading-relaxed">Para criar uma tag como <code>&lt;cwm-user&gt;</code>, deves estender a classe <code>HTMLElement</code>. <strong>Regra de Ouro:</strong> O nome deve conter obrigatoriamente um hífen.</p>

        <div class="space-y-4">
           <pre><code class="language-javascript">
class CwmUser extends HTMLElement {
  connectedCallback() {
    console.log("Componente montado no DOM!");
    const shadow = this.attachShadow({ mode: 'open' });
    // Injeção de lógica aqui
  }
}
customElements.define('cwm-user', CwmUser);
           </code></pre>
        </div>
      </section>

      <section class="bg-indigo-500/10 p-8 rounded-[2.5rem] border border-indigo-500/20 shadow-inner">
        <h4 class="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
          🚀 Porquê usar Web Components?
        </h4>
        <ul class="text-sm space-y-2 opacity-90">
          <li>✅ <strong>Interoperabilidade:</strong> Funciona em React, Vue, Angular ou HTML puro.</li>
          <li>✅ <strong>Longevidade:</strong> Segue padrões da W3C, não bibliotecas de terceiros.</li>
          <li>✅ <strong>Isolamento:</strong> O Shadow DOM protege o estilo do seu componente.</li>
        </ul>
      </section>
    </div>
  `
};
