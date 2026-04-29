import type { PracticeExercise } from '../../types';
import { exercise as p1 } from './laboratory/01-sync-init-lab';
import { exercise as p2 } from './laboratory/02-extensions-delegates-lab';
import { exercise as p3 } from './laboratory/03-sealed-state-lab';
import { exercise as p6 } from './laboratory/06-coroutines-launch-lab';
import { exercise as p7 } from './laboratory/07-structured-concurrency-lab';
import { exercise as p8 } from './laboratory/08-flow-monitoring-lab';
import { exercise as p9 } from './laboratory/09-hot-streams-lab';
import { exercise as p10 } from './laboratory/10-channels-communication-lab';
import { exercise as p11 } from './laboratory/11-coroutine-exceptions-lab';
import { exercise as p12 } from './laboratory/12-kmp-expect-actual-lab';
import { exercise as p14 } from './laboratory/14-serialization-packets-lab';
import { exercise as p17 } from './laboratory/17-memory-refs-lab';
import { exercise as p18 } from './laboratory/18-testing-engine-lab';
import { exercise as p19 } from './laboratory/19-api-dsl-lab';
import { exercise as p21 } from './laboratory/21-capstone-sync-deploy-lab';

export const practice = {
  kotlin: [
    p1, p2, p3,
    {
      id: "kt-p4",
      language: "kotlin",
      title: "Projeto Master: Transformações Funcionais",
      description: "Processe listas de updates de forma declarativa.",
      statement: "Filtre as mensagens vazias e transforme o restante em maiúsculas.",
      isProjectPart: true,
      template: "// Checkpoint 3 carregado\n",
      detailedExplanation: "<h3>λ Transformação de Dados</h3><p>Utilize .filter { it.isNotEmpty() } e .map { it.uppercase() } para limpar o fluxo de entrada do motor.</p>",
      objectives: [{ id: "func", description: "Usar filter e map.", test: ".filter" }]
    },
    {
      id: "kt-p5",
      language: "kotlin",
      title: "Projeto Master: Otimização com Inline Classes",
      description: "Poupe alocações de memória usando Value Classes.",
      statement: "Defina uma 'value class SyncId' para encapsular os IDs das tarefas.",
      isProjectPart: true,
      template: "// Checkpoint 4 carregado\n",
      detailedExplanation: "<h3>🚀 Value Types</h3><p>Use @JvmInline e value class para criar tipos que não geram objetos no Heap.</p>",
      objectives: [{ id: "inline", description: "Definir value class SyncId.", test: "value class SyncId" }]
    },
    p6, p7, p8, p9, p10, p11, p12,
    {
      id: "kt-p13",
      language: "kotlin",
      title: "Projeto Master: DI por Delegação",
      description: "Injete serviços de forma limpa.",
      statement: "Simule a injeção do SyncService usando o padrão 'by inject()'.",
      isProjectPart: true,
      template: "// Checkpoint 12 carregado\n",
      detailedExplanation: "<h3>🧩 Injeção Master</h3><p>O Kotlin utiliza Delegated Properties para gerir dependências de forma elegante.</p>",
      objectives: [{ id: "di", description: "Usar keyword 'by'.", test: "by" }]
    },
    p14,
    {
      id: "kt-p15",
      language: "kotlin",
      title: "Projeto Master: Geração de Código KSP",
      description: "Automatize adaptadores de rede.",
      statement: "Identifique a interface SymbolProcessor do KSP.",
      isProjectPart: true,
      template: "// Checkpoint 14 carregado\n",
      detailedExplanation: "<h3>⚙️ Metaprogramação</h3><p>KSP é o futuro da geração de código em Kotlin.</p>",
      objectives: [{ id: "ksp", description: "Implementar SymbolProcessor.", test: "SymbolProcessor" }]
    },
    {
      id: "kt-p16",
      language: "kotlin",
      title: "Projeto Master: Introspecção KClass",
      description: "Analise objetos em tempo de execução.",
      statement: "Obtenha a referência de classe usando ::class.",
      isProjectPart: true,
      template: "// Checkpoint 15 carregado\n",
      detailedExplanation: "<h3>🔍 Reflection Master</h3><p>Use kClass = obj::class para inspecionar metadados.</p>",
      objectives: [{ id: "ref", description: "Usar ::class.", test: "::class" }]
    },
    p17, p18, p19,
    {
      id: "kt-p20",
      language: "kotlin",
      title: "Projeto Master: Benchmarking JMH",
      description: "Meça a latência do processamento.",
      statement: "Identifique a ferramenta oficial JMH para micro-benchmarks.",
      isProjectPart: true,
      template: "// Checkpoint 19 carregado\n",
      detailedExplanation: "<h3>⏱️ Ciência do Tempo</h3><p>O JMH garante medições precisas na JVM.</p>",
      objectives: [{ id: "jmh", description: "Mencionar JMH.", test: "JMH" }]
    },
    p21
  ]
};
