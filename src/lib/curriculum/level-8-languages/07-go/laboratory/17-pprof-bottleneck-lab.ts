import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "go-p17",
  language: "go",
  title: "Projeto Master: Profiling com Pprof",
  description: "Identifique gargalos de CPU no motor.",
  statement: "Indique o nome do pacote nativo necessário para expor métricas de performance via HTTP. Escreva 'net/http/pprof'.",
  isProjectPart: true,
  template: `// Para monitorizar o motor em tempo real:
import _ ""`,
  detailedExplanation: `
    <h3>🔍 Ciência dos Dados de Execução</h3>
    <p>O Go possui ferramentas de profiling de classe mundial integradas. Ao importar o <code>pprof</code>, podes ver gráficos de chamadas, uso de memória e bloqueios de goroutines, permitindo otimizar o código baseado em factos, não em palpites.</p>
  `,
  objectives: [
    {
      id: "pprof_pkg",
      description: "Identifique o pacote de profiling.",
      test: "net/http/pprof"
    }
  ]
};
