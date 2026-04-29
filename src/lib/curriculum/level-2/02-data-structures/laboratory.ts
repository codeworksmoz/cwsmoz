import type { PracticeExercise } from '../../types';

const generateLab = (idNum: number, title: string, testStr: string) => ({
  id: `ds-p${idNum}`,
  language: "javascript",
  title: `Laboratório: ${title}`,
  description: "Organização de memória e ponteiros.",
  statement: `Construa a estrutura de ${title} no editor.`,
  template: `// Estrutura ${title}\n`,
  detailedExplanation: `<div class='space-y-4'><h3>📊 Estrutura de Dados</h3><p>Alocação e manipulação para o tema ${title}.</p></div>`,
  objectives: [{ id: "obj1", description: `Implementar ${title}`, test: testStr }]
});

const titles = [
  "Dynamic Arrays", "Linked List Node", "Stack Push/Pop", "Queue Enqueue", 
  "Hash Collision", "BST Insert", "Binary Heap", "Adjacency List", 
  "AVL Rotation", "Red-Black Colors", "B-Tree Node", "Trie Insert", 
  "Segment Tree", "DSU Find", "Skip List", "Bloom Filter", 
  "LRU Cache", "Sparse Matrix", "Fibonacci Heap", "Circular Buffer", "Cache Locality"
];

const tests = [
  "capacity", "next", "push", "shift", 
  "hash", "left", "right", "adj", 
  "height", "black", "keys", "child", 
  "range", "parent", "skip", "bits", 
  "evict", "sparse", "degree", "head", "line"
];

export const practice = {
  javascript: titles.map((t, i) => generateLab(i + 1, t, tests[i])),
  python: titles.map((t, i) => ({ ...generateLab(i + 1, t, tests[i]), language: "python" }))
};