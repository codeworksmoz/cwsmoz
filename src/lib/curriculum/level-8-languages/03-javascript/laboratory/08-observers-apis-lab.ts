import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "js-p8",
  language: "html",
  title: "Projeto Master: Animações de Visibilidade Inteligente",
  description: "Implemente um sistema de entrada suave (reveal) usando Intersection Observer.",
  statement: "Utilize o IntersectionObserver para adicionar a classe 'active' aos cards quando eles forem 20% visíveis no ecrã.",
  isProjectPart: true,
  template: `<!DOCTYPE html>
<html lang="pt-MZ">
<head>
  <style>
    body { background: #0f172a; color: white; padding-bottom: 100vh; }
    .card { 
      height: 200px; margin: 50px; background: #1e293b; 
      opacity: 0; transform: translateY(30px); 
      transition: all 0.8s ease-out;
      border-radius: 1rem; border: 1px solid #334155;
    }
    /* Ação 2: Estilize o estado ativo */
    .card.active {
      opacity: 1; transform: translateY(0);
    }
  </style>
</head>
<body>
  <div style="height: 80vh">Desça para ver a mágica...</div>
  
  <div class="card">Card Master 1</div>
  <div class="card">Card Master 2</div>

  <script>
    // Ação 1: Configure o Observador
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Ação 3: Pare de observar para economizar recursos
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    // Ação 4: Inicie a observação em todos os cards
    document.querySelectorAll('.card').forEach(card => observer.observe(card));
  </script>
</body>
</html>`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🕵️ Missão: Reveal on Scroll</h3>
      <p class="text-sm">O objetivo deste laboratório é criar um efeito de revelação profissional no seu portal. Em vez de carregar tudo de uma vez, os elementos "nascem" à medida que o utilizador faz scroll.</p>
      
      <div class="bg-muted p-4 rounded-xl border border-primary/20 space-y-2">
        <p class="text-xs font-bold text-yellow-500">Requisitos Técnicos:</p>
        <ul class="text-[10px] space-y-1 list-disc ml-4">
          <li><strong>Threshold:</strong> Use <code>0.2</code> para que a animação comece mal o topo do elemento apareça.</li>
          <li><strong>Performance:</strong> Utilize <code>observer.unobserve(entry.target)</code> dentro do if para garantir que a animação ocorra apenas uma vez.</li>
          <li><strong>Visual:</strong> Certifique-se de que a classe <code>active</code> muda a opacidade e a posição.</li>
        </ul>
      </div>
    </div>
  `,
  objectives: [
    { id: "io_init", description: "Instanciar o IntersectionObserver.", test: "new IntersectionObserver" },
    { id: "threshold", description: "Configurar threshold: 0.2.", test: "threshold: 0.2" },
    { id: "unobserve", description: "Chamar unobserve após a ativação.", test: "observer.unobserve" }
  ]
};
