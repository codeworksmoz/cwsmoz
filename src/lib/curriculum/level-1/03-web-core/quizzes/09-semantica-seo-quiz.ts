import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "web-q9",
  title: "Quiz: Semântica e SEO Técnico",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual o principal benefício do HTML Semântico?",
      options: [
        "Mudar a cor do site automaticamente",
        "Dizer ao browser e aos motores de busca o significado do conteúdo",
        "Acelerar o processador do computador",
        "Reduzir o tamanho das imagens"
      ],
      correctAnswer: 1,
      explanation: "Semântica é significado. Tags semânticas dão contexto aos dados para humanos e máquinas."
    },
    {
      id: "q2",
      question: "Qual tag é a mais adequada para uma barra lateral com links relacionados ou anúncios?",
      options: ["<section>", "<div>", "<aside>", "<article>"],
      correctAnswer: 2,
      explanation: "A tag <aside> identifica conteúdo que é tangencial ao conteúdo principal da página."
    },
    {
      id: "q3",
      question: "Quantas tags <main> devem existir num documento HTML5?",
      options: ["Uma por cada parágrafo", "Quantas forem necessárias", "Apenas uma", "Nenhuma, é uma tag opcional"],
      correctAnswer: 2,
      explanation: "A tag <main> deve conter o conteúdo único da página, logo deve haver apenas uma para não confundir os motores de busca."
    },
    {
      id: "q4",
      question: "Por que um Engenheiro de Elite prefere <button> a uma <div onclick='...'>?",
      options: [
        "Porque o botão é mais bonito",
        "Porque o <button> já vem com suporte nativo a foco de teclado e acessibilidade",
        "Porque as divs não podem ser clicadas",
        "Porque gasta menos eletricidade"
      ],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "Qual a diferença entre <article> e <section>?",
      options: [
        "Não existe diferença",
        "<article> é para conteúdo independente; <section> é para agrupar temas relacionados dentro de um documento",
        "<section> é apenas para títulos",
        "<article> só pode ser usado em blogs"
      ],
      correctAnswer: 1,
      explanation: "Um <article> deve fazer sentido mesmo se for removido do contexto do site e lido isoladamente."
    },
    {
      id: "q6",
      question: "O que caracteriza a 'div-ite' no desenvolvimento web?",
      options: [
        "Uma doença rara de programadores",
        "O uso excessivo de tags <div> genéricas onde tags semânticas seriam mais apropriadas",
        "Escrever código CSS dentro do HTML",
        "Esquecer de fechar as tags"
      ],
      correctAnswer: 1
    }
  ]
};
