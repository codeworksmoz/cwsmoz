import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-eco-mq5",
  title: "Quiz Master: DDD Estratégico e Arquitetura de Domínio",
  passingScore: 85,
  questions: [
    {
      id: "q5_1",
      question: "Qual o principal objetivo da Ubiquitous Language (Linguagem Ubíqua)?",
      options: [
        "Traduzir o sistema para Inglês.",
        "Eliminar a barreira de comunicação entre especialistas de negócio e engenheiros através de um vocabulário comum.",
        "Mudar a cor dos botões do sistema.",
        "Gerar documentação em PDF automaticamente."
      ],
      correctAnswer: 1,
      explanation: "A linguagem ubíqua garante que todos no projeto falem a mesma língua, reduzindo erros de requisito e melhorando a semântica do código."
    },
    {
      id: "q5_2",
      question: "O que define um Bounded Context (Contexto Delimitado)?",
      options: [
        "Uma pasta com ficheiros CSS.",
        "Uma fronteira lógica onde um modelo de domínio específico e a sua linguagem são aplicáveis e consistentes.",
        "O limite de memória RAM do servidor.",
        "Um branch do Git."
      ],
      correctAnswer: 1,
      explanation: "Bounded Contexts isolam partes do sistema para que o mesmo termo (ex: Cliente) possa ter significados diferentes conforme o contexto (ex: Vendas vs Suporte)."
    },
    {
      id: "q5_3",
      question: "O que é um 'Anti-Corruption Layer' (ACL)?",
      options: [
        "Uma firewall de rede.",
        "Uma camada que traduz dados de um sistema externo para o modelo de domínio interno, impedindo que a 'sujeira' externa polua o Core.",
        "Um sistema de encriptação de senhas.",
        "Um plugin do VS Code."
      ],
      correctAnswer: 1
    },
    {
      id: "q5_4",
      question: "No DDD, o que caracteriza um 'Big Ball of Mud'?",
      options: [
        "Um servidor de base de dados muito grande.",
        "Um sistema sem fronteiras claras onde tudo está acoplado e o código é confuso e inconsistente.",
        "Um novo padrão de design do Google.",
        "Uma técnica de compressão de imagens."
      ],
      correctAnswer: 1
    },
    {
      id: "q5_5",
      question: "Um 'Shared Kernel' é usado quando:",
      options: [
        "Dois contextos partilham um servidor físico.",
        "Dois contextos partilham uma parte pequena e comum do modelo de domínio que não pode ser duplicada.",
        "O programador usa o mesmo teclado para dois projetos.",
        "A base de dados é partilhada entre todos os departamentos."
      ],
      correctAnswer: 1
    },
    {
      id: "q5_6",
      question: "Qual o impacto de aplicar o DDD estratégico em arquiteturas de Microserviços?",
      options: [
        "Torna os serviços mais lentos.",
        "Ajuda a definir as fronteiras dos serviços, garantindo que cada microserviço represente um Bounded Context coerente.",
        "Obriga o uso de bases de dados relacionais.",
        "Aumenta o custo de licenças de software."
      ],
      correctAnswer: 1
    }
  ]
};
