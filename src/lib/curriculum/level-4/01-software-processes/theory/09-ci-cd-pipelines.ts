import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "se-t9",
  title: "Pipelines CI/CD: A Fábrica de Software Automática",
  quizId: "se-q9-master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🚀 O Coração da Automação Industrial
        </h2>
        <p class="text-lg leading-relaxed">
          Um pipeline de <strong>CI/CD</strong> (Continuous Integration / Continuous Deployment) é a linha de montagem automatizada do software moderno. Ele garante que cada mudança de código passe por um rigoroso processo de auditoria, teste e empacotamento antes de chegar ao utilizador final, eliminando a "ansiedade do deploy".
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Continuous Integration (CI): Feedback em Milissegundos</h3>
        <p class="text-sm">O objetivo do CI é evitar o "Inferno da Integração". Em vez de juntar o código de 10 programadores uma vez por mês, o código é integrado <strong>várias vezes ao dia</strong> num branch principal (main).</p>
        <ul class="space-y-3">
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl border border-white/5">
            <div>
              <p class="font-bold text-accent">Fast Feedback Loop:</p>
              <p class="text-xs text-muted-foreground">Se um programador introduz um bug, os testes automáticos detetam-no em minutos. O custo de corrigir um erro encontrado no CI é quase zero comparado ao custo de o encontrar em produção.</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl border border-white/5">
            <div>
              <p class="font-bold text-accent">Static Analysis & Linting:</p>
              <p class="text-xs text-muted-foreground">O pipeline "lê" o código para garantir que segue as regras de estilo e segurança antes mesmo de o tentar compilar.</p>
            </div>
          </li>
        </ul>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 text-primary">2. Continuous Delivery vs. Continuous Deployment</h3>
        <p class="text-sm">Esta é a distinção que separa os amadores dos especialistas de infraestrutura:</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="p-5 bg-card border rounded-2xl shadow-lg border-blue-500/20">
            <h4 class="font-bold text-blue-400 mb-2">Continuous Delivery</h4>
            <p class="text-xs text-muted-foreground leading-relaxed">Todo o processo é automático até o ambiente de <strong>Staging</strong>. O código está <b>sempre pronto</b> para ir para produção, mas o lançamento final depende de uma decisão humana (um clique no botão "Aprovar").</p>
          </div>
          <div class="p-5 bg-card border rounded-2xl shadow-lg border-green-500/20">
            <h4 class="font-bold text-green-400 mb-2">Continuous Deployment</h4>
            <p class="text-xs text-muted-foreground leading-relaxed">Não há intervenção humana. Se o código passa nos testes do pipeline, ele vai <b>automaticamente</b> para produção. Exige uma cobertura de testes de 99% e monitorização em tempo real.</p>
          </div>
        </div>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🧱 A Regra de Ouro: Imutabilidade do Artefacto</h3>
          <p class="text-sm mb-4">Um erro clássico é compilar o código em Staging e depois compilá-lo novamente para Produção. <strong>Nunca faças isto.</strong></p>
          <p class="text-xs leading-relaxed text-muted-foreground">
            O Engenheiro Master segue o princípio <strong>"Build Once, Deploy Many"</strong>. Tu geras um artefacto binário imutável (ex: uma Imagem Docker ou um ficheiro .zip) no início do pipeline. Esse mesmo ficheiro exato é o que é testado e o que vai para o cliente. Isto garante que o que foi validado é exatamente o que está a correr.
          </p>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">3. Anatomia do Pipeline Industrial</h3>
        <div class="space-y-4 font-mono text-[10px] uppercase">
          <div class="flex gap-4 items-center p-3 bg-black/40 rounded-xl border border-white/5">
            <span class="w-24 text-accent font-bold">1. LINT</span>
            <span class="flex-1">Validação de estilo e erros estáticos (ESLint, MyPy, Checkstyle).</span>
          </div>
          <div class="flex gap-4 items-center p-3 bg-black/40 rounded-xl border border-white/5">
            <span class="w-24 text-accent font-bold">2. UNIT TEST</span>
            <span class="flex-1">Execução de milhares de testes de funções isoladas.</span>
          </div>
          <div class="flex gap-4 items-center p-3 bg-black/40 rounded-xl border border-white/5">
            <span class="w-24 text-accent font-bold">3. BUILD</span>
            <span class="flex-1">Compilação e criação da Imagem Docker imutável.</span>
          </div>
          <div class="flex gap-4 items-center p-3 bg-black/40 rounded-xl border border-white/5">
            <span class="w-24 text-accent font-bold">4. SCAN</span>
            <span class="flex-1">DevSecOps: Busca por vulnerabilidades em pacotes NPM/Pip.</span>
          </div>
          <div class="flex gap-4 items-center p-3 bg-black/40 rounded-xl border border-white/5">
            <span class="w-24 text-accent font-bold">5. INT. TEST</span>
            <span class="flex-1">Testes de integração com BD e APIs reais em ambiente efémero.</span>
          </div>
          <div class="flex gap-4 items-center p-3 bg-black/40 rounded-xl border border-white/5">
            <span class="w-24 text-accent font-bold">6. DEPLOY</span>
            <span class="flex-1">Publicação automática no ambiente alvo.</span>
          </div>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6 shadow-inner">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Conclusão Master
          </h4>
          <p class="text-sm leading-relaxed">
            O pipeline CI/CD transforma a "arte" de fazer deploy num processo científico repetível. Ele permite que a equipa falhe rápido (fail fast), aprenda rápido e entregue valor ao cliente com uma frequência que seria impossível com processos manuais.
          </p>
        </div>
      </div>
    </div>
  `
};
