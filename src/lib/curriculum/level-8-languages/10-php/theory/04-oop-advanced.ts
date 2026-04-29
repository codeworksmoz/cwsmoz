
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-m4",
  title: "Fase 1: Enums e Algebraic Data Types no PHP 8",
  quizId: "php-mq4",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          💎 Tipagem de Próxima Geração
        </h2>
        <p class="text-lg leading-relaxed">
          O PHP moderno deixou de ser uma linguagem de strings mágicas. Com os <strong>Enums</strong>, podemos modelar o domínio de negócio com segurança matemática, permitindo que o motor verifique a validade dos estados em tempo de execução.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">1. Backed Enums</h3>
        <p class="text-sm">Enums podem estar associados a valores escalares (string ou int), ideais para persistência em base de dados.</p>
        <pre><code class="language-php">
enum Status: string {
    case Pending = 'P';
    case Active = 'A';
    case Suspended = 'S';
}
        </code></pre>

        <h3 class="text-xl font-bold font-headline">2. Enums com Métodos</h3>
        <p class="text-sm">No PHP, Enums são objetos poderosos que podem implementar interfaces e possuir métodos internos para calcular lógica de estado.</p>
        
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h4 class="font-bold text-indigo-400 mb-2">🚀 Visão Master: Pattern Matching</h4>
          <p class="text-sm leading-relaxed">
            Ao combinar Enums com a expressão <code>match</code>, você cria um código 100% resiliente. Se um novo caso for adicionado ao Enum e você esquecer de o tratar no match, o PHP lançará um erro imediato, prevenindo falhas silenciosas.
          </p>
        </div>
      </div>
    </div>
  `
};
