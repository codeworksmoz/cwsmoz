import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "jv-p21",
  language: "java",
  title: "Projeto Master Java: Auditoria Final e Certificação",
  description: "Finalize a arquitetura do sistema financeiro.",
  statement: "Adicione um comentário final indicando a versão estável e segura do seu Core Banking de Elite.",
  isProjectPart: true,
  template: `// Core Banking Master Finalizado
// Versão: 2.1.0-ENTERPRISE-READY`,
  detailedExplanation: `
    <h3>🏆 Excelência Enterprise</h3>
    <p>Chegaste ao fim do Java Master. O teu sistema possui agora imutabilidade com Records, escala massiva com Virtual Threads e segurança multicamada. Este é o padrão exigido pelas maiores instituições financeiras do mundo.</p>
  `,
  objectives: [
    {
      id: "final_comment",
      description: "Mantenha o status ENTERPRISE-READY no comentário.",
      test: "ENTERPRISE-READY"
    }
  ]
};