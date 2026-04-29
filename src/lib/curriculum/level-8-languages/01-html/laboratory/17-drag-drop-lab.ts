import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p17",
  language: "html",
  title: "Projeto Master: Interatividade de Arrastre",
  description: "Crie componentes que podem ser movidos pelo utilizador.",
  statement: "Ative o arraste de um card e configure o receptor de queda.",
  isProjectPart: true,
  template: `<!DOCTYPE html>
<html>
  <body>
    <div class="card" draggable="true" id="card-master" style="padding:20px; background:blue; color:white;">
      Arraste-me!
    </div>
    
    <div id="drop-zone" style="margin-top:50px; height:100px; border:2px dashed gray;">
      Solte aqui
    </div>

    <script>
      const card = document.getElementById('card-master');
      const zone = document.getElementById('drop-zone');

      // Ação 1: Configure o início do arraste
      card.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
      });

      // Ação 2: Permita a queda na zona alvo
      zone.addEventListener('dragover', (e) => {
        e.preventDefault(); // Obrigatório para permitir drop
      });

      zone.addEventListener('drop', (e) => {
        e.preventDefault();
        const id = e.dataTransfer.getData('text/plain');
        zone.appendChild(document.getElementById(id));
      });
    </script>
  </body>
</html>`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🔨 Passo a Passo: Draggable</h3>
      <p class="text-sm">Ative o motor de movimento nativo:</p>
      <div class="bg-black/40 p-4 rounded-xl border border-white/10 font-mono text-[11px] leading-relaxed">
        <p><strong>Ação 1:</strong> Adicione <code>draggable="true"</code> à div de origem.</p>
        <p><strong>Ação 2:</strong> Implemente <code>e.dataTransfer.setData</code> no evento <code>dragstart</code>.</p>
        <p><strong>Ação 3:</strong> Use <code>e.preventDefault()</code> no <code>dragover</code> da zona de destino.</p>
      </div>
    </div>
  `,
  objectives: [
    { id: "draggable_attr", description: "Definir draggable='true'", test: "draggable=\"true\"" },
    { id: "dragstart_logic", description: "Configurar dataTransfer no dragstart", test: "dataTransfer.setData" },
    { id: "prevent_default", description: "Prevenir comportamento padrão no dragover", test: "e.preventDefault()" }
  ]
};
