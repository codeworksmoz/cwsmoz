import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "se-t13",
  title: "SRE: Site Reliability Engineering e a Ciência da Fiabilidade",
  quizId: "se-q13-master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🚀 Engenharia na Operação
        </h2>
        <p class="text-lg leading-relaxed">
          O <strong>SRE (Site Reliability Engineering)</strong> é o que acontece quando pedes a um engenheiro de software para desenhar uma função de operações. Criado no Google, o SRE foca em tratar a infraestrutura como um problema de software, utilizando automação para gerir sistemas massivos de forma fiável.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. A Tríade da Medição: SLI, SLO e SLA</h3>
        <p class="text-sm">Para gerir a fiabilidade, precisamos de métricas matemáticas claras:</p>
        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block mb-1">SLI (Indicator):</strong> A métrica real. O que estamos a medir agora? <br/>Ex: "Latência média de resposta HTTP" ou "Taxa de erro 5xx".
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block mb-1">SLO (Objective):</strong> A meta interna da equipa. Qual o valor aceitável? <br/>Ex: "99.9% das respostas devem ter latência inferior a 200ms".
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block mb-1">SLA (Agreement):</strong> O contrato legal com o cliente. O que acontece se falharmos o SLO? <br/>Ex: "Se o uptime for inferior a 99.5%, o cliente recebe um reembolso de 10%".
          </li>
        </ul>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 text-primary">2. Error Budgets: O Equilíbrio entre Risco e Inovação</h3>
        <p class="text-sm leading-relaxed">
          O <strong>Error Budget</strong> (Orçamento de Erro) é a diferença entre 100% e o seu SLO (ex: se o SLO é 99.9%, o budget é 0.1%). 
          <br/><br/>
          Este budget define quanto o sistema pode "falhar" para que a equipa possa inovar. Se o budget está cheio, podemos fazer deploys arriscados. Se o budget acabou, o desenvolvimento de novas funcionalidades PARA e a equipa foca 100% em estabilidade.
        </p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🧹 Eliminando o Toil (Trabalho Enfadonho)</h3>
          <p class="text-sm mb-4">Um dos princípios do SRE é que o trabalho manual, repetitivo e sem valor estratégico (Toil) deve ser limitado a <strong>50% do tempo</strong> do engenheiro.</p>
          <p class="text-xs italic leading-relaxed opacity-70">
            Se passas o dia a reiniciar servidores manualmente, estás a fazer Toil. O SRE master escreve código (automação) para que o sistema se auto-recupere, libertando o seu tempo para engenharia de novos projetos.
          </p>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6 shadow-inner">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Visão de Elite: Observabilidade
          </h4>
          <p class="text-sm leading-relaxed">
            Diferente da monitorização simples (que te diz 'se' o sistema caiu), a <strong>Observabilidade</strong> permite-te entender 'porquê' ele caiu através de Logs, Métricas e Traces. O SRE utiliza estes dados para detetar anomalias antes que elas consumam o Error Budget.
          </p>
        </div>
      </div>
    </div>
  `
};
