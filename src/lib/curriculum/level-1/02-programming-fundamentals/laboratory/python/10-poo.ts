import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p10-py",
  language: "python",
  title: "Missão: Arquiteto Pythonic",
  description: "Crie uma classe e um objeto em Python.",
  statement: "Implemente a classe Heroi com o método construtor e uma ação.",
  isProjectPart: true,
  template: ``,
  youtubeVideoId: "mNst8vX-u8E",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🐍 Classes em Python</h3>
      <p>Em Python, o construtor chama-se <code>__init__</code> e o primeiro parâmetro de cada método deve ser sempre <code>self</code>.</p>
      
      <div class="bg-muted p-4 rounded-xl border border-white/10 space-y-2">
        <p class="text-xs font-bold text-yellow-500">A Ferramenta do Dia:</p>
        <p class="text-[11px] font-mono leading-relaxed">
          <span class="text-primary">class</span> Heroi:<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-primary">def</span> __init__(self, nome):<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.nome = nome<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-primary">def</span> saudar(self):<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(f"Olá {self.nome}")<br/><br/>
          meu_heroi = Heroi("MozDev")
        </p>
      </div>

      <p class="text-xs">
        <strong>Instruções de Construção:</strong>
        <br/>1. Define a <code>class Heroi:</code>.
        <br/>2. Cria o método <code>def __init__(self, nome):</code> e guarda o nome em <code>self.nome</code>.
        <br/>3. Cria o método <code>def saudar(self):</code> que imprime o nome.
        <br/>4. Cria o objeto <code>meu_heroi = Heroi("MozDev")</code>.
        <br/>5. Chama <code>meu_heroi.saudar()</code>.
      </p>
    </div>
  `,
  objectives: [
    { id: "obj1", description: "Definir __init__ com self", test: "__init__(self" },
    { id: "obj2", description: "Instanciar objeto", test: "Heroi(" },
    { id: "obj3", description: "Chamar método no terminal", test: ".saudar()" }
  ]
};
