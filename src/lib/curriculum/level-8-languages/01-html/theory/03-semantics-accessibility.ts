import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m3",
  title: "Fase 1: Semântica Master e Acessibilidade (A11y)",
  enableInteractive: true,
  quizId: "html-mq3",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          ♿ Acessibilidade como Engenharia
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Um site inacessível é um site com bug. A semântica garante que o seu código tenha <strong>significado programático</strong>, permitindo que tecnologias assistivas guiem utilizadores com deficiência e que motores de busca entendam a relevância do conteúdo.
        </p>
      </div>

      <!-- 1. MARCOS SEMÂNTICOS -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Landmarks: Os Pontos de Ancoragem</h3>
        <p class="text-sm">Landmarks permitem que utilizadores de leitores de ecrã (como o VoiceOver) "saltem" entre as grandes áreas do site sem precisar de ler tudo sequencialmente.</p>
        
        <div class="space-y-4">
           <h4 class="font-bold text-primary text-xs uppercase tracking-widest">Exemplo: Estrutura sem Div-ite</h4>
           <pre><code class="language-html">
&lt;!-- ✅ Estrutura de Elite --&gt;
&lt;header&gt;
  &lt;nav aria-label="Menu Principal"&gt;
    &lt;ul&gt;
      &lt;li&gt;&lt;a href="/"&gt;Home&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="/about"&gt;Sobre&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/nav&gt;
&lt;/header&gt;

&lt;main id="main-content"&gt;
  &lt;article&gt;
    &lt;h1&gt;A Revolução do HTML5&lt;/h1&gt;
    &lt;p&gt;Semântica é o coração da web moderna.&lt;/p&gt;
  &lt;/article&gt;
&lt;/main&gt;

&lt;aside aria-label="Conteúdo Relacionado"&gt;
  &lt;p&gt;Publicidade ou links extras.&lt;/p&gt;
&lt;/aside&gt;

&lt;footer&gt;
  &lt;p&gt;&amp;copy; 2024 Codworks Moz&lt;/p&gt;
&lt;/footer&gt;
           </code></pre>
        </div>
      </section>

      <!-- 2. WAI-ARIA -->
      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. WAI-ARIA: Suplemento de Significado</h3>
        <p class="text-sm leading-relaxed">ARIA (Accessible Rich Internet Applications) deve ser usado quando o HTML nativo não é suficiente. Lembre-se: <strong>A primeira regra do ARIA é não usar ARIA se existir uma tag nativa.</strong></p>

        <div class="space-y-4">
           <h4 class="font-bold text-primary text-xs uppercase tracking-widest">Roles, States e Properties</h4>
           <pre><code class="language-html">
&lt;!-- Usando ARIA para um botão de fechar com ícone --&gt;
&lt;button aria-label="Fechar Diálogo"&gt;
  &lt;span aria-hidden="true"&gt;&times;&lt;/span&gt;
&lt;/button&gt;

&lt;!-- Usando ARIA para estados dinâmicos --&gt;
&lt;nav&gt;
  &lt;button aria-expanded="false" aria-controls="menu-list"&gt;
    Abrir Menu
  &lt;/button&gt;
  &lt;ul id="menu-list" hidden&gt;
    &lt;li&gt;Item 1&lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;
           </code></pre>
        </div>
      </section>

      <!-- 3. LIVE REGIONS -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Live Regions: Notificando o Invisível</h3>
        <p class="text-sm"><code>aria-live</code> permite avisar utilizadores cegos sobre mudanças dinâmicas na página (como um erro num formulário ou uma mensagem de sucesso) sem que eles precisem de mudar o foco.</p>
        
        <pre><code class="language-html">
&lt;!-- O leitor de ecrã anunciará esta mudança educadamente --&gt;
&lt;div aria-live="polite" class="status-msg"&gt;
  &lt;!-- Texto injetado via JS --&gt;
  O seu perfil foi atualizado com sucesso!
&lt;/div&gt;

&lt;!-- Use 'assertive' apenas para erros críticos --&gt;
&lt;div aria-live="assertive" role="alert" class="error-msg"&gt;
  Falha na conexão: tente novamente.
&lt;/div&gt;
        </code></pre>
      </section>

      <!-- 4. GESTÃO DE FOCO -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">4. Gestão de Foco e Tabindex</h3>
        <p class="text-sm">Um site master deve ser 100% navegável via teclado. O uso correto do foco visual e da ordem de tabulação é obrigatório.</p>
        
        <pre><code class="language-html">
&lt;!-- 1. Skip Link: Permite saltar o menu repetitivo --&gt;
&lt;a href="#main-content" style="position:absolute; left:-9999px;" class="focus:static"&gt;
  Saltar para o conteúdo principal
&lt;/a&gt;

&lt;!-- 2. Tabindex --&gt;
&lt;div tabindex="0"&gt;Eu recebo foco na ordem natural.&lt;/div&gt;
&lt;div tabindex="-1"&gt;Eu recebo foco apenas via JavaScript.&lt;/div&gt;
        </code></pre>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Princípio de Ouro (POUR)</h4>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-[10px] font-black uppercase">
          <div class="p-3 bg-card border rounded-xl">Percebível</div>
          <div class="p-3 bg-card border rounded-xl">Operável</div>
          <div class="p-3 bg-card border rounded-xl">Compreensível</div>
          <div class="p-3 bg-card border rounded-xl">Robusto</div>
        </div>
        <p class="text-sm italic mt-6 opacity-80 max-w-2xl mx-auto">
          "Se não é para todos, não é engenharia de elite. Acessibilidade é a fundação da confiança digital."
        </p>
      </section>
    </div>
  `,
};
