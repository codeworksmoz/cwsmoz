import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "hci-t20",
  title: "Design Systems: UI Escalável e Consistente",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🏭 A Fábrica de Interfaces de Elite</h2>
        <p class="text-lg leading-relaxed">Um Design System é a "fonte da verdade" técnica de uma empresa. Ele contém tokens de design (cores, fontes), componentes (botões, inputs) e documentação rigorosa de como utilizá-los.</p>
      </div>

      <div class="grid md:grid-cols-3 gap-4">
        <div class="p-4 bg-card border rounded-xl shadow-lg">
          <h4 class="font-bold text-accent mb-2">Consistência</h4>
          <p class="text-[10px] opacity-70">O botão é igual em todos os apps da empresa, criando confiança e rapidez de uso.</p>
        </div>
        <div class="p-4 bg-card border rounded-xl shadow-lg">
          <h4 class="font-bold text-accent mb-2">Velocidade</h4>
          <p class="text-[10px] opacity-70">Engenheiros montam interfaces complexas como se estivessem a usar peças de Lego.</p>
        </div>
        <div class="p-4 bg-card border rounded-xl shadow-lg">
          <h4 class="font-bold text-accent mb-2">Padrão Único</h4>
          <p class="text-[10px] opacity-70">Muda a cor da marca num sítio (Token) e todo o ecossistema atualiza-se sozinho.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "hci-q20"
};