import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "kt-p9",
  language: "kotlin",
  title: "Projeto Master: StateFlow - Hot Streams de Estado",
  description: "Mantenha o estado global do motor observável.",
  statement: "Crie um 'MutableStateFlow' inicializado com 'Idle' para representar o estado atual da UI.",
  isProjectPart: true,
  template: `import kotlinx.coroutines.flow.MutableStateFlow

class UiManager {
    // Defina o StateFlow de estado aqui
    val state = MutableStateFlow<SyncState>(Idle)
}`,
  detailedExplanation: `
    <h3>🔥 Hot Streams</h3>
    <p>Diferente do Flow comum, o <strong>StateFlow</strong> é "hot": ele sempre tem um valor e continua existindo mesmo sem coletores. É perfeito para representar estados de interface no motor de sync.</p>
  `,
  objectives: [
    {
      id: "state_flow_init",
      description: "Instancie o MutableStateFlow com o valor inicial Idle.",
      test: "MutableStateFlow"
    }
  ]
};