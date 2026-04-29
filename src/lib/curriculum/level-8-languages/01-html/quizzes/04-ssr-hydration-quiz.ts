import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "html-mq4",
  title: "Quiz: Estratégias de Renderização",
  passingScore: 80,
  questions: [
    {
      id: "q4_1",
      question: "O que é o processo de 'Hidratação' (Hydration)?",
      options: [
        "Limpar o cache do browser",
        "O JavaScript anexa event listeners ao HTML estático enviado pelo servidor para torná-lo interativo",
        "Comprimir imagens para descarregar mais rápido",
        "Validar se o HTML está bem formatado"
      ],
      correctAnswer: 1
    },
    {
      id: "q4_2",
      question: "Qual a principal vantagem do SSG (Static Site Generation)?",
      options: [
        "Dados sempre em tempo real",
        "Performance extrema com entrega via CDN e menor carga no servidor",
        "Não necessita de HTML",
        "Funciona apenas em desktops"
      ],
      correctAnswer: 1
    }
  ]
};
