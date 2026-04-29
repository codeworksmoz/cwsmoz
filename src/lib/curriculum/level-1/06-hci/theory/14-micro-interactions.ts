import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "hci-t14",
  title: "Micro-interações: O Segredo do Delight",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">✨ Detalhes que Criam o Produto</h2>
        <p class="text-lg leading-relaxed">Micro-interações são pequenos momentos funcionais que cumprem uma única tarefa e dão "vida" ao sistema. Elas são a diferença entre uma ferramenta e um produto amado.</p>
      </div>

      <div class="prose prose-invert max-w-none">
        <h3>Os 4 Pilares da Micro-interação (Dan Saffer):</h3>
        <ol class="space-y-3">
          <li><strong>Trigger (Gatilho):</strong> O que inicia a ação (ex: clicar no botão, receber notificação).</li>
          <li><strong>Rules (Regras):</strong> O que acontece internamente (lógica de negócio).</li>
          <li><strong>Feedback (Resposta):</strong> Como o utilizador sabe que funcionou (ex: animação, som, cor).</li>
          <li><strong>Loops & Modes:</strong> O que acontece se a ação se repetir ou mudar no tempo.</li>
        </ol>
      </div>
    </div>
  `,
  quizId: "hci-q14"
};