import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "kt-p5",
  language: "kotlin",
  title: "Projeto Master: Inline Classes e Value Types",
  description: "Otimize a performance de IDs sem perder a segurança de tipos.",
  statement: "Defina uma 'value class SyncId' que encapsula uma String para evitar alocações de memória desnecessárias.",
  isProjectPart: true,
  template: `// Defina a value class aqui
@JvmInline
value class SyncId(val value: String)`,
  detailedExplanation: `
    <h3>🚀 Zero-Cost Abstractions</h3>
    <p><strong>Value Classes</strong> (inline) permitem criar tipos específicos para o seu domínio (como SyncId) que, em tempo de execução, são tratados como o tipo primitivo original, poupando o heap da JVM.</p>
  `,
  objectives: [
    {
      id: "value_class",
      description: "Utilize a anotação @JvmInline e a keyword value class.",
      test: "value class"
    }
  ]
};