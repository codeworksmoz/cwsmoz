
import type { PracticeExercise } from '../../types';
import { exercise as p1 } from './laboratory/01-storage-engine-init';
import { exercise as p2 } from './laboratory/02-borrowing-lab';
import { exercise as p3 } from './laboratory/03-lifetimes-lab';
import { exercise as p4 } from './laboratory/04-traits-lab';
import { exercise as p5 } from './laboratory/05-smart-pointers-lab';
import { exercise as p6 } from './laboratory/06-refcell-lab';
import { exercise as p7 } from './laboratory/07-concurrency-lab';
import { exercise as p8 } from './laboratory/08-error-handling-lab';
import { exercise as p9 } from './laboratory/09-pattern-matching-lab';
import { exercise as p10 } from './laboratory/10-iterators-lab';

const generateRustLab = (idNum: number, title: string, testStr: string) => ({
  id: `rs-p${idNum}`,
  language: "rust",
  title: `Projeto Master: ${title}`,
  description: "Evolução do High-Perf Storage Engine.",
  statement: `Implemente o requisito de ${title} no motor.`,
  isProjectPart: true,
  template: `// Checkpoint ${idNum - 1} carregado.\n`,
  detailedExplanation: `<h3>🦀 Engenharia de Sistemas</h3><p>Aplicação do conceito de ${title} na arquitetura do motor de armazenamento.</p>`,
  objectives: [{ id: "obj", description: "Validar requisito técnico", test: testStr }]
});

const titles = [
  "Closures & Scopes", "Async Runtime", "Unsafe Memory", "FFI Bindings", 
  "Declarative Macros", "Procedural Macros", "Unit Testing", "Assembly Audit", 
  "Memory Alignment", "LTO Tuning", "Final Capstone"
];

const tests = [
  "move |", "tokio::main", "unsafe {", "extern \"C\"", 
  "macro_rules!", "proc_macro", "#[test]", "cargo asm", 
  "#[repr(C)]", "lto = true", "STABLE"
];

export const practice = {
  rust: [
    p1, p2, p3, p4, p5, p6, p7, p8, p9, p10,
    ...titles.map((t, i) => generateRustLab(i + 11, t, tests[i]))
  ]
};
