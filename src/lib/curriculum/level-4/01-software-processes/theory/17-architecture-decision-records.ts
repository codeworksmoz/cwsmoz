import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "se-t17",
  title: "Documentação de Arquitetura: ADRs e a Memória do Sistema",
  quizId: "se-q17-master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          📜 Além do Código: O Porquê das Coisas
        </h2>
        <p class="text-lg leading-relaxed">
          Um <strong>ADR (Architecture Decision Record)</strong> é um documento curto que captura uma decisão técnica significativa, o seu contexto e as suas consequências. Para um Engenheiro Master, o código diz <i>como</i> o sistema funciona, mas o ADR diz <i>porquê</i> ele foi construído dessa forma.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. A Anatomia de um ADR de Elite</h3>
        <p class="text-sm">Seguindo o formato de Michael Nygard, cada registo deve conter:</p>
        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block mb-1">Context (Contexto):</strong> Quais eram as circunstâncias? Que limitações de tempo, custo ou tecnologia existiam? "Precisamos de escalar para 1M de utilizadores mas a nossa base atual é síncrona".
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block mb-1">Decision (Decisão):</strong> Qual foi a escolha técnica exata? Deve ser afirmativa e clara. "Utilizaremos a arquitetura Event-Driven com Apache Kafka".
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block mb-1">Consequences (Consequências):</strong> O que ganhamos e o que PERDEMOS? Todo o bónus tem um ónus. "Ganhamos escala, mas aumentamos a complexidade de debugging e monitorização".
          </li>
        </ul>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 text-primary">2. O Ciclo de Vida da Decisão</h3>
        <p class="text-sm mb-4">ADRs são imutáveis e vivem no repositório Git. O seu estado evolui:</p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-[10px] font-bold uppercase text-center">
          <div class="p-3 bg-blue-600/20 border border-blue-600/40 rounded-lg">Proposed</div>
          <div class="p-3 bg-green-600/20 border border-green-600/40 rounded-lg">Accepted</div>
          <div class="p-3 bg-red-600/20 border border-red-500/40 rounded-lg">Deprecated</div>
          <div class="p-3 bg-yellow-600/20 border border-yellow-500/40 rounded-lg">Superceded</div>
        </div>
        <p class="text-xs mt-4 italic opacity-70">
          Nota Master: Nunca apagues um ADR antigo. Se mudares de ideia, cria um novo ADR e marca o antigo como <strong>Superceded</strong> (Substituído), ligando-o ao novo. Isto preserva a genealogia técnica do projeto.
        </p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">💎 Por que não usar o Word ou Confluence?</h3>
          <p class="text-sm leading-relaxed">
            Engenheiros master mantêm ADRs em ficheiros <strong>Markdown (.md)</strong> dentro do próprio repositório (ex: <code>/docs/adr/001-uso-de-kafka.md</code>).
            <br/><br/>
            <strong>Vantagens:</strong>
            <br/>- <b>Versionamento:</b> Vês quem mudou a decisão via <i>git blame</i>.
            <br/>- <b>Proximidade:</b> O documento está ao lado do código que ele justifica.
            <br/>- <b>Code Review:</b> Decisões de arquitetura são aprovadas via Pull Requests.
          </p>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Visão de Senioridade: Evitando o "Efeito Arqueólogo"
          </h4>
          <p class="text-sm leading-relaxed">
            Sem ADRs, novos engenheiros chegam ao projeto e perguntam: "Por que raio fizeram isto desta forma tão estranha?". Sem o registo, a equipa perde tempo a re-discutir problemas já resolvidos. O ADR é a vacina contra a amnésia técnica.
          </p>
        </div>
      </div>
    </div>
  `
};
