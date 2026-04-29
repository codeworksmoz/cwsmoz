import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "js-mq9",
  title: "Quiz Master: Debouncing e Throttling",
  passingScore: 80,
  questions: [
    {
      id: "q9_1",
      question: "Qual técnica é preferível para um campo de pesquisa 'ao digitar' para poupar a API?",
      options: ["Throttling", "Debouncing", "Recursão", "Microtasks"],
      correctAnswer: 1,
      explanation: "Debouncing aguarda o utilizador parar de digitar para disparar a ação, evitando pedidos desnecessários em cada tecla."
    },
    {
      id: "q9_2",
      question: "O Throttling executa a função em qual momento?",
      options: [
        "Apenas no final da sequência de eventos.",
        "Em intervalos regulares e fixos durante a sequência de eventos.",
        "Imediatamente antes de cada clique.",
        "Apenas após o utilizador fechar o browser."
      ],
      correctAnswer: 1
    },
    {
      id: "q9_3",
      question: "Qual o principal benefício de performance destas técnicas?",
      options: [
        "Reduzem o tamanho do bundle de JS.",
        "Reduzem a carga na thread principal e o número de execuções de lógica pesada.",
        "Aumentam a velocidade do download de imagens.",
        "Criptografam os dados do utilizador."
      ],
      correctAnswer: 1
    },
    {
      id: "q9_4",
      question: "No Debounce, o que acontece se o utilizador clicar novamente antes do tempo de delay terminar?",
      options: [
        "A função corre duas vezes.",
        "O cronómetro anterior é cancelado e reiniciado.",
        "O browser lança um erro.",
        "O clique é ignorado."
      ],
      correctAnswer: 1
    },
    {
      id: "q9_5",
      question: "Para monitorizar o progresso de um scroll infinito, qual técnica é mais adequada?",
      options: ["Debouncing", "Throttling", "Promises", "Async/Await"],
      correctAnswer: 1,
      explanation: "O Throttle garante atualizações periódicas suaves enquanto o utilizador faz scroll."
    },
    {
      id: "q9_6",
      question: "Estas técnicas resolvem problemas de 'Race Conditions'?",
      options: [
        "Sim, totalmente.",
        "Não, elas apenas controlam a frequência de execução; a ordem das respostas de rede ainda deve ser gerida.",
        "Apenas se usares a biblioteca Lodash.",
        "Sim, mas apenas em ambiente Node.js."
      ],
      correctAnswer: 1
    }
  ]
};
