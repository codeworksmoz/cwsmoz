import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "web-t9",
  title: "Semântica e SEO: Dando Significado à Web",
  youtubeVideoId: "8ME9u065vD4",
  content: `
    <div class="space-y-8">
      <div class="bg-orange-500/10 p-6 rounded-2xl border border-orange-500/20 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-orange-400 flex items-center gap-2">
          🏗️ Além do Visual
        </h2>
        <p class="text-lg leading-relaxed">
          Para um Engenheiro Master, o HTML não é apenas sobre o que o utilizador vê, mas sobre o que a <strong>máquina entende</strong>. HTML Semântico é o uso de tags que descrevem o seu conteúdo (ex: <code>&lt;article&gt;</code>, <code>&lt;nav&gt;</code>) em vez de apenas contentores genéricos (<code>&lt;div&gt;</code>).
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Os Marcos de Navegação (Landmarks)</h3>
        <p>Tags semânticas criam "pontos de ancoragem" para leitores de ecrã e motores de busca. Elas dizem ao mundo o que é cada parte do seu site.</p>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <h4 class="font-bold text-accent mb-2">&lt;main&gt;</h4>
            <p class="text-xs text-muted-foreground">O conteúdo principal e único desta página. Deve haver apenas um por documento.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <h4 class="font-bold text-accent mb-2">&lt;aside&gt;</h4>
            <p class="text-xs text-muted-foreground">Conteúdo tangencialmente relacionado (barras laterais, anúncios, citações).</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <h4 class="font-bold text-accent mb-2">&lt;section&gt;</h4>
            <p class="text-xs text-muted-foreground">Um agrupamento temático de conteúdo, geralmente com um título (h2-h6).</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <h4 class="font-bold text-accent mb-2">&lt;article&gt;</h4>
            <p class="text-xs text-muted-foreground">Conteúdo independente que faz sentido por si só (post de blog, card de produto).</p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. O Impacto no SEO (Search Engine Optimization)</h3>
        <p class="text-sm leading-relaxed">
          Os robôs do Google (Googlebots) utilizam a semântica para decidir o que indexar. Uma página com <code>&lt;h1&gt;</code> e <code>&lt;article&gt;</code> bem estruturados terá sempre um ranking superior a uma página composta apenas por <code>&lt;div&gt;</code> e <code>&lt;span&gt;</code> com estilos de tamanho de letra.
        </p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">♿ Acessibilidade e Inclusão</h3>
          <p class="text-sm leading-relaxed">
            Utilizadores com deficiência visual dependem de leitores de ecrã que navegam através da estrutura do documento. Usar <code>&lt;nav&gt;</code> permite-lhes saltar diretamente para o menu. Usar <code>&lt;button&gt;</code> garante que o teclado consiga focar o elemento nativamente.
          </p>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Dica de Elite: Evite a "Div-ite"
          </h4>
          <p class="text-sm leading-relaxed">
            Sempre que estiver prestes a escrever uma <code>&lt;div&gt;</code>, pare e pergunte: "Este bloco tem um significado?". Se for um cabeçalho, use <code>&lt;header&gt;</code>. Se for um rodapé, use <code>&lt;footer&gt;</code>. Deixe as divs apenas para necessidades puramente estéticas (layout e estilização).
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "web-q9"
};
