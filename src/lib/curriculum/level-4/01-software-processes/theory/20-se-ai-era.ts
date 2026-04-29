import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "se-t20",
  title: "Engenharia na Era da IA: Produtividade com Rigor",
  quizId: "se-q20-master",
  content: `
    <div class="space-y-8">
      <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-indigo-400 flex items-center gap-2">
          🤖 O Engenheiro de Software como Orquestrador
        </h2>
        <p class="text-lg leading-relaxed">
          A Inteligência Artificial Generativa não substitui o engenheiro de software; ela substitui a tarefa mecânica. No nível Master, utilizamos a IA como um <strong>Pair Programmer de ultra-velocidade</strong>, mantendo o controlo total sobre a arquitetura, a segurança e a validação crítica da lógica gerada.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. O Risco da Alucinação e a Validação Humana</h3>
        <p class="text-sm">Modelos de Linguagem (LLMs) são estatísticos, não lógicos. Eles podem gerar código que "parece" perfeito mas contém bugs subtis, chamadas a APIs inexistentes ou vulnerabilidades de segurança (ex: injeção de SQL).</p>
        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block mb-1">Protocolo Zero Trust AI:</strong> Nunca faça commit de código gerado por IA sem o entender linha a linha. O seu papel mudou de <i>Escritor</i> para <strong>Editor e Auditor Chefe</strong>. Se você não consegue explicar o que o código gerado faz, você não deve usá-lo.
          </li>
        </ul>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 text-primary">2. IA no Ciclo de Vida (SDLC)</h3>
        <p class="text-sm mb-4">Como alavancar a IA em cada fase do projeto para atingir performance de elite:</p>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="p-4 bg-card border rounded-xl border-white/5 hover:border-primary/50 transition-colors">
            <h4 class="font-bold text-accent text-xs mb-1">Análise e Requisitos</h4>
            <p class="text-[10px] opacity-70">Use a IA para gerar cenários de erro, <i>Edge Cases</i> e casos de teste a partir de uma descrição de User Story.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5 hover:border-primary/50 transition-colors">
            <h4 class="font-bold text-accent text-xs mb-1">Codificação e Boilerplate</h4>
            <p class="text-[10px] opacity-70">Acelere a escrita de estruturas repetitivas, DTOs, Mappers e configurações de ambiente (Docker/CI).</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5 hover:border-primary/50 transition-colors">
            <h4 class="font-bold text-accent text-xs mb-1">Refactoring e Testes</h4>
            <p class="text-[10px] opacity-70">Injete funções complexas e peça à IA para sugerir formas mais limpas (Clean Code) ou gerar a base dos Testes Unitários.</p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">3. Prompt Engineering para Engenheiros</h3>
        <p class="text-sm">Um prompt master deve conter **Contexto, Restrição e Objetivo**. <br/><br/><i>"Como um Senior Rust Engineer (Contexto), refatorize esta função para evitar alocações no heap (Restrição), mantendo a compatibilidade com a versão 1.5 (Objetivo)."</i></p>

        <div class="bg-red-500/10 p-6 rounded-2xl border border-red-500/20 shadow-inner mt-6">
          <h3 class="text-xl font-bold font-headline text-red-400 mb-4">🛡️ Segurança de Dados e Propriedade Intelectual</h3>
          <p class="text-sm leading-relaxed mb-4">
            Este é o ponto onde muitos amadores falham. Um engenheiro Master respeita a privacidade:
          </p>
          <ul class="list-disc ml-6 space-y-2 text-xs text-muted-foreground">
            <li><strong>Nunca</strong> envie chaves de API, segredos ou certificados para um prompt de IA pública.</li>
            <li><strong>Nunca</strong> submeta código proprietário ou dados reais de clientes sem autorização expressa da empresa e garantias de privacidade (instâncias empresariais).</li>
            <li>Use ferramentas como <strong>Cursor</strong> ou <strong>GitHub Copilot</strong> com as configurações de privacidade ativadas para evitar que o seu código seja usado para treinar modelos globais.</li>
          </ul>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6 shadow-inner">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 O Futuro da Profissão
          </h4>
          <p class="text-sm leading-relaxed">
            A IA reduziu a barreira de entrada para a "sintaxe". No entanto, ela <strong>aumentou a necessidade</strong> de conhecimentos profundos em algoritmos, arquitetura de sistemas e segurança. A IA pode escrever a função, mas só o Engenheiro Master sabe se aquela função é a peça certa para o sistema que está a ser construído.
          </p>
        </div>
      </div>
    </div>
  `
};
