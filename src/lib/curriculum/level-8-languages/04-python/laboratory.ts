
import type { PracticeExercise } from '../../types';
import { exercise as p1 } from './laboratory/01-gil-profiling-lab';

const pyTitles = [
  "Monitor de Sistema: Fundação",
  "Decoradores de Profiling",
  "Async Log Aggregator",
  "GC Cycle Detection",
  "FastAPI Engine Config",
  "NumPy SIMD Audit",
  "Pandas Memory Mapping",
  "Sklearn Production Pipeline",
  "PyTorch Device Transfer",
  "SQLi Shield Layer",
  "Custom Context Managers",
  "Descriptor Validation",
  "Metaclass Contract Audit",
  "Binary Protocol Sockets",
  "Cython Acceleration",
  "Pprof Bottleneck Hunt",
  "gRPC Service Interop",
  "Poetry Lock Audit",
  "Bytecode Stack Analysis",
  "Docker Multi-stage Build",
  "Capstone Final Deploy"
];

const pyTests = [
  "threading.active_count()", "@wraps", "async def", "gc.collect()", 
  "FastAPI()", "np.array", "astype", "Pipeline", "to('cuda')", 
  "execute(", "__exit__", "__get__", "type(", "socket.socket", 
  "cpdef", "cProfile", "pb2", "poetry.lock", "dis.dis", 
  "FROM python", "STABLE"
];

export const practice = {
  python: pyTitles.map((title, i) => {
    if (i === 0) return p1;
    
    return {
      id: `py-p${i + 1}`,
      language: "python",
      title: `Projeto Master: ${title}`,
      description: "Construção do High-Performance System Monitor.",
      statement: `Implemente o incremento de ${title} no motor.`,
      isProjectPart: true,
      template: `# Checkpoint Aula ${i}\n# O código anterior foi carregado automaticamente.\n`,
      detailedExplanation: `<h3>🐍 Fase ${i + 1}: ${title}</h3><p>Evolua a arquitetura do seu monitor aplicando o conceito de elite desta lição.</p>`,
      objectives: [{ id: "obj", description: "Concluir requisito técnico", test: pyTests[i] }]
    };
  })
};
