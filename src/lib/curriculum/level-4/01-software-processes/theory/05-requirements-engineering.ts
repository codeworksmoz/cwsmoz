import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "se-t5",
  title: "Engenharia de Requisitos: Da Necessidade à Especificação de Elite",
  youtubeVideoId: "8hly31xKli0",
  quizId: "se-q5-master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🎯 O Alicerce do Sucesso
        </h2>
        <p class="text-lg leading-relaxed">
          A Engenharia de Requisitos é a disciplina de descobrir, documentar e manter os requisitos de um sistema. Um erro nesta fase é o mais caro de todo o ciclo de vida. No nível Master, não apenas "ouvimos" o cliente; nós <strong>extraímos e validamos</strong> a verdade técnica por trás das necessidades de negócio.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. O Fluxo de Engenharia de Requisitos</h3>
        <p class="text-sm">O processo não é linear, mas segue uma lógica rigorosa de refinamento:</p>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block mb-1">Elicitação (Extração):</strong> Usar técnicas como entrevistas, questionários e <i>Shadowing</i> para descobrir o que o utilizador realmente faz, não apenas o que ele diz que faz.
          </div>
          <div class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block mb-1">Análise e Negociação:</strong> Resolver conflitos entre stakeholders. Se o Marketing quer "todas as cores" e a Engenharia quer "performance extrema", a negociação ocorre aqui.
          </div>
          <div class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block mb-1">Especificação:</strong> Traduzir as necessidades em documentos técnicos (SRS) ou User Stories claras e sem ambiguidades.
          </div>
          <div class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block mb-1">Validação:</strong> Garantir que o que foi escrito é realmente o que o cliente precisa antes de começar a codificar.
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 text-primary">2. Atributos de Qualidade (Requisitos Não-Funcionais)</h3>
        <p class="text-sm">São os requisitos que ditam a <strong>Arquitetura</strong> do sistema. Se os requisitos funcionais são o "o quê", os não-funcionais são o "como".</p>
        <ul class="space-y-3">
          <li class="p-4 bg-card border rounded-xl border-green-500/20 shadow-lg">
            <strong class="text-green-400 block mb-1">Disponibilidade (Availability):</strong> O sistema deve estar online 99.9% do tempo. Isto exige redundância e failover no design.
          </li>
          <li class="p-4 bg-card border rounded-xl border-green-500/20 shadow-lg">
            <strong class="text-green-400 block mb-1">Escalabilidade:</strong> Capacidade de suportar um aumento de 10x no tráfego sem mudar o código (ex: Horizontal Scaling).
          </li>
          <li class="p-4 bg-card border rounded-xl border-green-500/20 shadow-lg">
            <strong class="text-green-400 block mb-1">Interoperabilidade:</strong> Capacidade do sistema comunicar com outros sistemas (ex: API da Vodacom ou M-Pesa) via padrões abertos.
          </li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">⚖️ Técnica MoSCoW: Priorização de Elite</h3>
          <p class="text-sm mb-4">Num projeto real, o tempo e o dinheiro são finitos. O Engenheiro Master usa MoSCoW para decidir o que entra no MVP:</p>
          <ul class="grid grid-cols-2 md:grid-cols-4 gap-2 text-[10px] font-bold uppercase text-center">
            <li class="p-3 bg-red-600/20 border border-red-600/40 rounded-lg"><strong>Must Have</strong><br/><span class="font-normal lowercase">Obrigatório</span></li>
            <li class="p-3 bg-yellow-600/20 border border-yellow-600/40 rounded-lg"><strong>Should Have</strong><br/><span class="font-normal lowercase">Importante</span></li>
            <li class="p-3 bg-blue-600/20 border border-blue-600/40 rounded-lg"><strong>Could Have</strong><br/><span class="font-normal lowercase">Desejável</span></li>
            <li class="p-3 bg-muted border border-white/10 rounded-lg"><strong>Won't Have</strong><br/><span class="font-normal lowercase">Futuro</span></li>
          </ul>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Dica de Senioridade: Rastreabilidade
          </h4>
          <p class="text-sm leading-relaxed">
            Cada linha de código deve ter um "porquê". A rastreabilidade permite ligar um bloco de código a uma User Story, que por sua vez liga a um Requisito de Negócio. Isto garante que não estás a gastar o dinheiro do cliente em funcionalidades inúteis (YAGNI).
          </p>
        </div>
      </div>
    </div>
  `
};