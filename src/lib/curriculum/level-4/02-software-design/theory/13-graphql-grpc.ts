
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "des-t13",
  title: "GraphQL vs gRPC: Protocolos de Próxima Geração",
  quizId: "des-q13-master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🔌 Além do REST Tradicional</h2>
        <p class="text-lg leading-relaxed">Quando o volume de dados e a performance de rede tornam-se críticos, o Engenheiro Master escolhe ferramentas especializadas para o transporte.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-xl">
          <h4 class="font-bold text-accent mb-2">GraphQL (Flexibilidade)</h4>
          <p class="text-xs">O cliente pede exatamente o que precisa. Elimina o <i>Over-fetching</i> e permite obter dados de múltiplas fontes num único request. Ideal para Frontends complexos.</p>
        </div>
        <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-xl">
          <h4 class="font-bold text-accent mb-2">gRPC (Performance)</h4>
          <p class="text-xs">Baseado em HTTP/2 e Protocol Buffers (binário). Latência ultra-baixa e tipagem forte. O padrão ouro para comunicação interna entre microserviços.</p>
        </div>
      </div>
    </div>
  `
};
