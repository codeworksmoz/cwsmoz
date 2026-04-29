import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "html-mq13",
  title: "Quiz: Dados Estruturados e JSON-LD",
  passingScore: 80,
  questions: [
    {
      id: "q13_1",
      question: "Qual o formato de dados estruturados preferido pelo Google para a web moderna?",
      options: [
        "Microdata",
        "RDFa",
        "JSON-LD",
        "XML Puro"
      ],
      correctAnswer: 2,
      explanation: "JSON-LD é o formato recomendado por ser fácil de implementar, manter e não poluir o DOM visual."
    },
    {
      id: "q13_2",
      question: "Onde deve ser colocado o script JSON-LD no documento HTML?",
      options: [
        "Apenas no final do body",
        "Apenas no head",
        "Pode ser colocado no head ou no body",
        "É proibido usar scripts para SEO"
      ],
      correctAnswer: 2
    },
    {
      id: "q13_3",
      question: "Qual a função do atributo '@context' num objeto JSON-LD?",
      options: [
        "Definir a cor do texto",
        "Ligar o ficheiro a uma base de dados local",
        "Especificar o vocabulário utilizado (geralmente schema.org)",
        "Traduzir o site para Inglês"
      ],
      correctAnswer: 2
    },
    {
      id: "q13_4",
      question: "O que o Google gera na pesquisa ao detetar um JSON-LD de 'FAQPage'?",
      options: [
        "Um mapa do site",
        "Rich Snippets com perguntas e respostas clicáveis diretamente na busca",
        "Um anúncio pago gratuito",
        "Aumenta a velocidade do servidor"
      ],
      correctAnswer: 1
    },
    {
      id: "q13_5",
      question: "Qual atributo de Microdata identifica o 'Tipo' de um objeto (ex: Person)?",
      options: [
        "itemscope",
        "itemprop",
        "itemtype",
        "itemid"
      ],
      correctAnswer: 2
    },
    {
      id: "q13_6",
      question: "O que é o 'Knowledge Graph'?",
      options: [
        "Um gráfico de performance",
        "A base de conhecimento do Google que liga entidades e factos (exibida no painel lateral)",
        "Uma nova tag do HTML6",
        "Um repositório de códigos"
      ],
      correctAnswer: 1
    }
  ]
};