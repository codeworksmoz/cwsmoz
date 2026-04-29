
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m6",
  title: "Formulários Master: Validação e UX Profissional",
  content: `
    <div class="space-y-8">
      <div class="bg-blue-500/10 p-6 rounded-2xl border border-blue-500/20 shadow-inner">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 font-headline">
          📝 A Engenharia da Conversão
        </h2>
        <p class="text-lg">No nível Master, formulários não são apenas caixas de texto. São sistemas de validação resilientes que poupam processamento no servidor e garantem integridade de dados.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline text-primary">Atributos de Validação Nativa</h3>
        <p>O browser possui um motor de validação potente. Usar <code>pattern</code> com Regex nativo é 10x mais rápido que validar com uma biblioteca JS externa.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-sm border border-white/5">
          <span class="text-primary">&lt;input</span> <span class="text-accent">type</span>=<span class="text-green-400">"text"</span> <span class="text-accent">required</span> <span class="text-accent">minlength</span>=<span class="text-green-400">"5"</span> <span class="text-accent">pattern</span>=<span class="text-green-400">"[A-Z]+"</span><span class="text-primary">&gt;</span>
        </div>

        <h3 class="text-xl font-bold font-headline">Datalist: Autocomplete Nativo</h3>
        <p>Forneça sugestões ao utilizador sem carregar 100KB de bibliotecas pesadas. O <code>&lt;datalist&gt;</code> é indexado pelo motor do browser e respeita o tema do sistema operativo.</p>
        
        <h3 class="text-xl font-bold font-headline text-accent">Inputmode e Teclados Virtuais</h3>
        <p>Em Moçambique, onde o acesso mobile é rei, deves ditar qual teclado o utilizador vê. Isto reduz drasticamente a taxa de abandono de formulários.</p>
        <ul class="grid grid-cols-2 gap-4 text-xs font-code">
          <li class="bg-card p-3 rounded border border-white/5">inputmode="numeric" -> Apenas números</li>
          <li class="bg-card p-3 rounded border border-white/5">inputmode="tel" -> Teclado telefónico</li>
          <li class="bg-card p-3 rounded border border-white/5">inputmode="email" -> Teclado com @</li>
          <li class="bg-card p-3 rounded border border-white/5">inputmode="search" -> Botão "Ir" azul</li>
        </ul>

        <h3 class="text-xl font-bold font-headline">O Desafio dos Formulários Master</h3>
        <p>Aprenderás a usar a <strong>Constraint Validation API</strong> para criar mensagens de erro customizadas que respeitam a língua local sem usar frameworks de UI.</p>
      </div>
    </div>
  `,
  quizId: "html-mq6"
};
