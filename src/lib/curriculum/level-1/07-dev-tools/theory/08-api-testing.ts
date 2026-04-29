import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "dt-t8",
  title: "API Testing: Postman e Automação de Requests",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          📡 Validando o Contrato de Dados
        </h2>
        <p class="text-lg">Desenvolver aplicações modernas exige testar os endpoints do servidor antes de os ligar ao frontend. Ferramentas como <strong>Postman</strong> são o laboratório desta validação.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">1. Anatomia do Request Profissional</h3>
        <ul class="space-y-2 text-sm">
          <li><strong>Auth Headers:</strong> Envio de tokens JWT para segurança.</li>
          <li><strong>Query Params:</strong> Filtros passados na URL (ex: ?page=2).</li>
          <li><strong>Body:</strong> O payload real, geralmente um objeto JSON.</li>
        </ul>

        <h3 class="text-xl font-bold font-headline">2. Ambientes (Environments)</h3>
        <p class="text-sm">Um engenheiro de elite nunca digita a URL completa. Ele usa variáveis (ex: {{base_url}}) para alternar instantaneamente entre o ambiente de <i>Desenvolvimento Local</i> e o de <i>Produção</i>.</p>
        
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-2">🚀 Automação de Testes</h4>
          <p class="text-sm leading-relaxed">No Postman, podes escrever scripts JavaScript que verificam se o servidor respondeu em menos de 200ms e se o formato dos dados recebidos está correcto, automatizando o teu QA.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "dt-q8"
};