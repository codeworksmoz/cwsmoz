import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m12",
  title: "Fase 3: Acessibilidade Profunda: WAI-ARIA e Roles",
  enableInteractive: true,
  quizId: "html-mq12",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🦾 Engenharia de Acessibilidade Profunda
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Quando o HTML nativo atinge o seu limite (em widgets complexos como abas, menus de aplicação ou dashboards em tempo real), o <strong>WAI-ARIA</strong> entra como o suplemento semântico necessário. Um Engenheiro Master não usa ARIA para "enfeitar"; usa para criar um contrato de comunicação robusto entre o código e o sistema operativo do utilizador.
        </p>
      </div>

      <!-- 1. ROLES, STATES E PROPERTIES -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. A Tríade ARIA</h3>
        <p class="text-sm">Para dominar o ARIA, deves distinguir entre as três categorias de atributos:</p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="p-4 bg-card border rounded-xl border-white/5 shadow-lg">
            <h4 class="font-bold text-primary mb-2 text-xs">Roles (Papéis)</h4>
            <p class="text-[10px] opacity-70">O que o elemento É. Imutável após o nascimento.<br>Ex: <code>role="tablist"</code>, <code>role="progressbar"</code>.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5 shadow-lg">
            <h4 class="font-bold text-primary mb-2 text-xs">States (Estados)</h4>
            <p class="text-[10px] opacity-70">O estado atual (muda via JS).<br>Ex: <code>aria-expanded</code>, <code>aria-checked</code>, <code>aria-busy</code>.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5 shadow-lg">
            <h4 class="font-bold text-primary mb-2 text-xs">Properties (Propriedades)</h4>
            <p class="text-[10px] opacity-70">Relações estáticas ou metadados.<br>Ex: <code>aria-labelledby</code>, <code>aria-controls</code>.</p>
          </div>
        </div>
      </section>

      <!-- 2. WIDGETS COMPLEXOS -->
      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Arquitetura de Widgets: Tablist Pattern</h3>
        <p class="text-sm leading-relaxed">Implementar abas (tabs) exige que o leitor de ecrã entenda que clicar numa aba altera o conteúdo de um painel distante. Isto é feito através de relacionamentos ID-to-ID.</p>

        <div class="space-y-4">
           <h4 class="font-bold text-primary text-xs uppercase tracking-widest">Exemplo: Componente de Abas Reativo</h4>
           <pre><code class="language-html">
&lt;!-- O Container de Abas --&gt;
&lt;div role="tablist" aria-label="Recursos do Curso" style="display: flex; gap: 10px;"&gt;
  &lt;button role="tab" 
          aria-selected="true" 
          aria-controls="panel-teoria" 
          id="tab-teoria"&gt;
    Teoria
  &lt;/button&gt;
  &lt;button role="tab" 
          aria-selected="false" 
          aria-controls="panel-lab" 
          id="tab-lab" 
          tabindex="-1"&gt;
    Laboratório
  &lt;/button&gt;
&lt;/div&gt;

&lt;!-- O Conteúdo --&gt;
&lt;div id="panel-teoria" 
     role="tabpanel" 
     aria-labelledby="tab-teoria" 
     style="padding: 20px; border: 1px solid #ccc;"&gt;
  Conteúdo da Teoria aqui...
&lt;/div&gt;

&lt;div id="panel-lab" 
     role="tabpanel" 
     aria-labelledby="tab-lab" 
     hidden&gt;
  Conteúdo do Lab aqui...
&lt;/div&gt;
           </code></pre>
        </div>
      </section>

      <!-- 3. LIVE REGIONS E ATOMICIDADE -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Live Regions: aria-live e aria-atomic</h3>
        <p class="text-sm">Quando injetas dados via AJAX/Fetch, deves controlar como o leitor de ecrã anuncia a mudança. O atributo <code>aria-atomic</code> decide se o leitor lê apenas o que mudou ou o bloco inteiro.</p>
        
        <pre><code class="language-html">
&lt;!-- ✅ Leitura Inteligente --&gt;
&lt;div aria-live="polite" aria-atomic="true" class="stats-box"&gt;
  &lt;span&gt;Pontos: &lt;/span&gt;
  &lt;span class="value"&gt;500&lt;/span&gt;
&lt;/div&gt;

&lt;script&gt;
  // Se mudares apenas o '500' para '550', 
  // o leitor dirá: "Pontos: 550" (graças ao atomic=true).
  // Sem atomic, ele diria apenas "550", perdendo o contexto.
&lt;/script&gt;
        </code></pre>
      </section>

      <!-- 4. GESTÃO DE FOCO AVANÇADA -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">4. aria-activedescendant: O Foco Virtual</h3>
        <p class="text-sm">Em listas de autocomplete ou menus gigantes, mudar o foco real do teclado (DOM Focus) em cada item é lento. O <code>aria-activedescendant</code> permite manter o foco no input enquanto "apontas" virtualmente para o item selecionado.</p>
        
        <pre><code class="language-html">
&lt;input type="text" 
       role="combobox" 
       aria-autocomplete="list" 
       aria-expanded="true" 
       aria-haspopup="listbox" 
       aria-controls="results-list"
       aria-activedescendant="item-2"&gt;

&lt;ul id="results-list" role="listbox"&gt;
  &lt;li id="item-1" role="option"&gt;Maputo&lt;/li&gt;
  &lt;li id="item-2" role="option" aria-selected="true" style="background: blue; color: white;"&gt;Beira&lt;/li&gt;
  &lt;li id="item-3" role="option"&gt;Nampula&lt;/li&gt;
&lt;/ul&gt;
        </code></pre>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 O Mantra do Engenheiro Master</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "ARIA é um bisturi, não uma marreta. Se o usares em excesso ou de forma errada, vais criar uma interface pior do que se não usasses nada. O objetivo é a <strong>fidelidade semântica</strong>: o que o utilizador ouve deve ser idêntico ao que ele faria se visse o ecrã."
        </p>
      </section>
    </div>
  `,
};
