import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "ds-t4",
  title: "Queues: Lógica FIFO, Deques e Buffers",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🚶 First-In, First-Out (FIFO)
        </h2>
        <p class="text-lg leading-relaxed">
          A Fila garante a ordem de chegada. O primeiro elemento a entrar é obrigatoriamente o primeiro a ser processado. Vital para sistemas assíncronos e troca de mensagens (Message Queues).
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">1. Filas Circulares e Buffers</h3>
        <p class="text-sm">Para evitar o desperdício de espaço num array fixo, usamos o conceito de **Circular Queue**, onde o fim da fila "dobra" de volta para o início usando o operador módulo (%).</p>

        <h3 class="text-xl font-bold font-headline text-accent">2. O Deque (Double-Ended Queue)</h3>
        <p class="text-sm">Uma variação poderosa que permite inserção e remoção em ambas as pontas. É a estrutura ideal para algoritmos que precisam de comportamento de Pilha e Fila simultaneamente.</p>
        
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h4 class="font-bold text-indigo-400 mb-2">🚀 Uso em Redes e SO</h4>
          <p class="text-sm leading-relaxed">
            Filas de pacotes em roteadores e filas de prontidão (Ready Queue) no escalonamento de processos da CPU dependem da estabilidade desta estrutura.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "ds-mq4"
};
