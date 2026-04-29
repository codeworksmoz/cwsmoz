import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "jv-m4",
  title: "Fase 1: Java Moderno: OOP Avançada, Records e Sealed Classes",
  enableInteractive: true,
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          📦 O Fim do Boilerplate Financeiro
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O Java moderno (17 e 21) introduziu mudanças profundas na forma como modelamos domínios complexos. O foco mudou de classes mutáveis e complexas para a <strong>Programação Orientada a Dados</strong>, utilizando imutabilidade nativa e hierarquias fechadas para garantir segurança em tempo de compilação.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Java Records (JEP 395)</h3>
        <p class="text-sm">Records são classes que servem apenas para transportar dados imutáveis. O compilador gera automaticamente: construtor canónico, acessores (sem prefixo get), equals, hashCode e toString.</p>
        <div class="bg-black/40 p-6 rounded-xl border font-code text-sm text-accent shadow-inner">
          <pre><code class="language-java">
// Imutável, transparente e performático
public record Transaction(String id, double amount, String currency) {
    // Construtor compacto para validação de negócio
    public Transaction {
        if (amount < 0) throw new IllegalArgumentException("Valor negativo proibido");
    }
}
          </code></pre>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Sealed Classes e Interfaces (JEP 409)</h3>
        <p class="text-sm leading-relaxed">
          Permitem restringir quais classes podem estender uma classe pai. Isto cria uma hierarquia fechada, permitindo que o compilador valide se todos os casos de um <code>switch</code> foram tratados, eliminando a necessidade de blocos 'default' genéricos.
        </p>
        <pre><code class="language-java">
public sealed interface PaymentMethod permits CreditCard, Pix, BankTransfer { }

public final class Pix implements PaymentMethod { /* ... */ }
public final class CreditCard implements PaymentMethod { /* ... */ }
// Ninguém mais pode implementar PaymentMethod sem permissão!
        </code></pre>
      </section>

      <section class="bg-indigo-500/10 p-8 rounded-[2.5rem] border border-indigo-500/20 shadow-inner">
        <h4 class="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
          🚀 Pattern Matching para Switch
        </h4>
        <p class="text-sm leading-relaxed">
          Em nível Master, usamos o <strong>Pattern Matching</strong> para lidar com estas hierarquias. O código torna-se muito mais limpo e seguro contra erros de cast.
        </p>
        <pre><code class="language-java">
static String getProcessInfo(PaymentMethod pm) {
    return switch (pm) {
        case Pix p -> "Chave Pix: " + p.getKey();
        case CreditCard c -> "Cartão: " + c.getNumber();
        case BankTransfer b -> "Agência: " + b.getAgency();
    };
}
        </code></pre>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Regra do Engenheiro Master</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Em sistemas de Core Banking, a mutabilidade é o inimigo. Utilize Records para estados e Sealed Classes para tipos de conta. Se o compilador puder provar a correção do seu domínio, o seu sistema será imune a classes inteiras de bugs financeiros."
        </p>
      </section>
    </div>
  `
};
