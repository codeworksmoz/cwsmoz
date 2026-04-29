import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "web-t19",
  title: "Tipografia Web: Estilo, Acessibilidade e Performance",
  youtubeVideoId: "v4cd1O4zkGw",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🖋️ A Voz Visual do Site
        </h2>
        <p class="text-lg leading-relaxed">
          Tipografia é 90% do design web. Para um engenheiro, o desafio é equilibrar uma estética rica com a performance de rede. Ficheiros de fonte pesados podem atrasar a renderização do texto em segundos.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Web Fonts e font-display</h3>
        <p>Quando o browser descarrega uma fonte, ele pode esconder o texto (FOIT) ou mostrar uma fonte padrão primeiro (FOUT). O Engenheiro Master usa <code>font-display: swap</code> para garantir que o utilizador consiga ler o conteúdo imediatamente.</p>
        <div class="bg-black/40 p-4 rounded-xl border font-code text-xs text-accent">
          @font-face { <br/>
          &nbsp;&nbsp;font-family: 'EliteFont'; <br/>
          &nbsp;&nbsp;src: url('font.woff2'); <br/>
          &nbsp;&nbsp;<span class="text-primary">font-display</span>: <span class="text-green-400">swap</span>; <br/>
          }
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. Unidades Dinâmicas: rem vs em</h3>
        <p>Nunca use <code>px</code> para fontes se quiser um site acessível. O <code>rem</code> baseia-se na preferência do utilizador no browser, garantindo que o seu site escala se ele precisar de letras maiores.</p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🚀 Variable Fonts (O Futuro)</h3>
          <p class="text-sm leading-relaxed mb-4">
            Variable Fonts permitem carregar um único ficheiro que contém todos os pesos (light, bold, black) e inclinações. Isto reduz o número de pedidos de rede de 5-10 ficheiros para apenas 1.
          </p>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Dica de Elite: Legibilidade
          </h4>
          <p class="text-sm leading-relaxed">
            Mantenha o <code>line-height</code> entre 1.5 e 1.6 para parágrafos. Use larguras de linha de no máximo 70-80 caracteres. O conforto visual do utilizador é a sua prioridade técnica número um.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "web-q19"
};
