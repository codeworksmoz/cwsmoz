import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m11",
  title: "Fase 2: SVG de Elite: Manipulação XML e Vetores",
  enableInteractive: true,
  quizId: "html-mq11",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          📐 A Matemática da Imagem
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O <strong>SVG (Scalable Vector Graphics)</strong> não é uma imagem convencional feita de pixels; é um documento <strong>XML</strong> que descreve formas geométricas através de vetores. No nível Master, entendemos que o SVG é parte do DOM, permitindo interatividade, animação e nitidez infinita em qualquer resolução.
        </p>
      </div>

      <!-- 1. VIEWBOX E COORDENADAS -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. O Sistema de Coordenadas e ViewBox</h3>
        <p class="text-sm">O <code>viewBox</code> define a "janela" através da qual vemos o desenho. Ele estabelece a proporção e o sistema de coordenadas interno, independente do tamanho físico (width/height) do elemento.</p>
        
        <div class="space-y-4">
           <h4 class="font-bold text-primary text-xs uppercase tracking-widest">Anatomia do ViewBox</h4>
           <p class="text-xs font-mono bg-black/40 p-3 rounded-lg border border-white/5 text-center">
             viewBox="<span class="text-accent">min-x</span> <span class="text-accent">min-y</span> <span class="text-accent">width</span> <span class="text-accent">height</span>"
           </p>
           <pre><code class="language-html">
&lt;!-- Um canvas de 100x100 unidades lógicas --&gt;
&lt;svg viewBox="0 0 100 100" width="200" height="200"&gt;
  &lt;rect x="10" y="10" width="80" height="80" fill="blue" /&gt;
&lt;/svg&gt;
           </code></pre>
        </div>
      </section>

      <!-- 2. FORMAS BÁSICAS -->
      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Formas Primitivas e Agrupamento</h3>
        <p class="text-sm leading-relaxed">Utilizamos as tags nativas para construir a geometria base. O elemento <code>&lt;g&gt;</code> serve para agrupar formas e aplicar transformações ou estilos a todas de uma só vez.</p>

        <div class="space-y-4">
           <h4 class="font-bold text-primary text-xs uppercase tracking-widest">Exemplo: Construindo um Ícone de Utilizador</h4>
           <pre><code class="language-html">
&lt;svg viewBox="0 0 64 64" width="100"&gt;
  &lt;g fill="currentColor"&gt;
    &lt;!-- Cabeça --&gt;
    &lt;circle cx="32" cy="20" r="12" /&gt;
    &lt;!-- Corpo --&gt;
    &lt;path d="M12,52 C12,40 20,34 32,34 C44,34 52,40 52,52 L52,56 L12,52 Z" /&gt;
  &lt;/g&gt;
&lt;/svg&gt;
           </code></pre>
        </div>
      </section>

      <!-- 3. O ELEMENTO PATH -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. O Elemento &lt;path&gt;: A Caneta Digital</h3>
        <p class="text-sm">O <code>&lt;path&gt;</code> é o elemento mais poderoso do SVG. O atributo <code>d</code> (data) contém uma série de comandos que movem uma "caneta" virtual pelo ecrã.</p>
        
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <code class="text-accent">M x,y</code> : <b>Move To</b>. Levanta a caneta e coloca-a na posição.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <code class="text-accent">L x,y</code> : <b>Line To</b>. Desenha uma linha reta até à posição.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <code class="text-accent">C c1x,c1y c2x,c2y x,y</code> : <b>Curve To</b>. Desenha uma curva de Bézier complexa.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <code class="text-accent">Z</code> : <b>Close Path</b>. Desenha uma linha de volta ao início para fechar a forma.
          </li>
        </ul>
      </section>

      <!-- 4. ESTILIZAÇÃO E CURRENTCOLOR -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">4. Estilização Master: fill, stroke e currentColor</h3>
        <p class="text-sm">SVGs ignoram <code>background-color</code> ou <code>border</code>. Usam propriedades específicas do motor vetorial.</p>
        
        <div class="space-y-4">
           <pre><code class="language-html">
&lt;style&gt;
  .icon-master {
    color: #3b82f6; /* Cor do texto pai */
    transition: 0.3s;
  }
  .icon-master:hover {
    color: #ef4444;
    transform: scale(1.1);
  }
&lt;/style&gt;

&lt;svg class="icon-master" viewBox="0 0 24 24" width="50"&gt;
  &lt;!-- fill="currentColor" faz o SVG herdar a cor do CSS 'color' --&gt;
  &lt;circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2" /&gt;
  &lt;path d="M12 8v8M8 12h8" stroke="currentColor" stroke-width="2" stroke-linecap="round" /&gt;
&lt;/svg&gt;
           </code></pre>
        </div>
      </section>

      <!-- 5. ACESSIBILIDADE VETORIAL -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">5. Acessibilidade Master: role="img", title e desc</h3>
        <p class="text-sm leading-relaxed">Para que um ícone seja compreendido por utilizadores cegos, deves marcá-lo como uma imagem e fornecer uma descrição interna.</p>
        
        <pre><code class="language-html">
&lt;svg role="img" aria-labelledby="icon-title icon-desc" viewBox="0 0 24 24" width="40"&gt;
  &lt;title id="icon-title"&gt;Ícone de Alerta&lt;/title&gt;
  &lt;desc id="icon-desc"&gt;Um triângulo amarelo com um ponto de exclamação indicando um aviso crítico.&lt;/desc&gt;
  &lt;path d="M12 2L2 22h20L12 2z" fill="yellow" /&gt;
  &lt;path d="M12 8v6M12 18h.01" stroke="black" stroke-width="2" /&gt;
&lt;/svg&gt;
        </code></pre>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Regra do Arquiteto Vetorial</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Nunca exporte um SVG do Illustrator ou Figma e cole diretamente no código sem o limpar. Remova metadados inúteis de software (como o nome da camada) e utilize a semântica de grupo e currentColor para criar ícones que respiram com o seu Design System."
        </p>
      </section>
    </div>
  `,
};
