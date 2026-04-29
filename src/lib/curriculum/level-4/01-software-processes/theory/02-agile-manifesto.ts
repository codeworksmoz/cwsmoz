import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "se-t2",
  title: "Manifesto Ágil: Engenharia, Valores e Excelência Técnica",
  youtubeVideoId: "v4cd1O4zkGw",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🏃 Além do Post-it: A Lógica Ágil
        </h2>
        <p class="text-lg leading-relaxed">
          O <strong>Manifesto Ágil</strong>, criado em 2001, não é um método de trabalho, mas um sistema de valores. Para um Engenheiro Master, agilidade significa reduzir o ciclo de feedback para mitigar riscos em ambientes de alta incerteza.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Os 4 Pilares da Agilidade Real</h3>
        <p class="text-sm">O manifesto valoriza os itens à esquerda <b>mais do que</b> os itens à direita (que continuam a ter valor, mas não são a prioridade):</p>
        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block mb-1">Indivíduos e Interações > Processos e Ferramentas:</strong> De nada serve o Jira mais caro do mundo se a equipa não comunica. A solução nasce da conversa, não da ferramenta.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block mb-1">Software em Funcionamento > Documentação Abrangente:</strong> O código entregue é a única métrica de progresso real. Documentação é vital, mas deve ser útil e enxuta, não um bloqueio.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block mb-1">Colaboração com o Cliente > Negociação de Contratos:</strong> O mercado muda. Um contrato rígido pode forçar a entrega de algo que o cliente já não precisa. Agilidade é parceria.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block mb-1">Responder a Mudanças > Seguir um Plano:</strong> O plano é uma bússola, não um trilho de comboio. A capacidade de pivotar perante novos dados é a vantagem competitiva da elite.
          </li>
        </ul>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 text-primary">2. O Princípio Esquecido: Excelência Técnica</h3>
        <p class="text-sm leading-relaxed">
          O 9º princípio do manifesto diz: <i>"A atenção contínua à excelência técnica e ao bom design aumenta a agilidade."</i>
          <br/><br/>
          Engenheiros amadores acham que ser ágil é "fazer rápido e sujo". O Engenheiro Master sabe que, sem <strong>Clean Code</strong> e <strong>Testes Automatizados</strong>, a dívida técnica acumulada impedirá a equipa de ser ágil no futuro.
        </p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">💎 Ritmo Sustentável</h3>
          <p class="text-sm leading-relaxed">
            Agilidade não é sobre correr uma maratona à velocidade de um sprint. O 8º princípio defende que promotores, desenvolvedores e utilizadores devem ser capazes de manter um ritmo constante indefinidamente. O heroísmo e as noites sem dormir são sinais de falha no processo, não de produtividade.
          </p>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Visão Master: Agilidade Baseada em Evidências
          </h4>
          <p class="text-sm leading-relaxed">
            A agilidade real exige coragem para admitir que o plano original estava errado e inteligência para usar o feedback do utilizador para corrigir a rota. No nível Master, usamos métricas como <strong>Cycle Time</strong> e <strong>Throughput</strong> para medir a saúde da nossa agilidade.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "se-q2-master"
};
