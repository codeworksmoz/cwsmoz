import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "cs-t6-quiz",
  title: "Quiz: Algoritmos Fundamentais",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual é a definição mais precisa de um algoritmo?",
      options: [
        "Um programa escrito em Python ou Java",
        "Uma sequência finita e clara de passos para resolver um problema",
        "Um computador de alta performance",
        "Uma base de dados complexa"
      ],
      correctAnswer: 1,
      explanation: "Lembre-se: um algoritmo pode existir até num papel ou numa receita de cozinha. É a estratégia lógica, não o código em si."
    },
    {
      id: "q2",
      question: "O que significa a propriedade da 'Finitude' num algoritmo?",
      options: [
        "Que ele deve ser escrito em letras minúsculas",
        "Que ele deve ter um fim após um número determinado de passos",
        "Que ele pode rodar para sempre se o computador for bom",
        "Que ele só aceita números inteiros"
      ],
      correctAnswer: 1,
      explanation: "Um algoritmo útil deve chegar a um resultado. Se ele entrar num loop infinito e nunca parar, ele falhou como solução técnica."
    },
    {
      id: "q3",
      question: "Por que a instrução 'Cozinhe até ficar bom' é considerada um erro num algoritmo?",
      options: [
        "Porque é uma instrução muito longa",
        "Porque é ambígua (imprecisa). O que é 'bom' para um pode não ser para outro.",
        "Porque não usa números",
        "Porque o computador não sabe cozinhar"
      ],
      correctAnswer: 1,
      explanation: "Um algoritmo deve ser exato. Em engenharia, usaríamos 'Cozinhe a 100°C por 15 minutos'."
    },
    {
      id: "q4",
      question: "Um algoritmo pode ter zero entradas (inputs)?",
      options: [
        "Não, ele precisa sempre de dados externos",
        "Sim, ele pode gerar informações baseadas apenas na sua lógica interna",
        "Apenas em linguagens avançadas",
        "Não, isso causaria um erro de sistema"
      ],
      correctAnswer: 1,
      explanation: "Alguns algoritmos, como um que imprime a data atual ou uma sequência fixa de números, não precisam de dados externos para começar."
    },
    {
      id: "q5",
      question: "Na decomposição de problemas, qual é o objetivo do engenheiro?",
      options: [
        "Escrever o máximo de linhas de código possível",
        "Quebrar um problema complexo em partes menores e geríveis",
        "Esconder os erros do utilizador",
        "Aumentar o brilho do ecrã"
      ],
      correctAnswer: 1,
      explanation: "Dividir para conquistar! Resolver 100 problemas minúsculos é muito mais fácil do que tentar resolver um gigante de uma só vez."
    },
    {
      id: "q6",
      question: "Qual é a relação entre algoritmo e linguagem de programação?",
      options: [
        "São a mesma coisa",
        "A linguagem de programação é a ferramenta usada para expressar o algoritmo para a máquina",
        "O algoritmo é um tipo especial de linguagem de programação",
        "Não existe relação entre os dois"
      ],
      correctAnswer: 1,
      explanation: "O algoritmo é a ideia (o mapa). A linguagem de programação é o idioma que usamos para explicar essa ideia ao computador."
    }
  ]
};
