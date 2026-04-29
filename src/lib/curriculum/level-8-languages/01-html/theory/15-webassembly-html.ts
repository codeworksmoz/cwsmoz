
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m15",
  title: "WebAssembly: O Binário no seu HTML",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline">⚙️ Performance Próxima do Nativo</h2>
        <p class="text-lg">O WebAssembly (Wasm) é o quarto pilar da Web (junto ao HTML, CSS e JS). Permite correr código binário compilado de linguagens como C++, Rust ou Go diretamente no browser.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">Como carregar o Binário</h3>
        <p>O HTML e o JavaScript servem como a "ponte" que descarrega e instancia o motor binário. A API moderna utiliza <i>Streaming</i> para começar a compilar enquanto o download ainda decorre.</p>
        <div class="bg-black/40 p-5 rounded-xl border font-code text-xs text-accent">
          <p>const <span class="text-primary">wasm</span> = await WebAssembly.instantiateStreaming(</p>
          <p>&nbsp;&nbsp;fetch('engine.wasm'),</p>
          <p>&nbsp;&nbsp;importObject</p>
          <p>);</p>
        </div>

        <h3 class="text-xl font-bold font-headline">Casos de Uso de Elite</h3>
        <ul class="list-disc ml-6 space-y-2">
          <li><strong>Editores de Media:</strong> Processamento de vídeo ou som pesado no cliente.</li>
          <li><strong>IA Local:</strong> Execução de redes neuronais sem precisar de enviar dados para o servidor.</li>
          <li><strong>Criptografia:</strong> Algoritmos matemáticos complexos que seriam lentos em JS.</li>
        </ul>

        <h3 class="text-xl font-bold font-headline text-primary">Shared Memory (Memória Partilhada)</h3>
        <p>O JS e o Wasm podem partilhar o mesmo bloco de memória (ArrayBuffer), permitindo trocar Gigabytes de informação em microssegundos sem custo de cópia.</p>
      </div>
    </div>
  `,
  quizId: "html-mq15"
};
