import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m7",
  title: "Fase 2: Tabelas Complexas e Organização de Dados",
  enableInteractive: true,
  quizId: "html-mq7",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          📊 Engenharia de Dados Tabulares
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Tabelas não são para layout; são para <strong>dados multidimensionais</strong>. No nível Master, construímos tabelas que mantêm a acessibilidade em estruturas complexas e se adaptam a ecrãs pequenos sem perder o contexto.
        </p>
      </div>

      <!-- 1. ESTRUTURA SEMÂNTICA -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Anatomia Master: thead, tbody e tfoot</h3>
        <p class="text-sm">Uma tabela bem estruturada separa o cabeçalho, o corpo e o rodapé. Isto permite que o browser repita o cabeçalho em cada página ao imprimir e facilita a navegação por teclado.</p>
        
        <div class="space-y-4">
           <pre><code class="language-html">
&lt;table border="1" style="width: 100%; border-collapse: collapse;"&gt;
  &lt;caption style="padding: 10px; font-weight: bold;"&gt;Relatório Mensal de Vendas - 2024&lt;/caption&gt;
  &lt;thead style="background: #f1f5f9;"&gt;
    &lt;tr&gt;
      &lt;th scope="col" style="padding: 10px;"&gt;Produto&lt;/th&gt;
      &lt;th scope="col" style="padding: 10px;"&gt;Quantidade&lt;/th&gt;
      &lt;th scope="col" style="padding: 10px;"&gt;Total&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;th scope="row" style="padding: 10px; text-align: left;"&gt;Licença Master&lt;/th&gt;
      &lt;td style="padding: 10px; text-align: center;"&gt;50&lt;/td&gt;
      &lt;td style="padding: 10px; text-align: right;"&gt;50.000 MT&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th scope="row" style="padding: 10px; text-align: left;"&gt;Suporte 24/7&lt;/th&gt;
      &lt;td style="padding: 10px; text-align: center;"&gt;10&lt;/td&gt;
      &lt;td style="padding: 10px; text-align: right;"&gt;25.000 MT&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
  &lt;tfoot style="background: #eff6ff; font-weight: bold;"&gt;
    &lt;tr&gt;
      &lt;th scope="row" colspan="2" style="padding: 10px; text-align: left;"&gt;Total Geral&lt;/th&gt;
      &lt;td style="padding: 10px; text-align: right;"&gt;75.000 MT&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tfoot&gt;
&lt;/table&gt;
           </code></pre>
        </div>
      </section>

      <!-- 2. MESCLAGEM DE CÉLULAS -->
      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Rowspan e Colspan: Otimização de Células</h3>
        <p class="text-sm leading-relaxed">Quando os dados partilham a mesma categoria, usamos a mesclagem para reduzir o ruído visual e melhorar a leitura.</p>

        <div class="space-y-4">
           <h4 class="font-bold text-primary text-xs uppercase tracking-widest">Exemplo: Matriz de Horários</h4>
           <pre><code class="language-html">
&lt;table border="1" style="width: 100%; border-collapse: collapse; text-align: center;"&gt;
  &lt;tr style="background: #f8fafc;"&gt;
    &lt;th style="padding: 10px;"&gt;Hora&lt;/th&gt;
    &lt;th style="padding: 10px;"&gt;Segunda&lt;/th&gt;
    &lt;th style="padding: 10px;"&gt;Terça&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td style="padding: 10px;"&gt;08:00&lt;/td&gt;
    &lt;!-- Colspan: Ocupa 2 colunas --&gt;
    &lt;td colspan="2" style="background: #dbeafe;"&gt;Revisão de Arquitetura Master&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td style="padding: 10px;"&gt;09:00&lt;/td&gt;
    &lt;!-- Rowspan: Ocupa 2 linhas --&gt;
    &lt;td rowspan="2" style="background: #fef3c7;"&gt;Sprint Planning&lt;/td&gt;
    &lt;td style="padding: 10px;"&gt;Code Review&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td style="padding: 10px;"&gt;10:00&lt;/td&gt;
    &lt;td style="padding: 10px;"&gt;Mentoria Individual&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;
           </code></pre>
        </div>
      </section>

      <!-- 3. ACESSIBILIDADE E SCOPE -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Acessibilidade Master: O Atributo scope</h3>
        <p class="text-sm">Para tabelas complexas, o leitor de ecrã precisa de saber se um <code>&lt;th&gt;</code> é o cabeçalho de uma <strong>coluna</strong> ou de uma <strong>linha</strong>. O atributo <code>scope</code> é o contrato de acessibilidade que resolve este problema.</p>
        
        <ul class="space-y-4">
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
            <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 font-bold">col</div>
            <div>
              <p class="font-bold text-sm">scope="col":</p>
              <p class="text-xs text-muted-foreground">Indica que a célula de cabeçalho se aplica a todos os dados na coluna abaixo dela.</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
            <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 font-bold">row</div>
            <div>
              <p class="font-bold text-sm">scope="row":</p>
              <p class="text-xs text-muted-foreground">Indica que a célula de cabeçalho identifica os dados à sua direita na mesma linha.</p>
            </div>
          </li>
        </ul>
      </section>

      <!-- 4. COLGROUP -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">4. Colgroup e Col: Performance de Estilo</h3>
        <p class="text-sm">Em vez de aplicar classes CSS a cada uma das centenas de <code>&lt;td&gt;</code>, podemos definir o estilo de colunas inteiras no topo da tabela, reduzindo drasticamente o tamanho do HTML.</p>
        
        <pre><code class="language-html">
&lt;table style="width: 100%; border-collapse: collapse;" border="1"&gt;
  &lt;colgroup&gt;
    &lt;col style="background-color: #f1f5f9; width: 20%;"&gt;
    &lt;col style="background-color: #ffffff; width: 60%;"&gt;
    &lt;col style="background-color: #f8fafc; width: 20%; font-weight: bold;"&gt;
  &lt;/colgroup&gt;
  &lt;tr&gt;
    &lt;td&gt;ID: 001&lt;/td&gt;
    &lt;td&gt;Descrição do Log de Engenharia&lt;/td&gt;
    &lt;td&gt;SUCESSO&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;
        </code></pre>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Regra do Engenheiro de Dados</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Uma tabela master deve ser compreensível mesmo sem visão. Se um utilizador não consegue relacionar um dado com o seu cabeçalho apenas navegando pelas células, a sua arquitetura de dados falhou."
        </p>
      </section>
    </div>
  `,
};
