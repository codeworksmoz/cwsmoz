import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "se-t12",
  title: "Gestão de Débito Técnico e Refatoração: A Ciência do Equilíbrio",
  quizId: "se-q12-master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          💳 A Metáfora Financeira do Código
        </h2>
        <p class="text-lg leading-relaxed">
          O <strong>Débito Técnico</strong>, termo cunhado por Ward Cunningham, descreve o custo de escolher uma solução rápida e suja agora em vez de uma bem desenhada. Tal como um empréstimo bancário, o débito técnico cobra <strong>juros</strong> sob a forma de dificuldade acrescida na manutenção futura.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Os Quadrantes do Débito (Martin Fowler)</h3>
        <p class="text-sm">Nem todo o débito é mau. O Engenheiro Master sabe classificar a origem da "dívida":</p>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-card border rounded-xl border-red-500/20">
            <h4 class="font-bold text-red-400 mb-1">Imprudente (Reckless)</h4>
            <p class="text-[10px] opacity-70">"Não temos tempo para design/testes". <br/><b>Deliberado:</b> Falta de ética ou amadorismo. <br/><b>Inadvertido:</b> Falta de conhecimento da equipa.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-green-500/20">
            <h4 class="font-bold text-green-400 mb-1">Prudente (Prudent)</h4>
            <p class="text-[10px] opacity-70">"Precisamos de lançar o MVP para validar o mercado". <br/><b>Deliberado:</b> Decisão estratégica consciente de pagar os juros depois. <br/><b>Inadvertido:</b> "Agora percebemos como devíamos ter feito".</p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 text-primary">2. Refatoração: Pagando o Principal</h3>
        <p class="text-sm leading-relaxed">
          Refatorar é o processo de alterar a <strong>estrutura interna</strong> do código sem alterar o seu <strong>comportamento externo</strong>. É um investimento técnico para reduzir os juros e aumentar a velocidade de desenvolvimento futuro.
        </p>
        
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-2">💎 A Regra do Boy Scout (Escoteiro)</h4>
          <p class="text-sm italic">"Deixe o código sempre um pouco mais limpo do que o encontrou."</p>
          <p class="text-[10px] mt-2 leading-relaxed opacity-60">
            Não esperes por um "Sprint de Refatoração" que o PO nunca aprovará. Refatoração de elite é contínua e incremental: limpa uma variável confusa hoje, divide uma função gigante amanhã.
          </p>
        </div>

        <h3 class="text-xl font-bold font-headline">3. Indicadores de Débito (Code Smells)</h3>
        <p class="text-sm">Como identificar que a dívida está a sair do controlo?</p>
        <ul class="list-disc ml-6 space-y-2 text-xs text-muted-foreground">
          <li><strong>Rigidez:</strong> Uma mudança simples exige alterações em 10 ficheiros diferentes.</li>
          <li><strong>Fragilidade:</strong> Mudas algo aqui e quebras algo num módulo que parecia não ter relação.</li>
          <li><strong>Imobilidade:</strong> Impossível extrair uma parte do código para reutilização noutro projeto.</li>
          <li><strong>Viscosidade:</strong> Fazer a coisa certa é muito mais difícil do que fazer o "hack" rápido.</li>
        </ul>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6 shadow-inner">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Visão de Produção
          </h4>
          <p class="text-sm leading-relaxed">
            Um sistema sem débito técnico não existe. O segredo da engenharia master é a <strong>Transparência</strong>: documente o débito, crie itens no backlog para o pagar e monitorize métricas de complexidade ciclomática para garantir que o sistema não se torne "inavegável".
          </p>
        </div>
      </div>
    </div>
  `
};
