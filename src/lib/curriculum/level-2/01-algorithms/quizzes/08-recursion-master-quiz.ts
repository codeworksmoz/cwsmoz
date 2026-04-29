
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "alg-q8",
  title: "Quiz: Recursão e Memória",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "O que acontece na memória RAM em cada chamada recursiva?",
      options: [
        "A memória é libertada",
        "Um novo 'Stack Frame' é criado na pilha de chamadas",
        "O Garbage Collector é ativado",
        "O disco rígido é acedido"
      ],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "Qual o principal perigo de uma recursão infinita?",
      options: [
        "O ecrã fica azul",
        "Stack Overflow (esgotamento da memória da pilha)",
        "O disco enche",
        "A internet cai"
      ],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "O que caracteriza a 'Tail Recursion' (Recursão de Cauda)?",
      options: [
        "A função chama-se a si própria no início",
        "A chamada recursiva é a última operação da função",
        "A função não tem caso base",
        "A função usa loops while"
      ],
      correctAnswer: 1
    },
    {
      id: "q4",
      question: "Para que serve o 'Caso Base'?",
      options: [
        "Para iniciar a função",
        "Para interromper as chamadas sucessivas e evitar loop infinito",
        "Para aumentar a velocidade",
        "Para guardar o resultado no banco"
      ],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "A técnica TCO (Tail Call Optimization) permite:",
      options: [
        "Executar recursão com memória constante O(1), como se fosse um loop",
        "Mudar a cor da interface",
        "Correr código JS em servidores C++",
        "Eliminar a necessidade de parâmetros"
      ],
      correctAnswer: 0
    },
    {
      id: "q6",
      question: "Toda a função recursiva pode ser escrita usando loops (iteração)?",
      options: [
        "Não, algumas são apenas recursivas",
        "Sim, embora algumas fiquem muito complexas com loops manuais",
        "Apenas em linguagens antigas",
        "Apenas se tiverem retorno"
      ],
      correctAnswer: 1
    }
  ]
};
