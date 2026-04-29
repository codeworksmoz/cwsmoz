import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "dt-t6",
  title: "Linters e Formatters: Automatizando a Ética do Código",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🤖 Guardiões da Consistência
        </h2>
        <p class="text-lg">Escrever código é humano; garantir que ele segue padrões industriais é tarefa de máquinas. <strong>Linters</strong> e <strong>Formatters</strong> impedem erros de lógica e debates inúteis sobre estilo.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">1. ESLint: Análise Estática</h3>
        <p class="text-sm">O ESLint "lê" o teu código sem o executar. Ele deteta variáveis não utilizadas, potenciais loops infinitos e violações de segurança (como o uso de eval). É o teu mentor silencioso.</p>
        
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">2. Prettier: Estética Imutável</h3>
        <p class="text-sm">O Prettier decide onde colocar as vírgulas e as chavetas. Ao usá-lo, a equipa inteira escreve código que visualmente parece ter sido feito pela mesma pessoa, o que reduz a carga cognitiva durante revisões de código.</p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-2">💎 O Workflow de Elite</h4>
          <p class="text-sm leading-relaxed">
            Configure o seu editor para <strong>Format on Save</strong>. Isto garante que cada vez que guardas um ficheiro, as ferramentas o limpam instantaneamente, permitindo que te foques 100% na lógica do problema.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "dt-q6"
};