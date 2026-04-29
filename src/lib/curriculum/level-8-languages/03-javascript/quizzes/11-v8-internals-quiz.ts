import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "js-mq11",
  title: "Quiz Master: V8 Internals e Otimização",
  passingScore: 80,
  questions: [
    {
      id: "q11_1",
      question: "O que são 'Hidden Classes' no motor V8?",
      options: [
        "Classes que o utilizador não consegue ver no código.",
        "Estruturas internas criadas pelo motor para otimizar o acesso a propriedades de objetos dinâmicos.",
        "Classes usadas apenas para segurança.",
        "Uma funcionalidade do TypeScript."
      ],
      correctAnswer: 1
    },
    {
      id: "q11_2",
      question: "Como se mantém o Monomorfismo numa função para garantir performance?",
      options: [
        "Passando sempre o mesmo tipo e 'formato' de objeto para a função.",
        "Usando apenas números inteiros.",
        "Evitando o uso de loops.",
        "Reiniciando o motor V8 periodicamente."
      ],
      correctAnswer: 0
    },
    {
      id: "q11_3",
      question: "Adicionar propriedades a um objeto em ordens diferentes quebra o quê?",
      options: ["A internet", "A Hidden Class partilhada", "O Garbage Collector", "A segurança do browser"],
      correctAnswer: 1
    },
    {
      id: "q11_4",
      question: "O que é o 'Inline Caching'?",
      options: [
        "Guardar o HTML no disco.",
        "Memorizar o offset de uma propriedade para acesso direto em chamadas futuras.",
        "Um erro de cache de rede.",
        "Limpar a memória RAM."
      ],
      correctAnswer: 1
    },
    {
      id: "q11_5",
      question: "Qual o papel do compilador 'TurboFan' no V8?",
      options: [
        "Gerar a interface visual.",
        "Compilador de otimização final que gera código de máquina ultra-rápido.",
        "Validar o arquivo JSON.",
        "Gere a conexão WiFi."
      ],
      correctAnswer: 1
    },
    {
      id: "q11_6",
      question: "Por que deves evitar mudar o protótipo de um objeto vivo?",
      options: [
        "Porque gasta bateria.",
        "Porque invalida todas as otimizações do JIT para aquele objeto (Deoptimization).",
        "Porque o JavaScript é imutável.",
        "Porque é proibido pelo Google."
      ],
      correctAnswer: 1
    }
  ]
};
