import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "dt-t5",
  title: "Build Tools: Vite, Webpack e Bundling de Elite",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">⚙️ Do Código à Produção</h2>
        <p class="text-lg leading-relaxed">Browsers não entendem centenas de ficheiros importados de forma eficiente. Build Tools pegam no seu código de desenvolvimento e transformam-no em pacotes (bundles) otimizados para o utilizador final.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">1. Vite: A Velocidade da Próxima Geração</h3>
        <p class="text-sm">O Vite utiliza <strong>ES Modules</strong> nativos durante o desenvolvimento. Isto torna o arranque do servidor instantâneo, pois ele não precisa de fazer o bundle de tudo antes de começar, ao contrário do Webpack.</p>
        
        <h3 class="text-xl font-bold font-headline">2. Otimizações de Produção</h3>
        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl">
            <strong class="text-accent">Tree Shaking:</strong> Remoção automática de funções que importaste mas nunca usaste.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl">
            <strong class="text-accent">Minificação:</strong> Compressão do código removendo espaços e comentários para reduzir o download.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl">
            <strong class="text-accent">Code Splitting:</strong> Dividir o site em pedaços menores para carregar apenas o que é necessário para a página atual.
          </li>
        </ul>
      </div>
    </div>
  `,
  quizId: "dt-q5"
};