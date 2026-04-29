import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "des-p1",
  language: "typescript",
  title: "Laboratório: Refatoração SRP (Single Responsibility)",
  description: "Desmonte uma 'God Class' em componentes coesos.",
  statement: "Refatorize a classe 'Order' extraindo a lógica de persistência e notificação para interfaces separadas.",
  isProjectPart: true,
  template: `// CÓDIGO A SER REFATORADO (Viola SRP)
class Order {
    constructor(public id: string, public items: any[]) {}

    calculateTotal() { /* ... */ }
    
    // ESTA LÓGICA NÃO PERTENCE À ORDEM:
    saveToDatabase() { console.log("Salvando..."); }
    sendEmailConfirmation() { console.log("Enviando..."); }
}

// ARQUITETURA DE ELITE (Implemente abaixo):
interface Repository { save(data: any): void; }
interface Notifier { send(msg: string): void; }

class OrderProcessor {
    constructor(
        private repo: Repository,
        private notifier: Notifier
    ) {}

    process(order: Order) {
        this.repo.save(order);
        this.notifier.send("Ordem concluída");
    }
}`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🏗️ Desconstruindo Classes Gigantes</h3>
      <p>O princípio <strong>SRP</strong> diz que uma classe deve ter apenas um motivo para mudar. Se mudarmos a base de dados, a classe <code>Order</code> não deveria ser alterada.</p>
      <div class="bg-muted p-4 rounded-xl border border-primary/20">
        <p class="text-xs font-bold text-yellow-500">Missão Técnica:</p>
        <p class="text-[10px] text-muted-foreground leading-relaxed">
          Utiliza <strong>Injeção de Dependência</strong>. Em vez de a classe fazer tudo, ela recebe "ajudantes" (Repository e Notifier) que realizam as tarefas especializadas. Isto torna o sistema 100% testável e modular.
        </p>
      </div>
    </div>
  `,
  objectives: [
    {
      id: "di_constructor",
      description: "Utilize o construtor para injetar as interfaces repo e notifier.",
      test: "private repo: Repository"
    },
    {
      id: "call_save",
      description: "Chame o método save do repositório no process.",
      test: "this.repo.save("
    },
    {
      id: "call_send",
      description: "Chame o método send do notifier no process.",
      test: "this.notifier.send("
    }
  ]
};
