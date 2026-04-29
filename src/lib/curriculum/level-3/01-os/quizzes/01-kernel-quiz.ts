import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "os-q1",
  title: "Quiz: Arquitetura de Kernels",
  passingScore: 70,
  questions: [
    {
      id: "q1_1",
      question: "Qual o risco principal de um Kernel Monolítico?",
      options: ["Lentidão excessiva", "Dificuldade de depuração", "Um erro num driver pode causar falha total do sistema", "Não suporta redes"],
      correctAnswer: 2
    },
    {
      id: "q1_2",
      question: "O que é uma System Call?",
      options: ["Uma chamada de vídeo", "A interface que apps usam para pedir serviços ao Kernel", "Um erro de memória", "Um tipo de hardware"],
      correctAnswer: 1
    },
    {
      id: "q1_3",
      question: "Qual componente corre tipicamente no User Space num Microkernel?",
      options: ["Escalonador de CPU", "Drivers de Dispositivos", "Gestão básica de interrupções", "Nada"],
      correctAnswer: 1
    },
    {
      id: "q1_4",
      question: "O termo 'Ring 0' refere-se a:",
      options: ["Modo Utilizador", "Modo Kernel (Máximo Privilégio)", "O estado desligado", "Uma topologia de rede"],
      correctAnswer: 1
    },
    {
      id: "q1_5",
      question: "O que é um 'Trap' no contexto de SO?",
      options: ["Um vírus", "Uma interrupção gerada por software para mudar para o modo Kernel", "Um erro físico de disco", "Uma técnica de hacking"],
      correctAnswer: 1
    },
    {
      id: "q1_6",
      question: "Qual kernel é conhecido pela sua facilidade de manutenção e segurança modular?",
      options: ["Monolítico", "Microkernel", "DOS", "Não existe tal kernel"],
      correctAnswer: 1
    }
  ]
};