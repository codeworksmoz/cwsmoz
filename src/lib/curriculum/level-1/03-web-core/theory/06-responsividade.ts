import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "web-t6",
  title: "Responsividade: A Filosofia Mobile-First",
  youtubeVideoId: "8aGhZQkoFbQ",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          📱 O Mundo é Mobile
        </h2>
        <p class="text-lg leading-relaxed">
          Responsividade não é "fazer o site caber no telemóvel". É uma estratégia de engenharia chamada <strong>Mobile-First</strong>: desenhamos primeiro para o cenário mais restrito (ecrãs pequenos, conexão lenta) e expandimos para o desktop conforme o espaço aumenta.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. A Meta Tag Viewport</h3>
        <p>Sem esta tag, o telemóvel tenta "fingir" que é um desktop, resultando num site minúsculo e ilegível. Ela diz ao browser para usar a largura real do hardware.</p>
        <div class="bg-black/40 p-4 rounded-xl border font-code text-sm text-accent shadow-inner">
          &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. Media Queries: O Interruptor de Estilo</h3>
        <p>As Media Queries permitem aplicar blocos de CSS apenas quando certas condições (como a largura do ecrã) são atingidas. Os pontos de mudança chamam-se <strong>Breakpoints</strong>.</p>
        
        <div class="bg-black/40 p-5 rounded-xl border font-code text-xs space-y-2">
          <p class="text-muted-foreground">// Estilo base (Mobile)</p>
          <p>.container { grid-template-columns: 1fr; }</p><br/>
          <p class="text-primary">@media</p> (min-width: <span class="text-green-400">768px</span>) {
          <p>&nbsp;&nbsp;<span class="text-muted-foreground">// Estilo para Tablets e Desktops</span></p>
          <p>&nbsp;&nbsp;.container { grid-template-columns: 1fr 1fr; }</p>
          <p>}</p>
        </div>

        <h3 class="text-xl font-bold font-headline">3. Unidades Relativas vs Fixas</h3>
        <p>Um Engenheiro Master evita o <code>px</code> para layouts e prefere:</p>
        <ul class="grid md:grid-cols-3 gap-4 text-center">
          <li class="p-3 bg-card border rounded-xl border-white/5">
            <strong class="text-accent">%</strong><br/><span class="text-[10px] opacity-60">Largura do pai</span>
          </li>
          <li class="p-3 bg-card border rounded-xl border-white/5">
            <strong class="text-accent">vw / vh</strong><br/><span class="text-[10px] opacity-60">Janela do browser</span>
          </li>
          <li class="p-3 bg-card border rounded-xl border-white/5">
            <strong class="text-accent">rem</strong><br/><span class="text-[10px] opacity-60">Acessibilidade</span>
          </li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 mt-6 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-2">💎 Porquê Mobile-First?</h4>
          <p class="text-sm leading-relaxed">
            É tecnicamente mais simples adicionar colunas do que tentar "esmagar" ou esconder elementos de um desktop para o mobile. Além disso, obriga o engenheiro a priorizar o que é realmente importante para o utilizador.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "web-t6-quiz"
};
