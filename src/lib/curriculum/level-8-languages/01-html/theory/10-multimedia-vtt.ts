import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m10",
  title: "Fase 2: Multimedia: Áudio e Vídeo com WebVTT",
  enableInteractive: true,
  quizId: "html-mq10",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🎬 Engenharia de Média e Acessibilidade
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Integrar vídeo e áudio na web moderna vai além de uma simples tag. No nível Master, projetamos experiências multimedia que são <strong>indexáveis por robôs</strong>, acessíveis para todos os sentidos e performáticas em qualquer rede.
        </p>
      </div>

      <!-- 1. O ELEMENTO VIDEO -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Anatomia Master do Elemento &lt;video&gt;</h3>
        <p class="text-sm">Nunca confie num único formato. Use a tag <code>&lt;source&gt;</code> para fornecer alternativas ao browser e o atributo <code>poster</code> para garantir que o utilizador não veja um ecrã preto enquanto o vídeo carrega.</p>
        
        <div class="space-y-4">
           <pre><code class="language-html">
&lt;video controls 
       width="100%" 
       poster="https://picsum.photos/seed/codeworks/800/450"
       preload="metadata"
       style="border-radius: 12px; shadow: 0 4px 6px rgba(0,0,0,0.1);"&gt;
  &lt;source src="video-master.mp4" type="video/mp4"&gt;
  &lt;source src="video-master.webm" type="video/webm"&gt;
  
  &lt;!-- Omitido o conteúdo de fallback para browsers de 2010 --&gt;
  O seu navegador não suporta o elemento de vídeo.
&lt;/video&gt;
           </code></pre>
        </div>
      </section>

      <!-- 2. WEBVTT E TRACKS -->
      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. WebVTT: Dando Voz ao Vídeo</h3>
        <p class="text-sm leading-relaxed">O <strong>WebVTT</strong> (.vtt) é um formato de ficheiro de texto que permite sincronizar legendas, capítulos e descrições. É a chave para o SEO de vídeo, pois permite que o Google "leia" o que está a ser dito.</p>

        <div class="space-y-4">
           <h4 class="font-bold text-primary text-xs uppercase tracking-widest">Exemplo de Ficheiro .vtt</h4>
           <div class="bg-black/40 p-5 rounded-xl border font-code text-sm text-accent shadow-inner">
             WEBVTT<br><br>
             00:00:01.000 --> 00:00:05.500<br>
             &lt;v Edson&gt;Bem-vindos à engenharia de elite.&lt;/v&gt;<br><br>
             00:00:06.000 --> 00:00:10.000<br>
             Hoje dominaremos o motor de renderização.
           </div>
        </div>
      </section>

      <!-- 3. ACESSIBILIDADE MULTIMÉDIA -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. O Elemento &lt;track&gt; e Categorias</h3>
        <p class="text-sm">Podes carregar múltiplas faixas de texto para o mesmo vídeo. O atributo <code>kind</code> define o propósito técnico:</p>
        
        <ul class="space-y-4">
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
            <div>
              <p class="font-bold text-sm">kind="subtitles":</p>
              <p class="text-xs text-muted-foreground">Tradução do áudio para utilizadores que não falam a língua mas conseguem ouvir os sons de fundo.</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
            <div>
              <p class="font-bold text-sm">kind="captions":</p>
              <p class="text-xs text-muted-foreground">Inclui descrição de sons (ex: [música dramática], [porta a bater]). Vital para utilizadores surdos.</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
            <div>
              <p class="font-bold text-sm">kind="chapters":</p>
              <p class="text-xs text-muted-foreground">Permite que o browser crie um menu de navegação por tópicos dentro do vídeo.</p>
            </div>
          </li>
        </ul>
      </section>

      <!-- 4. EXEMPLO INTERATIVO -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">4. Implementação de Elite</h3>
        <p class="text-sm">Observe como as faixas são organizadas. Um site Master oferece sempre opções de idioma e acessibilidade.</p>
        
        <pre><code class="language-html">
&lt;video controls width="100%" poster="https://picsum.photos/seed/moz/800/450"&gt;
  &lt;source src="tutorial.mp4" type="video/mp4"&gt;
  
  &lt;!-- Legendas em Português --&gt;
  &lt;track label="Português" kind="subtitles" srclang="pt" src="pt.vtt" default&gt;
  
  &lt;!-- Legendas em Inglês --&gt;
  &lt;track label="English" kind="subtitles" srclang="en" src="en.vtt"&gt;
  
  &lt;!-- Descrição para Acessibilidade --&gt;
  &lt;track label="Acessibilidade" kind="captions" srclang="pt" src="captions.vtt"&gt;
&lt;/video&gt;
        </code></pre>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Regra do Engenheiro de Média</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Vídeo sem legendas é conteúdo perdido. Utilize WebVTT para garantir que a sua mensagem é indexada pelo Google e compreendida por todos os seus utilizadores, independentemente das suas capacidades auditivas."
        </p>
      </section>
    </div>
  `,
};
