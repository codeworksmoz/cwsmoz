import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-eco-mq14",
  title: "Quiz Master: PHP 8.4 Property Hooks",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "Qual o principal benefício dos Property Hooks no PHP 8.4?",
      options: ["Mudar a cor do site", "Eliminar o boilerplate de getters e setters manuais", "Aumentar a largura de banda", "Criptografar variáveis"],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "Como se define um hook de escrita numa propriedade?",
      options: ["write =>", "set =>", "input =>", "change =>"],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "Property Hooks podem ser usados em interfaces?",
      options: ["Não, apenas em classes", "Sim, para definir requisitos de lógica em propriedades", "Apenas em classes abstratas", "Sim, mas são ignorados"],
      correctAnswer: 1
    },
    {
      id: "q4",
      question: "O que é Asymmetric Visibility?",
      options: ["Ocultar o código do utilizador", "Permitir visibilidades diferentes para leitura e escrita (ex: public get, private set)", "Mudar a cor dos erros", "Não existe"],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "Property hooks substituem os métodos mágicos __get e __set?",
      options: ["Sim, em todos os casos", "Não, mas são preferíveis para propriedades específicas e tipadas", "Apenas no Laravel", "Sim, mas são mais lentos"],
      correctAnswer: 1
    },
    {
      id: "q6",
      question: "Podes usar Property Hooks em classes readonly?",
      options: ["Não, é proibido", "Sim, mas apenas o hook get", "Sim, sem restrições", "Apenas se a classe for final"],
      correctAnswer: 1
    }
  ]
};