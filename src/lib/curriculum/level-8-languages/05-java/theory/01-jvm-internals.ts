
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "jv-m1",
  title: "JVM Internals: ClassLoading e Execução",
  content: `
    <div class="space-y-6">
      <div class="bg-orange-500/10 p-6 rounded-2xl border border-orange-500/20">
        <h2 class="text-2xl font-bold mb-4">☕ Por dentro da Máquina Virtual</h2>
        <p>Java não corre no hardware, corre na JVM. Entender este processo é vital para otimização.</p>
      </div>
      <div class="prose prose-invert max-w-none">
        <h3>Subsistema ClassLoader</h3>
        <p>Carrega, liga e inicializa as classes (.class). Segue o modelo de delegação: Bootstrap -> Extension -> Application.</p>
        
        <h3>Áreas de Memória</h3>
        <ul>
          <li><strong>Method Area:</strong> Dados das classes e constantes.</li>
          <li><strong>Heap:</strong> Onde os objetos vivem (alvo do GC).</li>
          <li><strong>Stack:</strong> Dados locais de cada thread.</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "jv-mq1"
};
