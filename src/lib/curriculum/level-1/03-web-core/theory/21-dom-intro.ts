import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "web-t21",
  title: "Fronteira Web: HTML, CSS e a Ponte para o JavaScript",
  youtubeVideoId: "8ME9u065vD4",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🌉 A Ponte para a Inteligência</h2>
        <p class="text-lg leading-relaxed">
          Chegaste ao fim do módulo Web Core. Agora, o teu esqueleto (HTML) e a tua pele (CSS) precisam de um cérebro. O <strong>DOM (Document Object Model)</strong> é a interface que permite ao JavaScript "ver" e mudar o teu site em tempo real.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. O que é o DOM?</h3>
        <p>O browser transforma o teu código HTML numa árvore de objetos. Cada tag torna-se um "nó" que pode ser manipulado.</p>
        
        <h3 class="text-xl font-bold font-headline">2. Selecionando Elementos</h3>
        <p>Como o JavaScript encontra as tuas tags? Usando os IDs e Classes que definiste no HTML.</p>
        <ul class="space-y-3">
          <li class="p-3 bg-card border rounded-xl font-code text-xs">
            <span class="text-primary">document.querySelector</span>("#meu-id");
          </li>
          <li class="p-3 bg-card border rounded-xl font-code text-xs">
            <span class="text-primary">document.querySelectorAll</span>(".minha-classe");
          </li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h4 class="font-bold text-indigo-400 mb-2">🎓 Rumo ao Nível 2</h4>
          <p class="text-sm leading-relaxed">
            No próximo nível, aprenderás a escutar cliques, mudar cores dinamicamente e buscar dados de APIs externas. O Web Core deu-te a estrutura; o JavaScript dar-te-á o poder.
          </p>
        </div>

        <div class="text-center py-10">
          <p class="text-primary font-bold text-2xl animate-pulse">🎓 Parabéns, Engenheiro! Concluíste os 21 temas de Web Core.</p>
          <p class="text-muted-foreground mt-2">Estás pronto para dominar a inteligência do browser.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "web-q21"
};
