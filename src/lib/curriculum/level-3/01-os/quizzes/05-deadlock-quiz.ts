
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "os-q5",
  title: "Quiz: Teoria de Deadlocks",
  passingScore: 70,
  questions: [
    {
      id: "q5_1",
      question: "Qual das 4 condições de Coffman diz que recursos não podem ser partilhados?",
      options: ["Circular Wait", "Mutual Exclusion", "No Preemption", "Hold and Wait"],
      correctAnswer: 1
    },
    {
      id: "q5_2",
      question: "O Algoritmo do Banqueiro é usado para:",
      options: ["Investir dinheiro", "Evitar deadlocks verificando se o sistema continua num estado seguro", "Detectar vírus", "Ordenar tabelas"],
      correctAnswer: 1
    },
    {
      id: "q5_3",
      question: "O que é um 'Safe State'?",
      options: ["Estado onde não há bugs", "Estado onde existe uma sequência de execução que permite a todos os processos terminar", "Modo Kernel", "Quando o PC está desligado"],
      correctAnswer: 1
    },
    {
      id: "q5_4",
      question: "Como se quebra a condição de 'Circular Wait'?",
      options: ["Desligando o PC", "Impondo uma ordem numérica rigorosa para o pedido de recursos", "Usando mais RAM", "Aumentando a CPU"],
      correctAnswer: 1
    },
    {
      id: "q5_5",
      question: "A estratégia de 'Ostrich Algorithm' consiste em:",
      options: ["Resolver tudo", "Ignorar o problema do deadlock assumindo que ele ocorre raramente", "Reiniciar sempre", "Usar IA"],
      correctAnswer: 1
    },
    {
      id: "q5_6",
      question: "Detectar deadlocks em runtime exige qual estrutura de dados?",
      options: ["Stack", "Grafo de Alocação de Recursos (RAG)", "Hash Table", "B-Tree"],
      correctAnswer: 1
    }
  ]
};
