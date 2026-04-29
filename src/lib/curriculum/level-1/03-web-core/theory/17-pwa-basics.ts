import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "web-t17",
  title: "PWA: Progressive Web Apps e Experiências Offline",
  youtubeVideoId: "8aGhZQkoFbQ",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          📱 O Site que Parece uma App
        </h2>
        <p class="text-lg leading-relaxed">
          Uma **PWA** é um site que utiliza tecnologias modernas para oferecer uma experiência similar a uma aplicação nativa (Android/iOS), incluindo suporte offline e instalação no ecrã principal.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. O Ficheiro Manifest.json</h3>
        <p>O manifesto é um ficheiro JSON que diz ao telemóvel como o site deve comportar-se quando instalado (nome, ícone, cor de fundo e modo de exibição).</p>
        <div class="bg-black/40 p-4 rounded-xl border font-code text-xs text-accent">
          { "display": "standalone", "start_url": "/", "name": "Codworks App" }
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. Service Workers: O Cérebro Offline</h3>
        <p>Um **Service Worker** é um script que o browser corre em background. Ele funciona como um proxy entre o site e a rede, permitindo carregar o site instantaneamente a partir do cache mesmo sem internet.</p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-2">Benefícios de uma PWA:</h4>
          <ul class="list-disc ml-6 space-y-2 text-xs">
            <li>🚀 <strong>Velocidade:</strong> Carregamento quase instantâneo.</li>
            <li>📶 <strong>Resiliência:</strong> Funciona em redes instáveis ou offline.</li>
            <li>📦 <strong>Leve:</strong> Ocupa muito menos espaço que uma app nativa.</li>
            <li>🔔 <strong>Engajamento:</strong> Suporte a notificações Push.</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  quizId: "web-q17"
};
