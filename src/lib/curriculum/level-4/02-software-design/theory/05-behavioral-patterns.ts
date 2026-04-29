import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "des-t5",
  title: "Design Patterns: Padrões Comportamentais (Behavioral)",
  quizId: "des-q5-master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🤝 Orquestrando o Comportamento</h2>
        <p class="text-lg leading-relaxed">
          Padrões comportamentais focam nos algoritmos e na atribuição de responsabilidades entre objetos. Eles descrevem não apenas os padrões de objetos ou classes, mas também os padrões de comunicação entre eles.
        </p>
      </div>

      <div class="space-y-6">
        <div class="p-4 bg-card border rounded-xl border-white/5">
          <h4 class="font-bold text-accent mb-1">Strategy</h4>
          <p class="text-xs">Define uma família de algoritmos e torna-os intercambiáveis em tempo de execução. Ex: Diferentes formas de calcular frete ou descontos.</p>
        </div>

        <div class="p-4 bg-card border rounded-xl border-white/5">
          <h4 class="font-bold text-accent mb-1">Observer (Observador)</h4>
          <p class="text-xs">Define uma dependência um-para-muitos. Quando um objeto muda de estado, todos os seus dependentes são notificados automaticamente. Base da programação reativa.</p>
        </div>

        <div class="p-4 bg-card border rounded-xl border-white/5">
          <h4 class="font-bold text-accent mb-1">Command</h4>
          <p class="text-xs">Encapsula um pedido como um objeto, permitindo parametrizar clientes com diferentes pedidos, enfileirar ou fazer o log de pedidos e suportar operações que podem ser desfeitas (Undo).</p>
        </div>

        <div class="p-4 bg-card border rounded-xl border-white/5">
          <h4 class="font-bold text-accent mb-1">State</h4>
          <p class="text-xs">Permite que um objeto altere o seu comportamento quando o seu estado interno muda. O objeto parecerá ter mudado de classe.</p>
        </div>
      </div>
    </div>
  `
};