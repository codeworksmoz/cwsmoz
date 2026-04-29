
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "js-m21",
  title: "Capstone Milestone: Full Stack JS e Arquitetura",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl text-center">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🎓 O Ápice da Engenharia</h2>
        <p class="text-lg">Chegaste ao fim da trilha JavaScript Master. Agora vais consolidar tudo: do motor V8 às APIs de hardware, criando uma aplicação resiliente e segura.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">Checklist de Produção de Elite</h3>
        <ul class="grid md:grid-cols-2 gap-4">
          <li class="bg-card p-4 rounded-xl border border-white/5">
            <strong>Segurança:</strong> CSP Ativa, Sanitização de inputs e Web Crypto para dados sensíveis.
          </li>
          <li class="bg-card p-4 rounded-xl border border-white/5">
            <strong>Performance:</strong> Zero Memory Leaks, Web Workers para lógica pesada e Debounce em eventos críticos.
          </li>
          <li class="bg-card p-4 rounded-xl border border-white/5">
            <strong>Arquitetura:</strong> ESM puro, Custom Events para desacoplamento e Shadow DOM para UI isolada.
          </li>
          <li class="bg-card p-4 rounded-xl border border-white/5">
            <strong>UX:</strong> Offline support com Service Workers e I18n via Intl API.
          </li>
        </ul>
        
        <div class="bg-yellow-500/5 p-6 rounded-2xl border border-yellow-500/20 text-center">
           <h4 class="font-bold text-yellow-500 text-2xl mb-2">Pronto para o Próximo Nível?</h4>
           <p class="text-sm">A engenharia não termina aqui. O teu Projeto Master é agora um testemunho da tua capacidade técnica global.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "js-mq21"
};
