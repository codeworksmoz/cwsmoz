import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "js-p12",
  language: "html",
  title: "Projeto Master: Gestão de Estado de Navegação",
  description: "Implemente uma navegação fluida sem recarregar a página.",
  statement: "Utilize history.pushState para atualizar a URL do browser quando o utilizador mudar de secção no projeto.",
  isProjectPart: true,
  template: `function navigateTo(section) {
    const state = { section };
    const title = 'Codworks - ' + section;
    const url = '/' + section;
    // Atualize o histórico aqui
}`,
  detailedExplanation: `
    <h3>🛤️ Single Page Routing</h3>
    <p>A <strong>History API</strong> é a base de todos os routers modernos (como o do React ou Next.js). Ela permite que alteres a URL e guardes estados de navegação sem disparar um pedido de rede, criando a experiência de aplicação "nativa".</p>
  `,
  objectives: [
    {
      id: "push_state",
      description: "Chame history.pushState(state, title, url).",
      test: "history.pushState"
    }
  ]
};
