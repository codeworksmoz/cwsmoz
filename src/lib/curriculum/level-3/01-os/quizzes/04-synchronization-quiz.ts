
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "os-q4",
  title: "Quiz: Sincronização e Concorrência",
  passingScore: 70,
  questions: [
    {
      id: "q4_1",
      question: "O que é uma 'Race Condition'?",
      options: ["Uma corrida de carros", "Quando o resultado depende da ordem imprevisível de execução de threads", "Um erro de rede", "Quando a CPU corre a 5GHz"],
      correctAnswer: 1
    },
    {
      id: "q4_2",
      question: "Para que serve um Mutex?",
      options: ["Para somar números", "Para garantir que apenas uma thread entra na secção crítica", "Para acelerar a internet", "Para limpar o disco"],
      correctAnswer: 1
    },
    {
      id: "q4_3",
      question: "Um semáforo com valor inicial 1 é equivalente a um:",
      options: ["Monitor", "Mutex", "Cgroup", "Processo"],
      correctAnswer: 1
    },
    {
      id: "q4_4",
      question: "O problema dos 'Jantares dos Filósofos' ilustra o quê?",
      options: ["Falta de comida", "Deadlocks e disputa de recursos", "Busca binária", "Design de interfaces"],
      correctAnswer: 1
    },
    {
      id: "q4_5",
      question: "A operação 'Wait' (P) num semáforo faz o quê?",
      options: ["Incrementa o valor", "Decrementa o valor e bloqueia se for menor que zero", "Apaga o semáforo", "Reinicia a thread"],
      correctAnswer: 1
    },
    {
      id: "q4_6",
      question: "Qual a principal vantagem dos Monitores sobre semáforos?",
      options: ["São mais rápidos", "Garantem a exclusão mútua automaticamente via compilador/linguagem", "Não usam RAM", "São assíncronos"],
      correctAnswer: 1
    }
  ]
};
