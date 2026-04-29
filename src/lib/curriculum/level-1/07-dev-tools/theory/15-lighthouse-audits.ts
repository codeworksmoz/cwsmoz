import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "dt-t15",
  title: "Lighthouse: Auditorias de Qualidade e SEO Industrial",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🔦 O Farol da Web
        </h2>
        <p class="text-lg"><strong>Lighthouse</strong> é uma ferramenta automática e open-source para melhorar a qualidade das páginas web. Ela audita performance, acessibilidade, SEO e melhores práticas de segurança.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">1. Lendo o Relatório</h3>
        <p class="text-sm">Um site de elite deve ter pontuação 90+ em todas as categorias. O Lighthouse diz-te exatamente qual imagem precisa de ser comprimida ou qual botão não tem label de acessibilidade.</p>
        
        <h3 class="text-xl font-bold font-headline text-accent">2. User Flows (Fluxos do Utilizador)</h3>
        <p class="text-sm">As versões mais recentes permitem auditar a performance durante o uso real (ex: adicionar item ao carrinho), e não apenas no carregamento inicial da página.</p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 mt-6">
          <h4 class="font-bold text-indigo-400 mb-2">💎 Auditoria no CI</h4>
          <p class="text-sm leading-relaxed">Engenheiros Master integram o <strong>Lighthouse CI</strong> no GitHub. Se uma mudança de código baixar a performance do site em mais de 5%, o deploy é bloqueado automaticamente.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "dt-q15"
};