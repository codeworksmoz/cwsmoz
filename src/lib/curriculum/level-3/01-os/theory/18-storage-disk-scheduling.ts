
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "os-t18",
  title: "Storage Management: Disk Scheduling (SCAN, C-SCAN)",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">💿 Otimizando a Cabeça de Leitura</h2>
        <p class="text-lg leading-relaxed">Em HDDs mecânicos, o tempo de busca (Seek Time) é o gargalo. O SO usa algoritmos para minimizar o movimento da agulha física.</p>
      </div>

      <div class="space-y-6">
        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl"><strong>SSTF (Shortest Seek Time First):</strong> Atende o pedido mais perto da posição atual. Pode causar <i>starvation</i> de pedidos em bordas distantes.</li>
          <li class="p-4 bg-muted/20 rounded-xl"><strong>SCAN (Elevator):</strong> A agulha vai de uma ponta a outra, atendendo o que encontra no caminho, e inverte o sentido.</li>
        </ul>
        <p class="text-xs text-muted-foreground italic">Nota: Para SSDs, estes algoritmos são obsoletos, pois não há partes móveis. O foco muda para <b>Wear Leveling</b> e gestão de canais flash paralelos.</p>
      </div>
    </div>
  `,
  quizId: "os-q18"
};
