import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "se-t6",
  title: "User Stories & Critério INVEST: A Decomposição de Valor",
  youtubeVideoId: "v4cd1O4zkGw",
  quizId: "se-q6-master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          📖 Além da Documentação: Narrativas de Valor
        </h2>
        <p class="text-lg leading-relaxed">
          Uma <strong>User Story</strong> não é um requisito técnico tradicional. É uma descrição leve de uma funcionalidade do ponto de vista do utilizador final. No nível Master, entendemos que a história é um "convite para uma conversa", focando no <strong>quem</strong>, no <strong>o quê</strong> e no <strong>porquê</strong>.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Os 3 C's de Ron Jeffries</h3>
        <p class="text-sm">Para ser eficaz, uma User Story deve passar por três fases:</p>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="p-4 bg-card border rounded-xl border-white/5 hover:border-accent/50 transition-colors">
            <h4 class="font-bold text-accent mb-2">Card (Cartão)</h4>
            <p class="text-[10px] text-muted-foreground leading-relaxed">
              O registo físico (ou digital) da necessidade. Deve ser curto o suficiente para caber num post-it, forçando a brevidade.
            </p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5 hover:border-accent/50 transition-colors">
            <h4 class="font-bold text-accent mb-2">Conversation</h4>
            <p class="text-[10px] text-muted-foreground leading-relaxed">
              O momento em que Developers e PO discutem os detalhes, trade-offs e limitações técnicas daquela história.
            </p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5 hover:border-accent/50 transition-colors">
            <h4 class="font-bold text-accent mb-2">Confirmation</h4>
            <p class="text-[10px] text-muted-foreground leading-relaxed">
              Onde se definem os <b>Critérios de Aceitação</b>. É o contrato que diz: "Se o sistema fizer isto, a história está concluída".
            </p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 text-primary">2. O Filtro de Qualidade: Critério INVEST</h3>
        <p class="text-sm mb-4">Um Engenheiro Master não aceita histórias no Sprint que não cumpram o critério INVEST:</p>
        <ul class="space-y-4">
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl border border-white/5">
            <span class="font-bold text-xl text-accent w-8">I</span>
            <div>
              <p class="font-bold text-sm">Independent (Independente):</p>
              <p class="text-xs text-muted-foreground">Histórias não devem ter dependências fortes entre si. Isto permite ao PO re-priorizar o backlog sem causar um efeito dominó.</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl border border-white/5">
            <span class="font-bold text-xl text-accent w-8">N</span>
            <div>
              <p class="font-bold text-sm">Negotiable (Negociável):</p>
              <p class="text-xs text-muted-foreground">A história não é um contrato imutável. Os detalhes técnicos podem e devem ser negociados entre a equipa e o PO.</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl border border-white/5">
            <span class="font-bold text-xl text-accent w-8">V</span>
            <div>
              <p class="font-bold text-sm">Valuable (Valiosa):</p>
              <p class="text-xs text-muted-foreground">Deve entregar valor visível para o utilizador ou para o negócio. Histórias puramente técnicas (ex: "Criar Tabela X") devem ser evitadas ou convertidas em valor.</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl border border-white/5">
            <span class="font-bold text-xl text-accent w-8">E</span>
            <div>
              <p class="font-bold text-sm">Estimable (Estimável):</p>
              <p class="text-xs text-muted-foreground">Se a equipa não consegue estimar o esforço, a história está mal definida ou é demasiado grande.</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl border border-white/5">
            <span class="font-bold text-xl text-accent w-8">S</span>
            <div>
              <p class="font-bold text-sm">Small (Pequena):</p>
              <p class="text-xs text-muted-foreground">Deve caber dentro de um Sprint. Se for demasiado grande, é um <strong>Epic</strong> e deve ser dividida.</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl border border-white/5">
            <span class="font-bold text-xl text-accent w-8">T</span>
            <div>
              <p class="font-bold text-sm">Testable (Testável):</p>
              <p class="text-xs text-muted-foreground">Deve haver uma forma clara de provar que a história funciona através de testes automatizados ou manuais.</p>
            </div>
          </li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">✅ Escrita de Critérios de Aceitação</h3>
          <p class="text-sm mb-4">Para garantir a testabilidade, usamos frequentemente o formato BDD (Behavior Driven Development):</p>
          <div class="bg-black/40 p-4 rounded-xl font-mono text-[10px] space-y-1 text-green-400">
            <p><span class="text-white">GIVEN (DADO)</span> que sou um utilizador logado com saldo insuficiente</p>
            <p><span class="text-white">WHEN (QUANDO)</span> tento realizar uma transferência para um terceiro</p>
            <p><span class="text-white">THEN (ENTÃO)</span> o sistema deve exibir a mensagem "Saldo insuficiente" E bloquear a transação.</p>
          </div>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Visão Master: Decomposição de Epics
          </h4>
          <p class="text-sm leading-relaxed">
            Se uma história é demasiado grande, um engenheiro master aplica padrões de quebra: por fluxo de trabalho, por tipo de dados, por regras de negócio ou por caminhos de erro. O objetivo é manter o fluxo de entrega (Throughput) constante e previsível.
          </p>
        </div>
      </div>
    </div>
  `
};
