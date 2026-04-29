import type { PracticeExercise } from '../../types';

export const exercise: PracticeExercise = {
  id: "web-p11-aria",
  language: "html",
  title: "Laboratório Master: Blindagem de Acessibilidade",
  description: "Transforme uma interface 'muda' numa experiência inclusiva.",
  statement: "Utilize ARIA labels, roles e tabindex para tornar o menu e os botões de ícone acessíveis.",
  template: `<!-- Arquiteto: Corrija as falhas de acessibilidade abaixo -->

<div class="menu-container">
  <!-- 1. Este botão fecha um modal mas o leitor de ecrã lê apenas "botão" -->
  <button class="close-btn">X</button>

  <nav>
    <ul>
      <!-- 2. Garanta que este item de lista é reconhecido como um link de navegação -->
      <li>Home</li>
    </ul>
  </nav>

  <!-- 3. Este alerta deve ser lido IMEDIATAMENTE pelo leitor de ecrã -->
  <div class="error-msg">Erro: Senha inválida!</div>
</div>`,
  youtubeVideoId: "u044iM9xsTM",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🔨 Missão: Voz ao Código</h3>
      <p>Um site profissional deve "falar" com quem não consegue ver. A tua missão é corrigir três erros críticos de acessibilidade:</p>
      
      <div class="bg-muted p-4 rounded-xl border border-primary/20 space-y-2">
        <p class="text-xs font-bold text-yellow-500">Instruções Técnicas:</p>
        <ul class="text-[10px] space-y-1 list-disc ml-4">
          <li><strong>Botão de Ícone:</strong> Adicione <code>aria-label="Fechar"</code> ao botão close-btn.</li>
          <li><strong>Navegação:</strong> Certifique-se de que os itens de lista são links <code>&lt;a href="#"&gt;</code>.</li>
          <li><strong>Alertas Vivos:</strong> Adicione <code>role="alert"</code> à div de erro para que o leitor a anuncie assim que aparecer.</li>
        </ul>
      </div>
      <p class="text-xs">Dica: O motor de auditoria da Codworks irá verificar a presença dos atributos ARIA e a semântica dos links.</p>
    </div>
  `,
  objectives: [
    {
      id: "aria_label",
      description: "Adicionar aria-label='Fechar' ao botão.",
      test: "aria-label=\"Fechar\""
    },
    {
      id: "anchor_nav",
      description: "Usar links <a> dentro da navegação.",
      test: "<a href="
    },
    {
      id: "role_alert",
      description: "Adicionar role='alert' à mensagem de erro.",
      test: "role=\"alert\""
    }
  ]
};
