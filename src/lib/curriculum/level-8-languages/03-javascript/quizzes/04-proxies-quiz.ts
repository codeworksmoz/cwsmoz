import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "js-mq4",
  title: "Quiz: Proxies e Metaprogramação",
  passingScore: 80,
  questions: [
    {
      id: "q4_1",
      question: "Qual o papel do objeto 'handler' num Proxy?",
      options: [
        "Guardar os dados originais do objeto",
        "Definir as 'traps' (armadilhas) que intercetam as operações",
        "Aumentar a velocidade de acesso ao objeto",
        "Converter o objeto para JSON"
      ],
      correctAnswer: 1
    },
    {
      id: "q4_2",
      question: "Por que devemos usar a API 'Reflect' dentro de um handler de Proxy?",
      options: [
        "Para mudar a cor do objeto",
        "Para garantir que o comportamento padrão do motor JS é mantido corretamente",
        "Porque é obrigatório por sintaxe",
        "Para encriptar os dados"
      ],
      correctAnswer: 1
    }
  ]
};
