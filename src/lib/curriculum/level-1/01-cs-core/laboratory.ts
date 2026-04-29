
import { exercise as e1 } from './laboratory/01-sistemas-numericos';
import { exercise as e2 } from './laboratory/02-logica-booleana';
import { exercise as e3 } from './laboratory/03-algebra-booleana';
import { exercise as e4 } from './laboratory/04-arquitetura';
import { exercise as e5 } from './laboratory/05-memoria';
import { exercise as e6 } from './laboratory/06-algoritmos';
import { exercise as e7 } from './laboratory/07-complexidade';
import { exercise as e8 } from './laboratory/08-paradigmas';
import { exercise as e9 } from './laboratory/09-floating-point';

// Temas técnicos reais para os laboratórios avançados de CS Core
const advancedLabs = [
  { id: "cs-p10", title: "Lab: Hierarquia de Cache L1/L3", test: "L1" },
  { id: "cs-p11", title: "Lab: Conjuntos ISA (RISC vs CISC)", test: "RISC" },
  { id: "cs-p12", title: "Lab: Pipeline de Instruções", test: "fetch" },
  { id: "cs-p13", title: "Lab: Barramentos e I/O", test: "interrupt" },
  { id: "cs-p14", title: "Lab: Gestão de Memória Virtual", test: "paging" },
  { id: "cs-p15", title: "Lab: Estruturas de Inodes", test: "inode" },
  { id: "cs-p16", title: "Lab: Transmissão Digital de Sinais", test: "signal" },
  { id: "cs-p17", title: "Lab: Árvores de Sintaxe (AST)", test: "tokens" },
  { id: "cs-p18", title: "Lab: Criptografia de Chave Simétrica", test: "hash" },
  { id: "cs-p19", title: "Lab: Condições de Corrida (Race)", test: "mutex" },
  { id: "cs-p20", title: "Lab: Algoritmos de Substituição", test: "lru" },
  { id: "cs-p21", title: "Lab: Dilemas Éticos na IA", test: "etica" }
];

export const exercises = [
  e1, e2, e3, e4, e5, e6, e7, e8, e9,
  ...advancedLabs.map((lab) => ({
    id: lab.id,
    language: "concept",
    title: lab.title,
    description: "Laboratório técnico avançado focado no funcionamento interno dos sistemas.",
    statement: `Valide o conceito de ${lab.title.replace('Lab: ', '')} utilizando a lógica de engenharia.`,
    template: "// Escreva o resultado da análise técnica aqui\nlet resultado = '';",
    detailedExplanation: `<p>Este laboratório explora a implementação física e lógica de ${lab.title}.</p>`,
    objectives: [{ id: "obj1", description: "Concluir análise de sistema", test: lab.test }]
  }))
];
