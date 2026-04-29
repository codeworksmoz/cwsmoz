import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "se-t21",
  title: "Auditoria de Processo e Melhoria Contínua: O Selo de Elite",
  quizId: "se-q21-master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl text-center">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🎓 O Ápice da Maturidade Técnica</h2>
        <p class="text-lg leading-relaxed">
          Chegaste ao fim do módulo de Processos de Software. A última fronteira do Engenheiro Master não é apenas construir software, mas <strong>projetar a fábrica</strong> que o constrói. Auditoria de processo é a habilidade de analisar métricas e comportamentos para garantir que a equipa está a evoluir em velocidade, qualidade e resiliência.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 text-primary">1. Métricas de Performance de Elite (DORA Metrics)</h3>
        <p class="text-sm">O grupo DORA (DevOps Research and Assessment) do Google identificou 4 métricas que distinguem equipas de alta performance das restantes:</p>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-card border rounded-xl border-white/5 hover:border-accent/30 transition-all">
            <h4 class="font-bold text-accent mb-1">Deployment Frequency</h4>
            <p class="text-[10px] opacity-70">Quão frequentemente entregamos código em produção? <br/><b>Elite:</b> Múltiplas vezes por dia.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5 hover:border-accent/30 transition-all">
            <h4 class="font-bold text-accent mb-1">Lead Time for Changes</h4>
            <p class="text-[10px] opacity-70">Quanto tempo leva desde o primeiro commit até o código estar em produção? <br/><b>Elite:</b> Menos de uma hora.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5 hover:border-accent/30 transition-all">
            <h4 class="font-bold text-accent mb-1">Change Failure Rate</h4>
            <p class="text-[10px] opacity-70">Que percentagem de lançamentos causa falhas que exigem intervenção? <br/><b>Elite:</b> 0% a 15%.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5 hover:border-accent/30 transition-all">
            <h4 class="font-bold text-accent mb-1">Time to Restore Service (MTTR)</h4>
            <p class="text-[10px] opacity-70">Quão rápido o sistema recupera de uma falha em produção? <br/><b>Elite:</b> Menos de uma hora.</p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 text-primary">2. A Filosofia Kaizen: Melhoria de 1%</h3>
        <p class="text-sm leading-relaxed">
          Um processo master nunca está "terminado". O <strong>Kaizen</strong> é a prática de melhoria contínua e incremental. Através de retrospectivas rigorosas, a equipa deve identificar o seu maior gargalo (ex: Code Review demora 3 dias) e aplicar uma mudança experimental no próximo ciclo.
        </p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🏆 Auditoria de Qualidade e Conformidade</h3>
          <p class="text-sm mb-4">Auditar um processo envolve verificar se os "freios de segurança" estão ativos e funcionais:</p>
          <ul class="list-disc ml-6 space-y-2 text-xs text-muted-foreground">
            <li><strong>Políticas de Branching:</strong> A main está protegida? Exige 2 aprovações?</li>
            <li><strong>Cobertura de Testes (Coverage):</strong> Onde o sistema está cego perante falhas?</li>
            <li><strong>Security Scanning:</strong> O pipeline bloqueia vulnerabilidades críticas?</li>
            <li><strong>Documentação ADR:</strong> As decisões de arquitetura estão a ser registadas?</li>
          </ul>
        </div>

        <div class="bg-yellow-500/5 p-6 rounded-2xl border border-yellow-500/20 text-center mt-10">
           <h4 class="font-bold text-yellow-500 text-2xl mb-2">🎓 Nível 4 - Módulo de Processos Concluído!</h4>
           <p class="text-sm text-muted-foreground leading-relaxed">
             Parabéns, Engenheiro! Você agora possui a visão sistémica necessária para liderar projetos complexos. 
             Dominou do <strong>SDLC</strong> à <strong>IA</strong>, da <strong>Gestão de Incidentes</strong> às <strong>Métricas DORA</strong>. 
             <br/><br/>
             O próximo passo na tua evolução é o módulo de <strong>Design & Architecture</strong>, onde aprenderás a desenhar o código interno para que ele resista a décadas de mudanças.
           </p>
        </div>
      </div>
    </div>
  `
};
