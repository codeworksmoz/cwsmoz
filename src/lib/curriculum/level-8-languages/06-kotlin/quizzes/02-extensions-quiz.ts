import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "kt-mq2",
  title: "Quiz: Extensions e Property Delegation",
  passingScore: 80,
  questions: [
    {
      id: "q2_1",
      question: "Extension Functions podem aceder a membros 'private' da classe que estendem?",
      options: ["Sim", "Não, apenas a membros visíveis (public/internal)", "Apenas se estiverem no mesmo pacote", "Sim, via reflexão automática"],
      correctAnswer: 1
    },
    {
      id: "q2_2",
      question: "Onde são resolvidas as extensões no Kotlin?",
      options: ["Em tempo de execução (Dynamic)", "Em tempo de compilação (Statically)", "No banco de dados", "Pelo Garbage Collector"],
      correctAnswer: 1
    },
    {
      id: "q2_3",
      question: "Qual keyword é usada para delegar uma propriedade?",
      options: ["to", "from", "by", "delegate"],
      correctAnswer: 2
    },
    {
      id: "q2_4",
      question: "A propriedade 'val x by lazy { ... }' é executada quando?",
      options: [
        "No momento do deploy",
        "No momento da primeira vez que o valor é acedido",
        "Imediatamente ao instanciar a classe",
        "A cada 5 segundos"
      ],
      correctAnswer: 1
    },
    {
      id: "q2_5",
      question: "Podes criar extensões para classes nativas do Java?",
      options: ["Não, apenas para classes Kotlin", "Sim, 100% interoperável", "Apenas para a classe String", "Sim, mas exige recompilar o Java"],
      correctAnswer: 1
    },
    {
      id: "q2_6",
      question: "Qual o benefício de Delegates.observable?",
      options: [
        "Tornar a variável invisível",
        "Executar um callback sempre que o valor da propriedade é alterado",
        "Acelerar o processador",
        "Criptografar o valor automaticamente"
      ],
      correctAnswer: 1
    }
  ]
};