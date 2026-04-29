import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "js-mq5",
  title: "Quiz Master: AbortController e Sinais de Cancelamento",
  passingScore: 80,
  questions: [
    {
      id: "q5_1",
      question: "Qual o nome do erro lançado por uma Promise quando ela é abortada?",
      options: ["CancelError", "AbortError", "TimeoutError", "PromiseRejectError"],
      correctAnswer: 1,
      explanation: "O motor lança um DOMException com o nome 'AbortError', que deve ser capturado no bloco catch."
    },
    {
      id: "q5_2",
      question: "Um AbortController pode ser reutilizado após o método abort() ser chamado?",
      options: [
        "Sim, basta limpar o sinal.",
        "Não, um controlador abortado é permanente; deves criar uma nova instância para novos pedidos.",
        "Sim, chamando controller.reset().",
        "Apenas se for usado com a Fetch API."
      ],
      correctAnswer: 1,
      explanation: "Uma vez que o sinal entra no estado abortado, ele não pode voltar atrás."
    },
    {
      id: "q5_3",
      question: "Como se passa o sinal de cancelamento para o método fetch()?",
      options: [
        "fetch(url, controller.abort())",
        "fetch(url, { signal: controller.signal })",
        "fetch(url, controller)",
        "fetch(url).abort(controller)"
      ],
      correctAnswer: 1
    },
    {
      id: "q5_4",
      question: "Qual a vantagem de usar o AbortSignal em addEventListener?",
      options: [
        "Acelera a execução da função.",
        "Permite remover o ouvinte sem precisar da referência da função original, facilitando a limpeza de closures.",
        "Muda a prioridade do evento no Event Loop.",
        "Permite que o evento dispare apenas uma vez."
      ],
      correctAnswer: 1
    },
    {
      id: "q5_5",
      question: "O método estático AbortSignal.timeout(ms) retornará um sinal abortado após quanto tempo?",
      options: [
        "Imediatamente.",
        "Após o número de milissegundos especificado.",
        "Apenas quando a rede falhar.",
        "Quando o utilizador fechar o browser."
      ],
      correctAnswer: 1
    },
    {
      id: "q5_6",
      question: "Podes usar um único AbortController para cancelar 50 pedidos fetch diferentes ao mesmo tempo?",
      options: [
        "Não, é um controlador por pedido.",
        "Sim, podes passar o mesmo signal para múltiplos pedidos e abortar todos simultaneamente.",
        "Apenas se os pedidos forem para o mesmo domínio.",
        "Sim, mas apenas em ambiente Node.js."
      ],
      correctAnswer: 1,
      explanation: "Esta é uma técnica master para 'Group Cancellation', útil em dashboards que carregam muitos widgets."
    }
  ]
};
