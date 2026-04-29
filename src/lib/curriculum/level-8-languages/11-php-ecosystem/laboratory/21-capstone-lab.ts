import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "php-eco-p21",
  language: "php",
  title: "Projeto Master: Auditoria Final de Infraestrutura",
  description: "Conclua o deploy com selo de elite.",
  statement: "Confirme o status final de produção do sistema. Escreva 'STABLE-MASTER'.",
  isProjectPart: true,
  template: `// STATUS FINAL DA INFRAESTRUTURA:
const ENGINE_STATUS = "";`,
  detailedExplanation: `<h3>🏆 Certificação Master</h3><p>Verificamos que todos os requisitos de arquitetura, qualidade e performance foram atingidos.</p>`,
  objectives: [{ id: "final", description: "Definir status como STABLE-MASTER.", test: "STABLE-MASTER" }]
};
