
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "js-p4",
  language: "html",
  title: "Projeto Master: AbortController e Cancelamento de Rede",
  description: "Gerencie recursos e evite memory leaks cancelando pedidos pendentes.",
  statement: "Implemente um controlador de cancelamento e ligue-o a um pedido fetch simulado.",
  isProjectPart: true,
  template: `<!DOCTYPE html>
<html lang="pt-MZ">
<body>
  <button id="cancel-btn">Cancelar Download</button>
  <script>
    // Ação 1: Instancie o AbortController
    const controller = new AbortController();

    // Ação 2: Execute um fetch passando o 'signal'
    fetch('https://api.cwm.mz/heavy-data', { signal: controller.signal })
      .catch(err => console.log("Pedido cancelado com sucesso!"));

    // Ação 3: Adicione o clique para abortar
    document.getElementById('cancel-btn').onclick = () => {
      controller.abort();
    };
  </script>
</body>
</html>`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🛑 Controlo de Fluxo Assíncrono</h3>
      <p class="text-sm">O <code>AbortController</code> permite parar operações de rede ou eventos que já não são necessários (ex: o utilizador mudou de página), economizando bateria e dados do utilizador.</p>
    </div>
  `,
  objectives: [
    { id: "abort_obj", description: "Criar instância de AbortController", test: "new AbortController()" },
    { id: "signal_link", description: "Passar o signal no fetch", test: "signal: controller.signal" },
    { id: "abort_call", description: "Chamar o método abort()", test: ".abort()" }
  ]
};
