import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "html-mq9",
  title: "Quiz: Constraint Validation API",
  passingScore: 80,
  questions: [
    {
      id: "q9_1",
      question: "Qual propriedade do objeto 'validity' indica que um campo 'required' está vazio?",
      options: [
        "emptyField",
        "valueMissing",
        "missingData",
        "nullValue"
      ],
      correctAnswer: 1,
      explanation: "A propriedade valueMissing é definida como true quando o atributo required está presente e o campo não tem valor."
    },
    {
      id: "q9_2",
      question: "O que acontece se chamares setCustomValidity('Erro') num input?",
      options: [
        "O input é limpo automaticamente",
        "O input passa a ser considerado inválido e impede o envio do formulário",
        "Muda a cor do input para vermelho sem afetar o envio",
        "O erro é enviado para o servidor"
      ],
      correctAnswer: 1
    },
    {
      id: "q9_3",
      question: "Como limpas uma mensagem de erro customizada para permitir que o formulário seja enviado?",
      options: [
        "setCustomValidity(null)",
        "setCustomValidity('') (string vazia)",
        "clearValidity()",
        "input.valid = true"
      ],
      correctAnswer: 1,
      explanation: "Passar uma string vazia para setCustomValidity limpa o estado de erro customizado do elemento."
    },
    {
      id: "q9_4",
      question: "Qual o efeito do atributo 'novalidate' na tag <form>?",
      options: [
        "Desativa completamente toda a validação do browser",
        "Impede que o browser mostre as bolhas de erro nativas, mas mantém o estado de validade acessível via JS",
        "Torna todos os campos opcionais",
        "Faz o formulário ignorar o JavaScript"
      ],
      correctAnswer: 1
    },
    {
      id: "q9_5",
      question: "A pseudo-classe CSS :user-invalid difere da :invalid porquê?",
      options: [
        "É mais rápida",
        "Só aplica o estilo após o utilizador ter interagido com o campo (evita erro no carregamento inicial)",
        "Só funciona em telemóveis",
        "É uma regra exclusiva para administradores"
      ],
      correctAnswer: 1
    }
  ]
};
