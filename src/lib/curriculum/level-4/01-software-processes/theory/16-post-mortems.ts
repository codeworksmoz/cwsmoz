import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "se-t16",
  title: "Post-mortems Master: Transformando Falhas em Imunidade Técnica",
  quizId: "se-q16-master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🧠 O Aprendizado após a Crise
        </h2>
        <p class="text-lg leading-relaxed">
          Um <strong>Post-mortem</strong> (ou Revisão Pós-Incidente) é o processo de analisar um incidente após a sua mitigação para entender o que aconteceu, por que aconteceu e como garantir que nunca mais se repita. No nível Master, o post-mortem não busca culpados, mas sim falhas no design do sistema e do processo.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 text-primary">1. Blame-free Culture (Cultura Sem Culpa)</h3>
        <p class="text-sm leading-relaxed">
          Este é o pilar mais importante do SRE e DevOps de elite. Se punires um engenheiro por um erro, a equipa passará a esconder falhas.
          <br/><br/>
          <strong>Princípio Master:</strong> Assumimos que todos os engenheiros agiram com a melhor intenção com os dados que tinham no momento. Se um erro ocorreu, foi porque o sistema (testes, automação, barreiras) permitiu que o erro acontecesse. O foco é consertar o sistema, não a pessoa.
        </p>

        <h3 class="text-xl font-bold font-headline">2. Root Cause Analysis (RCA) e os 5 Porquês</h3>
        <p class="text-sm mb-4">Para encontrar a causa real (não o sintoma), usamos a técnica dos <strong>5 Porquês</strong>:</p>
        <div class="bg-black/40 p-5 rounded-xl border border-indigo-500/20 shadow-inner space-y-2">
          <p class="text-xs">1. <span class="text-accent">Porquê?</span> O site caiu. (Sintoma)</p>
          <p class="text-xs">2. <span class="text-accent">Porquê?</span> A base de dados esgotou as conexões.</p>
          <p class="text-xs">3. <span class="text-accent">Porquê?</span> Uma query nova estava muito lenta e bloqueou o pool.</p>
          <p class="text-xs">4. <span class="text-accent">Porquê?</span> A query não tinha o índice correto.</p>
          <p class="text-xs">5. <span class="text-accent">Porquê?</span> O processo de Code Review não exigiu o plano de execução da query. <span class="text-green-400 font-bold">(Causa Raiz do Processo!)</span></p>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 text-primary">3. Anatomia do Relatório Master</h3>
        <ul class="space-y-3">
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent">Timeline:</strong> O rasto exato com timestamps (ex: 10:05 Deteção, 10:12 Início da mitigação).
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent">Impacto:</strong> Quantos utilizadores foram afetados? Qual a perda financeira real?
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent">Action Items (Lições):</strong> Tarefas concretas (tickets no Jira) para melhorar o sistema. Devem ser <strong>S.M.A.R.T.</strong> e focadas em automação.
          </li>
        </ul>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6 shadow-inner">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Imunidade Organizacional
          </h4>
          <p class="text-sm leading-relaxed">
            Um post-mortem só é útil se for partilhado. Empresas como o Google e a Netflix publicam relatórios técnicos internamente (e às vezes externamente) para que outros engenheiros aprendam com os erros dos outros, criando uma biblioteca de vacinas técnicas para o sistema.
          </p>
        </div>
      </div>
    </div>
  `
};