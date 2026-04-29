import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "se-t1",
  title: "SDLC Master: Arquitetura do Ciclo de Vida e Gestão de Risco",
  youtubeVideoId: "8hly31xKli0",
  quizId: "se-q1-master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🏛️ A Engenharia por Trás do Código
        </h2>
        <p class="text-lg leading-relaxed">
          O <strong>SDLC (Software Development Life Cycle)</strong> não é apenas uma lista de tarefas; é um framework de gestão de risco. Um erro de requisito detetado na fase de manutenção pode custar <strong>100x mais</strong> do que se fosse detetado na fase de análise inicial.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. As Fases de Missão Crítica</h3>
        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block mb-1">Análise e Viabilidade:</strong> Onde se define o <i>Business Value</i>. Inclui análise de ROI (Retorno sobre Investimento) e viabilidade técnica (TSR - Technical Success Ratio).
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block mb-1">Design de Arquitetura:</strong> A criação dos blueprints. Define-se aqui se o sistema será monolítico ou microserviços, as escolhas de base de dados e os diagramas de sequência.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block mb-1">Verificação vs Validação (V&V):</strong> 
            <br/>- <i>Verificação:</i> Estamos a construir o sistema corretamente? (Seguindo as especificações técnicas).
            <br/>- <i>Validação:</i> Estamos a construir o sistema certo? (Atendendo às reais necessidades do utilizador e mercado).
          </li>
        </ul>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. Modelos de Ciclo de Vida</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-card border rounded-xl border-red-500/20">
            <h4 class="font-bold text-red-400">Waterfall (Cascata)</h4>
            <p class="text-xs opacity-70">Rígido e linear. Ideal para projetos onde os requisitos nunca mudam (ex: software para hardware médico ou aeroespacial).</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-green-500/20">
            <h4 class="font-bold text-green-400">Spiral e Iterative</h4>
            <p class="text-xs opacity-70">Focado em análise de risco cíclica. Permite evoluir o produto em espirais de feedback, reduzindo incertezas em cada iteração.</p>
          </div>
        </div>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🔧 Tipos de Manutenção Profissional</h3>
          <p class="text-sm mb-4">Um engenheiro master sabe que o deploy é apenas o início. O software exige:</p>
          <ul class="list-disc ml-6 space-y-2 text-xs text-muted-foreground">
            <li><strong>Corretiva:</strong> Reparar bugs detetados em produção.</li>
            <li><strong>Adaptativa:</strong> Alterar o software para rodar num novo SO ou infraestrutura cloud.</li>
            <li><strong>Perfeitiva:</strong> Refatoração para melhorar performance ou legibilidade sem alterar funções.</li>
            <li><strong>Preventiva:</strong> Antecipar falhas futuras e atualizar dependências vulneráveis.</li>
          </ul>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Dica de Senioridade
          </h4>
          <p class="text-sm leading-relaxed">
            A fase de <strong>Design</strong> deve consumir cerca de 30% do tempo do projeto. "Acelerar" esta fase para começar a codificar mais cedo é a causa número 1 de falhas catastróficas em sistemas de larga escala.
          </p>
        </div>
      </div>
    </div>
  `
};
