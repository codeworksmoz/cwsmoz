import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "jv-p4",
  language: "java",
  title: "Projeto Master Java: Custom Annotations para Auditoria",
  description: "Crie metadados personalizados para rastrear transações críticas.",
  statement: "Defina uma anotação '@Audit' com retenção em RUNTIME para marcar métodos que devem ser monitorizados.",
  isProjectPart: true,
  template: `import java.lang.annotation.*;

// Defina a anotação @Audit aqui
public @interface Audit {
    String value() default "LOG_TRANSACTION";
}`,
  detailedExplanation: `
    <h3>🏷️ Metadados Dinâmicos</h3>
    <p>Anotações personalizadas permitem que você adicione comportamento ao seu código (como logs automáticos ou verificação de segurança) sem poluir a lógica de negócio principal.</p>
  `,
  objectives: [
    {
      id: "retention",
      description: "Adicione @Retention(RetentionPolicy.RUNTIME) à anotação.",
      test: "RetentionPolicy.RUNTIME"
    },
    {
      id: "target",
      description: "Adicione @Target(ElementType.METHOD) à anotação.",
      test: "ElementType.METHOD"
    }
  ]
};