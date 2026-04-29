import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "math-t7",
  title: "Fundamentos de Contagem e Combinatória",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🧮 Contando o Infinito</h2>
        <p class="text-lg leading-relaxed">
          Combinatória é o estudo de configurações finitas. Na computação, usamos para prever o número de estados de um sistema, a força de uma password ou a complexidade de um algoritmo de força bruta.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">Princípios de Contagem</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-card border rounded-xl">
            <h4 class="font-bold text-accent mb-1">Regra do Produto</h4>
            <p class="text-xs">Se tens n formas de fazer A e m de fazer B, tens n*m formas de fazer ambos. Base da explosão combinatória.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl">
            <h4 class="font-bold text-accent mb-1">Regra da Soma</h4>
            <p class="text-xs">Se as tarefas são mutuamente exclusivas, somamos n+m. Vital para análise de caminhos em código.</p>
          </div>
        </div>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🕊️ Princípio das Gavetas (Pigeonhole)</h3>
          <p class="text-sm leading-relaxed">
            "Se tens n+1 pombos para n casas, pelo menos uma casa terá 2 pombos."
            <br/><br/>
            Este princípio "simples" é a prova matemática de que <strong>colisões de Hash</strong> são inevitáveis se o domínio de entrada for maior que o contradomínio.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "math-q7"
};
