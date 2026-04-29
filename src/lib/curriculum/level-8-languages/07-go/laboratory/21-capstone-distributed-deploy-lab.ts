import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "go-p21",
  language: "go",
  title: "Projeto Master: Auditoria Final e Certificação",
  description: "Conclua a arquitetura do motor distribuído.",
  statement: "Adicione um comentário final indicando a versão estável e escalável do seu Distributed Task Engine.",
  isProjectPart: true,
  template: `// Distributed Task Engine Master Finalizado
// Status: CLOUD-NATIVE-READY
// Versão: 1.2.0-STABLE`,
  detailedExplanation: `
    <h3>🏆 Excelência em Engenharia Go</h3>
    <p>Chegaste ao fim do Go Master. O teu sistema possui agora concorrência nativa, gestão de recursos resiliente e performance de nuvem. Estás pronto para construir a infraestrutura do futuro.</p>
  `,
  objectives: [
    {
      id: "final_status",
      description: "Mantenha o status CLOUD-NATIVE-READY no comentário.",
      test: "CLOUD-NATIVE-READY"
    }
  ]
};
