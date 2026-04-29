import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "web-t4",
  title: "CSS Flexbox: O Domínio Unidimensional",
  youtubeVideoId: "u044iM9xsTM",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          ↕️ Alinhamento Inteligente
        </h2>
        <p class="text-lg leading-relaxed">
          O <strong>Flexbox</strong> (Flexible Box Module) foi desenhado para organizar itens numa única dimensão (ou linha ou coluna). Ele calcula automaticamente como distribuir o espaço disponível e como alinhar elementos de tamanhos diferentes.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Os Dois Eixos Fundamentais</h3>
        <p>Tudo no Flexbox depende de onde está o <strong>Main Axis</strong> (Eixo Principal). Se mudas a direção, as propriedades de alinhamento também mudam de sentido.</p>
        
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <h4 class="font-bold text-accent mb-2">Main Axis (justify-content)</h4>
            <p class="text-xs text-muted-foreground">Controla o alinhamento na direção do fluxo (por padrão, horizontal).</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <h4 class="font-bold text-accent mb-2">Cross Axis (align-items)</h4>
            <p class="text-xs text-muted-foreground">Controla o alinhamento perpendicular ao fluxo (por padrão, vertical).</p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline">2. Propriedades do Container</h3>
        <ul class="space-y-3 text-sm">
          <li><strong>display: flex;</strong> — O gatilho que transforma o elemento num container flexível.</li>
          <li><strong>flex-direction:</strong> Define se os itens são <code>row</code> (linha) ou <code>column</code> (coluna).</li>
          <li><strong>justify-content:</strong> <code>center</code>, <code>space-between</code>, <code>space-around</code>.</li>
          <li><strong>gap:</strong> O espaçamento moderno entre itens (substitui margens manuais).</li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">💎 Flex-Grow, Shrink e Basis</h3>
          <p class="text-sm mb-4">Estas três propriedades controlam a "vontade" do item de ocupar espaço:</p>
          <ul class="list-disc ml-6 space-y-2 text-xs">
            <li><strong>Flex-grow:</strong> Define se o item pode esticar para preencher o vazio.</li>
            <li><strong>Flex-shrink:</strong> Define se o item pode encolher para não transbordar.</li>
            <li><strong>Flex-basis:</strong> O tamanho inicial do item antes da distribuição do espaço.</li>
          </ul>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Dica de Engenharia: Centralização Absoluta
          </h4>
          <p class="text-sm leading-relaxed">
            O "Santo Graal" do CSS antigo era centralizar algo. Com Flexbox, são apenas 3 linhas: <br/>
            <code>display: flex; justify-content: center; align-items: center;</code>
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "web-t4-quiz"
};
