import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "kt-p15",
  language: "kotlin",
  title: "Projeto Master: Geração de Código com KSP",
  description: "Automatize a criação de adaptadores para o motor.",
  statement: "Indique o nome da interface do processador de símbolos que deve ser implementada para criar um plugin KSP. Escreva 'SymbolProcessor'.",
  isProjectPart: true,
  template: `// Para criar um gerador de código:
// class MyGenerator : ;`,
  detailedExplanation: `
    <h3>⚙️ Metaprogramação Moderna</h3>
    <p>O <strong>Kotlin Symbol Processing (KSP)</strong> é o sucessor do KAPT. Ele permite analisar o código em tempo de compilação e gerar novos ficheiros, reduzindo o trabalho manual do engenheiro.</p>
  `,
  objectives: [
    {
      id: "ksp_interface",
      description: "Identifique a interface base do KSP.",
      test: "SymbolProcessor"
    }
  ]
};