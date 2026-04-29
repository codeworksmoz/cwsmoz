import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "se-t10",
  title: "Deployment Strategies: Reduzindo o Downtime e o Impacto",
  quizId: "se-q10-master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🔄 Lançamentos Sem Sobressaltos
        </h2>
        <p class="text-lg leading-relaxed">
          Colocar código em produção é a operação de maior risco no ciclo de vida do software. No nível Master, não apenas "copiamos ficheiros"; utilizamos estratégias que garantem o <strong>Zero Downtime</strong> (disponibilidade total) e permitem a reversão instantânea (Rollback) em caso de anomalia técnica.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Blue-Green Deployment: O Espelho Seguro</h3>
        <p class="text-sm">Esta estratégia utiliza dois ambientes de produção idênticos mas isolados:</p>
        <ul class="list-disc ml-6 space-y-2 text-xs">
          <li><strong>Ambiente Blue (Atual):</strong> A versão estável e "viva" que está a servir o tráfego real.</li>
          <li><strong>Ambiente Green (Novo):</strong> Onde a nova versão é instalada e testada exaustivamente sob condições de produção, mas sem tráfego público.</li>
        </ul>
        <p class="text-sm mt-4 leading-relaxed">
          Quando o ambiente Green é validado, o <strong>Load Balancer</strong> vira o tráfego instantaneamente para ele. O Blue torna-se o novo rascunho. Se algo falhar, a volta para o Blue é apenas uma mudança de configuração de rede, demorando milissegundos.
        </p>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 text-accent">2. Canary Deployment: O Teste de Campo</h3>
        <p class="text-sm leading-relaxed">
          Inspirado nos mineiros que usavam canários para detetar gases tóxicos. Lançamos a nova versão para uma pequena percentagem (ex: 5%) dos utilizadores reais.
          <br/><br/>
          Monitorizamos o <strong>Blast Radius</strong> (raio de impacto). Se os "canários" (utilizadores do grupo 5%) tiverem uma taxa de erro (5xx) maior ou latência superior, abortamos o deploy. Se estiverem satisfeitos, aumentamos gradualmente até 100%. É a forma mais segura de proteger o negócio contra bugs não detetados em ambiente de teste.
        </p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🧩 O Desafio do Estado (Base de Dados)</h3>
          <p class="text-sm mb-4">Estratégias de deploy são simples para o código, mas a <strong>Base de Dados</strong> é o verdadeiro desafio. Um Engenheiro Master deve garantir:</p>
          <ul class="space-y-3 text-xs text-muted-foreground">
            <li class="flex gap-2">
              <span class="text-accent font-bold">●</span>
              <span><strong>Backward Compatibility:</strong> A versão nova do código deve ser capaz de ler e escrever no esquema antigo da BD (enquanto a migração não ocorre).</span>
            </li>
            <li class="flex gap-2">
              <span class="text-accent font-bold">●</span>
              <span><strong>Forward Compatibility:</strong> A versão antiga do código deve sobreviver se a BD for atualizada e precisarmos de fazer Rollback do código.</span>
            </li>
          </ul>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 text-primary">3. Rolling Updates: A Atualização Gradual</h3>
        <p class="text-sm leading-relaxed">
          Estratégia padrão do <strong>Kubernetes</strong>. Atualizamos um servidor (ou pod) de cada vez no cluster. O serviço nunca fica offline, mas a capacidade total da rede pode diminuir ligeiramente durante o processo. É mais barato que o Blue-Green, pois não exige o dobro da infraestrutura.
        </p>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6 shadow-inner">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Conclusão Master
          </h4>
          <p class="text-sm leading-relaxed">
            Escolher a estratégia de deploy é um equilíbrio entre <strong>Custo</strong>, <strong>Risco</strong> e <strong>Velocidade</strong>. Bancos e sistemas críticos preferem Blue-Green ou Canary; startups de rápida iteração preferem Rolling Updates automatizados.
          </p>
        </div>
      </div>
    </div>
  `
};