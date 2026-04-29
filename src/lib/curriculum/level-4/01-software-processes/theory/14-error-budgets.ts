import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "se-t14",
  title: "Error Budgets e Gestão de SLOs: O Equilíbrio entre Risco e Inovação",
  quizId: "se-q14-master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          ⚖️ O Termómetro da Fiabilidade
        </h2>
        <p class="text-lg leading-relaxed">
          O <strong>Error Budget</strong> (Orçamento de Erro) é a ferramenta matemática que resolve o conflito eterno entre "lançar rápido" e "não deixar o sistema cair". Ele quantifica exatamente quanto risco o negócio pode assumir em troca de inovação acelerada.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. A Matemática do SLO (Service Level Objective)</h3>
        <p class="text-sm">Um SLO é um alvo numérico para um SLI (Indicator). Se o seu SLI é o uptime, o seu SLO pode ser 99.9%.</p>
        <div class="bg-black/40 p-6 rounded-xl border border-indigo-500/20 shadow-inner">
          <p class="text-xs font-bold text-indigo-400 mb-2">Cálculo do Error Budget:</p>
          <p class="text-lg font-mono text-center">Budget = 100% - SLO</p>
          <p class="text-xs mt-4 text-muted-foreground leading-relaxed">
            Num mês (30 dias), um SLO de <strong>99.9%</strong> dá-lhe um orçamento de <strong>43 minutos e 12 segundos</strong> de erro total. Se o sistema ficar fora do ar por 44 minutos, o seu orçamento acabou.
          </p>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 text-primary">2. Gestão por Consequências</h3>
        <p class="text-sm leading-relaxed">
          O Error Budget só tem valor se houver uma política de consequências rigorosa. O que acontece quando o orçamento chega a zero?
        </p>
        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block mb-1">Feature Freeze:</strong> Pára o desenvolvimento de novas funcionalidades. A equipa foca 100% em tarefas de fiabilidade, testes e automação até que o orçamento recupere no próximo ciclo.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block mb-1">Priorização de Resiliência:</strong> O backlog de débito técnico e bugs de infraestrutura torna-se a prioridade absoluta do Product Owner.
          </li>
        </ul>

        <div class="bg-yellow-500/5 p-6 rounded-2xl border border-yellow-500/20 mt-6 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-yellow-500 mb-4">🧩 Janelas de Medição (Rolling Windows)</h3>
          <p class="text-sm leading-relaxed mb-4">
            Engenheiros Master utilizam <strong>Janelas Móveis (ex: 28 dias)</strong>. Isto evita que o erro de "ontem" seja esquecido apenas porque o mês mudou, mantendo uma visão realista da saúde do sistema no tempo presente.
          </p>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Por que o Error Budget é libertador?
          </h4>
          <p class="text-sm leading-relaxed">
            Sem um budget, qualquer erro é uma crise e uma "culpa" do Dev. Com o budget, <strong>aceitamos que a falha faz parte do processo</strong>. O budget dá permissão à equipa para arriscar e inovar, desde que os limites de segurança (SLOs) sejam respeitados.
          </p>
        </div>
      </div>
    </div>
  `
};
