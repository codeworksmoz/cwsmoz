import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m6",
  title: "Fase 1: Imagens Responsivas e Otimização de LCP",
  enableInteractive: true,
  quizId: "html-mq6",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🖼️ A Engenharia de Ativos Visuais
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Imagens representam, em média, 60% do peso de uma página web. No nível Master, não apenas inserimos uma imagem; nós desenhamos uma <strong>estratégia de entrega</strong> que minimiza o consumo de dados e maximiza a velocidade de renderização inicial (LCP).
        </p>
      </div>

      <!-- 1. SRCSET E SIZES -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Resolução Adaptável (srcset)</h3>
        <p class="text-sm">Porquê enviar uma imagem 4K para um telemóvel com ecrã pequeno? O atributo <code>srcset</code> permite listar várias versões da mesma imagem, deixando o browser escolher a melhor baseando-se na densidade de pixels do ecrã.</p>
        
        <div class="space-y-4">
           <h4 class="font-bold text-primary text-xs uppercase tracking-widest">Sintaxe de Densidade e Largura</h4>
           <pre><code class="language-html">
&lt;!-- Entregando resoluções diferentes para ecrãs Retina --&gt;
&lt;img src="foto-1x.jpg" 
     srcset="foto-1x.jpg 1x, 
             foto-2x.jpg 2x, 
             foto-3x.jpg 3x" 
     alt="Desenvolvedor no trabalho"&gt;

&lt;!-- Entregando larguras baseadas no viewport (w descriptor) --&gt;
&lt;img src="banner-800.jpg"
     srcset="banner-400.jpg 400w,
             banner-800.jpg 800w,
             banner-1200.jpg 1200w"
     sizes="(max-width: 600px) 400px,
            800px"
     alt="Banner de tecnologia"&gt;
           </code></pre>
        </div>
      </section>

      <!-- 2. O ELEMENTO PICTURE -->
      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Elemento &lt;picture&gt;: Art Direction e Formatos</h3>
        <p class="text-sm leading-relaxed">A tag <code>&lt;picture&gt;</code> é mais potente que a <code>&lt;img&gt;</code>. Ela permite mudar a imagem completamente conforme o tamanho do ecrã (Art Direction) ou servir formatos modernos como <strong>WebP</strong> e <strong>AVIF</strong> com fallback para JPG.</p>

        <div class="space-y-4">
           <h4 class="font-bold text-primary text-xs uppercase tracking-widest">Exemplo: Negociação de Formato e Corte</h4>
           <pre><code class="language-html">
&lt;picture&gt;
  &lt;!-- 1. Tenta servir o formato mais leve (AVIF) --&gt;
  &lt;source srcset="hero.avif" type="image/avif"&gt;
  
  &lt;!-- 2. Tenta o segundo melhor (WebP) --&gt;
  &lt;source srcset="hero.webp" type="image/webp"&gt;
  
  &lt;!-- 3. Muda a imagem para um corte quadrado em mobile --&gt;
  &lt;source media="(max-width: 768px)" srcset="hero-mobile.jpg"&gt;
  
  &lt;!-- 4. Fallback obrigatório para browsers antigos --&gt;
  &lt;img src="hero-fallback.jpg" alt="Equipa Codworks" loading="lazy"&gt;
&lt;/picture&gt;
           </code></pre>
        </div>
      </section>

      <!-- 3. OTIMIZAÇÃO DE LCP -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Otimização de LCP e Prioridade de Rede</h3>
        <p class="text-sm">O <strong>Largest Contentful Paint (LCP)</strong> mede quando o maior elemento visual é desenhado. Para atingir o selo de elite, deves usar as novas diretivas de prioridade.</p>
        
        <ul class="space-y-4">
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
            <div>
              <p class="font-bold text-sm">fetchpriority="high":</p>
              <p class="text-xs text-muted-foreground">Diga ao browser para ignorar a fila e descarregar esta imagem IMEDIATAMENTE. Use apenas na Hero Image.</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
            <div>
              <p class="font-bold text-sm">decoding="async":</p>
              <p class="text-xs text-muted-foreground">Permite que o browser processe a imagem fora da thread principal, evitando travamentos na UI.</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
            <div>
              <p class="font-bold text-sm">loading="lazy":</p>
              <p class="text-xs text-muted-foreground">O padrão para imagens fora da área visível inicial. Poupa banda e CPU.</p>
            </div>
          </li>
        </ul>
      </section>

      <!-- 4. ESTABILIDADE VISUAL -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">4. Evitando Saltos de Layout (CLS)</h3>
        <p class="text-sm">Sempre forneça os atributos <code>width</code> e <code>height</code> originais. Mesmo que o CSS mude o tamanho depois, o browser usa estes valores para reservar o espaço correto, evitando que o texto "pule" quando a imagem carrega.</p>
        
        <pre><code class="language-html">
&lt;!-- ✅ O browser reserva um retângulo 16:9 antes do download --&gt;
&lt;img src="banner.jpg" 
     width="1600" 
     height="900" 
     style="width: 100%; height: auto; aspect-ratio: 16/9;"
     alt="Dashboard de Engenharia"&gt;
        </code></pre>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Regra do Engenheiro de Performance</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Uma imagem não otimizada é uma barreira entre o seu código e o utilizador. Utilize formatos modernos, priorize o que é visto primeiro e nunca deixe o layout saltar. Performance é respeito pelo tempo do utilizador."
        </p>
      </section>
    </div>
  `,
};
