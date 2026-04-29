import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "web-t15",
  title: "Performance Web e Core Web Vitals: A Ciência da Velocidade",
  youtubeVideoId: "v4cd1O4zkGw",
  content: `
    <div class="space-y-8">
      <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-green-400 flex items-center gap-2">
          ⚡ Milissegundos valem Milhões
        </h2>
        <p class="text-lg leading-relaxed">
          Performance não é um "luxo", é um requisito de negócio. Sites lentos frustram utilizadores e perdem dinheiro. O Google utiliza os <strong>Core Web Vitals</strong> para medir a experiência real do utilizador e decidir o teu ranking.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Os 3 Pilares da Experiência (Core Web Vitals)</h3>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="p-4 bg-card border rounded-xl border-blue-500/20">
            <h4 class="font-bold text-blue-400 text-xs mb-1">LCP (Carregamento)</h4>
            <p class="text-[10px] opacity-70">Largest Contentful Paint. Mede quanto tempo leva para o maior elemento (ex: banner) aparecer. <br/><b>Ideal: < 2.5s</b></p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-orange-500/20">
            <h4 class="font-bold text-orange-400 text-xs mb-1">FID (Interatividade)</h4>
            <p class="text-[10px] opacity-70">First Input Delay. Mede o tempo desde o clique até o browser responder. <br/><b>Ideal: < 100ms</b></p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-purple-500/20">
            <h4 class="font-bold text-purple-400 text-xs mb-1">CLS (Estabilidade)</h4>
            <p class="text-[10px] opacity-70">Cumulative Layout Shift. Mede se os elementos "pulam" no ecrã enquanto a página carrega. <br/><b>Ideal: < 0.1</b></p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline">2. Otimização de Ativos (Assets)</h3>
        <p class="text-sm">Imagens pesadas são o maior vilão da performance. Um Engenheiro Master usa:</p>
        <ul class="list-disc ml-6 space-y-2 text-xs">
          <li><strong>WebP/AVIF:</strong> Formatos modernos que comprimem 50% mais que JPG.</li>
          <li><strong>Lazy Loading:</strong> Só carrega a imagem se o utilizador fizer scroll até ela.</li>
          <li><strong>Minificação:</strong> Remover espaços e comentários de ficheiros CSS/JS.</li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h4 class="font-bold text-indigo-400 mb-2">🔬 Ferramentas de Diagnóstico</h4>
          <p class="text-sm leading-relaxed">
            Use o <strong>Lighthouse</strong> (embutido no Chrome DevTools) para gerar um relatório de saúde do teu site. Ele atribui uma pontuação de 0 a 100 e dá dicas exatas de onde o teu código está a falhar na performance.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "web-q15"
};
