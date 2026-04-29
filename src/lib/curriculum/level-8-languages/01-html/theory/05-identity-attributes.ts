import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m5",
  title: "Fase 1: Atributos de Identidade: Hooks para CSS/JS",
  enableInteractive: true,
  quizId: "html-mq5",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          ⚓ Os Ganchos da Interface
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Atributos de identidade são a ponte entre a estrutura (HTML), a pele (CSS) e o cérebro (JS). Um Engenheiro Master desenha esses ganchos para criar um sistema modular, fácil de estilizar e pronto para a automação.
        </p>
      </div>

      <!-- 1. ID VS CLASS -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. ID vs Class: Unicidade vs Grupo</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="p-6 bg-card border rounded-2xl border-white/5 shadow-lg">
            <h4 class="font-bold text-primary mb-2 text-xs">ID (#id)</h4>
            <p class="text-xs text-muted-foreground leading-relaxed">
              Deve ser <strong>único</strong> em toda a página. Usado para elementos singulares (Header, Main) e como âncora de navegação. Tem a maior especificidade no CSS.
            </p>
          </div>
          <div class="p-6 bg-card border rounded-2xl border-white/5 shadow-lg">
            <h4 class="font-bold text-primary mb-2 text-xs">Class (.class)</h4>
            <p class="text-xs text-muted-foreground leading-relaxed">
              Pode ser repetida em <strong>múltiplos</strong> elementos. É a base dos sistemas de design (BEM, Tailwind). Permite que um elemento herde múltiplos comportamentos.
            </p>
          </div>
        </div>

        <div class="space-y-4">
           <h4 class="font-bold text-primary text-xs uppercase tracking-widest">Exemplo: Múltiplas Classes</h4>
           <pre><code class="language-html">
&lt;!-- Um elemento pode ter várias classes separadas por espaço --&gt;
&lt;button class="btn btn-primary btn-large"&gt;
  Submeter Projeto
&lt;/button&gt;

&lt;style&gt;
  .btn { padding: 10px 20px; border-radius: 8px; border: none; cursor: pointer; }
  .btn-primary { background: #3b82f6; color: white; }
  .btn-large { font-size: 20px; padding: 15px 30px; }
&lt;/style&gt;
           </code></pre>
        </div>
      </section>

      <!-- 2. DATA ATTRIBUTES -->
      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Custom Data Attributes (data-*)</h3>
        <p class="text-sm leading-relaxed">
          Atributos <code>data-</code> permitem guardar informação extra no HTML que não tem valor visual, mas é vital para o JavaScript. É a forma Master de passar "propriedades" para os seus scripts sem quebrar a semântica.
        </p>

        <div class="space-y-4">
           <h4 class="font-bold text-primary text-xs uppercase tracking-widest">Estado e Configuração no DOM</h4>
           <pre><code class="language-html">
&lt;div class="user-profile" 
     data-user-id="123" 
     data-role="admin" 
     data-status="active"&gt;
  Edson da Cruz
&lt;/div&gt;

&lt;style&gt;
  /* Selecionando via atributo de dados */
  .user-profile[data-role="admin"] {
    border: 2px solid gold;
  }
  .user-profile[data-role="admin"]::after {
    content: " 👑";
  }
&lt;/style&gt;

&lt;script&gt;
  // O JavaScript lê isto via 'dataset'
  const el = document.querySelector('.user-profile');
  console.log(el.dataset.userId); // "123"
&lt;/script&gt;
           </code></pre>
        </div>
      </section>

      <!-- 3. ATRIBUTOS GLOBAIS -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Atributos Globais de Comportamento</h3>
        <p class="text-sm">Existem atributos que podem ser aplicados a qualquer tag para alterar o seu comportamento nativo.</p>
        
        <ul class="space-y-4">
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
            <div>
              <p class="font-bold text-sm">tabindex:</p>
              <p class="text-xs text-muted-foreground">Controla se o elemento pode receber foco do teclado. <code>0</code> coloca na ordem natural, <code>-1</code> permite foco apenas via JS.</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
            <div>
              <p class="font-bold text-sm">contenteditable:</p>
              <p class="text-xs text-muted-foreground">Transforma qualquer elemento (div, p, h1) num editor de texto em tempo real.</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
            <div>
              <p class="font-bold text-sm">title:</p>
              <p class="text-xs text-muted-foreground">O "tooltip" nativo do browser que aparece ao passar o rato.</p>
            </div>
          </li>
        </ul>

        <div class="space-y-4">
           <pre><code class="language-html">
&lt;h3 title="Clique para editar este título" contenteditable="true"&gt;
  Título Editável
&lt;/h3&gt;

&lt;p&gt;Pressione TAB para focar no elemento abaixo:&lt;/p&gt;
&lt;div tabindex="0" style="border:1px solid blue; padding:10px;"&gt;
  Eu recebo foco do teclado!
&lt;/div&gt;
           </code></pre>
        </div>
      </section>

      <!-- 4. ACESSIBILIDADE E IDENTIDADE -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">4. Hidden e Visibilidade Lógica</h3>
        <p class="text-sm">O atributo <code>hidden</code> é mais poderoso que <code>display: none</code> no CSS, pois ele remove o elemento da árvore de acessibilidade nativamente.</p>
        
        <pre><code class="language-html">
&lt;p&gt;Este parágrafo está visível.&lt;/p&gt;
&lt;p hidden&gt;Este parágrafo está oculto para todos (incluindo cegos).&lt;/p&gt;
        </code></pre>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Regra do Arquiteto</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Identidade no HTML é contrato. Mudar um ID ou uma Classe sem avisar o desenvolvedor de CSS ou JS é quebrar o sistema. Trate os nomes de atributos com o mesmo rigor que trata nomes de variáveis no Backend."
        </p>
      </section>
    </div>
  `,
};
