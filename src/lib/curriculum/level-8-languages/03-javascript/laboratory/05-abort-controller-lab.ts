import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "js-p5",
  language: "html",
  title: "Projeto Master: AbortController e Cancelamento",
  description: "Gerencie pedidos de rede pendentes de forma profissional.",
  statement: "Crie um AbortController e associe o seu sinal a um pedido fetch.",
  isProjectPart: true,
  template: `// No seu script master
async function fetchData() {
    // Crie o controller e execute o fetch com o sinal
}`,
  detailedExplanation: `
    <h3>🛑 Controlo de Fluxo</h3>
    <p>O <code>AbortController</code> permite cancelar operações assíncronas (como pedidos à API) se o utilizador navegar para outra página ou clicar num botão de cancelamento, poupando bateria e dados.</p>
  `,
  objectives: [
    {
      id: "abort_instance",
      description: "Instancie o AbortController.",
      hint: "const controller = new AbortController();",
      test: "new AbortController"
    },
    {
      id: "fetch_signal",
      description: "Passe o signal no objeto de configuração do fetch.",
      hint: "fetch(url, { signal: controller.signal })",
      test: "signal: "
    }
  ]
};
