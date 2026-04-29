import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "html-mq19",
  title: "Quiz: Web Workers e Concorrência",
  passingScore: 80,
  questions: [
    {
      id: "q19_1",
      question: "Qual a limitação mais crítica de um Web Worker em relação à thread principal?",
      options: [
        "Não consegue fazer pedidos de rede (fetch).",
        "Não tem acesso direto ao DOM (document/window).",
        "Não consegue usar timers (setTimeout).",
        "Não suporta o uso de JavaScript moderno."
      ],
      correctAnswer: 1,
      explanation: "O isolamento do Worker impede que ele manipule o HTML diretamente, prevenindo falhas de sincronismo na renderização."
    },
    {
      id: "q19_2",
      question: "O que acontece aos dados passados via postMessage() por padrão?",
      options: [
        "São partilhados na mesma posição de memória.",
        "São clonados (Structured Clone Algorithm), criando uma cópia independente.",
        "São convertidos obrigatoriamente para JSON.",
        "São encriptados antes da transmissão."
      ],
      correctAnswer: 1
    },
    {
      id: "q19_3",
      question: "Para que serve o segundo argumento opcional do postMessage (ex: [buffer])?",
      options: [
        "Para definir a prioridade do envio.",
        "Para transferir a posse de objetos (Transferable Objects) sem custo de cópia.",
        "Para listar os IDs de erro.",
        "Para comprimir o dado enviado."
      ],
      correctAnswer: 1,
      explanation: "Transferir objetos permite performance extrema ao 'mover' a memória entre threads em vez de a duplicar."
    },
    {
      id: "q19_4",
      question: "Como se encerra um Worker a partir da thread principal?",
      options: [
        "worker.close()",
        "worker.terminate()",
        "worker.stop()",
        "worker.exit()"
      ],
      correctAnswer: 1
    },
    {
      id: "q19_5",
      question: "Um Worker pode criar outro Worker (sub-worker)?",
      options: [
        "Não, apenas a thread principal pode criar workers.",
        "Sim, permitindo arquiteturas de paralelismo em árvore.",
        "Apenas no browser Safari.",
        "Apenas se o site estiver em modo HTTPS."
      ],
      correctAnswer: 1
    }
  ]
};
