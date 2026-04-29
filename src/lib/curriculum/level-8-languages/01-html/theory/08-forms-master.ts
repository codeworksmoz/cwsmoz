import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m8",
  title: "Fase 2: Formulários Master e Validação Nativa",
  enableInteractive: true,
  quizId: "html-mq8",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          📝 A Engenharia da Conversão
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O formulário é o componente mais crítico de uma aplicação. No nível Master, não apenas "colocamos inputs"; desenhamos um sistema de captura de dados <strong>resiliente</strong>, que valida informações no cliente antes mesmo do JavaScript entrar em cena, poupando recursos do servidor e melhorando o UX móvel.
        </p>
      </div>

      <!-- 1. AGRUPAMENTO SEMÂNTICO -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Fieldset e Legend: Organizando a Intenção</h3>
        <p class="text-sm">Para formulários longos, o uso de <code>&lt;fieldset&gt;</code> agrupa logicamente os campos, enquanto a <code>&lt;legend&gt;</code> fornece um título que é anunciado por leitores de ecrã em cada campo do grupo.</p>
        
        <div class="space-y-4">
           <pre><code class="language-html">
&lt;form action="/api/register" method="POST"&gt;
  &lt;fieldset style="border: 1px solid #cbd5e1; padding: 20px; border-radius: 12px;"&gt;
    &lt;legend style="padding: 0 10px; font-weight: bold; color: #3b82f6;"&gt;Dados de Acesso&lt;/legend&gt;
    
    &lt;label for="email"&gt;Email Institucional:&lt;/label&gt;&lt;br&gt;
    &lt;input type="email" id="email" name="email" required placeholder="exemplo@codworks.mz"&gt;
    
    &lt;br&gt;&lt;br&gt;
    
    &lt;label for="pass"&gt;Senha de Segurança:&lt;/label&gt;&lt;br&gt;
    &lt;input type="password" id="pass" name="pass" required minlength="8"&gt;
  &lt;/fieldset&gt;
&lt;/form&gt;
           </code></pre>
        </div>
      </section>

      <!-- 2. VALIDAÇÃO NATIVA -->
      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Validação Nativa: O Fim do JavaScript Desnecessário</h3>
        <p class="text-sm leading-relaxed">O motor do browser consegue validar padrões complexos usando o atributo <code>pattern</code> com Expressões Regulares (RegEx).</p>

        <div class="space-y-4">
           <h4 class="font-bold text-primary text-xs uppercase tracking-widest">Exemplo: Validação de Código de Engenheiro</h4>
           <p class="text-xs text-muted-foreground">O código deve ter 2 letras e 4 números (ex: MZ1234).</p>
           <pre><code class="language-html">
&lt;form&gt;
  &lt;label for="code"&gt;Código de Identificação (MZ + 4 dígitos):&lt;/label&gt;&lt;br&gt;
  &lt;input type="text" 
         id="code" 
         name="code" 
         required 
         pattern="[A-Z]{2}[0-9]{4}" 
         title="O código deve começar com 2 letras maiúsculas seguidas de 4 números."
         placeholder="MZ0000"&gt;
  &lt;br&gt;&lt;br&gt;
  &lt;button type="submit"&gt;Validar Código&lt;/button&gt;
&lt;/form&gt;
           </code></pre>
        </div>
      </section>

      <!-- 3. OTIMIZAÇÃO MOBILE -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Mobile UX: Ativando Teclados Específicos</h3>
        <p class="text-sm">O atributo <code>inputmode</code> é o teu melhor amigo em Moçambique. Ele dita qual teclado virtual o utilizador vê, reduzindo a fricção e os erros de digitação.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 bg-card border rounded-xl border-white/5 shadow-lg">
            <h4 class="font-bold text-primary mb-2">inputmode="numeric"</h4>
            <p class="text-xs opacity-70 mb-3">Dispara o teclado de calculadora. Ideal para PINs, NUITs ou códigos de SMS.</p>
            <pre><code class="language-html">&lt;input type="text" inputmode="numeric"&gt;</code></pre>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5 shadow-lg">
            <h4 class="font-bold text-primary mb-2">inputmode="tel"</h4>
            <p class="text-xs opacity-70 mb-3">Dispara o teclado telefónico, facilitando a entrada de contactos.</p>
            <pre><code class="language-html">&lt;input type="text" inputmode="tel"&gt;</code></pre>
          </div>
        </div>
      </section>

      <!-- 4. DATALIST E AUTOCOMPLETE -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">4. Datalist: Autocomplete Nativo sem Custo</h3>
        <p class="text-sm">Em vez de carregar bibliotecas de 50KB, use a tag <code>&lt;datalist&gt;</code>. Ela fornece sugestões mas permite ao utilizador digitar um valor livre.</p>
        
        <pre><code class="language-html">
&lt;label for="framework"&gt;Framework Favorita:&lt;/label&gt;&lt;br&gt;
&lt;input list="frameworks" id="framework" name="framework"&gt;

&lt;datalist id="frameworks"&gt;
  &lt;option value="Next.js"&gt;
  &lt;option value="Vue.js"&gt;
  &lt;option value="Svelte"&gt;
  &lt;option value="Angular"&gt;
&lt;/datalist&gt;
        </code></pre>
      </section>

      <!-- 5. PROGRESSO E STATUS -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">5. Feedback de Estado: Progress e Output</h3>
        <p class="text-sm">Mostre ao utilizador o estado do sistema ou cálculos em tempo real sem poluir o DOM com elementos genéricos.</p>
        
        <pre><code class="language-html">
&lt;p&gt;Status do Upload da Documentação:&lt;/p&gt;
&lt;progress value="75" max="100" style="width: 100%; height: 20px;"&gt;75%&lt;/progress&gt;

&lt;br&gt;&lt;br&gt;

&lt;form oninput="total.value=parseInt(a.value)+parseInt(b.value)"&gt;
  &lt;input type="number" id="a" value="10"&gt; +
  &lt;input type="number" id="b" value="20"&gt; =
  &lt;output name="total" for="a b" style="font-weight: bold; color: blue;"&gt;30&lt;/output&gt;
&lt;/form&gt;
        </code></pre>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Princípio do Engenheiro de UI</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Um formulário de elite deve ser funcional mesmo se o JavaScript falhar. Confie na validação nativa e nos atributos de mobile UX para garantir que a recolha de dados seja infalível e acessível."
        </p>
      </section>
    </div>
  `
};
