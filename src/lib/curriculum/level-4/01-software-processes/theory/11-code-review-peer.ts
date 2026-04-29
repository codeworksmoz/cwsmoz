import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "se-t11",
  title: "Code Review e Peer Programming: A Auditoria de Pares de Elite",
  quizId: "se-q11-master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🔍 O Cérebro Coletivo
        </h2>
        <p class="text-lg leading-relaxed">
          Nenhum engenheiro, por mais sénior que seja, é imune a erros. O <strong>Code Review</strong> e o <strong>Peer Programming</strong> não são processos de fiscalização, mas sim mecanismos de transferência de conhecimento e defesa multicamada contra a dívida técnica e bugs de lógica.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Code Review: A Psicologia do Ego-less Programming</h3>
        <p class="text-sm leading-relaxed">
          O maior obstáculo ao Code Review de elite é o ego. Um Engenheiro Master pratica o <strong>Ego-less Programming</strong>: o código não és tu; é um artefacto técnico que pertence à equipa.
        </p>
        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block mb-1">Feedback Construtivo:</strong> Comentários devem focar no código, não no autor. Em vez de "Tu esqueceste o nulo", use "O sistema pode falhar se este valor for nulo".
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block mb-1">Checklist de Auditoria:</strong> Uma revisão profissional verifica:
            <br/>- <b>Lógica:</b> Cumpre o requisito? Existem casos de borda não tratados?
            <br/>- <b>Segurança:</b> Existe risco de injeção? Dados sensíveis estão expostos?
            <br/>- <b>Mantenabilidade:</b> O nome das variáveis é semântico? O código segue o princípio DRY?
          </li>
        </ul>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 text-primary">2. Peer Programming: O Modelo Driver/Navigator</h3>
        <p class="text-sm">Ao contrário do que parece, dois engenheiros num só computador são <strong>mais produtivos</strong> a longo prazo do que dois isolados, pois a qualidade do código inicial elimina meses de manutenção futura.</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="p-5 bg-card border rounded-2xl shadow-lg border-blue-500/20">
            <h4 class="font-bold text-blue-400 mb-2">The Driver (O Piloto)</h4>
            <p class="text-xs text-muted-foreground leading-relaxed">Foca na micro-tática: escrever o código, gerir a sintaxe e os testes imediatos. É quem tem as mãos no teclado.</p>
          </div>
          <div class="p-5 bg-card border rounded-2xl shadow-lg border-green-500/20">
            <h4 class="font-bold text-green-400 mb-2">The Navigator (O Co-piloto)</h4>
            <p class="text-xs text-muted-foreground leading-relaxed">Foca na macro-estratégia: olha para o quadro geral, antecipa bugs, verifica a arquitetura e garante que a direção está correta.</p>
          </div>
        </div>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🚀 Benefícios Industriais</h3>
          <ul class="list-disc ml-6 space-y-2 text-xs text-muted-foreground">
            <li><strong>Eliminação de Silos:</strong> Se o "especialista de base de dados" ficar doente, o Navigator que trabalhou com ele sabe exatamente o que fazer.</li>
            <li><strong>Onboarding Acelerado:</strong> Integrar um novo membro via Peer Programming reduz o tempo de adaptação de semanas para dias.</li>
            <li><strong>Código mais Curto:</strong> Duas mentes encontram soluções mais simples e elegantes do que uma mente isolada tentando ser "esperta".</li>
          </ul>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Visão Master: A Regra do Boy Scout
          </h4>
          <p class="text-sm leading-relaxed">
            "Deixe o código sempre um pouco mais limpo do que o encontrou". Durante um Code Review, se encontrares algo confuso, mesmo que não seja da tua tarefa, sugira a limpeza. A qualidade é uma responsabilidade coletiva e contínua.
          </p>
        </div>
      </div>
    </div>
  `
};
