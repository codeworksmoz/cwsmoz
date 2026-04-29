import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "web-t2",
  title: "CSS: Seletores, Herança e o Algoritmo da Cascata",
  youtubeVideoId: "gI-qXk7XojA",
  content: `
    <div class="space-y-8">
      <div class="bg-blue-500/10 p-6 rounded-2xl border border-blue-500/20 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-blue-400">🎨 A Arte do Estilo Escalonável</h2>
        <p class="text-lg leading-relaxed">
          CSS (Cascading Style Sheets) não é apenas cor e tamanho. É um algoritmo complexo que decide qual regra ganha a "luta" de estilo baseando-se na <strong>Especificidade</strong> e na <strong>Cascata</strong>.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. A Anatomia do Seletor</h3>
        <p>Um seletor aponta para o HTML e abre as portas para as propriedades decorativas.</p>
        <div class="bg-black/40 p-4 rounded-xl border font-code text-sm text-center">
          <span class="text-primary">h1</span> <span class="text-accent">{</span> <span class="text-green-400">color</span>: blue; <span class="text-accent">}</span>
        </div>

        <h3 class="text-xl font-bold font-headline">2. O Ranking de Especificidade</h3>
        <p class="text-sm">Se duas regras apontam para o mesmo elemento, o browser usa pontos para decidir:</p>
        <ul class="space-y-2">
          <li class="flex items-center gap-3 p-3 bg-card border rounded-xl border-white/5">
            <span class="w-20 font-bold text-accent">100 pts</span>
            <span class="text-xs"><strong>IDs (#):</strong> Identificadores únicos. Muito fortes.</span>
          </li>
          <li class="flex items-center gap-3 p-3 bg-card border rounded-xl border-white/5">
            <span class="w-20 font-bold text-primary">10 pts</span>
            <span class="text-xs"><strong>Classes (.), Atributos e Pseudo-classes:</strong> O padrão para Design Systems.</span>
          </li>
          <li class="flex items-center gap-3 p-3 bg-card border rounded-xl border-white/5">
            <span class="w-20 font-bold text-muted-foreground">1 pt</span>
            <span class="text-xs"><strong>Elementos (Tags):</strong> O seletor mais genérico e fraco.</span>
          </li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🌳 Herança e Cascata</h3>
          <p class="text-sm leading-relaxed mb-4">
            Algumas propriedades (como <code>font-family</code> e <code>color</code>) "escorrem" dos pais para os filhos. Outras (como <code>border</code>) não. A <strong>Cascata</strong> significa que, em caso de empate, a regra que estiver escrita por último no ficheiro ganha.
          </p>
        </div>

        <div class="bg-yellow-500/5 p-6 rounded-2xl border border-yellow-500/20">
          <h4 class="font-bold text-yellow-500 mb-2">🚀 Dica de Engenharia: !important</h4>
          <p class="text-sm leading-relaxed">
            Nunca uses <code>!important</code> a menos que seja um caso de vida ou morte (como um reset de biblioteca externa). Ele quebra o algoritmo da cascata e torna o código impossível de manter em projetos grandes.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "web-t2-quiz"
};