
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "des-t19",
  title: "Saga Pattern: Transações Distribuídas",
  quizId: "des-q19-master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">⚖️ Consistência em Microserviços</h2>
        <p class="text-lg">Como garantir que um pedido seja cobrado E enviado se os dados vivem em bases separadas? O padrão **Saga** utiliza uma sequência de transações locais e compensações.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">Transações Compensatórias</h3>
        <p class="text-sm leading-relaxed">Se o passo 3 da saga (Entrega) falhar, o sistema deve disparar ações para desfazer o passo 1 (Pagamento) e o passo 2 (Reserva de stock).</p>
      </div>
    </div>
  `
};
