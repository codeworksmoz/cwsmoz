import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "pf-t14",
  title: "Memória: Stack vs Heap e Gestão de Recursos",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🧠 Onde vivem os teus dados?
        </h2>
        <p class="text-lg leading-relaxed">
          Um computador não guarda tudo no mesmo "saco". Para ser eficiente, a memória RAM é dividida logicamente em duas áreas com comportamentos completamente diferentes: a <strong>Stack</strong> e o <strong>Heap</strong>.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. A Stack (Pilha): Velocidade Máxima</h3>
        <p class="text-sm">A Stack é usada para dados estáticos: variáveis locais e o rasto de execução das funções. Funciona no modelo <strong>LIFO</strong> (Last In, First Out).</p>
        <ul class="list-disc ml-6 space-y-2 text-xs text-muted-foreground">
          <li><strong>O que guarda:</strong> Primitivos (números, booleanos) e endereços de memória (ponteiros).</li>
          <li><strong>Gestão:</strong> O computador limpa-a automaticamente assim que a função termina.</li>
          <li><strong>Performance:</strong> Ultra-rápida. O CPU acede diretamente.</li>
        </ul>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. O Heap (Monte): Flexibilidade Dinâmica</h3>
        <p class="text-sm">O Heap é uma área de memória grande e desorganizada usada para dados que precisam de um tamanho flexível ou que devem durar mais tempo.</p>
        <ul class="list-disc ml-6 space-y-2 text-xs text-muted-foreground">
          <li><strong>O que guarda:</strong> Objetos, Arrays, Classes e Closures.</li>
          <li><strong>Gestão:</strong> Exige um "Garbage Collector" (JS/Python) ou limpeza manual (C++).</li>
          <li><strong>Performance:</strong> Mais lenta. O computador precisa de "procurar" o espaço livre para alocar.</li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🧱 A Analogia do Escritório</h3>
          <p class="text-sm leading-relaxed mb-4">
            Imagine que o programador está a trabalhar numa secretária:
          </p>
          <ul class="space-y-3">
            <li class="flex gap-4">
              <span class="font-bold text-accent">A Stack:</span> É a superfície da mesa. Tens as ferramentas que estás a usar AGORA à mão. É rápido, mas o espaço é pequeno. Quando acabas a tarefa, limpas a mesa num segundo.
            </li>
            <li class="flex gap-4">
              <span class="font-bold text-accent">O Heap:</span> É o arquivo morto ou armazém. Podes guardar caixas enormes lá, mas demora tempo a ir buscar e precisas de alguém (Garbage Collector) para ver o que já não serve e deitar fora.
            </li>
          </ul>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Por que isto importa?
          </h4>
          <p class="text-sm leading-relaxed">
            Entender a diferença ajuda-te a evitar o <strong>Stack Overflow</strong> (quando chamas demasiadas funções recursivas) e <strong>Memory Leaks</strong> (quando guardas coisas no Heap e nunca as limpas). Um engenheiro de elite sabe sempre se o seu dado é um "valor" (Stack) ou uma "referência" (Heap).
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "pf-t14-quiz"
};
