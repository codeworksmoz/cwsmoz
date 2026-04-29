import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p10-js",
  language: "javascript",
  title: "Missão: Arquiteto de Heróis",
  description: "Crie a sua primeira classe e instancie um objeto real.",
  statement: "Crie uma classe Heroi, com nome e nível, e um método que apresente o herói.",
  isProjectPart: true,
  template: ``,
  youtubeVideoId: "mNst8vX-u8E",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🏗️ Construindo o Molde</h3>
      <p>Vamos criar um sistema para um RPG. A classe <code>Heroi</code> dirá que todo herói tem nome e nível.</p>
      
      <div class="bg-muted p-4 rounded-xl border border-white/10 space-y-2">
        <p class="text-xs font-bold text-yellow-500">A Ferramenta do Dia:</p>
        <p class="text-[11px] font-mono leading-relaxed">
          <span class="text-primary">class</span> Heroi { <br/>
          &nbsp;&nbsp;<span class="text-primary">constructor</span>(nome) { this.nome = nome; } <br/>
          &nbsp;&nbsp;<span class="text-primary">falar</span>() { console.log(this.nome); } <br/>
          } <br/>
          <span class="text-primary">const</span> h = <span class="text-primary">new</span> Heroi("Edson");
        </p>
      </div>

      <p class="text-xs">
        <strong>Instruções de Construção:</strong>
        <br/>1. Cria a <code>class Heroi</code>.
        <br/>2. No <code>constructor</code>, aceita o parâmetro <code>nome</code> e guarda-o em <code>this.nome</code>.
        <br/>3. Cria o método <code>saudar()</code> que faz <code>console.log("Eu sou " + this.nome)</code>.
        <br/>4. Fora da classe, cria a constante <code>meuHeroi</code> usando o comando <code>new Heroi("MozDev")</code>.
        <br/>5. Chama o método <code>meuHeroi.saudar()</code>.
      </p>
    </div>
  `,
  objectives: [
    { id: "obj1", description: "Definir class Heroi", test: "class Heroi" },
    { id: "obj2", description: "Usar keyword 'new'", test: "new Heroi" },
    { id: "obj3", description: "Chamar o método saudar()", test: ".saudar()" }
  ]
};
