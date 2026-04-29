import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "math-t14",
  title: "Linguagens Formais e a Hierarquia de Chomsky",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">📜 As Leis da Gramática Computacional</h2>
        <p class="text-lg leading-relaxed">
          Linguagens formais definem o conjunto de strings válidas que um computador consegue processar. A hierarquia de Chomsky classifica o poder dos compiladores conforme a complexidade das regras gramaticais.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">A Pirâmide de Poder</h3>
        <ul class="space-y-4">
          <li class="p-4 bg-card border rounded-xl border-white/5">
            <strong class="text-accent">Tipo 3 - Regulares:</strong> Podem ser descritas por RegEx e processadas por DFA/NFA. Usadas para análise léxica (tokens).
          </li>
          <li class="p-4 bg-card border rounded-xl border-white/5">
            <strong class="text-accent">Tipo 2 - Livres de Contexto:</strong> Usam gramáticas BNF e são processadas por Autómatos de Pilha. É aqui que vive a sintaxe do C, Java e Python.
          </li>
          <li class="p-4 bg-card border rounded-xl border-white/5">
            <strong class="text-accent">Tipo 1 e 0:</strong> Sensíveis ao contexto e linguagens computáveis. Representam o poder total da Máquina de Turing.
          </li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🌲 Árvores de Derivação (Parse Trees)</h3>
          <p class="text-sm leading-relaxed">
            Sempre que escreves código, o compilador constrói uma árvore baseada na gramática para entender o significado. Se a frase "if (x > 0)" não segue a gramática, o parser lança o erro de sintaxe.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "math-q14"
};
