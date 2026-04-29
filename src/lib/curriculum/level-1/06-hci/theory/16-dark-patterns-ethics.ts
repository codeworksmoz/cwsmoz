import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "hci-t16",
  title: "Dark Patterns e Ética do Design Profissional",
  content: `
    <div class="space-y-8">
      <div class="bg-red-500/10 p-6 rounded-2xl border border-red-500/20 text-red-100 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-red-400">🚫 Design Malicioso vs Design Ético</h2>
        <p class="text-lg leading-relaxed">Dark Patterns são truques de interface usados para enganar utilizadores a fazerem algo que não pretendiam, priorizando métricas sobre o bem-estar do utilizador.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">Exemplos Inaceitáveis:</h3>
        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong>Roach Motel:</strong> Fácil de entrar (ex: assinar), mas quase impossível de sair (ex: cancelar conta exige chamada telefónica).
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong>Confirmshaming:</strong> Fazer o utilizador sentir-se culpado ou burro por não aceitar uma oferta.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong>Custos Escondidos:</strong> Revelar taxas apenas no último passo do checkout.
          </li>
        </ul>
        <p class="text-sm italic border-l-4 border-primary pl-4">"O papel de um Engenheiro de Elite da Codworks Moz é construir sistemas baseados na confiança, não em armadilhas psicológicas."</p>
      </div>
    </div>
  `,
  quizId: "hci-q16"
};