import type { TheoryLesson } from '../../types';
import { lesson as l1 } from './theory/01-gil-internals';
import { lesson as l2 } from './theory/02-metaprogramming';
import { lesson as l3 } from './theory/03-asyncio';
import { lesson as l4 } from './theory/04-memory-management';
import { lesson as l5 } from './theory/05-fastapi-scaling';
import { lesson as l6 } from './theory/06-numpy-simd';
import { lesson as l7 } from './theory/07-pandas-optimization';
import { lesson as l8 } from './theory/08-sklearn-pipelines';
import { lesson as l9 } from './theory/09-pytorch-tensors';
import { lesson as l10 } from './theory/10-python-security';
import { lesson as l11 } from './theory/11-context-managers';
import { lesson as l12 } from './theory/12-descriptors';
import { lesson as l13 } from './theory/14-metaclasses-abc';
import { lesson as l14 } from './theory/14-networking-sockets';
import { lesson as l15 } from './theory/16-python-cython';
import { lesson as l16 } from './theory/17-python-profiling';
import { lesson as l17 } from './theory/18-python-microservices';
import { lesson as l18 } from './theory/19-python-dependencies';
import { lesson as l19 } from './theory/20-dis-bytecode';
import { lesson as l20 } from './theory/11-python-docker';
import { lesson as l21 } from './theory/21-python-capstone';

const pythonTitles = [
  "Fase 1: CPython Internals: O GIL e Threads",
  "Fase 1: Metaprogramação: Decoradores e Metaclasses",
  "Fase 1: AsyncIO: Concorrência e Event Loop",
  "Fase 1: Gestão de Memória e Garbage Collection",
  "Fase 2: FastAPI: Escalabilidade e Tipagem Forte",
  "Fase 2: NumPy: Vectorização e Instruções SIMD",
  "Fase 2: Pandas: Otimização de DataFrames",
  "Fase 2: Scikit-Learn: Pipelines de Produção",
  "Fase 2: PyTorch: Tensores e Aceleração por GPU",
  "Fase 3: Security: SQLi e Code Injection em Python",
  "Fase 3: Context Managers e o Protocolo 'with'",
  "Fase 3: Descriptors e Data Validation Internals",
  "Fase 3: Metaclasses e Abstract Base Classes (ABCs)",
  "Fase 3: Networking: Sockets e Protocolos Binários",
  "Fase 3: FFI: Chamando Código C com Cython",
  "Fase 4: Profiling: Identificando Gargalos Reais",
  "Fase 4: Microserviços e gRPC com Python",
  "Fase 4: Gestão de Dependências com Poetry",
  "Fase 4: Internals: Bytecode, AST e Máquina de Pilha",
  "Fase 4: Dockerização de Apps Python de Alta Escala",
  "Fase 4: Capstone: Deploy de System Monitor de Elite"
];

const sourceMap: Record<number, any> = {
  0: l1, 1: l2, 2: l3, 3: l4, 4: l5, 5: l6, 6: l7, 7: l8, 8: l9, 9: l10,
  10: l11, 11: l12, 12: l13, 13: l14, 14: l15, 15: l16, 16: l17, 17: l18, 18: l19, 19: l20, 20: l21
};

export const lessons: TheoryLesson[] = pythonTitles.map((title, i) => ({
  ...sourceMap[i],
  id: `py-m${i + 1}`,
  title: title,
  quizId: `py-mq${i + 1}`,
  enableInteractive: true
}));
