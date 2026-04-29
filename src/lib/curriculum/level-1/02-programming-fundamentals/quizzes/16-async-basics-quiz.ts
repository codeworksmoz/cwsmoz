import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "pf-t16-quiz",
  title: "Quiz: Engenharia de Assincronia",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "O que caracteriza um código 'Bloqueante' (Blocking)?",
      options: [
        "Ele impede que o computador pegue vírus",
        "A execução pára e espera que uma tarefa lenta termine antes de seguir",
        "Ele desativa o rato do utilizador",
        "O código é encriptado para ninguém ler"
      ],
      correctAnswer: 1,
      explanation: "Código síncrono/bloqueante executa uma tarefa de cada vez. Se a tarefa demorar, todo o fluxo subsequente fica parado."
    },
    {
      id: "q2",
      question: "Qual o estado de uma Promise enquanto o ficheiro ainda está a ser descarregado?",
      options: ["Resolved", "Rejected", "Pending", "Finished"],
      correctAnswer: 2,
      explanation: "Pending (Pendente) é o estado inicial de qualquer operação assíncrona que ainda não retornou um resultado ou erro."
    },
    {
      id: "q3",
      question: "Para que serve a palavra-chave 'await'?",
      options: [
        "Para acelerar a internet em 2x",
        "Para pausar a execução da função assíncrona até que a Promise seja resolvida",
        "Para criar uma variável global",
        "Para repetir um loop infinitamente"
      ],
      correctAnswer: 1,
      explanation: "Await diz ao motor: 'Espera aqui por este valor, mas deixa o resto do sistema livre'."
    },
    {
      id: "q4",
      question: "O que acontece se uma Promise for rejeitada e não houver tratamento de erro?",
      options: [
        "O computador reinicia",
        "O programa ignora silenciosamente",
        "Ocorre um erro de 'Uncaught Promise Rejection' que pode crashar a app",
        "O valor torna-se zero automaticamente"
      ],
      correctAnswer: 2,
      explanation: "Sempre que usas assincronia, deves usar try/catch ou .catch() para lidar com possíveis falhas de rede ou hardware."
    },
    {
      id: "q5",
      question: "Por que a assincronia é vital em aplicações Mobile e Web?",
      options: [
        "Para o código ocupar menos espaço",
        "Para garantir que a interface (UI) continue a responder a toques enquanto os dados carregam",
        "Porque o Google obriga",
        "Para aumentar o brilho do ecrã"
      ],
      correctAnswer: 1,
      explanation: "Sem assincronia, o site ou app 'congelaria' em cada pedido de rede, causando uma péssima experiência de utilizador."
    },
    {
      id: "q6",
      question: "Uma função marcada como 'async' retorna sempre o quê?",
      options: ["Um número", "Uma string", "Uma Promise", "Nada (void)"],
      correctAnswer: 2,
      explanation: "Mesmo que retornes um valor simples, o motor 'embrulha' esse valor numa Promise automaticamente."
    }
  ]
};
