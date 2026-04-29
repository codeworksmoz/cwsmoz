import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "se-t8",
  title: "DevOps Master: O Modelo CAMS e a Cultura de Responsabilidade",
  quizId: "se-q8-master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          ♾️ Além das Ferramentas: A Filosofia DevOps
        </h2>
        <p class="text-lg leading-relaxed">
          DevOps não é um cargo, mas uma mudança cultural que remove os silos entre o Desenvolvimento (Dev) e as Operações (Ops). O objetivo de elite é atingir entregas rápidas com estabilidade inabalável através da responsabilidade partilhada.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. O Framework CAMS (Os 4 Pilares)</h3>
        <p class="text-sm">Desenvolvido por Damon Edwards e John Willis, o acrónimo CAMS define os fundamentos da jornada DevOps:</p>
        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block mb-1">Culture (Cultura):</strong> O pilar mais difícil. Envolve a quebra do "muro da confusão". Se o código falha em produção, a culpa não é do Ops; a solução é responsabilidade de toda a equipa (Dev + Ops).
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block mb-1">Automation (Automação):</strong> Se uma tarefa é feita mais de duas vezes, ela deve ser automatizada. Isto inclui testes, infraestrutura (IaC), compilação e deploy, eliminando o erro humano do caminho crítico.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block mb-1">Measurement (Medição):</strong> Não se pode melhorar o que não se mede. Engenheiros master monitorizam o MTTR (Mean Time to Recover) e o Lead Time para tomar decisões baseadas em factos.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block mb-1">Sharing (Partilha):</strong> Partilhar sucessos, falhas e ferramentas. A transparência técnica acelera o aprendizado coletivo da organização.
          </li>
        </ul>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 text-primary">2. Blame-free Culture: Aprendendo com a Falha</h3>
        <p class="text-sm leading-relaxed">
          Num ambiente de elite, as falhas são vistas como oportunidades de auditoria do sistema, não de punição de indivíduos. O <strong>Post-mortem</strong> deve focar em: <i>"Que falha no processo permitiu que este erro ocorresse?"</i> e não em <i>"Quem cometeu o erro?"</i>. Isto encoraja a inovação e a segurança psicológica da equipa.
        </p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🚀 Shift Left: Qualidade Antecipada</h3>
          <p class="text-sm leading-relaxed">
            "Shift Left" significa mover as preocupações de segurança e performance para o início do ciclo de desenvolvimento. No nível Master, o desenvolvedor testa o seu código em containers idênticos à produção antes de fazer o primeiro <i>commit</i>.
          </p>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Visão Master: DevOps vs. SRE
          </h4>
          <p class="text-sm leading-relaxed">
            Enquanto DevOps é a filosofia cultural, o <strong>SRE (Site Reliability Engineering)</strong> é a implementação técnica do Google para essa filosofia. O SRE utiliza a engenharia de software para resolver problemas de operações, tratando o sistema como um software complexo em escala planetária.
          </p>
        </div>
      </div>
    </div>
  `,
};