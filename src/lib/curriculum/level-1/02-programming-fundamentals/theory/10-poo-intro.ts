import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "pf-t10",
  title: "Programação Orientada a Objetos: O Molde e a Criação",
  youtubeVideoId: "mNst8vX-u8E",
  content: `
    <div class="space-y-8">
      <div class="bg-accent/5 p-6 rounded-2xl border border-accent/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-accent flex items-center gap-2">
          🏗️ Pensando em Objetos
        </h2>
        <p class="text-lg leading-relaxed">
          A Programação Orientada a Objetos (POO) é um paradigma que organiza o código em torno de "Objetos" em vez de apenas funções. É como criar moldes na vida real: tens um molde de "Carro" e podes criar milhares de carros reais a partir dele.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Classe vs Objeto</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-5 bg-card border rounded-2xl border-primary/20">
            <h4 class="font-bold text-primary mb-2">Classe (O Molde)</h4>
            <p class="text-xs text-muted-foreground">É a planta arquitetural. Define que todo o Engenheiro tem um <strong>nome</strong> e sabe <strong>codificar</strong>.</p>
          </div>
          <div class="p-5 bg-card border rounded-2xl border-accent/20">
            <h4 class="font-bold text-accent mb-2">Objeto (A Instância)</h4>
            <p class="text-xs text-muted-foreground">É o ser real criado a partir do molde. Ex: O objeto "Edson" é um Engenheiro real com dados específicos.</p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. Atributos e Métodos</h3>
        <p>Dentro de um objeto, organizamos tudo em duas categorias:</p>
        <ul class="list-disc ml-6 space-y-3 text-sm">
          <li><strong>Atributos (Dados):</strong> O que o objeto TEM. (Ex: cor, peso, saldo).</li>
          <li><strong>Métodos (Ações):</strong> O que o objeto FAZ. (Ex: andar, sacar, validar).</li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🧱 O Construtor: O Nascimento</h3>
          <p class="text-sm mb-4">O construtor é um método especial que corre automaticamente quando cries um objeto novo. Serve para "dar vida" aos atributos iniciais.</p>
          <div class="bg-black/40 p-4 rounded-xl font-code text-xs text-accent">
            <span class="text-muted-foreground">// Em JS:</span> <br/>
            class Carro { <br/>
            &nbsp;&nbsp;constructor(cor) { this.cor = cor; } <br/>
            }
          </div>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Porquê usar POO?
          </h4>
          <p class="text-sm leading-relaxed">
            A POO permite que o software cresça de forma organizada. Em vez de teres milhares de variáveis soltas, agrupas os dados e as ações em entidades lógicas, facilitando a manutenção e a colaboração em equipas de centenas de engenheiros.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "pf-t10-quiz"
};
