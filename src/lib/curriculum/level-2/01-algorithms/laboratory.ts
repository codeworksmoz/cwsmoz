import type { PracticeExercise } from '../../types';

const generateLab = (idNum: number, title: string, testStr: string) => ({
  id: `alg-p${idNum}`,
  language: "javascript",
  title: `Laboratório: ${title}`,
  description: "Resolução de problemas e análise de complexidade.",
  statement: `Implemente a lógica de ${title} no editor.`,
  template: `// Implemente ${title}\n`,
  detailedExplanation: `<div class='space-y-4'><h3>⚡ Lógica Algorítmica</h3><p>Validação de performance e correção para o tema ${title}.</p></div>`,
  objectives: [{ id: "obj1", description: `Executar ${title}`, test: testStr }]
});

const titles = [
  "Big O Analysis", "Binary Search", "Bubble Sort", "Insertion Sort", 
  "Merge Sort", "Quick Sort", "Heap Sort", "Tail Recursion", 
  "Greedy Change", "Fibonacci DP", "Bit Counting", "KMP Search", 
  "Hill Climbing", "Ford-Fulkerson", "Convex Hull", "Monte Carlo", 
  "A* Pathfinding", "Dijkstra SPF", "Kruskal MST", "Topological Sort", "NP-Complete Verification"
];

const tests = [
  "O(n)", "while", "temp =", "j--", 
  "merge", "pivot", "heapify", "acc", 
  "coin", "memo", ">>", "lps", 
  "best", "flow", "point", "random", 
  "heuristic", "dist", "edge", "degree", "solution"
];

export const practice = {
  javascript: titles.map((t, i) => generateLab(i + 1, t, tests[i])),
  python: titles.map((t, i) => ({ ...generateLab(i + 1, t, tests[i]), language: "python" }))
};