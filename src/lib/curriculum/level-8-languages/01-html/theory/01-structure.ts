import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m1",
  title: "Fase 1: Estrutura Master, DOCTYPE e Standards",
  enableInteractive: true,
  quizId: "html-mq1",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🏗️ A Fundação do Software Web
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O HTML5 não é apenas uma linguagem de marcação; é a <strong>camada de dados</strong> da interface. Uma estrutura Master segue padrões rigorosos que garantem acessibilidade, SEO e performance.
        </p>
      </div>

      <!-- 1. ESTRUTURA DO DOCUMENTO -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. A Raiz e o Gatilho de Standards</h3>
        <p class="text-sm">Todo o documento Master começa com a declaração do tipo. O <code>&lt;!DOCTYPE html&gt;</code> não é uma tag, mas uma instrução para o browser não entrar em modo de compatibilidade antiga.</p>
        
        <div class="space-y-4">
           <h4 class="font-bold text-primary text-xs uppercase tracking-widest">O Esqueleto Vital</h4>
           <pre><code class="language-html">
&lt;!DOCTYPE html&gt;
&lt;html lang="pt-MZ"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Codworks Master Studio&lt;/title&gt;
    &lt;link rel="stylesheet" href="style.css"&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Bem-vindo ao Nível Master&lt;/h1&gt;
    &lt;p&gt;A estrutura está validada.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;
           </code></pre>
           <ul class="text-xs space-y-2 ml-4 list-disc opacity-80">
              <li><strong>&lt;html lang="pt-MZ"&gt;:</strong> Define o idioma, vital para corretores ortográficos e leitores de ecrã.</li>
              <li><strong>&lt;head&gt;:</strong> O cérebro invisível (metadados, CSS, scripts).</li>
              <li><strong>&lt;body&gt;:</strong> O corpo visível.</li>
           </ul>
        </div>
      </section>

      <!-- 2. TEXTOS E SEMÂNTICA -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Textos, Títulos e Ênfase Semântica</h3>
        <p class="text-sm">Diferente do design visual, o HTML Master foca no <strong>significado</strong>. Um <code>&lt;strong&gt;</code> diz ao motor de busca que o texto é importante; um <code>&lt;b&gt;</code> apenas o torna grosso.</p>
        
        <pre><code class="language-html">
&lt;h1&gt;Título de Nível 1 (O mais importante)&lt;/h1&gt;
&lt;h2&gt;Subtítulo de Seção&lt;/h2&gt;

&lt;p&gt;Isto é um parágrafo que utiliza &lt;span style="color:blue"&gt;estilo inline via span&lt;/span&gt;.&lt;/p&gt;

&lt;p&gt;
  &lt;strong&gt;Atenção:&lt;/strong&gt; Este texto tem importância semântica.&lt;br&gt;
  &lt;em&gt;Dica:&lt;/em&gt; Este texto tem ênfase (itálico semântico).
&lt;/p&gt;
        </code></pre>
      </section>

      <!-- 3. LINKS E IMAGENS -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Hiperligações e Média Acessível</h3>
        <p class="text-sm">Imagens devem sempre ter o atributo <code>alt</code> para utilizadores cegos.</p>
        
        <pre><code class="language-html">
&lt;a href="https://codworks.mz" target="_blank"&gt;Visitar Academia&lt;/a&gt;

&lt;br&gt;&lt;br&gt;

&lt;img src="https://picsum.photos/seed/1/300/200" 
     alt="Imagem abstrata de tecnologia" 
     width="300" height="200"&gt;
        </code></pre>
      </section>

      <!-- 4. LISTAS E AGRUPAMENTO -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">4. Listas e Blocos de Conteúdo</h3>
        
        <pre><code class="language-html">
&lt;h3&gt;Linguagens do Curso&lt;/h3&gt;
&lt;ul&gt;
  &lt;li&gt;JavaScript&lt;/li&gt;
  &lt;li&gt;Python&lt;/li&gt;
  &lt;li&gt;Rust&lt;/li&gt;
&lt;/ul&gt;

