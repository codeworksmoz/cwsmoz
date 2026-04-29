
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "os-t16",
  title: "Real-time OS (RTOS): Determinismo e Latência Baixa",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">⏱️ O Tempo como Requisito</h2>
        <p class="text-lg leading-relaxed">Em sistemas comuns (Windows/Linux), o objetivo é a média de performance. Em um <strong>RTOS</strong>, o objetivo é o <strong>Determinismo</strong>: garantir que uma tarefa responda em exatamente X microssegundos, nem mais, nem menos.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-4">
        <div class="p-4 bg-card border rounded-xl border-red-500/20">
          <h4 class="font-bold text-red-400">Hard Real-time</h4>
          <p class="text-xs">Falhar o deadline é uma falha total do sistema (Ex: Airbags, Controle de Voo).</p>
        </div>
        <div class="p-4 bg-card border rounded-xl border-yellow-500/20">
          <h4 class="font-bold text-yellow-400">Soft Real-time</h4>
          <p class="text-xs">Falhar o deadline degrada a qualidade mas não é catastrófico (Ex: Vídeo Streaming).</p>
        </div>
      </div>
    </div>
  `,
  quizId: "os-q16"
};
