import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "se-t15",
  title: "Gestão de Incidentes: Resposta a Crises e Engenharia de Resiliência",
  quizId: "se-q15-master",
  content: `
    <div class="space-y-8">
      <div class="bg-red-500/5 p-6 rounded-2xl border border-red-500/20 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-red-400 flex items-center gap-2">
          🚨 O Código Sob Ataque
        </h2>
        <p class="text-lg leading-relaxed">
          Um incidente é qualquer evento que cause a degradação ou interrupção de um serviço. No nível Master, a gestão de incidentes não é um ato heroico desordenado, mas uma <strong>operação militar disciplinada</strong> focada em reduzir o MTTR (Mean Time To Recovery).
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Severidade: O Triagem do Caos</h3>
        <p class="text-sm">Nem todos os erros são iguais. Engenheiros de elite classificam incidentes para priorizar recursos:</p>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-red-600/10 border border-red-600/30 rounded-xl">
            <h4 class="font-bold text-red-400 mb-1">P0 - Crítico</h4>
            <p class="text-[10px] opacity-70">Sistema totalmente offline. Perda de dados em curso. Impacto financeiro imediato.</p>
          </div>
          <div class="p-4 bg-orange-600/10 border border-orange-600/30 rounded-xl">
            <h4 class="font-bold text-orange-400 mb-1">P1 - Alta</h4>
            <p class="text-[10px] opacity-70">Funcionalidade principal quebrada para muitos utilizadores. Sem workaround óbvio.</p>
          </div>
          <div class="p-4 bg-yellow-600/10 border border-yellow-600/30 rounded-xl">
            <h4 class="font-bold text-yellow-400 mb-1">P2 - Média</h4>
            <p class="text-[10px] opacity-70">Impacto parcial. Existe um caminho alternativo para o utilizador.</p>
          </div>
          <div class="p-4 bg-blue-600/10 border border-blue-600/30 rounded-xl">
            <h4 class="font-bold text-blue-400 mb-1">P3/P4 - Baixa</h4>
            <p class="text-[10px] opacity-70">Bugs visuais ou problemas que não impedem o uso do sistema.</p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 text-primary">2. A Estrutura de Comando</h3>
        <p class="text-sm leading-relaxed">
          Durante uma crise, a democracia acaba. O papel mais importante é o <strong>Incident Commander (IC)</strong>.
          <br/><br/>
          O IC não escreve código nem fixa o bug. O IC <strong>coordena</strong>: decide quem investiga, quem comunica com o cliente e quem toma as decisões finais de Rollback. O objetivo é remover a carga mental dos desenvolvedores para que eles se foquem apenas na solução técnica.
        </p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🔄 O Ciclo de Resposta</h3>
          <ol class="space-y-3 font-mono text-[11px] uppercase">
            <li><span class="text-accent font-bold">1. Deteção:</span> Alerta via monitorização automática (PagerDuty/Datadog).</li>
            <li><span class="text-accent font-bold">2. Triage:</span> Confirmar o problema e definir a Severidade.</li>
            <li><span class="text-accent font-bold">3. Mitigação:</span> Parar o sangramento (ex: Rollback, desativar funcionalidade).</li>
            <li><span class="text-accent font-bold">4. Resolução:</span> Corrigir a causa raiz permanentemente.</li>
            <li><span class="text-accent font-bold">5. Post-mortem:</span> Documentar e aprender.</li>
          </ol>
        </div>

        <h3 class="text-xl font-bold font-headline">3. Comunicação Estratégica</h3>
        <p class="text-sm">Um silêncio ruidoso aumenta o pânico. Um engenheiro profissional gere dois canais:</p>
        <ul class="list-disc ml-6 space-y-2 text-xs text-muted-foreground">
          <li><strong>Interno:</strong> Ponte de rádio técnica (Slack/Meet) exclusiva para quem está a resolver o problema.</li>
          <li><strong>Externo:</strong> Status Page para os utilizadores. "Estamos cientes e a trabalhar na solução" gera confiança e reduz tickets de suporte.</li>
        </ul>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6 shadow-inner">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Dica de Senioridade: Mitigar vs Resolver
          </h4>
          <p class="text-sm leading-relaxed">
            Num incidente P0, o teu objetivo NÃO é resolver o bug. O teu objetivo é <strong>Mitigar</strong> (trazer o sistema de volta). Se o deploy de ontem causou o erro, faz <i>Rollback</i> imediatamente. Não tentes fazer o <i>Fix</i> no meio da crise. Primeiro recupera a saúde, depois opera o paciente.
          </p>
        </div>
      </div>
    </div>
  `
};
