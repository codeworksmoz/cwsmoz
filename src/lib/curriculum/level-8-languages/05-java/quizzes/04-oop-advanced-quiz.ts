import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "jv-mq4",
  title: "Quiz: Java Moderno e OOP de Elite",
  passingScore: 80,
  questions: [
    {
      id: "q4_1",
      question: "Qual a principal restrição de um Java Record em termos de herança?",
      options: [
        "Pode estender apenas classes abstratas",
        "Não pode estender nenhuma outra classe, pois já herda de java.lang.Record",
        "Deve obrigatoriamente estender a classe Object",
        "Pode estender apenas outras Records"
      ],
      correctAnswer: 1
    },
    {
      id: "q4_2",
      question: "O que acontece ao tentar herdar de uma classe marcada como 'final' em Java?",
      options: [
        "O compilador lança um erro",
        "A classe filha herda apenas os métodos privados",
        "O programa roda, mas gera um alerta no log",
        "A herança é permitida apenas via Reflection"
      ],
      correctAnswer: 0
    },
    {
      id: "q4_3",
      question: "Qual a função da cláusula 'permits' numa Sealed Class?",
      options: [
        "Autorizar o acesso a uma base de dados",
        "Listar explicitamente quais subclasses têm permissão para estender a classe pai",
        "Definir quais métodos podem ser públicos",
        "Permitir o uso de variáveis nulas"
      ],
      correctAnswer: 1
    },
    {
      id: "q4_4",
      question: "Como se acede ao valor de um campo 'amount' num record 'Transaction tx'?",
      options: ["tx.getAmount()", "tx.amount()", "tx.amount", "tx->amount"],
      correctAnswer: 1,
      explanation: "Records não usam o prefixo 'get'; o nome do acessor é idêntico ao nome do componente."
    },
    {
      id: "q4_5",
      question: "Uma Sealed Interface garante qual benefício ao usar Pattern Matching com Switch?",
      options: [
        "Aumenta a velocidade do processador",
        "Obriga o compilador a verificar se todos os tipos permitidos foram tratados, eliminando o bloco 'default'",
        "Esconde o código do utilizador",
        "Criptografa o resultado do switch"
      ],
      correctAnswer: 1
    },
    {
      id: "q4_6",
      question: "Atributos definidos num Record são mutáveis?",
      options: [
        "Sim, se usares o prefixo mut",
        "Não, são implicitamente 'final' e o record é imutável por design",
        "Apenas se o record for local",
        "Sim, através de setters automáticos"
      ],
      correctAnswer: 1
    }
  ]
};