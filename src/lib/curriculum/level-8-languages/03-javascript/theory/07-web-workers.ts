import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "js-m7",
  title: "Fase 2: Web Workers: Paralelismo Real no Browser",
  enableInteractive: true,
  youtubeVideoId: "8ME9u065vD4",
  quizId: "js-mq7",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🧵 Quebrando a Single Thread
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          JavaScript é, por natureza, executado numa única thread principal (UI Thread). Se realizares um cálculo pesado de 2 segundos, o site "congela" e o utilizador não consegue clicar em nada. Os <strong>Web Workers</strong> permitem-te criar threads reais de background para processamento intensivo, mantendo a interface suave a 60 FPS.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Isolamento e Comunicação</h3>
        <p class="text-sm leading-relaxed">
          Um Worker corre num ambiente totalmente separado. Ele não tem acesso ao <strong>DOM</strong>, ao objeto <code>document</code> ou à <code>window</code>. A comunicação é feita exclusivamente via mensagens assíncronas.
        </p>
        
        <div class="bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner">
           <h4 class="font-bold text-primary text-xs mb-4 uppercase">Fluxo de Mensagens</h4>
           <pre><code class="language-javascript">
// main.js (Thread Principal)
const worker = new Worker('engine-worker.js');

worker.postMessage({ cmd: 'COMPUTE', data: massiveArray });

worker.onmessage = (e) => {
  console.log('Resultado do processamento paralelo:', e.data);
};

// engine-worker.js (Thread de Background)
onmessage = (e) => {
  const result = heavyCalculation(e.data);
  postMessage(result);
};
           </code></pre>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Performance de Elite: Transferable Objects</h3>
        <p class="text-sm leading-relaxed">Normalmente, ao enviar dados para um Worker, o browser faz uma <strong>cópia estruturada</strong> (clonagem). Se enviares 100MB de dados, vais gastar tempo e RAM na cópia. No nível Master, usamos <strong>Transferable Objects</strong> (como ArrayBuffer).</p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-2">Zero-Copy Transfer:</h4>
          <p class="text-xs leading-relaxed">
            A memória é "movida" de uma thread para outra. O custo de transferência é quase zero. ⚠️ <strong>Atenção:</strong> A thread de origem perde o acesso ao dado instantaneamente após o envio.
          </p>
          <pre><code class="language-javascript">
const buffer = new ArrayBuffer(1024 * 1024); // 1MB
// O segundo argumento indica que queremos TRANSFERIR o buffer, não copiar.
worker.postMessage(buffer, [buffer]);
          </code></pre>
        </div>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Quando Usar Workers?</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Utilize Web Workers para: Processamento de Imagem, Encriptação de Dados, Compressão de Ficheiros ou qualquer loop complexo que dure mais de 16ms. Se o utilizador sentir um 'engasgo' na animação, a sua lógica deveria estar num Worker."
        </p>
      </section>
    </div>
  `
};
