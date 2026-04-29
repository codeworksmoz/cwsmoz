import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "web-p15",
  language: "html",
  title: "Laboratório: Otimizador de Ativos",
  description: "Aprenda a carregar recursos de forma inteligente.",
  statement: "Implemente o atributo de carregamento preguiçoso (lazy loading) numa imagem para poupar banda.",
  template: `<!-- Arquiteto: Otimize a imagem abaixo -->
<img src="banner-gigante.jpg" 
     alt="Publicidade" 
     width="1200" 
     height="800"
     loading="" > <!-- Adicione o valor correto aqui -->`,
  youtubeVideoId: "v4cd1O4zkGw",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-green-500">⚡ Missão: Velocidade Máxima</h3>
      <p>O banner desta página é gigante e está no fundo do site. Não faz sentido o utilizador descarregá-lo se nem sequer fizer scroll.</p>
      <div class="bg-muted p-4 rounded-xl border border-green-500/20 space-y-2">
        <p class="text-xs font-bold text-yellow-500">O que fazer:</p>
        <p class="text-[10px]">Adiciona o valor <code>lazy</code> ao atributo <code>loading</code> da imagem para ativar a otimização nativa do browser.</p>
      </div>
    </div>
  `,
  objectives: [
    {
      id: "lazy_load",
      description: "Ativar lazy loading na imagem.",
      test: "loading=\"lazy\""
    }
  ]
};
