import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "web-t5",
  title: "CSS Grid Layout: A Orquestração Bidimensional",
  youtubeVideoId: "jV8B24w82CU",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🏁 Grelhas de Alta Precisão
        </h2>
        <p class="text-lg leading-relaxed">
          Enquanto o Flexbox é excelente para componentes isolados, o <strong>CSS Grid</strong> é a ferramenta definitiva para a arquitetura completa da página. Ele permite controlar linhas e colunas simultaneamente.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Definindo a Grelha</h3>
        <p>Diferente de tabelas, o Grid é definido inteiramente no CSS do elemento pai (Container).</p>
        
        <div class="bg-black/40 p-5 rounded-xl border font-code text-xs text-accent space-y-2">
          <p>.layout {</p>
          <p>&nbsp;&nbsp;<span class="text-primary">display</span>: grid;</p>
          <p>&nbsp;&nbsp;<span class="text-primary">grid-template-columns</span>: 200px 1fr 1fr;</p>
          <p>&nbsp;&nbsp;<span class="text-primary">grid-template-rows</span>: auto 1fr;</p>
          <p>}</p>
        </div>

        <h3 class="text-xl font-bold font-headline">2. A Unidade Fracionária (fr)</h3>
        <p class="text-sm">A unidade <code>fr</code> é o segredo do Grid. Ela representa uma fração do espaço livre. <br/><code>grid-template-columns: 1fr 2fr;</code> -> O segundo elemento terá sempre o dobro da largura do primeiro, adaptando-se ao ecrã.</p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🏗️ Grid Template Areas</h3>
          <p class="text-sm mb-4">Podes "desenhar" o layout usando nomes, tornando o código extremamente visual e fácil de manter:</p>
          <div class="bg-black/40 p-4 rounded-xl font-code text-[10px] text-green-400">
            "header header"<br/>
            "sidebar content"<br/>
            "footer footer"
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">3. Repeat() e Minmax()</h3>
        <ul class="space-y-4">
          <li class="flex gap-4">
            <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 font-bold">R</div>
            <div>
              <p class="font-bold text-sm">repeat():</p>
              <p class="text-xs text-muted-foreground">Evita repetições: <code>repeat(3, 1fr)</code> cria 3 colunas iguais.</p>
            </div>
          </li>
          <li class="flex gap-4">
            <div class="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 font-bold">M</div>
            <div>
              <p class="font-bold text-sm">minmax():</p>
              <p class="text-xs text-muted-foreground">Garante que uma coluna nunca encolha demais: <code>minmax(200px, 1fr)</code>.</p>
            </div>
          </li>
        </ul>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Visão de Elite: Grid vs Flex
          </h4>
          <p class="text-sm leading-relaxed">
            <strong>Use Grid</strong> para o esqueleto da página (Outer layout). <br/>
            <strong>Use Flexbox</strong> para o conteúdo interno (Inner layout), como alinhar um ícone ao lado de um texto num botão.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "web-t5-quiz"
};
