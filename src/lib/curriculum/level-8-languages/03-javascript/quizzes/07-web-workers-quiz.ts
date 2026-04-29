import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "js-mq7",
  title: "Quiz Master: Web Workers e Paralelismo",
  passingScore: 80,
  questions: [
    {
      id: "q7_1",
      question: "Um Web Worker tem acesso ao objeto 'document' para manipular o HTML?",
      options: [
        "Sim, para isso é que servem.",
        "Não, eles correm num contexto isolado sem acesso ao DOM.",
        "Apenas se o modo 'unsafe' estiver ativo.",
        "Sim, mas apenas em browsers Chromium."
      ],
      correctAnswer: 1,
      explanation: "O isolamento garante que o Worker não interfira com a renderização da UI, evitando condições de corrida visuais."
    },
    {
      id: "q7_2",
      question: "Qual o método usado para enviar dados entre a thread principal e o Worker?",
      options: ["sendMessage()", "postMessage()", "pushData()", "emit()"],
      correctAnswer: 1
    },
    {
      id: "q7_3",
      question: "O que acontece aos dados num 'Transferable Object' após o envio via postMessage?",
      options: [
        "O dado é duplicado na RAM.",
        "A thread de origem perde o acesso ao dado (torna-se inutilizável/neutered).",
        "O dado é encriptado automaticamente.",
        "Nada, ambos partilham o mesmo ponteiro mutável."
      ],
      correctAnswer: 1,
      explanation: "A transferência move a 'posse' da memória, garantindo performance extrema com custo zero de cópia."
    },
    {
      id: "q7_4",
      question: "Podes usar a Fetch API dentro de um Web Worker?",
      options: [
        "Não, apenas na thread principal.",
        "Sim, APIs de rede e timers estão disponíveis no contexto do Worker.",
        "Apenas se for um pedido síncrono.",
        "Sim, mas apenas para ficheiros locais."
      ],
      correctAnswer: 1
    },
    {
      id: "q7_5",
      question: "Como se encerra um Worker a partir da thread que o criou?",
      options: ["worker.stop()", "worker.terminate()", "worker.kill()", "worker.close()"],
      correctAnswer: 1
    },
    {
      id: "q7_6",
      question: "Qual o limite de Web Workers que podes criar num browser moderno?",
      options: [
        "Apenas 1.",
        "Limitado apenas pelos recursos de hardware (CPU/RAM) do dispositivo.",
        "Exatamente 4 por causa dos núcleos da CPU.",
        "O browser bloqueia após 10 workers."
      ],
      correctAnswer: 1
    }
  ]
};