&lt;h3&gt;Passo-a-passo do Deploy&lt;/h3&gt;
&lt;ol&gt;
  &lt;li&gt;Escrever Código&lt;/li&gt;
  &lt;li&gt;Testar Localmente&lt;/li&gt;
  &lt;li&gt;Push para GitHub&lt;/li&gt;
&lt;/ol&gt;

&lt;div class="container-generico"&gt;
  &lt;p&gt;Eu sou uma div, uso-me apenas para layout.&lt;/p&gt;
&lt;/div&gt;
        </code></pre>
      </section>

      <!-- 5. LAYOUT SEMÂNTICO (O ESQUELETO MASTER) -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">5. Marcos Arquiteturais (Landmarks)</h3>
        <p class="text-sm">Tags semânticas permitem que utilizadores saltem diretamente para o conteúdo que lhes interessa.</p>
        
        <pre><code class="language-html">
&lt;header&gt;
  &lt;nav&gt;Menu de Navegação&lt;/nav&gt;
&lt;/header&gt;

&lt;main&gt;
  &lt;section&gt;
    &lt;h2&gt;Seção de Notícias&lt;/h2&gt;
    &lt;article&gt;
      &lt;h3&gt;Artigo Independente&lt;/h3&gt;
      &lt;p&gt;Conteúdo do post...&lt;/p&gt;
    &lt;/article&gt;
  &lt;/section&gt;

  &lt;aside&gt;
    &lt;h4&gt;Barra Lateral&lt;/h4&gt;
    &lt;p&gt;Links relacionados ou anúncios.&lt;/p&gt;
  &lt;/aside&gt;
&lt;/main&gt;

&lt;footer&gt;
  &lt;p&gt;&amp;copy; 2024 Codworks Moz&lt;/p&gt;
&lt;/footer&gt;
        </code></pre>
      </section>

      <!-- 6. FORMULÁRIOS E INPUTS -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">6. Captura de Dados Profissional</h3>
        
        <pre><code class="language-html">
&lt;form action="/login" method="POST"&gt;
  &lt;div&gt;
    &lt;label for="user"&gt;Nome de Utilizador:&lt;/label&gt;
    &lt;input type="text" id="user" required&gt;
  &lt;/div&gt;

  &lt;div&gt;
    &lt;label for="pass"&gt;Senha:&lt;/label&gt;
    &lt;input type="password" id="pass"&gt;
  &lt;/div&gt;

  &lt;div&gt;
    &lt;label for="msg"&gt;Mensagem:&lt;/label&gt;
    &lt;textarea id="msg"&gt;&lt;/textarea&gt;
  &lt;/div&gt;

  &lt;div&gt;
    &lt;label for="pais"&gt;País:&lt;/label&gt;
    &lt;select id="pais"&gt;
      &lt;option value="mz"&gt;Moçambique&lt;/option&gt;
      &lt;option value="pt"&gt;Portugal&lt;/option&gt;
    &lt;/select&gt;
  &lt;/div&gt;

  &lt;button type="submit"&gt;Entrar no Sistema&lt;/button&gt;
&lt;/form&gt;
        </code></pre>
      </section>

      <!-- 7. MULTIMÉDIA -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">7. Vídeo e Áudio Nativos</h3>
        
        <pre><code class="language-html">
&lt;h4&gt;Player de Vídeo Master&lt;/h4&gt;
&lt;video controls width="100%" poster="https://picsum.photos/seed/vid/600/400"&gt;
  &lt;source src="movie.mp4" type="video/mp4"&gt;
  Seu browser não suporta vídeo.
&lt;/video&gt;

&lt;h4&gt;Player de Áudio&lt;/h4&gt;
&lt;audio controls&gt;
  &lt;source src="podcast.mp3" type="audio/mpeg"&gt;
&lt;/audio&gt;
        </code></pre>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Selo de Qualidade</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Escrever HTML de elite é garantir que o seu software é legível para robôs, acessível para humanos com limitações e performático em redes instáveis."
        </p>
      </section>
    </div>
  `
};
