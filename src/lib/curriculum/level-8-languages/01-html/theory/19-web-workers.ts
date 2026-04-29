import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m19",
  title: "Fase 3: Web Workers e Paralelismo de Script",
  enableInteractive: true,
  quizId: "html-mq19",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🧵 Quebrando a Single Thread
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Tradicionalmente, o JavaScript no browser corre numa única thread principal (UI Thread). Se realizares um cálculo pesado ou processares um ficheiro grande, a interface "congela". Os <strong>Web Workers</strong> permitem-te executar scripts em background, garantindo que o seu projeto Master permaneça fluido a 60 FPS mesmo sob carga massiva.
        </p>
      </div>

      <!-- 1. CONCEITO DE ISOLAMENTO -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. O Contexto Isolado</h3>
        <p class="text-sm">Um Worker corre num ambiente totalmente separado. Ele não tem acesso ao DOM, ao objeto <code>window</code> ou à <code>parent</code> page. Esta restrição é o que garante a segurança e evita condições de corrida complexas.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 bg-card border rounded-xl border-white/5 shadow-lg">
            <h4 class="font-bold text-primary mb-2 text-xs">O que o Worker PODE usar:</h4>
            <ul class="text-[10px] space-y-1 opacity-80 font-mono">
              <li>Navigator (User Agent, etc.)</li>
              <li>Location (Read-only)</li>
              <li>XMLHttpRequest / Fetch API</li>
              <li>Timers (setTimeout/Interval)</li>
              <li>Web Crypto & IndexedDB</li>
            </ul>
          </div>
          <div class="p-4 bg-card border rounded-xl border-red-500/20 shadow-lg">
            <h4 class="font-bold text-red-400 mb-2 text-xs">O que o Worker NÃO PODE usar:</h4>
            <ul class="text-[10px] space-y-1 opacity-80 font-mono">
              <li>O DOM (document, querySelector)</li>
              <li>Alertas (alert, confirm)</li>
              <li>A aba do utilizador diretamente</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 2. COMUNICAÇÃO -->
      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Protocolo postMessage: O Correio entre Threads</h3>
        <p class="text-sm leading-relaxed">A comunicação é feita exclusivamente através de mensagens assíncronas. Os dados passados são copiados (clonados) por padrão, garantindo que uma thread não altere a memória da outra sem aviso.</p>

        <div class="space-y-4">
           <h4 class="font-bold text-primary text-xs uppercase tracking-widest">Exemplo: Orquestrando o Worker</h4>
           <pre><code class="language-javascript">
// 1. No script principal (main.js)
const myWorker = new Worker('worker-engine.js');

// Enviando dados para o worker
myWorker.postMessage({ cmd: 'START', data: [1, 2, 3] });

// Ouvindo a resposta
myWorker.onmessage = (e) => {
  console.log('Resposta do Worker:', e.data.result);
};

// 2. Dentro do worker (worker-engine.js)
onmessage = (e) => {
  const result = e.data.data.reduce((a, b) => a + b, 0);
  postMessage({ result: result });
};
           </code></pre>
        </div>
      </section>

      <!-- 3. TRANSFERABLE OBJECTS -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Performance de Elite: Transferable Objects</h3>
        <p class="text-sm">Ao processar imagens 4K ou buffers de áudio, copiar os dados entre threads é lento. <strong>Transferable Objects</strong> permitem "mover" a posse da memória de uma thread para outra. O custo de transferência é quase ZERO, mas a thread de origem perde o acesso ao dado instantaneamente.</p>
        
        <pre><code class="language-javascript">
// Movendo a posse de um ArrayBuffer de 100MB
const buffer = new ArrayBuffer(1024 * 1024 * 100);
myWorker.postMessage(buffer, [buffer]); 

// Nota: 'buffer.byteLength' agora será 0 na thread principal!
        </code></pre>
      </section>

      <!-- 4. GESTÃO DE ERROS -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">4. Monitorização e Término</h3>
        <p class="text-sm leading-relaxed">Workers consomem recursos do sistema. Deves terminá-los quando a tarefa for concluída para evitar fugas de memória no browser do utilizador.</p>
        
        <pre><code class="language-javascript">
// Capturando erros dentro do worker
myWorker.onerror = (e) => {
  console.error('Falha no Worker:', e.message, 'em', e.filename);
};

// Matando o worker quando não for mais necessário
myWorker.terminate();
        </code></pre>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 A Visão do Arquiteto</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Utilize Web Workers para: Encriptação, Compressão, Processamento de Imagem ou qualquer loop que dure mais de 16ms. O seu objetivo como Engenheiro Master é manter a thread principal focada apenas na renderização e na resposta ao toque do utilizador."
        </p>
      </section>
    </div>
  `,
};
