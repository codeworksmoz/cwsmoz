import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "css-mq9",
  title: "Quiz: Variable Fonts",
  passingScore: 80,
  questions: [
    {
      id: "q9_1",
      question: "Qual o benefício de performance das Variable Fonts?",
      options: [
        "Aumentam a velocidade da internet",
        "Carregam todos os pesos e estilos num único ficheiro pequeno, reduzindo pedidos de rede",
        "Eliminam a necessidade de usar CSS",
        "Funcionam sem precisar de descarregar a fonte"
      ],
      correctAnswer: 1
    }
  ]
};