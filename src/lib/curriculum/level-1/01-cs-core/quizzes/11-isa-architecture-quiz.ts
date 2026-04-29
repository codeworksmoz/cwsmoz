import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "cs-t11-quiz",
  title: "Quiz: Domínio de Arquitetura ISA",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "O que significa a sigla ISA no contexto de engenharia de computadores?",
      options: [
        "Internal System Analysis",
        "Instruction Set Architecture",
        "Integrated Software Application",
        "Internet Service Agreement"
      ],
      correctAnswer: 1,
      explanation: "ISA é a especificação que define como o software comunica com o hardware do processador."
    },
    {
      id: "q2",
      question: "Qual parte de uma instrução binária indica qual operação deve ser realizada (ex: ADD, SUB)?",
      options: [
        "Operand",
        "Bus",
        "Opcode",
        "Pointer"
      ],
      correctAnswer: 2,
      explanation: "O Opcode (Operation Code) é o código que identifica a tarefa específica que a ALU deve executar."
    },
    {
      id: "q3",
      question: "Qual a principal vantagem da arquitetura RISC em relação ao consumo de bateria?",
      options: [
        "As instruções são mais longas",
        "Utiliza instruções simples que executam num único ciclo de relógio, reduzindo o esforço do processador",
        "Não necessita de memória RAM",
        "Funciona apenas em modo de texto"
      ],
      correctAnswer: 1,
      explanation: "Ao simplificar as instruções, o hardware gasta menos energia para descodificá-las, o que é ideal para telemóveis."
    },
    {
      id: "q4",
      question: "Por que as arquiteturas CISC (como x86) eram preferidas no passado?",
      options: [
        "Eram mais fáceis de fabricar",
        "Permitiam aos programadores fazer mais com menos código, economizando a memória limitada da época",
        "Não precisavam de sistema operativo",
        "Eram imunes a vírus"
      ],
      correctAnswer: 1,
      explanation: "Instruções complexas permitiam que um comando fizesse o que o RISC precisava de vários comandos para fazer, poupando espaço em memórias antigas e caras."
    },
    {
      id: "q5",
      question: "O que são as 'Micro-operações' nos processadores modernos?",
      options: [
        "Vírus microscópicos",
        "A tradução interna de comandos complexos em comandos simples para acelerar a execução",
        "Operações que só usam 1 bit de memória",
        "Comandos enviados via rede"
      ],
      correctAnswer: 1,
      explanation: "As CPUs modernas traduzem o 'manual' CISC em ações RISC internas para aproveitar a velocidade do paralelismo."
    },
    {
      id: "q6",
      question: "O ISA define como o processador endereça a memória RAM?",
      options: [
        "Sim, define os modos de endereçamento suportados",
        "Não, isso é tarefa apenas do sistema operativo",
        "Apenas em servidores de grande porte",
        "Depende da marca do monitor"
      ],
      correctAnswer: 0,
      explanation: "O ISA estabelece as regras de como a CPU localiza, lê e escreve dados nos diferentes níveis de memória."
    }
  ]
};
