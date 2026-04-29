import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-eco-t17",
  title: "Fase 4: Varnish e Proxies Reversos de Alta Escala",
  enableInteractive: true,
  youtubeVideoId: "raf_id_varnish",
  quizId: "php-eco-mq17",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🛡️ A Borda do Servidor
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O <strong>Varnish Cache</strong> é um acelerador de HTTP (Proxy Reverso) que vive à frente do seu servidor PHP. Ele consegue servir milhares de pedidos por segundo sem nunca tocar no seu código PHP, utilizando o <strong>VCL (Varnish Configuration Language)</strong> para decisões de roteamento e cache ultra-rápidas.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. ESI: Edge Side Includes</h3>
        <p class="text-sm leading-relaxed">
          O maior segredo da performance Master. O <button>ESI</button> permite que o Varnish faça o cache de uma página inteira, mas peça ao servidor PHP apenas um pequeno fragmento dinâmico (ex: o nome do utilizador logado). Isto permite que o seu site seja servido a 1ms enquanto mantém partes personalizadas.
        </p>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Grace Mode e Saint Mode</h3>
        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl">
            <strong class="text-primary">Grace Mode:</strong> O Varnish serve uma versão expirada do cache se o servidor backend estiver lento ou sobrecarregado, protegendo o utilizador final.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl">
            <strong class="text-primary">Saint Mode:</strong> Permite que o Varnish ignore um servidor backend específico se ele estiver a retornar erros (5xx), redirecionando o tráfego para servidores saudáveis.
          </li>
        </ul>
      </section>
    </div>
  `,
};
