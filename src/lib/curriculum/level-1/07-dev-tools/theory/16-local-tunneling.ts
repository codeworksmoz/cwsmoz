import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "dt-t16",
  title: "Local Tunneling: Expondo o Localhost com Segurança",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🚇 Túneis para a Internet
        </h2>
        <p class="text-lg">Como mostrar o teu trabalho a um cliente em Nampula se o site está apenas no teu computador? Ferramentas de **Local Tunneling** criam um endereço público seguro que aponta para o teu <code>localhost</code>.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">1. Ngrok e Cloudflare Tunnel</h3>
        <p class="text-sm">Estas ferramentas criam um túnel HTTPS encriptado. É vital para testar **Webhooks** de pagamento (Stripe/M-Pesa) e integrações de redes sociais que exigem uma URL real para enviar dados.</p>
        
        <div class="bg-black/40 p-4 rounded-xl border font-code text-sm text-accent">
          ngrok http 3000 <br/>
          # Gera uma URL do tipo: https://abc-123.ngrok.app
        </div>

        <h3 class="text-xl font-bold font-headline text-red-400">⚠️ Aviso de Segurança</h3>
        <p class="text-sm">Um túnel abre uma porta no teu computador para o mundo. Nunca deixes um túnel ativo sem supervisão e usa sempre senhas ou restrições de IP em ambientes profissionais.</p>
      </div>
    </div>
  `,
  quizId: "dt-q16"
};