import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "se-t19",
  title: "Liderança Técnica e Mentoria: O Papel do Multiplicador",
  quizId: "se-q19-master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          👑 Além do Código Individual
        </h2>
        <p class="text-lg leading-relaxed">
          No nível Master, a sua produtividade não é medida pelas linhas de código que escreve, mas pelo <strong>impacto multiplicador</strong> que tem sobre a equipa. A liderança técnica é a habilidade de guiar a visão arquitetural, orquestrar trade-offs complexos e elevar o nível de proficiência de todos ao seu redor.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. O Tech Lead vs. O Gestor de Pessoas</h3>
        <p class="text-sm">Embora colaborem, os papéis têm focos distintos. Um Engenheiro de Elite domina a vertente técnica da liderança:</p>
        <ul class="grid md:grid-cols-2 gap-4">
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block mb-1">Visão Arquitetural:</strong> Enquanto o gestor olha para o prazo, o líder técnico olha para a sustentabilidade. Ele garante que as decisões rápidas de hoje não se tornem o colapso do sistema amanhã através de <strong>ADRs</strong>.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block mb-1">Remoção de Bloqueios Técnicos:</strong> O líder antecipa problemas de infraestrutura ou limitações de API semanas antes de eles chegarem ao Sprint Backlog, limpando o caminho para os outros <i>developers</i>.
          </li>
        </ul>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 text-primary">2. Mentoria de Elite: Ensinar a Pensar</h3>
        <p class="text-sm leading-relaxed">
          Um erro comum de seniores é "dar a resposta pronta" para ganhar tempo. O Engenheiro Master pratica a <strong>Mentoria Socrática</strong>.
        </p>
        <div class="bg-black/40 p-6 rounded-xl border border-indigo-500/20 shadow-inner space-y-4">
          <h4 class="font-bold text-indigo-400 text-sm">Técnicas de Mentoria Industrial:</h4>
          <ul class="space-y-3 text-xs text-muted-foreground">
            <li><b class="text-white">Socratic Questioning:</b> Se um júnior pergunta como resolver um bug, pergunte: "O que dizem os logs?", "Qual o estado da memória neste ponto?", "Como isolamos esta variável?".</li>
            <li><b class="text-white">Pair Programming Ativo:</b> Use o modelo Driver/Navigator para transferir contexto de negócio e padrões de design em tempo real.</li>
            <li><b class="text-white">Sponsorship:</b> Mais que mentoria, é criar oportunidades para o mentorado brilhar em tarefas críticas, fornecendo a rede de segurança necessária.</li>
          </ul>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">3. O "Bus Factor" e a Resiliência da Equipa</h3>
        <p class="text-sm leading-relaxed">
          O <strong>Bus Factor</strong> é o número de pessoas que, se saírem da equipa hoje, fariam o projeto parar. Um líder master trabalha ativamente para <strong>Aumentar o Bus Factor</strong>:
        </p>
        <ul class="list-disc ml-6 space-y-2 text-xs text-muted-foreground">
          <li>Eliminar silos de conhecimento (ex: o único que sabe mexer no banco de dados).</li>
          <li>Incentivar a rotação de tarefas entre diferentes módulos do sistema.</li>
          <li>Garantir que a documentação técnica seja viva e colaborativa.</li>
        </ul>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6 shadow-inner">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Decisão e Pragmatismo
          </h4>
          <p class="text-sm leading-relaxed">
            Liderar é saber quando ser <strong>idealista</strong> (exigir testes 100% em novos módulos) e quando ser <strong>pragmático</strong> (aceitar um débito técnico consciente para restaurar um serviço em crise). O líder master assume a responsabilidade pelas consequências, documentando os riscos para pagamento futuro.
          </p>
        </div>
      </div>
    </div>
  `,
};
