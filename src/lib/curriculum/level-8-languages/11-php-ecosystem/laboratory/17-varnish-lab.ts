import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "php-eco-p17",
  language: "process",
  title: "Laboratório Master: Configuração de Purge e Ban",
  description: "Gerencie a invalidação de cache em larga escala.",
  statement: "Identifique o método usado no Varnish para invalidar chaves baseadas em expressões regulares. Escreva 'BAN'.",
  isProjectPart: true,
  template: "let method = '';",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🧹 Invalidação Industrial</h3>
      <p class="text-sm leading-relaxed">
        O seu servidor de eventos atualizou um perfil. Precisas de limpar o cache do Varnish instantaneamente. Existem dois caminhos: <strong>Purge</strong> (apaga uma URL exata) ou <strong>Ban</strong> (apaga tudo o que combine com um padrão, ex: todas as fotos).
      </p>
    </div>
  `,
  objectives: [
    { id: "ban_check", description: "Identificar o método BAN.", test: "BAN" }
  ]
};
