import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "jv-p10",
  language: "java",
  title: "Projeto Master Java: Project Reactor e Live Feeds",
  description: "Crie um fluxo reativo de atualizações de saldo em tempo real.",
  statement: "Utilize a classe 'Flux' para emitir uma sequência de 5 transações fictícias.",
  isProjectPart: true,
  template: `import reactor.core.publisher.Flux;

public class FeedService {
    public Flux<String> getLiveTransactions() {
        // Emita 5 mensagens de log
        return null;
    }
}`,
  detailedExplanation: `
    <h3>🌊 Fluxos Reativos</h3>
    <p>O Project Reactor é a base do Spring WebFlux. Ele permite lidar com streams de dados infinitos (como cotações de câmbio) com backpressure, garantindo que o sistema não seja sobrecarregado.</p>
  `,
  objectives: [
    {
      id: "flux_just",
      description: "Utilize Flux.just() ou Flux.fromIterable().",
      test: "Flux."
    }
  ]
};