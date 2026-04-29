import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "html-mq7",
  title: "Quiz: Multimedia Avançada",
  passingScore: 80,
  questions: [
    {
      id: "q7_1",
      question: "Qual tag é usada para fornecer legendas e descrições áudio a um elemento <video>?",
      options: ["<caption >", "<label>", "<track>", "<subtitles>"],
      correctAnswer: 2
    },
    {
      id: "q7_2",
      question: "Como o Canvas se diferencia de uma imagem SVG?",
      options: [
        "Canvas é baseado em vetores, SVG em pixels",
        "Canvas é uma superfície de desenho baseada em pixels (raster) manipulada via JS, SVG é baseada em vetores (XML)",
        "Canvas não suporta cores",
        "SVG é apenas para animações 3D"
      ],
      correctAnswer: 1
    }
  ]
};
