
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "os-q3",
  title: "Quiz: Escalonamento de CPU",
  passingScore: 70,
  questions: [
    {
      id: "q3_1",
      question: "Qual algoritmo de escalonamento é ideal para sistemas interativos?",
      options: ["FCFS", "SJF", "Round Robin", "Priority"],
      correctAnswer: 2
    },
    {
      id: "q3_2",
      question: "O fenómeno de 'Starvation' ocorre quando:",
      options: ["O CPU aquece", "Um processo nunca recebe tempo de execução", "A RAM acaba", "O disco está cheio"],
      correctAnswer: 1
    },
    {
      id: "q3_3",
      question: "O que é o 'Quantum' no Round Robin?",
      options: ["A velocidade da luz", "A fatia de tempo máxima que um processo pode correr", "O tamanho da memória", "O número de cores"],
      correctAnswer: 1
    },
    {
      id: "q3_4",
      question: "O Escalonamento Preemptivo permite que:",
      options: ["O processo corra até ao fim", "O Kernel interrompa um processo para dar lugar a outro", "Apenas uma thread exista", "O utilizador desligue o PC"],
      correctAnswer: 1
    },
    {
      id: "q3_5",
      question: "Qual métrica o SJF (Shortest Job First) tenta minimizar?",
      options: ["Uso de RAM", "Tempo médio de espera", "Uso de energia", "Tráfego de rede"],
      correctAnswer: 1
    },
    {
      id: "q3_6",
      question: "Multilevel Feedback Queues ajustam o quê?",
      options: ["A cor da janela", "A prioridade do processo baseada no seu comportamento", "O tamanho da pilha", "A velocidade do disco"],
      correctAnswer: 1
    }
  ]
};
