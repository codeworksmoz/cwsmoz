import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "rs-p21",
  language: "rust",
  title: "Projeto Master: Auditoria Final e Certificação",
  description: "Conclusão do High-Perf Storage Engine.",
  statement: "Adicione um comentário final indicando o estado de produção segura do seu motor.",
  isProjectPart: true,
  template: `// High-Perf Storage Engine Master Finalizado
// Status: MEMORY-SAFE & STABLE
// Versão: 1.5.0-ELITE`,
  detailedExplanation: `
    <h3>🏆 Excelência em Rust</h3>
    <p>Chegaste ao fim do Rust Master. O teu motor possui agora segurança de memória garantida, concorrência sem corridas de dados e performance nativa. Estás no topo 1% da engenharia global.</p>
  `,
  objectives: [
    {
      id: "final_status",
      description: "Mantenha o status MEMORY-SAFE no comentário.",
      test: "MEMORY-SAFE"
    }
  ]
};