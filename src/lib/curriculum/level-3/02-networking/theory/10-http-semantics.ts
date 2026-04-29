import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "net-t10",
  title: "HTTP Semantics: Verbos, Headers e Caching",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">📱 A Camada de Aplicação</h2>
        <p class="text-lg leading-relaxed">O HTTP evoluiu de um simples protocolo de transferência de texto para a base de todas as APIs modernas. Entender a sua semântica é vital para criar sistemas RESTful e performáticos.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">1. Idempotência e Segurança</h3>
        <ul class="grid md:grid-cols-2 gap-4 text-xs">
          <li class="p-3 bg-card border rounded"><strong>GET:</strong> Seguro e Idempotente. Não deve mudar o estado do servidor.</li>
          <li class="p-3 bg-card border rounded"><strong>POST:</strong> Não Idempotente. Cria novos recursos.</li>
          <li class="p-3 bg-card border rounded"><strong>PUT/DELETE:</strong> Idempotentes. Múltiplas chamadas têm o mesmo efeito que uma.</li>
        </ul>

        <h3 class="text-xl font-bold font-headline text-accent">2. Headers de Controlo de Cache</h3>
        <p class="text-sm">Um engenheiro master sabe que a internet mais rápida é aquela que não precisa de ser pedida. O uso correto de <code>ETag</code> e <code>Cache-Control</code> permite que o browser reutilize dados locais, reduzindo a carga no servidor.</p>
        
        <div class="bg-black/40 p-4 rounded-xl border font-code text-xs text-green-400">
          Cache-Control: public, max-age=31536000, immutable
        </div>
      </div>
    </div>
  `,
  quizId: "net-mq10"
};
