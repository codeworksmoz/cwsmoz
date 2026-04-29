import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p16",
  language: "html",
  title: "Projeto Master: Encapsulamento com Shadow DOM",
  description: "Isole os estilos do seu componente de forma definitiva.",
  statement: "Implemente a criação da raiz de sombra no seu Custom Element.",
  isProjectPart: true,
  template: `<script>
  class CwmUser extends HTMLElement {
    constructor() {
      super();
      // Ação 1: Anexe o shadow root aqui
    }
  }
  customElements.define('cwm-user', CwmUser);
</script>`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🔨 Passo a Passo: O Escudo</h3>
      <p class="text-sm">Proteja o seu componente contra o CSS externo:</p>
      <div class="bg-black/40 p-4 rounded-xl border border-white/10 font-mono text-[11px] leading-relaxed">
        <p><strong>Ação 1:</strong> Use <code>this.attachShadow({ mode: 'open' });</code> no construtor.</p>
      </div>
    </div>
  `,
  objectives: [
    { id: "attach_shadow", description: "Chamar attachShadow()", test: "attachShadow" },
    { id: "mode_open", description: "Definir modo como 'open'", test: "mode: 'open'" }
  ]
};