import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "pf-t17",
  title: "Serialização e JSON: A Língua Franca dos Dados",
  youtubeVideoId: "v4cd1O4zkGw",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          📄 Transportando Informação
        </h2>
        <p class="text-lg leading-relaxed">
          Um objeto na memória RAM do seu computador (Java, Python ou JS) não pode ser enviado diretamente pela internet. Ele precisa de ser transformado numa string (texto). <strong>JSON</strong> (JavaScript Object Notation) é o formato padrão mundial para esta troca de dados.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Objeto vs JSON String</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <h4 class="font-bold text-accent mb-2">Objeto (Memória)</h4>
            <p class="text-xs text-muted-foreground">Vive na RAM. Podes aceder às propriedades e chamar métodos.</p>
            <code class="text-[10px]">{ id: 1 }</code>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <h4 class="font-bold text-green-400 mb-2">JSON (Texto)</h4>
            <p class="text-xs text-muted-foreground">É uma string de texto puro. Chaves e valores de texto DEVEM usar aspas duplas.</p>
            <code class="text-[10px]">"{ "id": 1 }"</code>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline">2. O Processo de Conversão</h3>
        <ul class="space-y-4">
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
            <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 font-bold">📤</div>
            <div>
              <p class="font-bold text-sm">Stringify (Serialização):</p>
              <p class="text-xs text-muted-foreground">Transforma o teu objeto vivo numa string morta para ser gravada ou enviada.</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
            <div class="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 font-bold">📥</div>
            <div>
              <p class="font-bold text-sm">Parse (Desserialização):</p>
              <p class="text-xs text-muted-foreground">Transforma uma string recebida num objeto real que o teu código consegue manipular.</p>
            </div>
          </li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🛡️ Regras de Ouro do JSON</h3>
          <ul class="list-disc ml-6 space-y-2 text-xs">
            <li>Aspas duplas <code>"</code> são obrigatórias para chaves e strings.</li>
            <li>Não são permitidas funções ou comentários dentro de um ficheiro JSON.</li>
            <li>Suporta tipos básicos: Strings, Numbers, Booleans, Arrays, Objetos e Null.</li>
          </ul>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2">🚀 Visão Master</h4>
          <p class="text-sm leading-relaxed">
            Como engenheiro de elite, deves saber que o <code>JSON.parse()</code> é uma operação bloqueante. Se tentares converter uma string de 50MB na thread principal, o teu site vai travar. Em sistemas de alta performance, usamos <strong>Streaming JSON Parsers</strong> para lidar com volumes massivos de dados.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "pf-t17-quiz"
};