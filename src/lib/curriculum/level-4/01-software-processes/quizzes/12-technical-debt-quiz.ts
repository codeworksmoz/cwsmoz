import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "se-q12-master",
  title: "Quiz: Gestão de Débito Técnico e Refatoração",
  passingScore: 80,
  questions: [
    {
      id: "q12_1",
      question: "Segundo a metáfora de Ward Cunningham, o que representa o 'Juro' do débito técnico?",
      options: [
        "O valor pago às licenças de software.",
        "O esforço extra e a lentidão que a equipa enfrenta em cada manutenção futura devido a código de má qualidade.",
        "O bónus dos desenvolvedores que entregam mais rápido.",
        "A multa por falhar prazos de entrega."
      ],
      correctAnswer: 1,
      explanation: "Os juros são pagos diariamente sob a forma de dificuldade de compreensão do código e aumento da probabilidade de bugs."
    },
    {
      id: "q12_2",
      question: "Qual tipo de débito técnico é considerado 'Prudente e Deliberado'?",
      options: [
        "Aquele causado por desenvolvedores juniores sem supervisão.",
        "Uma decisão consciente da equipa de lançar um MVP com design simplificado para validar o mercado mais cedo.",
        "Esquecer de escrever testes unitários por preguiça.",
        "Ignorar regras de segurança para ganhar velocidade."
      ],
      correctAnswer: 1,
      explanation: "É uma ferramenta de negócio legítima: assume-se um risco controlado para obter vantagem competitiva, com plano para pagar a dívida depois."
    },
    {
      id: "q12_3",
      question: "O que define o processo de Refatoração?",
      options: [
        "Adicionar novas funcionalidades ao sistema.",
        "Mudar a estrutura interna do código para melhorar a legibilidade e manutenibilidade, sem alterar o seu comportamento externo.",
        "Reescrever o sistema inteiro numa linguagem nova.",
        "Corrigir bugs críticos em produção."
      ],
      correctAnswer: 1
    },
    {
      id: "q12_4",
      question: "Qual a recomendação master da 'Regra do Boy Scout' aplicada ao código?",
      options: [
        "Apenas refatorar quando o gestor de projeto autorizar.",
        "Criar um branch separado de refatoração uma vez por ano.",
        "Aproveitar cada tarefa de manutenção para deixar o código ligeiramente mais limpo do que estava.",
        "Nunca mexer em código que já funciona."
      ],
      correctAnswer: 2
    },
    {
      id: "q12_5",
      question: "O sintoma de 'Rigidez' num sistema indica que:",
      options: [
        "O código é muito seguro.",
        "Uma pequena alteração exige mudanças em cascata em múltiplos módulos devido ao alto acoplamento.",
        "O servidor tem pouca memória RAM.",
        "O compilador demora muito tempo a rodar."
      ],
      correctAnswer: 1
    },
    {
      id: "q12_6",
      question: "Qual o maior perigo de um débito técnico 'Inadvertido'?",
      options: [
        "O aumento do custo de eletricidade.",
        "A equipa nem percebe que está a acumular dívida até que o custo de manutenção se torne proibitivo.",
        "A perda de versão no Git.",
        "O site mudar de cor sozinho."
      ],
      correctAnswer: 1,
      explanation: "Este débito nasce da falta de conhecimento ou design pobre não detetado, tornando-se uma bomba relógio silenciosa no projeto."
    }
  ]
};
