import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "des-t3",
  title: "Design Patterns: Padrões de Criação (Creational)",
  quizId: "des-q3-master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🏗️ Controlando a Instanciação</h2>
        <p class="text-lg">Padrões de criação abstraem o processo de instanciação. Eles tornam o sistema independente de como os seus objetos são criados, compostos e representados.</p>
      </div>

      <div class="space-y-6">
        <div class="p-4 bg-card border rounded-xl border-white/5">
          <h4 class="font-bold text-accent mb-2">1. Factory Method</h4>
          <p class="text-xs">Define uma interface para criar um objeto, mas deixa as subclasses decidirem qual classe instanciar. Útil para lidar com diferentes tipos de logs ou conexões de BD.</p>
        </div>

        <div class="p-4 bg-card border rounded-xl border-white/5">
          <h4 class="font-bold text-accent mb-2">2. Singleton</h4>
          <p class="text-xs">Garante que uma classe tem apenas uma instância e fornece um ponto global de acesso. ⚠️ <b>Atenção:</b> Use com cautela, pois pode dificultar testes e ocultar dependências.</p>
        </div>

        <div class="p-4 bg-card border rounded-xl border-white/5">
          <h4 class="font-bold text-accent mb-2">3. Builder</h4>
          <p class="text-xs">Separa a construção de um objeto complexo da sua representação. Permite criar diferentes tipos e representações de um objeto usando o mesmo código de construção.</p>
        </div>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-2">💎 Quando usar?</h3>
          <p class="text-sm">Se o teu código tem muitos <code>new MinhaClasse()</code> espalhados, estás a criar um acoplamento forte. Padrões de criação permitem que mudes a classe concreta no futuro sem quebrar o resto do app.</p>
        </div>
      </div>
    </div>
  `
};