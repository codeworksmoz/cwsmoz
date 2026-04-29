import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "kt-p17",
  language: "kotlin",
  title: "Projeto Master: Memory & Weak References",
  description: "Previna fugas de memória no sistema de listeners.",
  statement: "Utilize 'WeakReference' para guardar um listener de sync no motor.",
  isProjectPart: true,
  template: `import java.lang.ref.WeakReference

class SyncManager {
    private var listenerRef: WeakReference<() -> Unit>? = null

    fun setListener(listener: () -> Unit) {
        // Guarde a referência fraca aqui
    }
}`,
  detailedExplanation: `
    <h3>🧠 Gestão de Ciclo de Vida</h3>
    <p>Em aplicações complexas (especialmente Android), guardar referências fortes a lambdas de interface pode causar memory leaks. <strong>WeakReference</strong> permite que o Garbage Collector limpe o objeto se a UI for destruída.</p>
  `,
  objectives: [
    {
      id: "weak_ref_init",
      description: "Instancie a WeakReference passando o listener.",
      hint: "WeakReference(listener)",
      test: "WeakReference(listener)"
    }
  ]
};
