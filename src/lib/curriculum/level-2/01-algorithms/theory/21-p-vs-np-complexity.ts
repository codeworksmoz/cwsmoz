import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "alg-t21",
  title: "A Fronteira do Conhecimento: P vs NP",
  content: `
    <div class="space-y-8">
      <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-2xl text-center">
        <h2 class="text-3xl font-bold mb-4 font-headline text-indigo-400">⚖️ O Grande Mistério da Computação</h2>
        <p class="text-lg leading-relaxed">
          Poderá todo o problema cuja solução pode ser verificada rapidamente (NP) ser também resolvido rapidamente (P)? Esta é a pergunta de 1 milhão de dólares do Millennium Prize.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-6 text-sm">
        <div class="p-6 bg-card border rounded-2xl shadow-xl border-green-500/20">
          <h4 class="font-bold text-green-400 mb-2">Classe P (Polynomial)</h4>
          <p class="text-xs opacity-70">Problemas que conseguimos resolver eficientemente (ex: ordenar uma lista, busca binária).</p>
        </div>
        <div class="p-6 bg-card border rounded-2xl shadow-xl border-yellow-500/20">
          <h4 class="font-bold text-yellow-400 mb-2">Classe NP (Nondeterministic Polynomial)</h4>
          <p class="text-xs opacity-70">Problemas onde encontrar a solução é difícil, mas verificar se uma solução está correta é fácil.</p>
        </div>
      </div>

      <div class="bg-red-500/5 p-6 rounded-2xl border border-red-500/20">
        <h3 class="text-xl font-bold font-headline text-red-400 mb-4">NP-Complete: Os Intratáveis</h3>
        <p class="text-sm mb-4">São os problemas mais difíceis de NP. Se alguém encontrar um algoritmo rápido para UM problema NP-Complete, todos os problemas de NP poderão ser resolvidos rapidamente (P = NP).</p>
        <p class="text-xs font-mono">Exemplos: Caixeiro Viajante, Sudoku, Criptografia RSA.</p>
      </div>

      <div class="bg-yellow-500/5 p-6 rounded-2xl border border-yellow-500/20 text-center">
          <p class="text-primary font-bold text-2xl animate-pulse">🎓 Nível 2 - Módulo de Algoritmos Concluído!</p>
          <p class="text-muted-foreground mt-2">Você agora possui a base teórica e prática para enfrentar os desafios mais complexos da engenharia de software global.</p>
      </div>
    </div>
  `,
  quizId: "alg-q21"
};
