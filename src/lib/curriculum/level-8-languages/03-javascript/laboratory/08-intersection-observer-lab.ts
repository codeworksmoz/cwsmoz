import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "js-p8",
  language: "html",
  title: "Projeto Master: Visibilidade e Intersection Observer",
  description: "Detete quando secções do seu projeto entram no campo de visão do utilizador.",
  statement: "Implemente um observador que adicione a classe 'visible' ao elemento footer quando ele for 50% visível.",
  isProjectPart: true,
  template: `const footer = document.querySelector('footer');
const options = { threshold: 0.5 };

const callback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
};

// Inicialize o observador aqui`,
  detailedExplanation: `
    <h3>👁️ Lazy Everything</h3>
    <p>O <code>IntersectionObserver</code> permite detetar a visibilidade de elementos sem usar eventos de scroll pesados. É vital para animações de entrada e carregamento de imagens sob demanda.</p>
  `,
  objectives: [
    {
      id: "intersection_init",
      description: "Instancie o IntersectionObserver.",
      test: "new IntersectionObserver"
    },
    {
      id: "intersection_observe",
      description: "Comece a observar o footer.",
      hint: "observer.observe(footer)",
      test: "observe(footer)"
    }
  ]
};
