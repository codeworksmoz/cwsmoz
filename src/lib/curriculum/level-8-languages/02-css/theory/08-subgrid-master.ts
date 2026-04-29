import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m8",
  title: "Fase 2: Subgrid - Sincronização de Layouts Complexos",
  enableInteractive: true,
  quizId: "css-mq6",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          📐 Alinhamento Sem Fronteiras
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O <strong>Subgrid</strong> é o "Santo Graal" do alinhamento. Ele permite que um elemento filho adote o grid do seu elemento pai como seu, garantindo que componentes internos de diferentes containers se alinhem perfeitamente entre si.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Resolvendo o Problema do Alinhamento</h3>
        <p class="text-sm">Imagina três cards. Cada um tem um título e uma descrição. Sem subgrid, se um título tiver 2 linhas e o outro tiver 1, as descrições ficarão desalinhadas horizontalmente. Com subgrid, elas partilham a mesma "trilha" de grid.</p>
        
        <div class="space-y-4">
           <pre><code class="language-html">
&lt;style&gt;
  .main-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* Criamos 2 linhas: uma para títulos, outra para textos */
    grid-template-rows: auto auto;
    gap: 20px;
    background: #f8fafc;
    padding: 20px;
  }
  .card {
    /* O card ocupa as 2 linhas do grid principal */
    grid-row: span 2;
    display: grid;
    /* MÁGICA: O card usa o grid do pai para as suas próprias linhas */
    grid-template-rows: subgrid;
    background: white;
    border: 1px solid #ddd;
    border-radius: 12px;
    padding: 15px;
  }
  .title { background: #dbeafe; padding: 10px; font-weight: bold; }
  .desc { padding: 10px; color: #64748b; }
&lt;/style&gt;

&lt;div class="main-grid"&gt;
  &lt;div class="card"&gt;
    &lt;div class="title"&gt;Título Curto&lt;/div&gt;
    &lt;div class="desc"&gt;Descrição fixa na linha 2.&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="card"&gt;
    &lt;div class="title"&gt;Título Muito Mais Longo que ocupa duas linhas&lt;/div&gt;
    &lt;div class="desc"&gt;Mesmo com o título maior, eu continuo alinhado!&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="card"&gt;
    &lt;div class="title"&gt;Título Médio&lt;/div&gt;
    &lt;div class="desc"&gt;Sincronia total.&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
           </code></pre>
        </div>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Quando Usar?</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Subgrid é essencial para tabelas complexas, dashboards de múltiplos cards e formulários onde os campos devem alinhar as suas labels independentemente da estrutura do container."
        </p>
      </section>
    </div>
  `
};
