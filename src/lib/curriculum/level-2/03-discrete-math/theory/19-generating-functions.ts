import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "math-t19",
  title: "Funções Geradoras: A Roupa das Sequências",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🔢 Contagem através de Álgebra</h2>
        <p class="text-lg leading-relaxed">
          Funções geradoras transformam sequências infinitas em funções algébricas manipuláveis. É uma ferramenta de elite para resolver problemas de contagem que seriam impossíveis por força bruta.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">O Poder do Coeficiente</h3>
        <p class="text-sm">Ao expandir um polinómio, o coeficiente do termo x^k diz-nos quantas formas existem de atingir o valor k. Usado em análise de algoritmos de hashing e em teoria das partições.</p>
        
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-2">💎 Uso em Algoritmos</h3>
          <p class="text-sm leading-relaxed">Permite calcular a <strong>Complexidade Média</strong> de algoritmos de busca e ordenação, integrando a probabilidade com a estrutura discreta dos dados.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "math-q19"
};
