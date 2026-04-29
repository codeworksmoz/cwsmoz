
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m16",
  title: "Fetch Priority e Gestão de LCP",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 font-headline">⚡ Priorizando o que o Utilizador Vê</h2>
        <p class="text-lg">O browser descarrega centenas de ficheiros. O Engenheiro Master diz ao motor do browser quais são os recursos mais vitais para que o site apareça carregado mais cedo.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline text-primary border-b border-white/5 pb-2">O Atributo 'fetchpriority' (Estágio Master)</h3>
        <p>Diga explicitamente ao browser para dar prioridade "high" ao banner principal. Isto pode reduzir o LCP (Largest Contentful Paint) em centenas de milissegundos.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-sm border border-white/5">
          <span class="text-primary">&lt;img</span> <span class="text-accent">src</span>=<span class="text-green-400">"hero.webp"</span> <span class="text-accent">fetchpriority</span>=<span class="text-green-400">"high"</span><span class="text-primary">&gt;</span>
        </div>

        <h3 class="text-xl font-bold font-headline">Critical CSS Inline</h3>
        <p>Para uma performance de elite, identifique o CSS necessário para renderizar o topo da página e coloque-o diretamente no <code>&lt;head&gt;</code> numa tag <code>&lt;style&gt;</code>. Isto elimina a latência de descarregar um ficheiro <code>.css</code> externo antes do utilizador ver alguma coisa.</p>
        
        <h3 class="text-xl font-bold font-headline text-accent">Estratégias de Carregamento de Scripts</h3>
        <ul class="space-y-3">
          <li class="bg-card p-3 rounded border border-white/5 text-xs">
            <strong>Async:</strong> Descarrega em paralelo, executa mal termine. Não respeita a ordem do código. (Bom para Analytics)
          </li>
          <li class="bg-card p-3 rounded border border-white/5 text-xs">
            <strong>Defer:</strong> Descarrega em paralelo, mas executa apenas APÓS o DOM estar pronto e em ordem. (Padrão para a aplicação)
          </li>
        </ul>
      </div>
    </div>
  `,
  quizId: "html-mq16"
};
