import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "net-t2",
  title: "Camada Física: Sinalização, Modulação e Meios de Transmissão",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">📡 Transformando Tensão em Dados</h2>
        <p class="text-lg leading-relaxed">A camada física lida com a transmissão de bits brutos através de um canal. Aqui, a engenharia encontra a física: como representar 0s e 1s em ondas de rádio, pulsos de luz ou variações de voltagem.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">1. Modulação e Codificação</h3>
        <p class="text-sm">Para transmitir dados via rádio (WiFi/5G) ou luz (Fibra), usamos a <strong>Modulação</strong>. Alteramos a amplitude, frequência ou fase de uma onda portadora para transportar informação digital.</p>
        
        <h3 class="text-xl font-bold font-headline">2. Meios de Transmissão Industrial</h3>
        <ul class="grid md:grid-cols-2 gap-4">
          <li class="p-4 bg-card border rounded-xl shadow-lg">
            <strong class="text-accent">Fibra Ótica:</strong> Transmite via fotões. Imune a interferências eletromagnéticas e capaz de Terabits por segundo.
          </li>
          <li class="p-4 bg-card border rounded-xl shadow-lg">
            <strong class="text-accent">Par Trançado (UTP):</strong> O padrão Ethernet. Usa o trançado de fios para anular ruídos magnéticos externos.
          </li>
        </ul>

        <div class="bg-yellow-500/5 p-6 rounded-2xl border border-yellow-500/20 shadow-inner mt-6">
          <h4 class="font-bold text-yellow-500 mb-2">🚀 Limite de Shannon-Hartley</h4>
          <p class="text-sm leading-relaxed">A velocidade máxima de um cabo não é infinita. Ela é limitada pela largura de banda (Hz) e pelo ruído. Entender o <i>Signal-to-Noise Ratio (SNR)</i> é vital para projetar infraestruturas resilientes em áreas industriais.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "net-mq2"
};
