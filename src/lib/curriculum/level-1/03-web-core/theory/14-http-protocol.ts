import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "web-t14",
  title: "Protocolo HTTP: A Conversa entre Browser e Servidor",
  youtubeVideoId: "8aGhZQkoFbQ",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          📡 O Mensageiro da Web
        </h2>
        <p class="text-lg leading-relaxed">
          O <strong>HTTP (HyperText Transfer Protocol)</strong> é o protocolo de comunicação que permite a transferência de dados na web. Sempre que digitas um endereço ou clicas num botão, estás a iniciar uma conversa estruturada.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. O Ciclo Request / Response</h3>
        <ul class="space-y-4">
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
            <div class="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0 font-bold">REQ</div>
            <div>
              <p class="font-bold text-sm">Request (O Pedido):</p>
              <p class="text-xs text-muted-foreground">O browser pede um recurso (HTML, Imagem, API) ao servidor. Inclui o <b>Método</b> e o <b>Endpoint</b>.</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
            <div class="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 shrink-0 font-bold">RES</div>
            <div>
              <p class="font-bold text-sm">Response (A Resposta):</p>
              <p class="text-xs text-muted-foreground">O servidor devolve os dados e um <b>Status Code</b> indicando se o pedido teve sucesso.</p>
            </div>
          </li>
        </ul>

        <h3 class="text-xl font-bold font-headline">2. Métodos (Verbos) Principais</h3>
        <div class="grid md:grid-cols-2 gap-4 text-[10px]">
          <div class="p-3 bg-card border rounded-lg"><strong>GET:</strong> Para descarregar ou ler dados do servidor. (Padrão)</div>
          <div class="p-3 bg-card border rounded-lg"><strong>POST:</strong> Para enviar novos dados (formulários, logins).</div>
          <div class="p-3 bg-card border rounded-lg"><strong>PUT/PATCH:</strong> Para atualizar dados existentes.</div>
          <div class="p-3 bg-card border rounded-lg"><strong>DELETE:</strong> Para remover um recurso.</div>
        </div>

        <h3 class="text-xl font-bold font-headline text-accent">3. Status Codes: O que o servidor diz</h3>
        <ul class="grid grid-cols-2 gap-4 text-xs font-mono">
          <li class="bg-green-600/10 p-2 rounded border border-green-600/20 text-green-400">200 OK — Sucesso total</li>
          <li class="bg-blue-600/10 p-2 rounded border border-blue-600/20 text-blue-400">301 Redirect — Página mudou-se</li>
          <li class="bg-yellow-600/10 p-2 rounded border border-yellow-600/20 text-yellow-400">404 Not Found — Não existe</li>
          <li class="bg-red-600/10 p-2 rounded border border-red-600/20 text-red-400">500 Server Error — Falha no servidor</li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h4 class="font-bold text-indigo-400 mb-2">🔐 HTTP vs HTTPS</h4>
          <p class="text-sm leading-relaxed">
            O 'S' significa <strong>Secure</strong>. O HTTPS encripta a conversa via TLS/SSL, impedindo que hackers em redes Wi-Fi públicas interceptem as tuas senhas ou dados bancários. Em 2024, sites sem HTTPS são marcados como "Não Seguros" e perdem ranking no Google.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "web-q14"
};
