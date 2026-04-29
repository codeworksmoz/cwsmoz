import type { Quiz } from '../../types';

export const quiz1: Quiz = {
  id: "web-t1-quiz",
  title: "Quiz: Estrutura e Semântica HTML5",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual o papel fundamental do HTML num projeto web?",
      options: [
        "Definir a lógica de processamento de dados",
        "Definir a estrutura e o significado semântico do conteúdo",
        "Controlar a velocidade do servidor",
        "Gerar animações de alta performance"
      ],
      correctAnswer: 1,
      explanation: "O HTML é a linguagem de marcação que provê o esqueleto e o significado (semântica) para o conteúdo da web."
    },
    {
      id: "q2",
      question: "Por que se recomenda usar a tag <main> em vez de uma <div> genérica para o conteúdo principal?",
      options: [
        "Porque a <div> é mais lenta para o processador",
        "Porque o <main> ajuda motores de busca e leitores de ecrã a identificar o coração da página",
        "Porque o <main> aplica estilos de cor automaticamente",
        "Apenas por uma questão de preferência visual do código"
      ],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "Qual atributo deve ser usado para identificar múltiplos elementos que partilham o mesmo estilo?",
      options: ["id", "tag", "class", "style"],
      correctAnswer: 2,
      explanation: "A 'class' é projetada para ser reutilizável em múltiplos elementos, enquanto o 'id' deve ser único."
    },
    {
      id: "q4",
      question: "O que acontece se um documento HTML não tiver a tag <!DOCTYPE html>?",
      options: [
        "O site não abre",
        "O browser entra em 'Quirks Mode', podendo exibir o layout de forma errada",
        "O JavaScript para de funcionar",
        "Nada, o browser corrige o erro silenciosamente"
      ],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "Qual a função da meta tag 'viewport'?",
      options: [
        "Aumentar a resolução das imagens",
        "Controlar como o site é renderizado em ecrãs de telemóveis (responsividade)",
        "Ligar o site a uma base de dados externa",
        "Acelerar o download de fontes"
      ],
      correctAnswer: 1
    },
    {
      id: "q6",
      question: "Qual a diferença técnica entre <strong> e <b>?",
      options: [
        "Nenhuma, são idênticos",
        "<strong> dá importância semântica; <b> apenas aplica negrito visual",
        "<b> é mais moderno que <strong>",
        "<strong> é usado apenas para títulos"
      ],
      correctAnswer: 1,
      explanation: "Semântica importa! <strong> diz ao browser e assistentes que aquele texto é realmente importante, não apenas 'grosso'."
    }
  ]
};