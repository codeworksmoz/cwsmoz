
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "js-m12",
  title: "Gestão de Memória: Heap, Stack e GC Internals",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🧠 Onde vivem os teus dados</h2>
        <p class="text-lg leading-relaxed">Dominar a memória é o que separa um programador de um Engenheiro Master. No JavaScript, a memória é dividida em duas áreas principais:</p>
      </div>

      <div class="grid md:grid-cols-2 gap-4">
        <div class="p-4 bg-card border rounded-xl">
          <h4 class="font-bold text-accent mb-2">Stack (Pilha)</h4>
          <p class="text-xs">Dados primitivos (números, booleano) e ponteiros. Limpeza automática, ultra-rápida.</p>
        </div>
        <div class="p-4 bg-card border rounded-xl">
          <h4 class="font-bold text-accent mb-2">Heap (Monte)</h4>
          <p class="text-xs">Objetos complexos, arrays e closures. Requer o Garbage Collector para limpeza.</p>
        </div>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-bold font-headline text-primary">Mark-and-Sweep Algorithm</h3>
        <p>O Garbage Collector (GC) funciona marcando todos os objetos que ainda têm uma rota até ao objeto global. O que não for alcançável é varrido (sweep) da memória.</p>
        
        <div class="bg-red-500/5 p-4 rounded-xl border border-red-500/20 text-xs">
          <strong>Memory Leak Alert:</strong> Referências globais esquecidas ou closures que capturam objetos massivos e nunca são destruídas impedem o GC de fazer o seu trabalho, causando lentidão no site.
        </div>
      </div>
    </div>
  `,
  quizId: "js-mq12"
};
