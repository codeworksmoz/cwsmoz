import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "des-p3",
  language: "typescript",
  title: "Laboratório Master: Factory Method Pattern",
  description: "Crie instâncias de objetos sem expor a lógica de criação ao cliente.",
  statement: "Implemente a classe 'NotificationFactory' que retorna a instância correta de 'Email' ou 'SMS' baseada no tipo fornecido.",
  isProjectPart: true,
  template: `// INTERFACES BASE
interface Notification {
    send(message: string): void;
}

class EmailNotification implements Notification {
    send(message: string) { console.log("Email: " + message); }
}

class SMSNotification implements Notification {
    send(message: string) { console.log("SMS: " + message); }
}

// ARQUITETURA MASTER (Implemente a Factory abaixo):
class NotificationFactory {
    static createNotification(type: string): Notification {
        // Implemente a lógica de decisão aqui
        if (type === "email") {
            return new EmailNotification();
        } else {
            return new SMSNotification();
        }
    }
}`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🏭 O Poder da Fábrica</h3>
      <p>O padrão <strong>Factory Method</strong> permite que o resto do sistema peça uma "Notificação" sem precisar de saber se ela é um Email, SMS ou WhatsApp. Isto remove o <code>new</code> espalhado pelo código, centralizando a criação num único ponto.</p>
      <div class="bg-muted p-4 rounded-xl border border-primary/20">
        <p class="text-xs font-bold text-yellow-500">Missão Técnica:</p>
        <p class="text-[10px] text-muted-foreground leading-relaxed">
          O teu objetivo é completar o método estático <code>createNotification</code>. Se o tipo for "email", retorna uma nova instância de <code>EmailNotification</code>. Caso contrário, retorna <code>SMSNotification</code>.
        </p>
      </div>
    </div>
  `,
  objectives: [
    {
      id: "factory_logic",
      description: "Implementar a lógica condicional dentro da Factory.",
      test: "if (type ==="
    },
    {
      id: "return_email",
      description: "Retornar nova instância de EmailNotification.",
      test: "new EmailNotification()"
    },
    {
      id: "return_sms",
      description: "Retornar nova instância de SMSNotification no else.",
      test: "new SMSNotification()"
    }
  ]
};