import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "web-t8",
  title: "Publicação: Levando o Teu Site ao Ar",
  youtubeVideoId: "8aGhZQkoFbQ",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🚀 Da Máquina para o Mundo
        </h2>
        <p class="text-lg leading-relaxed">
          Escrever código no seu computador (localhost) é apenas metade da jornada. Para que o seu site seja acedido por qualquer pessoa, ele precisa de ser "publicado" ou sofrer um <strong>Deployment</strong> numa infraestrutura acessível via internet.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. O Trio do Deployment</h3>
        <p>A publicação assenta em três pilares fundamentais que funcionam em conjunto:</p>
        <ul class="space-y-4">
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl border border-white/5">
            <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 font-bold">DNS</div>
            <div>
              <p class="font-bold text-sm">O Nome do Domínio:</p>
              <p class="text-xs text-muted-foreground leading-relaxed">O DNS traduz o nome legível (ex: codworks.mz) no endereço IP real do servidor. É a "lista telefónica" da internet.</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl border border-white/5">
            <div class="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 font-bold">HOST</div>
            <div>
              <p class="font-bold text-sm">Hospedagem (Hosting):</p>
              <p class="text-xs text-muted-foreground leading-relaxed">É o computador (servidor) que fica ligado 24/7 guardando os teus ficheiros HTML, CSS e imagens.</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl border border-white/5">
            <div class="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 shrink-0 font-bold">SSL</div>
            <div>
              <p class="font-bold text-sm">Certificado SSL (HTTPS):</p>
              <p class="text-xs text-muted-foreground leading-relaxed">O cadeado verde. Encripta a comunicação entre o browser e o servidor, protegendo os dados do utilizador.</p>
            </div>
          </li>
        </ul>

        <h3 class="text-xl font-bold font-headline">2. Fluxos Modernos: Git-based Deploy</h3>
        <p class="text-sm">Antigamente, usava-se FTP para arrastar ficheiros. Hoje, os engenheiros de elite usam <strong>Continuous Deployment</strong>: tu fazes um "push" para o GitHub e o site atualiza-se sozinho em segundos através de plataformas como Vercel ou Netlify.</p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🌎 CDNs: Velocidade de Borda</h3>
          <p class="text-sm leading-relaxed mb-4">
            Uma <strong>CDN (Content Delivery Network)</strong> cria cópias do teu site em servidores espalhados pelo mundo. Se o teu site está em Maputo, a CDN garante que um utilizador em Nampula receba os dados de um servidor mais próximo, reduzindo drasticamente o tempo de espera.
          </p>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Dica de Engenharia: Propagação de DNS
          </h4>
          <p class="text-sm leading-relaxed">
            Quando mudas o endereço do teu site, essa informação demora a chegar a todos os cantos do mundo. Este processo chama-se <strong>Propagação</strong> e pode demorar de alguns minutos até 48 horas. Tenha paciência ao configurar o seu domínio!
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "web-t8-quiz"
};
