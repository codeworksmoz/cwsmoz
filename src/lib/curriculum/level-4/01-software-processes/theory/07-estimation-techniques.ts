import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "se-t7",
  title: "Técnicas de Estimativa: Story Points e a Ciência da Incerteza",
  youtubeVideoId: "TQvD-Uq86oY",
  quizId: "se-q7-master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          📏 Esforço Relativo vs. Tempo Absoluto
        </h2>
        <p class="text-lg leading-relaxed">
          Estimar software em horas é um dos erros mais comuns da engenharia. Humanos são péssimos a prever o tempo, mas excelentes a comparar tamanhos. Um Engenheiro Master estima o <strong>Esforço Relativo</strong>, permitindo previsibilidade mesmo quando as capacidades individuais da equipa variam.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Porquê Story Points?</h3>
        <p class="text-sm">Um Story Point é uma unidade abstrata que representa o tamanho de uma tarefa. Ao contrário das horas, os pontos não mudam conforme o desenvolvedor. Uma tarefa de "3 pontos" é a mesma para um Júnior ou um Sénior; o Júnior apenas levará mais horas para completar esses mesmos 3 pontos.</p>
        
        <h3 class="text-xl font-bold font-headline text-primary">O Triângulo da Estimativa</h3>
        <p class="text-sm mb-4">Ao atribuir Story Points, a equipa avalia três dimensões críticas:</p>
        <ul class="grid md:grid-cols-3 gap-4">
          <li class="p-4 bg-card border rounded-xl border-white/5">
            <strong class="text-accent block mb-1">Complexidade:</strong> Quão difícil é a lógica? Envolve algoritmos novos ou integrações legadas?
          </li>
          <li class="p-4 bg-card border rounded-xl border-white/5">
            <strong class="text-accent block mb-1">Volume:</strong> Quanta coisa tem de ser feita? São 10 ecrãs simples ou 1 complexo?
          </li>
          <li class="p-4 bg-card border rounded-xl border-white/5">
            <strong class="text-accent block mb-1">Risco/Incerteza:</strong> Conhecemos a tecnologia? O requisito está claro ou pode mudar?
          </li>
        </ul>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. A Escala Fibonacci e o Cone da Incerteza</h3>
        <p class="text-sm">Usamos a sequência (1, 2, 3, 5, 8, 13, 21) para forçar a equipa a tomar decisões. A distância entre os números aumenta conforme a tarefa cresce, refletindo que <strong>quanto maior o item, maior a nossa incapacidade de o estimar com precisão</strong>.</p>
        <div class="bg-black/40 p-4 rounded-xl border border-white/10 text-center font-mono text-xl text-yellow-500">
          1, 2, 3, 5, 8, 13, 21, ☕, ♾️
        </div>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🃏 Planning Poker: O Valor da Divergência</h3>
          <p class="text-sm leading-relaxed mb-4">
            O Planning Poker é uma técnica de consenso. Se um programador vota 2 e outro vota 13 para a mesma tarefa, <strong>não se faz a média</strong>. Eles devem explicar o porquê. Geralmente, quem votou alto viu um risco que os outros ignoraram, ou quem votou baixo conhece um atalho técnico. A estimativa master nasce desta conversa.
          </p>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Velocidade (Velocity) e Capacidade
          </h4>
          <p class="text-sm leading-relaxed">
            A <strong>Velocity</strong> é a média de Story Points que a equipa entrega por Sprint. Se a vossa velocidade média é 40 pontos, e o PO tem um backlog de 200 pontos, podemos prever com precisão matemática que o projeto levará cerca de 5 Sprints, sem nunca termos falado em horas.
          </p>
        </div>
      </div>
    </div>
  `
};
