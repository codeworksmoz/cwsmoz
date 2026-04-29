import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "php-eco-p4",
  language: "php",
  title: "Projeto Master: Configuração e Auditoria de Mutação",
  description: "Configure o motor de auditoria Infection para o servidor de eventos.",
  statement: "Utilize o ficheiro de configuração JSON para definir o limite de pontuação MSI para o projeto.",
  isProjectPart: true,
  template: `{
    "source": {
        "directories": ["src"]
    },
    "logs": {
        "text": "infection.log"
    },
    "minMsi": 
}`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🔬 Auditoria de Qualidade Máxima</h3>
      <p class="text-sm leading-relaxed">
        O seu servidor de eventos deve ser imune a falhas. Nesta missão, vais configurar o limite mínimo de fidelidade dos testes (<button>MSI</button>). Se a suite de testes cair abaixo deste valor, o pipeline de CI deve ser interrompido.
      </p>
      <div class="bg-muted p-4 rounded-xl border border-primary/20 space-y-2">
        <p class="text-xs font-bold text-yellow-500">Requisito Técnico:</p>
        <p class="text-[10px]">Defina o campo <code>"minMsi"</code> para 80 para garantir que 80% dos mutantes sejam eliminados pelos seus testes.</p>
      </div>
    </div>
  `,
  objectives: [
    { id: "msi_config", description: "Definir minMsi como 80.", test: "\"minMsi\": 80" }
  ]
};
