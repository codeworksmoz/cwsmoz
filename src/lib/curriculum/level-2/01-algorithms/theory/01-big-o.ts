
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "alg-t1",
  title: "Análise de Complexidade: A Notação Big O",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          📈 Medindo a Eficiência
        </h2>
        <p class="text-lg leading-relaxed">
          Como engenheiros, não medimos a velocidade em segundos, pois isso depende do hardware. Medimos como o tempo de execução (ou uso de memória) cresce conforme o volume de dados (N) aumenta. A <strong>Notação Big O</strong> é o padrão universal para descrever o pior cenário de um algoritmo.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. As Classes de Eficiência</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-card border rounded-xl border-green-500/20">
            <h4 class="font-bold text-green-500">O(1) - Constante</h4>
            <p class="text-xs">O tempo não muda. <br/>Ex: Aceder ao primeiro item de um array ou fazer uma conta matemática simples.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-blue-500/20">
            <h4 class="font-bold text-blue-500">O(n) - Linear</h4>
            <p class="text-xs">O esforço é proporcional ao N. <br/>Ex: Procurar um nome numa lista percorrendo item a item.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-yellow-500/20">
            <h4 class="font-bold text-yellow-500">O(log n) - Logarítmica</h4>
            <p class="text-xs">Divide o problema ao meio em cada passo. <br/>Ex: Busca Binária em listas ordenadas.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-red-500/20">
            <h4 class="font-bold text-red-500">O(n²) - Quadrática</h4>
            <p class="text-xs">Crescimento perigoso. Ocorre em loops aninhados. <br/>Ex: Bubble Sort ou comparar todos com todos.</p>
          </div>
        </div>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">⚖️ Time vs Space Complexity</h3>
          <p class="text-sm leading-relaxed">
            Muitas vezes, podemos tornar um algoritmo mais rápido se usarmos mais memória (ex: Caching). O Engenheiro Master avalia o <i>tradeoff</i>: "Tenho mais CPU ou mais RAM disponível para este microserviço?".
          </p>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2">🚀 Por que isto é Vital?</h4>
          <p class="text-sm leading-relaxed">
            Um algoritmo O(n²) que funciona para 100 utilizadores vai "derreter" o servidor quando chegar aos 10.000. No Nível 2, o teu objetivo é sempre procurar a menor complexidade possível.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "alg-q1"
};
