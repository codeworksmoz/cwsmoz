import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "se-t3",
  title: "Scrum Framework: Empirismo, Papéis e a Engenharia do Incremento",
  youtubeVideoId: "9TycLR0TqFA",
  quizId: "se-q3-master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🔄 O Framework Empírico
        </h2>
        <p class="text-lg leading-relaxed">
          O Scrum não é um processo prescritivo, mas um <strong>framework</strong> baseado no empirismo. Ele assume que o conhecimento vem da experiência e que a tomada de decisão deve basear-se no que é observado. Para que o motor do Scrum funcione, ele exige três pilares: <strong>Transparência</strong>, <strong>Inspeção</strong> e <strong>Adaptação</strong>.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Os 3 Papéis (Accountabilities)</h3>
        <p class="text-sm">No Scrum de elite, não existem hierarquias de "chefe", mas sim responsabilidades claras:</p>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="p-4 bg-card border rounded-xl border-white/5 hover:border-accent/50 transition-colors">
            <h4 class="font-bold text-accent mb-2">Product Owner</h4>
            <p class="text-[10px] text-muted-foreground leading-relaxed">
              O <b>Dono do Valor</b>. Responsável por maximizar o valor do produto resultante do trabalho da equipa. Ele é o único que decide a ordem do Product Backlog. Ele foca no <strong>"O QUÊ"</strong>.
            </p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5 hover:border-accent/50 transition-colors">
            <h4 class="font-bold text-accent mb-2">Scrum Master</h4>
            <p class="text-[10px] text-muted-foreground leading-relaxed">
              O <b>Líder Servidor</b>. Responsável pela eficácia da equipa. Ele ajuda a remover impedimentos e garante que todos entendem a teoria e a prática do Scrum. Ele foca no <strong>"COMO COLABORAMOS"</strong>.
            </p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5 hover:border-accent/50 transition-colors">
            <h4 class="font-bold text-accent mb-2">Developers</h4>
            <p class="text-[10px] text-muted-foreground leading-relaxed">
              Os <b>Criadores do Incremento</b>. Estão comprometidos em criar qualquer aspecto de um Incremento útil em cada Sprint. Têm autonomia total sobre o <strong>"COMO CONSTRUÍMOS"</strong>.
            </p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 text-primary">2. Os Eventos: Batimento Cardíaco da Agilidade</h3>
        <ul class="space-y-4">
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
            <div>
              <p class="font-bold text-sm">A Sprint:</p>
              <p class="text-xs text-muted-foreground">O contentor para todos os outros eventos. Dura 1 mês ou menos para evitar que a complexidade aumente e o risco se torne incontrolável.</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
            <div>
              <p class="font-bold text-sm">Sprint Planning:</p>
              <p class="text-xs text-muted-foreground">Define o <strong>Sprint Goal</strong> (Porquê?), seleciona itens do backlog (O quê?) e planeia o trabalho (Como?).</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
            <div>
              <p class="font-bold text-sm">Sprint Review vs Retrospective:</p>
              <p class="text-xs text-muted-foreground">
                - <b>Review:</b> Foco no PRODUTO. O que foi feito? O que mudou no mercado?
                <br/>- <b>Retrospective:</b> Foco na EQUIPA. Como podemos melhorar a nossa qualidade, processos e ferramentas?
              </p>
            </div>
          </li>
        </ul>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 text-primary">3. Artefactos e Compromissos (Qualidade Total)</h3>
        <p class="text-sm">Cada artefacto contém um compromisso para garantir a transparência e medir o progresso:</p>
        <div class="space-y-3">
           <div class="p-4 bg-indigo-500/10 rounded-xl border border-indigo-500/20">
              <p class="text-xs"><strong>Product Backlog</strong> → Compromisso: <strong>Product Goal</strong> (A visão de longo prazo).</p>
           </div>
           <div class="p-4 bg-indigo-500/10 rounded-xl border border-indigo-500/20">
              <p class="text-xs"><strong>Sprint Backlog</strong> → Compromisso: <strong>Sprint Goal</strong> (O objetivo da iteração atual).</p>
           </div>
           <div class="p-4 bg-indigo-500/10 rounded-xl border border-indigo-500/20">
              <p class="text-xs"><strong>Incremento</strong> → Compromisso: <strong>Definition of Done (DoD)</strong> (O padrão de qualidade obrigatório).</p>
           </div>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6 shadow-inner">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Visão de Elite: A Definition of Done (DoD)
          </h4>
          <p class="text-sm leading-relaxed">
            Um item só é considerado "Incremento" se cumprir a DoD. Se a sua DoD exige "Testes Unitários, Code Review e Documentação", e o código está pronto mas sem testes, ele <strong>NÃO É DONE</strong>. Itens não terminados voltam para o Product Backlog; nunca são demonstrados na Review.
          </p>
        </div>
      </div>
    </div>
  `
};
