import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p15",
  language: "html",
  title: "Projeto Master: Templates e Custom Elements",
  description: "Crie a base para componentes reutilizáveis nativos.",
  statement: "Defina o blueprint de um card de usuário no seu HTML.",
  isProjectPart: true,
  youtubeVideoId: "8ME9u065vD4",
  template: `<!DOCTYPE html>
<html>
  <body>
    <!-- Ação 1: Adicione o template aqui -->
  </body>
</html>`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🔨 Passo a Passo: Componentização</h3>
      <p class="text-sm">Defina o molde inerte do componente:</p>
      <div class="bg-black/40 p-4 rounded-xl border border-white/10 font-mono text-[11px] leading-relaxed">
        <p><strong>Ação 1:</strong> Use <code>&lt;template id="user-card"&gt;</code>.</p>
        <p><strong>Ação 2:</strong> Dentro, use <code>&lt;div class="card"&gt;&lt;slot name="username"&gt;&lt;/slot&gt;&lt;/div&gt;</code>.</p>
      </div>
    </div>
  `,
  objectives: [
    { id: "template_tag", description: "Usar tag <template>", test: "<template" },
    { id: "slot_tag", description: "Usar tag <slot> com nome", test: "slot name=" }
  ]
};