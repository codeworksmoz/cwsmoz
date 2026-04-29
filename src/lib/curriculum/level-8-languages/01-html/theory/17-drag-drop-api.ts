import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m17",
  title: "Fase 3: Drag and Drop API: Orquestração de Interatividade Nativa",
  enableInteractive: true,
  quizId: "html-mq17",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🖱️ Além do Clique: Manipulação Direta
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          A <strong>Drag and Drop API</strong> nativa do HTML5 permite que cries interfaces altamente interativas (como quadros Kanban ou gestores de ficheiros) sem a necessidade de bibliotecas externas pesadas. No nível Master, entendemos que o segredo está na gestão do objeto <code>dataTransfer</code> e na prevenção correta do comportamento padrão do browser.
        </p>
      </div>

      <!-- 1. O ATRIBUTO DRAGGABLE -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Ativando o Movimento: draggable="true"</h3>
        <p class="text-sm">Por padrão, apenas links e imagens podem ser arrastados. Para qualquer outro elemento (div, p, li), deves definir explicitamente o atributo <code>draggable</code>.</p>
        
        <div class="space-y-4">
           <pre><code class="language-html">
&lt;!-- ✅ Este card agora pode ser movido pelo utilizador --&gt;
&lt;div class="task-card" draggable="true" id="task-101"&gt;
  &lt;p&gt;Finalizar Auditoria de Segurança&lt;/p&gt;
&lt;/div&gt;
           </code></pre>
        </div>
      </section>

      <!-- 2. O CICLO DE EVENTOS -->
      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. O Ciclo de Vida do Arrastre</h3>
        <p class="text-sm leading-relaxed">A interatividade divide-se em eventos disparados no elemento que se move (Source) e no elemento que recebe (Target).</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-6 bg-card border rounded-2xl border-white/5 shadow-lg">
            <h4 class="font-bold text-primary mb-2 text-xs">No Elemento (Source)</h4>
            <ul class="text-[10px] space-y-1 opacity-70">
              <li><strong>dragstart:</strong> Configura os dados a enviar.</li>
              <li><strong>drag:</strong> Dispara enquanto o item é movido.</li>
              <li><strong>dragend:</strong> Limpeza após a largada.</li>
            </ul>
          </div>
          <div class="p-6 bg-card border rounded-2xl border-white/5 shadow-lg">
            <h4 class="font-bold text-primary mb-2 text-xs">No Destino (Target)</h4>
            <ul class="text-[10px] space-y-1">
              <li><strong>dragenter:</strong> Quando o item entra no alvo.</li>
              <li><strong>dragover:</strong> Obrigatório: e.preventDefault() para permitir a largada.</li>
              <li><strong>drop:</strong> Onde a lógica de destino acontece.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 3. DATATRANSFER OBJECT -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. DataTransfer: O Mensageiro Invisível</h3>
        <p class="text-sm">O objeto <code>dataTransfer</code> vive dentro do evento e serve para transportar informação entre a origem e o fim do movimento.</p>
        
        <pre><code class="language-javascript">
// No elemento de origem
card.addEventListener('dragstart', (e) => {
  e.dataTransfer.setData('text/plain', e.target.id);
  e.dataTransfer.dropEffect = 'move';
});

// No elemento de destino
dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  const id = e.dataTransfer.getData('text/plain');
  const draggableElement = document.getElementById(id);
  dropZone.appendChild(draggableElement);
});
        </code></pre>
      </section>

      <!-- 4. FEEDBACK VISUAL -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">4. UX de Elite: Zonas de Largada</h3>
        <p class="text-sm">Nunca deixes o utilizador na dúvida. Use estilos visuais para indicar onde o item pode ser largado.</p>
        
        <pre><code class="language-css">
/* Estilo quando um item está "por cima" da zona */
.drop-zone--active {
  background-color: rgba(59, 130, 246, 0.1);
  border: 2px dashed #3b82f6;
  transform: scale(1.02);
}
        </code></pre>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Regra do Arquiteto de Interação</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "A Drag and Drop API é baseada no modelo 'Copy and Paste' do sistema operativo. Ao dominar o <code>dataTransfer</code>, garantes que a tua aplicação web tenha a mesma fluidez e potência de um software desktop nativo."
        </p>
      </section>
    </div>
  `,
};
