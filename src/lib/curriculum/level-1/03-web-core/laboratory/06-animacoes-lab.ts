import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "web-p12-anim",
  language: "html",
  title: "Laboratório Master: Micro-interações e Spinners",
  description: "Crie elementos vivos que reagem e se movem com performance de elite.",
  statement: "Crie um botão com uma transição de escala no hover e um círculo que rode infinitamente (loader).",
  template: `<!-- Arquiteto: Construa os componentes vivos -->
<button class="master-btn">ENVIAR MISSÃO</button>

<div class="loader"></div>

<style>
  .master-btn {
    padding: 15px 30px;
    background: #3b82f6;
    color: white;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    /* 1. Adicione a transição para a propriedade transform aqui */
    
  }

  .master-btn:hover {
    /* 2. Aplique um scale de 1.1 no hover */
    
  }

  .loader {
    width: 40px;
    height: 40px;
    border: 4px solid rgba(255,255,255,0.1);
    border-top-color: #3b82f6;
    border-radius: 50%;
    margin-top: 20px;
    /* 3. Aplique a animação 'rodar' aqui (1s, linear, infinita) */
    
  }

  /* 4. Defina o @keyframes rodar abaixo (de 0deg a 360deg) */
  
</style>`,
  youtubeVideoId: "u044iM9xsTM",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🔨 Missão: Movimento Fluido</h3>
      <p>Um site profissional "respira". A tua missão é implementar duas micro-interações fundamentais:</p>
      
      <div class="bg-muted p-4 rounded-xl border border-primary/20 space-y-2">
        <p class="text-xs font-bold text-yellow-500">Manual Técnico:</p>
        <ul class="text-[10px] space-y-1 list-disc ml-4">
          <li><strong>Transição:</strong> Use <code>transition: transform 0.2s ease;</code> no botão.</li>
          <li><strong>Feedback:</strong> No <code>:hover</code>, use <code>transform: scale(1.1);</code>.</li>
          <li><strong>Animação:</strong> No loader, use <code>animation: rodar 1s linear infinite;</code>.</li>
          <li><strong>Keyframes:</strong> O @keyframes deve usar <code>transform: rotate(360deg);</code> no estado final.</li>
        </ul>
      </div>
      <p class="text-xs italic">Dica: Animar o transform garante que o teu site não trave em telemóveis mais antigos.</p>
    </div>
  `,
  objectives: [
    {
      id: "btn_transition",
      description: "Adicionar transition de transform ao botão.",
      test: "transition: transform"
    },
    {
      id: "btn_hover",
      description: "Aplicar scale(1.1) no hover.",
      test: "scale(1.1)"
    },
    {
      id: "loader_anim",
      description: "Aplicar a animação ao loader.",
      test: "animation: rodar"
    },
    {
      id: "keyframes_def",
      description: "Definir @keyframes rodar com rotação total.",
      test: "rotate(360deg)"
    }
  ]
};
