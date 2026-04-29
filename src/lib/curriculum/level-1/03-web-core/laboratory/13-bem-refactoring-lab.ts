import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "web-p13",
  language: "html",
  title: "Laboratório Master: Refatoração BEM",
  description: "Transforme classes genéricas em componentes de elite.",
  statement: "Refatorize o código substituindo as classes confusas pelas classes seguindo o padrão BEM para um bloco 'profile'.",
  template: `<!-- Arquiteto: Refatorize para o bloco 'profile' -->
<div class="user-box highlighted">
  <img class="pic" src="avatar.jpg">
  <h2 class="name">Edson</h2>
  <button class="btn blue">Seguir</button>
</div>

<style>
  /* Mude os seletores abaixo para o padrão BEM */
  .user-box.highlighted { border: 2px solid gold; }
  .user-box .pic { border-radius: 50%; }
  .user-box .name { font-weight: bold; }
</style>`,
  youtubeVideoId: "u044iM9xsTM",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🧹 Operação Clean CSS</h3>
      <p>A tua missão é aplicar a metodologia BEM. O bloco principal deve chamar-se <code>profile</code>.</p>
      <div class="bg-muted p-4 rounded-xl border border-primary/20 space-y-2">
        <p class="text-xs font-bold text-yellow-500">Mapeamento BEM:</p>
        <ul class="text-[10px] space-y-1 list-disc ml-4">
          <li>Bloco principal: <code>profile</code></li>
          <li>Modificador do bloco: <code>profile--highlighted</code></li>
          <li>Imagem: <code>profile__avatar</code></li>
          <li>Nome: <code>profile__name</code></li>
          <li>Botão: <code>profile__button</code></li>
        </ul>
      </div>
    </div>
  `,
  objectives: [
    {
      id: "block_name",
      description: "Usar o nome de bloco 'profile' na div principal.",
      test: "class=\"profile"
    },
    {
      id: "modifier_name",
      description: "Usar o modificador 'profile--highlighted'.",
      test: "profile--highlighted"
    },
    {
      id: "element_name",
      description: "Usar o elemento 'profile__avatar' na imagem.",
      test: "profile__avatar"
    },
    {
      id: "css_refactor",
      description: "Atualizar o seletor no CSS para '.profile--highlighted'.",
      test: ".profile--highlighted"
    }
  ]
};
