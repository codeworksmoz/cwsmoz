import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "web-p8-deploy",
  language: "html",
  title: "Laboratório: Protocolo de Lançamento",
  description: "Configure os passos mentais e técnicos para um deploy de sucesso.",
  statement: "Crie um documento técnico no editor simulando os metadados de infraestrutura para o seu domínio.",
  template: `<!-- CONFIGURAÇÃO DE DOMÍNIO E SEGURANÇA -->
<!-- Status: Aguardando Configuração -->

<div id="infra-config">
  <p>Domínio: codworks-aluno.mz</p>
  <p>SSL: </p>
  <p>CDN: </p>
</div>`,
  youtubeVideoId: "8aGhZQkoFbQ",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🛡️ Checklist de Engenharia</h3>
      <p>Nesta missão, não vais programar lógica, vais configurar a <strong>identidade e segurança</strong> da tua infraestrutura. O objetivo é provar que entendes o que é necessário para um site entrar em produção.</p>
      
      <div class="bg-muted p-4 rounded-xl border border-primary/20 space-y-2">
        <p class="text-xs font-bold">Instruções:</p>
        <ul class="text-[10px] space-y-1 list-disc ml-4">
          <li><strong>SSL:</strong> Define o estado como "Ativo" para garantir o cadeado de segurança.</li>
          <li><strong>CDN:</strong> Define a rede como "Cloudflare" para garantir performance global.</li>
        </ul>
      </div>
    </div>
  `,
  objectives: [
    {
      id: "ssl_active",
      description: "Escrever 'Ativo' no campo de SSL.",
      test: "SSL: Ativo"
    },
    {
      id: "cdn_config",
      description: "Escrever 'Cloudflare' no campo de CDN.",
      test: "CDN: Cloudflare"
    }
  ]
};
