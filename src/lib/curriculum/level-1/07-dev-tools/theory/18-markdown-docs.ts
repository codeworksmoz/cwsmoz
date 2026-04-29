import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "dt-t18",
  title: "Markdown: A Linguagem da Documentação Profissional",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          📝 Escrevendo para o Futuro
        </h2>
        <p class="text-lg"><strong>Markdown</strong> é uma linguagem de marcação leve que permite formatar texto simples e transformá-lo em documentação rica. É o padrão do GitHub para READMEs e manuais técnicos.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">1. Anatomia do README.md</h3>
        <p class="text-sm">Um README de elite deve conter: Título, Descrição, Guia de Instalação, Como Usar e Licença. É a primeira coisa que um recrutador ou colega vê no teu projeto.</p>
        
        <h3 class="text-xl font-bold font-headline text-accent">2. Sintaxe para Engenheiros</h3>
        <ul class="space-y-2 text-xs font-mono">
          <li><b># Título:</b> Cabeçalhos hierárquicos.</li>
          <li><b>\`code\`:</b> Código inline ou blocos com destaque de sintaxe.</li>
          <li><b>[Texto](url):</b> Links e referências externas.</li>
          <li><b>- [ ] Lista:</b> Gestão de tarefas e checklists.</li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 mt-6 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-2">🚀 Dica de Documentação</h4>
          <p class="text-sm leading-relaxed">Use ferramentas como <strong>Docusaurus</strong> ou <strong>GitBook</strong> para transformar os teus ficheiros Markdown num site de documentação completo e pesquisável automaticamente.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "dt-q18"
};